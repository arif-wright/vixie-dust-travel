export const specialties = [
  {
    title: 'Disney & Theme Park Trips',
    description:
      'Park strategy, resort matching, dining guidance, and pacing support for families who want the magic without the stress spiral.',
    bullets: ['Disney World and Disneyland trip design', 'Resort, ticket, and dining guidance', 'Family-first park pacing'],
    visual: 'castle',
  },
  {
    title: 'Cruises & Group Sailings',
    description:
      'Cruises create repeat business, strong referral energy, and natural merch opportunities before and after the trip.',
    bullets: ['First-time cruiser hand-holding', 'Cabin and itinerary strategy', 'Group trip coordination'],
    visual: 'ship',
  },
  {
    title: 'Sunny Family Escapes',
    description:
      'All-inclusives and beach getaways keep the business active year-round and offer a softer entry point for new clients.',
    bullets: ['Warm-weather resort matchmaking', 'Budget-aware trip options', 'Simple family itineraries'],
    visual: 'palms',
  },
]

export const brandWelcome = {
  title: 'Welcome to Vixie Dust Travels',
  lead: 'The fox belongs on the homepage because the brand works best when it feels personal, warm, and unmistakable.',
  body:
    'This business is strongest when strategy and personality show up together. The site should feel polished enough to earn trust, but still magical enough that families remember who planned the trip.',
}

export const revenueStreams = [
  {
    title: 'Travel Bookings',
    detail:
      'This should stay the primary conversion path, supported by high-trust service pages, qualification forms, and fast follow-up.',
  },
  {
    title: 'Curated Merch',
    detail:
      'Merch works best when it feels like part of the trip experience: countdown items, matching travel gear, and celebratory bundles.',
  },
  {
    title: 'Audience Nurture',
    detail:
      'Email guides, search-friendly content, and review/referral loops help the brand compound instead of restarting from zero each month.',
  },
]

export const merchIdeas = [
  {
    title: 'Park Day Essentials',
    price: '$28-$64',
    description: 'Matching shirts, tote bags, autograph books, and lanyards that fit the family-trip niche.',
  },
  {
    title: 'Cruise Countdown Kits',
    price: '$18-$52',
    description: 'Door magnets, tumblers, packing helpers, and countdown gifts that build excitement before sailing.',
  },
  {
    title: 'Travel Club Drops',
    price: '$14-$42',
    description: 'Small seasonal launches for loyal clients and followers to create identity around the brand.',
  },
]

export const siteMap = [
  'Home with niche-led positioning and strong CTAs',
  'About page with story, specialties, credentials, and personality',
  'Dedicated service pages for Disney, cruises, and sunny getaways',
  'Inquiry page with qualification questions and next-step expectations',
  'Shop page with curated collections and bundles',
  'Resources page for blog posts, guides, and list-building freebies',
]

export const contentIdeas = [
  'Best Disney resorts for families with toddlers',
  'When to book a cruise for the best cabin selection',
  'What to pack for a Caribbean family vacation',
  'What a travel advisor actually does for busy families',
  'Disney dining strategies that save energy and sanity',
  'Cruise mistakes first-time families make and how to avoid them',
]

export const faqs = [
  {
    question: 'Should the shop be equal to the travel business on the site?',
    answer:
      'No. The shop should reinforce the travel brand and lift average customer value, but the main job of the site is still to turn trust into bookings.',
  },
  {
    question: 'What will help her career grow the fastest?',
    answer:
      'Clear specialization, strong social proof, consistent content, rapid follow-up, and a system for keeping every lead warm after the first visit.',
  },
  {
    question: 'What should we build after this foundation?',
    answer:
      'A real database-backed inquiry flow, email automations, true product checkout, and content pages that can rank and convert over time.',
  },
]

export const proofPoints = [
  'Clear specialty positioning',
  'Fast follow-up on every inquiry',
  'Repeatable SEO-friendly content',
  'Merch that deepens brand loyalty',
]

export const planningPillars = [
  {
    title: 'Niche clarity',
    detail: 'Become known for Disney, cruises, and family-friendly escapes before expanding wider.',
  },
  {
    title: 'Lead handling',
    detail: 'Every inquiry should be captured, qualified, tracked, and followed up quickly.',
  },
  {
    title: 'Repeat revenue',
    detail: 'Use post-booking merch, referrals, and return-client nurture to grow lifetime value.',
  },
]

export const servicePackages = [
  {
    title: 'Disney Planning',
    description: 'Ideal for families who want expert help navigating a high-detail trip with lots of moving parts.',
    includes: ['Trip planning roadmap', 'Resort and ticket guidance', 'Dining and experience strategy'],
  },
  {
    title: 'Cruise Planning',
    description: 'Great for first-time cruisers, multi-generational groups, and travelers comparing ships and routes.',
    includes: ['Ship and itinerary matching', 'Cabin guidance', 'Packing and embarkation prep'],
  },
  {
    title: 'Sun & Sand Escapes',
    description: 'A simpler offer for beach-focused families who want warmth, ease, and a clean booking process.',
    includes: ['Resort shortlist', 'Budget alignment', 'Family-friendly activity ideas'],
  },
]

export const resourceOffers = [
  'Free trip planning checklist',
  'Disney packing guide',
  'Cruise countdown email series',
  'Seasonal destination inspiration newsletter',
]

export const defaultInquiryForm = {
  name: '',
  email: '',
  phone: '',
  tripType: 'Disney',
  travelWindow: '',
  budget: '',
  partySize: '',
  merchInterest: 'Yes',
  notes: '',
}

export function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value))
}
