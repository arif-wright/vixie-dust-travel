import { useEffect, useMemo, useState } from 'react'
import { createLead, exportLeadsToCsv, getCrmModeLabel, getLeads } from '../lib/crm'
import { trackEvent } from '../lib/analytics'
import { defaultInquiryForm, formatDate } from '../siteData'

export function InquiryForm() {
  const [form, setForm] = useState(defaultInquiryForm)
  const [submitState, setSubmitState] = useState('idle')
  const [leads, setLeads] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    let active = true

    async function loadLeads() {
      const nextLeads = await getLeads()
      if (active) setLeads(nextLeads)
    }

    loadLeads()

    return () => {
      active = false
    }
  }, [])

  const crmSummary = useMemo(() => {
    const merchInterested = leads.filter((lead) => lead.merchInterest === 'Yes').length
    return {
      total: leads.length,
      newLeads: leads.filter((lead) => lead.stage === 'new').length,
      merchInterested,
    }
  }, [leads])

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (submitState !== 'idle') setSubmitState('idle')
    if (errorMessage) setErrorMessage('')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setSubmitState('submitting')
    setErrorMessage('')

    try {
      const lead = await createLead({
        ...form,
        stage: 'new',
        source: 'website',
      })

      setLeads((current) => [lead, ...current])
      setForm(defaultInquiryForm)
      setSubmitState('success')
      trackEvent('travel_inquiry_submitted', {
        tripType: lead.tripType,
        merchInterest: lead.merchInterest,
      })
    } catch {
      setSubmitState('error')
      setErrorMessage('We could not save this inquiry right now. Please use the email backup while we reconnect the CRM.')
    }
  }

  const handleExport = () => {
    exportLeadsToCsv(leads)
    trackEvent('crm_export_clicked', { leadCount: leads.length })
  }

  return (
    <>
      <form className="inquiry-form" onSubmit={handleSubmit}>
        <p className="crm-mode">{getCrmModeLabel()}</p>
        <div className="field-grid">
          <label>
            Name
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Phone
            <input name="phone" value={form.phone} onChange={handleChange} />
          </label>
          <label>
            Trip type
            <select name="tripType" value={form.tripType} onChange={handleChange}>
              <option>Disney</option>
              <option>Cruise</option>
              <option>Sunny getaway</option>
              <option>Undecided</option>
            </select>
          </label>
          <label>
            Travel window
            <input name="travelWindow" value={form.travelWindow} onChange={handleChange} placeholder="Spring 2027" />
          </label>
          <label>
            Budget range
            <select name="budget" value={form.budget} onChange={handleChange}>
              <option value="">Select one</option>
              <option>Under $3,000</option>
              <option>$3,000-$6,000</option>
              <option>$6,000-$10,000</option>
              <option>$10,000+</option>
            </select>
          </label>
          <label>
            Party size
            <input name="partySize" value={form.partySize} onChange={handleChange} placeholder="2 adults, 2 kids" />
          </label>
          <label>
            Interested in merch?
            <select name="merchInterest" value={form.merchInterest} onChange={handleChange}>
              <option>Yes</option>
              <option>Maybe later</option>
              <option>No</option>
            </select>
          </label>
        </div>

        <label>
          Notes
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Tell us about your dream trip, who is traveling, and where you want help."
          />
        </label>

        <div className="form-actions">
          <button type="submit" className="button-primary" disabled={submitState === 'submitting'}>
            {submitState === 'submitting' ? 'Saving inquiry...' : 'Save inquiry'}
          </button>
          <a href="mailto:hello@vixiedusttravel.com" className="button-secondary">
            Keep email as backup
          </a>
        </div>

        {submitState === 'success' ? (
          <p className="form-success">
            Inquiry saved successfully. Next step: connect notifications and follow-up automation.
          </p>
        ) : null}
        {submitState === 'error' ? <p className="form-error">{errorMessage}</p> : null}
      </form>

      {import.meta.env.DEV ? (
        <section className="section dev-console">
          <div className="section-head">
            <p className="eyebrow">Dev-only CRM preview</p>
            <h2>Lead pipeline prototype</h2>
            <p>This is a lightweight stand-in until we wire in real storage, auth, and team workflows.</p>
          </div>

          <div className="crm-summary">
            <article>
              <strong>{crmSummary.total}</strong>
              <span>Total leads captured</span>
            </article>
            <article>
              <strong>{crmSummary.newLeads}</strong>
              <span>Fresh leads awaiting follow-up</span>
            </article>
            <article>
              <strong>{crmSummary.merchInterested}</strong>
              <span>Leads open to merch offers</span>
            </article>
          </div>

          <div className="crm-toolbar">
            <p>Export this data while validating the intake flow and questions.</p>
            <button type="button" className="button-secondary" onClick={handleExport} disabled={leads.length === 0}>
              Export CSV
            </button>
          </div>

          <div className="crm-table-wrap">
            <table className="crm-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Trip type</th>
                  <th>Budget</th>
                  <th>Merch</th>
                  <th>Created</th>
                </tr>
              </thead>
              <tbody>
                {leads.length > 0 ? (
                  leads.map((lead) => (
                    <tr key={lead.id}>
                      <td>
                        <strong>{lead.name}</strong>
                        <span>{lead.email}</span>
                      </td>
                      <td>{lead.tripType}</td>
                      <td>{lead.budget || 'Unknown'}</td>
                      <td>{lead.merchInterest}</td>
                      <td>{formatDate(lead.createdAt)}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="empty-state">
                      No saved leads yet. Submit the inquiry form to test the pipeline.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}
    </>
  )
}
