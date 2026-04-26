// Framework only: this function is intentionally not wired into the live inquiry flow yet.
// When you're ready, invoke it after successful lead creation or via a database trigger.

import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

serve(async (request) => {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  const resendApiKey = Deno.env.get('RESEND_API_KEY')
  const notifyToEmail = Deno.env.get('NOTIFY_TO_EMAIL')
  const notifyFromEmail = Deno.env.get('NOTIFY_FROM_EMAIL')

  if (!resendApiKey || !notifyToEmail || !notifyFromEmail) {
    return Response.json(
      {
        ok: false,
        message: 'Notification framework present, but provider env vars are not configured yet.',
      },
      { status: 501 },
    )
  }

  const payload = await request.json()

  return Response.json({
    ok: true,
    message: 'Notification framework stub received payload.',
    received: {
      subject: payload.subject ?? null,
      to: notifyToEmail,
    },
  })
})
