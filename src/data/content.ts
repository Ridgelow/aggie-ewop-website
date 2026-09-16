// Misc. site copy that isn't naturally "team" or "pillars" data:
// stats, the recruitment timeline, and membership requirements.
// Edit dates/numbers here each semester.

export const stats = [
  { value: '>10,500', label: 'women incarcerated in Texas — the most of any state' },
  { value: '~1,100', label: 'women apply to the EWOP program each cycle' },
  { value: '~80', label: 'women are selected into the program' },
  { value: '89/100', label: 'current participants are mothers' },
];

export const recruitmentTimeline = [
  { color: 'rose', title: 'Informational sessions', date: 'September 8–9' },
  { color: 'violet', title: 'Application due', date: 'September 13' },
  { color: 'sky', title: 'Interviews', date: 'September 18' },
  { color: 'ink', title: 'First meeting!', date: 'September 22' },
];

export const membershipRequirements = [
  'Submit $25 membership dues',
  'Attend 1 concessions shift',
  'Volunteer for the 5K event',
  "Follow your pillar's requirements",
];

export const memberMeetingDates = ['September 22', 'October 27', 'November 24'];

export const whyJoin = [
  'Influence a culture of second chances',
  'Gain exposure to the prison system',
  'Develop your consulting skills',
  'Contribute your personal strengths',
  'Apply skills from your major',
  'Have a positive impact on the world',
];

export const missionQuote =
  'Use your strong mind and kind heart to make a difference. Each one of you has what it takes to provide value.';

// Flip to true when applications reopen (e.g. Spring recruiting).
export const applicationsOpen = false;

export const applicationsClosedMessage = {
  title: 'Fall applications are closed',
  body: 'Thank you for your interest! Applications for Fall recruiting are over — please come back for Spring recruiting when we open applications again.',
  dismiss: 'Got it',
};

// Our History milestones on /about — keep each detail to one short sentence.
export const historyMilestones = [
  {
    year: '2017',
    title: 'A women\'s pilot begins',
    detail: 'Leaders adapt Texas’s Prison Entrepreneurship Program (PEP) to serve incarcerated women.',
    color: 'rose',
  },
  {
    year: '2018',
    title: 'First pilot class',
    detail: '44 women participate at the Gregory S. Coleman Unit in Lockhart.',
    color: 'violet',
  },
  {
    year: '2019',
    title: 'EWOP is founded',
    detail: 'EWOP launches as its own 501(c)(3) nonprofit dedicated to women.',
    color: 'sky',
  },
  {
    year: '2020',
    title: 'Classes begin',
    detail: 'The in-prison leadership and entrepreneurship program starts serving women.',
    color: 'rose',
  },
  {
    year: '2025',
    title: 'Aggie EWOP is founded',
    detail: 'Texas A&M’s student chapter forms around Research & Education, Marketing, Partnerships, and Fundraising.',
    color: 'violet',
  },
  {
    year: 'Sept 2025',
    title: 'First Aggie Day',
    detail: 'Aggie EWOP’s first prison visit brings students inside to meet women in the program.',
    color: 'sky',
    image: '/images/birth-of-aggie-ewop.jpg',
  },
] as const;
