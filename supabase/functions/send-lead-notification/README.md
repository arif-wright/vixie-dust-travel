Send Lead Notification Function
===============================

Status
------
- Scaffold only
- Not wired into the live inquiry flow yet
- Safe to keep in the repo while client-facing polish continues

Planned use
-----------
- Internal advisor notification when a new inquiry is submitted
- Optional traveler confirmation email

Planned provider env vars
-------------------------
- `RESEND_API_KEY`
- `NOTIFY_TO_EMAIL`
- `NOTIFY_FROM_EMAIL`

Recommended future hookup
-------------------------
1. Keep the public form writing directly to `leads`
2. After a successful insert, invoke this Edge Function from a secure server path
3. Alternatively, trigger it from Supabase using a database webhook or server-side function

Why it is not wired yet
-----------------------
- Client-facing copy and polish are higher priority right now
- Notification copy should be finalized before live emails go out
- Production provider credentials should be added only when the launch flow is ready
