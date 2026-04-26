import { supabase } from './supabase'

const STORAGE_KEY = 'vixie-dust-travel-leads'

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

function normalizeLead(record) {
  return {
    id: record.id,
    createdAt: record.created_at ?? record.createdAt ?? new Date().toISOString(),
    name: record.name ?? '',
    email: record.email ?? '',
    phone: record.phone ?? '',
    tripType: record.trip_type ?? record.tripType ?? '',
    travelWindow: record.travel_window ?? record.travelWindow ?? '',
    budget: record.budget ?? '',
    partySize: record.party_size ?? record.partySize ?? '',
    merchInterest: record.merch_interest ?? record.merchInterest ?? '',
    stage: record.stage ?? 'new',
    source: record.source ?? 'website',
    notes: record.notes ?? '',
  }
}

function toSupabasePayload(payload) {
  return {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    trip_type: payload.tripType,
    travel_window: payload.travelWindow,
    budget: payload.budget,
    party_size: payload.partySize,
    merch_interest: payload.merchInterest,
    notes: payload.notes,
    stage: payload.stage,
    source: payload.source,
  }
}

export function getCrmMode() {
  return supabase ? 'supabase' : 'local'
}

export function getCrmModeLabel() {
  return getCrmMode() === 'supabase' ? 'Supabase connected' : 'Local-only development mode'
}

export function getLocalLeads() {
  if (!canUseStorage()) return []

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return []

    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function saveLocalLeads(leads) {
  if (!canUseStorage()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
}

export async function getLeads() {
  if (!supabase) return getLocalLeads()

  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('[crm] failed to load leads from supabase', error)
    return getLocalLeads()
  }

  return data.map(normalizeLead)
}

export async function createLead(payload) {
  if (!supabase) {
    const lead = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...payload,
    }

    const nextLeads = [lead, ...getLocalLeads()]
    saveLocalLeads(nextLeads)
    return lead
  }

  const { data, error } = await supabase.from('leads').insert(toSupabasePayload(payload)).select().single()

  if (error) {
    console.error('[crm] failed to save lead to supabase', error)
    throw error
  }

  return normalizeLead(data)
}

export function exportLeadsToCsv(leads) {
  if (typeof window === 'undefined' || leads.length === 0) return

  const headers = [
    'id',
    'createdAt',
    'name',
    'email',
    'phone',
    'tripType',
    'travelWindow',
    'budget',
    'partySize',
    'merchInterest',
    'stage',
    'source',
    'notes',
  ]

  const csv = [
    headers.join(','),
    ...leads.map((lead) =>
      headers
        .map((header) => {
          const value = `${lead[header] ?? ''}`.replaceAll('"', '""')
          return `"${value}"`
        })
        .join(','),
    ),
  ].join('\n')

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'vixie-dust-travel-leads.csv'
  document.body.appendChild(link)
  link.click()
  link.remove()
  window.URL.revokeObjectURL(url)
}
