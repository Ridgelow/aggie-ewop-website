// The four Aggie EWOP pillars.
// To add/remove a pillar, add/remove an object in this array — every page
// that lists pillars (home, /pillars) pulls from here automatically.

export type Requirement = { label: string; detail: string };

export type Pillar = {
  slug: string;
  name: string;
  monogram: string;
  color: 'rose' | 'sky' | 'violet' | 'fundraising';
  summary: string; // short, used on home + team cards
  description: string; // longer, used on /pillars
  director: string;
  coChairs: string[];
  requirements: Requirement[];
};

export const pillars: Pillar[] = [
  {
    slug: 'research-education',
    name: 'Research & Education',
    monogram: 'R&E',
    color: 'rose',
    summary:
      'Collects and organizes research on business topics as printable resources the women use to build their plans.',
    description:
      "Collects, organizes, and provides research on business topics as printable documents that assist the women in developing their plans. This may look like the easiest pillar, but the quality of these documents matters — we're looking for members who put real effort into their research.",
    director: 'Evelyn Csoma',
    coChairs: ['Reese Estess'],
    requirements: [
      { label: 'Tue 5:30pm', detail: 'AEWOP meetings, last Tuesday of the month' },
      { label: '10/7 & 11/11, 7pm', detail: 'R&E meetings' },
      { label: 'Monthly', detail: '1 research event per month' },
      { label: 'Per meeting', detail: '1 research document due each R&E meeting' },
    ],
  },
  {
    slug: 'marketing',
    name: 'Marketing',
    monogram: 'MKT',
    color: 'sky',
    summary:
      'Runs social media, recruitment, and officer retreats to spread awareness for the mission on campus.',
    description:
      'Manages social media (Instagram and LinkedIn), officer retreats, recruitment, photography, and spreading awareness for Aggie EWOP across campus.',
    director: 'Sadie Bubeck',
    coChairs: ['Rashmi Kukreja', 'Miranda Mares'],
    requirements: [
      { label: 'Tue 5:30–6:30', detail: 'AEWOP meetings, last Tuesday of the month' },
      { label: 'Tue 5:30–6:30', detail: 'Marketing meetings, weekly' },
    ],
  },
  {
    slug: 'partnerships',
    name: 'Partnerships',
    monogram: 'PTR',
    color: 'violet',
    summary:
      'Builds relationships with donors, nonprofits, and businesses through events like Aggie Day and Alumni Storytelling.',
    description:
      'Manages external relations, donor outreach, and partnerships with businesses, nonprofits, and student organizations. Signature events include Aggie Day 2026, Alumni Storytelling, and Corporate Etiquette.',
    director: 'Brionna Grapeson',
    coChairs: ['Mia Cline', 'Maya Moreno'],
    requirements: [
      { label: 'Tue 5:30–6:30', detail: 'AEWOP meetings, last Tuesday of the month' },
      { label: 'Tuesdays', detail: 'Partnerships meetings — 9/29, 10/13, 10/27, 11/10' },
      { label: 'Per meeting', detail: 'Build a relationship with 1 organization or company' },
    ],
  },
  {
    slug: 'fundraising',
    name: 'Fundraising',
    monogram: 'FDR',
    color: 'fundraising',
    summary: 'Plans the annual 5K and concessions shifts, and secures sponsorships that fund the program.',
    description:
      'Fundraises for the organization, plans the large annual event (a 5K), and initiates sponsorships that keep the program funded.',
    director: 'Catherine McKnight',
    coChairs: ['Hannah Deats'],
    requirements: [
      { label: 'Tue 5:30pm', detail: 'AEWOP meetings, last Tuesday of the month' },
      { label: 'Thu 7–8:30pm', detail: 'Fundraising meetings — first meeting Sept. 24' },
      { label: '1 shift', detail: 'Work a concessions game' },
      { label: 'Ongoing', detail: 'Contact, cultivate & follow up with sponsors' },
      { label: 'Event day', detail: 'Work the 5K' },
    ],
  },
];
