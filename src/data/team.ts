// The Aggie EWOP team.
// To add, remove, or edit a person, just edit this array — the /team page
// and any "meet the team" sections pull from here automatically.
//
// `photo` should point to a file in /public/images/team/. If the file
// doesn't exist yet, TeamCard.astro falls back to a colored initials avatar,
// so it's safe to add someone here before you have their headshot.

export type Person = {
  name: string;
  role: string;
  pillarSlug?: string; // matches a slug in pillars.ts, used for accent color
  isCoChair?: boolean;
  hometown?: string;
  year?: string;
  major?: string;
  funFact?: string;
  photo?: string; // e.g. '/images/team/sadie-bubeck.jpg'
};

export const directors: Person[] = [
  {
    name: 'Sadie Bubeck',
    role: 'Marketing Director',
    pillarSlug: 'marketing',
    hometown: 'Dallas, TX',
    year: 'Freshman',
    major: 'Business',
    funFact: 'I love to travel!',
    photo: '/images/team/sadie-bubeck.jpg',
  },
  {
    name: 'Evelyn Csoma',
    role: 'Research & Education Director',
    pillarSlug: 'research-education',
    hometown: 'Brownwood, TX',
    year: 'Junior',
    major: 'Forensic Science',
    funFact: 'My favorite animal is an orca!',
    photo: '/images/team/evelyn-csoma.jpg',
  },
  {
    name: 'Brionna Grapeson',
    role: 'Partnerships Director',
    pillarSlug: 'partnerships',
    hometown: 'Leander, TX',
    year: 'Senior',
    major: 'SCMT & BH',
    funFact: 'I love hiking!',
    photo: '/images/team/brionna-grapeson.jpg',
  },
  {
    name: 'Catherine McKnight',
    role: 'Fundraising Director',
    pillarSlug: 'fundraising',
    hometown: 'College Station, TX',
    year: 'Senior',
    major: 'Psychology',
    funFact: 'Went on a 2 week road trip this summer',
    photo: '/images/team/catherine-mcknight.jpg',
  },
];

export const coChairs: Person[] = [
  {
    name: 'Reese Estess',
    role: 'Research & Education Co-Chair',
    pillarSlug: 'research-education',
    isCoChair: true,
    hometown: 'Round Rock, TX',
    year: 'Junior',
    major: 'Management',
    funFact: 'I speak Romanian!',
    photo: '/images/team/reese-estess.jpg',
  },
  {
    name: 'Mia Cline',
    role: 'Partnerships Co-Chair',
    pillarSlug: 'partnerships',
    isCoChair: true,
    hometown: 'Sugar Land, TX',
    year: 'Senior',
    major: 'ACCT & BH',
    funFact: 'Solo-tripped to India & NY this past summer',
    photo: '/images/team/mia-cline.jpg',
  },
  {
    name: 'Maya Moreno',
    role: 'Partnerships Co-Chair',
    pillarSlug: 'partnerships',
    isCoChair: true,
    hometown: 'Edinburg, TX',
    year: 'Sophomore',
    major: 'SCMT',
    funFact: 'Loves the outdoors',
    photo: '/images/team/maya-moreno.jpg',
  },
  {
    name: 'Rashmi Kukreja',
    role: 'Marketing Co-Chair',
    pillarSlug: 'marketing',
    isCoChair: true,
    hometown: 'Katy, TX',
    year: 'Senior',
    major: 'SCMT',
    funFact: 'I grew up in Asia!',
    photo: '/images/team/rashmi-kukreja.jpg',
  },
  {
    name: 'Miranda Mares',
    role: 'Marketing Co-Chair',
    pillarSlug: 'marketing',
    isCoChair: true,
    hometown: 'Decatur, TX',
    year: 'Senior',
    major: 'Accounting',
    funFact: 'I love sports!',
    photo: '/images/team/miranda-mares.jpg',
  },
  {
    name: 'Hannah Deats',
    role: 'Fundraising Co-Chair',
    pillarSlug: 'fundraising',
    isCoChair: true,
    hometown: 'Tyler, TX',
    year: 'Senior',
    major: 'MGMT',
    funFact: 'I love making jewelry!',
    photo: '/images/team/hannah-deats.jpg',
  },
];

export const facultyAdvisor: Person = {
  name: 'Dr. Shannon Deer',
  role: 'Faculty Advisor · Associate Dean for Undergraduate Programs & Clinical Associate Professor',
  photo: '/images/team/shannon-deer.jpg',
};
