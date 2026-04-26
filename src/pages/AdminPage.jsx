import { useEffect, useMemo, useState } from 'react'
import { exportLeadsToCsv, getCrmMode, getLeads, updateLeadStage } from '../lib/crm'
import { getSession, onAuthStateChange, signInWithPassword, signOut } from '../lib/auth'
import { formatDate } from '../siteData'

const stageOptions = ['new', 'contacted', 'quoted', 'booked', 'closed']

export function AdminPage() {
  const [session, setSession] = useState(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authMessage, setAuthMessage] = useState('')
  const [authError, setAuthError] = useState('')
  const [leads, setLeads] = useState([])
  const [leadError, setLeadError] = useState('')
  const [leadLoading, setLeadLoading] = useState(false)

  useEffect(() => {
    let active = true

    async function loadSession() {
      const nextSession = await getSession()
      if (active) {
        setSession(nextSession)
        setAuthLoading(false)
      }
    }

    loadSession()

    const { data } = onAuthStateChange((nextSession) => {
      if (!active) return
      setSession(nextSession)
      setAuthLoading(false)
    })

    return () => {
      active = false
      data.subscription.unsubscribe()
    }
  }, [])

  useEffect(() => {
    let active = true

    async function loadLeads() {
      if (!session) {
        setLeads([])
        return
      }

      setLeadLoading(true)
      setLeadError('')

      try {
        const nextLeads = await getLeads({ requireRemote: true })
        if (active) setLeads(nextLeads)
      } catch (error) {
        if (active) {
          setLeadError(error.message || 'Unable to load leads right now.')
        }
      } finally {
        if (active) setLeadLoading(false)
      }
    }

    loadLeads()

    return () => {
      active = false
    }
  }, [session])

  const summary = useMemo(() => {
    return {
      total: leads.length,
      newLeads: leads.filter((lead) => lead.stage === 'new').length,
      booked: leads.filter((lead) => lead.stage === 'booked').length,
    }
  }, [leads])

  const handleSignIn = async (event) => {
    event.preventDefault()
    setAuthError('')
    setAuthMessage('')
    setAuthLoading(true)

    try {
      await signInWithPassword(email, password)
      setAuthMessage('Signed in successfully.')
    } catch (error) {
      setAuthError(error.message || 'Could not sign in with that email and password.')
    } finally {
      setAuthLoading(false)
    }
  }

  const handleStageChange = async (leadId, nextStage) => {
    const previousLeads = leads
    setLeads((current) =>
      current.map((lead) => (lead.id === leadId ? { ...lead, stage: nextStage } : lead)),
    )

    try {
      await updateLeadStage(leadId, nextStage)
    } catch (error) {
      setLeads(previousLeads)
      setLeadError(error.message || 'Could not update the lead stage.')
    }
  }

  if (getCrmMode() !== 'supabase') {
    return (
      <main className="page-main">
        <section className="page-hero shell">
          <p className="eyebrow">Admin</p>
          <h1>Supabase needs to be configured before the admin dashboard can work.</h1>
          <p>Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, then reload the app.</p>
        </section>
      </main>
    )
  }

  return (
    <main className="page-main">
      <section className="page-hero shell">
        <p className="eyebrow">Admin</p>
        <h1>Protected lead dashboard for the advisor</h1>
        <p>This is the first internal workflow layer: private auth, lead visibility, export, and quick stage tracking.</p>
      </section>

      <section className="section">
        <div className="shell">
          {!session ? (
            <div className="admin-auth-card">
              <p className="eyebrow">Sign in</p>
              <h2>Sign in with email and password</h2>
              <p>Use the advisor login created in Supabase Auth. If you want a literal username later, we can add that as a separate profile layer.</p>
              <form className="admin-auth-form" onSubmit={handleSignIn}>
                <label>
                  Email
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="advisor@example.com"
                    required
                  />
                </label>
                <label>
                  Password
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Enter your password"
                    required
                  />
                </label>
                <div className="form-actions">
                  <button type="submit" className="button-primary" disabled={authLoading}>
                    {authLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
                {authMessage ? <p className="form-success">{authMessage}</p> : null}
                {authError ? <p className="form-error">{authError}</p> : null}
              </form>
            </div>
          ) : (
            <>
              <div className="crm-summary">
                <article>
                  <strong>{summary.total}</strong>
                  <span>Total leads</span>
                </article>
                <article>
                  <strong>{summary.newLeads}</strong>
                  <span>New inquiries</span>
                </article>
                <article>
                  <strong>{summary.booked}</strong>
                  <span>Booked trips</span>
                </article>
              </div>

              <div className="crm-toolbar">
                <p>Signed in as {session.user.email}. Review inquiries, export them, and mark follow-up progress.</p>
                <div className="toolbar-actions">
                  <button type="button" className="button-secondary" onClick={() => exportLeadsToCsv(leads)} disabled={leads.length === 0}>
                    Export CSV
                  </button>
                  <button type="button" className="button-secondary" onClick={() => signOut()}>
                    Sign out
                  </button>
                </div>
              </div>

              {leadError ? <p className="form-error">{leadError}</p> : null}

              <div className="crm-table-wrap">
                <table className="crm-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Trip</th>
                      <th>Budget</th>
                      <th>Merch</th>
                      <th>Stage</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    {leadLoading ? (
                      <tr>
                        <td colSpan="6" className="empty-state">
                          Loading leads...
                        </td>
                      </tr>
                    ) : leads.length > 0 ? (
                      leads.map((lead) => (
                        <tr key={lead.id}>
                          <td>
                            <strong>{lead.name}</strong>
                            <span>{lead.email}</span>
                            {lead.phone ? <span>{lead.phone}</span> : null}
                          </td>
                          <td>
                            <strong>{lead.tripType}</strong>
                            <span>{lead.travelWindow || 'No date yet'}</span>
                            <span>{lead.partySize || 'Party size unknown'}</span>
                          </td>
                          <td>{lead.budget || 'Unknown'}</td>
                          <td>{lead.merchInterest}</td>
                          <td>
                            <select
                              value={lead.stage}
                              onChange={(event) => handleStageChange(lead.id, event.target.value)}
                              className="stage-select"
                            >
                              {stageOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                          </td>
                          <td>{formatDate(lead.createdAt)}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="empty-state">
                          No leads yet. Once the public inquiry form is used, they will appear here.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
