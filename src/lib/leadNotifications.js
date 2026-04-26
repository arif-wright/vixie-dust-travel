export function buildLeadNotificationPayload(lead) {
  return {
    to: 'advisor@vixiedusttravel.com',
    subject: `New ${lead.tripType || 'travel'} inquiry from ${lead.name}`,
    text: [
      `New inquiry received`,
      ``,
      `Name: ${lead.name}`,
      `Email: ${lead.email}`,
      `Phone: ${lead.phone || 'Not provided'}`,
      `Trip type: ${lead.tripType || 'Not provided'}`,
      `Travel window: ${lead.travelWindow || 'Not provided'}`,
      `Budget: ${lead.budget || 'Not provided'}`,
      `Party size: ${lead.partySize || 'Not provided'}`,
      `Merch interest: ${lead.merchInterest || 'Not provided'}`,
      `Notes: ${lead.notes || 'None'}`,
    ].join('\n'),
    html: `
      <h1>New inquiry received</h1>
      <p><strong>Name:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Phone:</strong> ${lead.phone || 'Not provided'}</p>
      <p><strong>Trip type:</strong> ${lead.tripType || 'Not provided'}</p>
      <p><strong>Travel window:</strong> ${lead.travelWindow || 'Not provided'}</p>
      <p><strong>Budget:</strong> ${lead.budget || 'Not provided'}</p>
      <p><strong>Party size:</strong> ${lead.partySize || 'Not provided'}</p>
      <p><strong>Merch interest:</strong> ${lead.merchInterest || 'Not provided'}</p>
      <p><strong>Notes:</strong> ${lead.notes || 'None'}</p>
    `.trim(),
  }
}

export function buildLeadConfirmationPayload(lead) {
  return {
    to: lead.email,
    subject: `We received your Vixie Dust Travel inquiry`,
    text: [
      `Hi ${lead.name},`,
      ``,
      `Thanks for reaching out to Vixie Dust Travel.`,
      `We received your ${lead.tripType || 'travel'} inquiry and will follow up soon.`,
      ``,
      `Travel window: ${lead.travelWindow || 'We will confirm this with you'}`,
      `Party size: ${lead.partySize || 'We will confirm this with you'}`,
      ``,
      `Warmly,`,
      `Vixie Dust Travel`,
    ].join('\n'),
  }
}
