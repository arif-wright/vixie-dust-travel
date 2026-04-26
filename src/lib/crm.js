const STORAGE_KEY = 'vixie-dust-travel-leads'

function canUseStorage() {
  return typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'
}

export function getLeads() {
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

function saveLeads(leads) {
  if (!canUseStorage()) return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
}

export function createLead(payload) {
  const lead = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  }

  const leads = getLeads()
  const nextLeads = [lead, ...leads]
  saveLeads(nextLeads)
  return lead
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
