/**
Question: 
  Write a JavaScript function which will take a single argument awards and return prizes in the below structure. 
  Time complexity of the solution should be O(n).
**/

const awards = [
  {
    name: "James Peebles",
    category: "Physics",
    research: "Theoretical discoveries in physical cosmology",
    year: 2019,
  },
  {
    name: "Michel Mayor",
    category: "Physics",
    research: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "Didier Queloz",
    category: "Physics",
    research: "Discovery of an exoplanet orbiting a solar-type star",
    year: 2019,
  },
  {
    name: "John B. Goodenough",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "M. Stanley Whittingham",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Akira Yoshino",
    category: "Chemistry",
    research: "Development of lithium-ion batteries",
    year: 2019,
  },
  {
    name: "Arthur Ashkin",
    category: "Physics",
    research: "Optical tweezers and their application to biological systems",
    year: 2018,
  },
  {
    name: "Gerard Mourou",
    category: "Physics",
    research: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Donna Strickland",
    category: "Physics",
    research: "Method of generating high-intensity, ultra-short optical pulses",
    year: 2018,
  },
  {
    name: "Frances H. Arnold",
    category: "Chemistry",
    research: "Directed evolution of enzymes",
    year: 2018,
  },
  {
    name: "George P. Smith",
    category: "Chemistry",
    research: "Phage display of peptides and antibodies.",
    year: 2018,
  },
  {
    name: "Sir Gregory P. Winter",
    category: "Chemistry",
    research: "Phage display of peptides and antibodies.",
    year: 2018,
  },
];

const prizes = [
  {
    category: "Physics",
    year: 2019,
    winners: [
      { name: "James Peebles", share: 0.5 },
      { name: "Michel Mayor", share: 0.25 },
      { name: "Didier Queloz", share: 0.25 },
    ],
  },
  {
    category: "Chemistry",
    year: 2019,
    winners: [
      { name: "John B. Goodenough", share: 0.3333 },
      { name: "M. Stanley Whittingham", share: 0.3333 },
      { name: "Akira Yoshino", share: 0.3333 },
    ],
  },
  {
    category: "Physics",
    year: 2018,
    winners: [
      { name: "Arthur Ashkin", share: 0.5 },
      { name: "Gerard Mourou", share: 0.25 },
      { name: "Donna Strickland", share: 0.25 },
    ],
  },
  {
    category: "Chemistry",
    year: 2018,
    winners: [
      { name: "Frances H. Arnold", share: 0.5 },
      { name: "George P. Smith", share: 0.25 },
      { name: "Sir Gregory P. Winter", share: 0.25 },
    ],
  },
];

// solutions

const awardsMap = new Map();
awards.forEach((award) => {
  const key = `${award.name}-${award.category}-${award.year}`;
  awardsMap.set(key, award);
});

const mergedPrizes = prizes.map((prize) => {
  return {
    category: prize.category,
    year: prize.year,
    winners: prize.winners.map((winner) => {
      return {
        name: winner.name,
        share: winner.share,
      };
    }),
  };
});

console.log(mergedPrizes);
