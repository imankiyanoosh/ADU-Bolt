export interface LeadData {
  projectType: string;
  projectScope: string;
  timeline: string;
  budget: string;
  propertyAddress: string;
  ownershipStatus: string;
  permitStatus: string;
  decisionMakers: string;
  decisionTimeline: string;
  previousContractors: string;
  fullName: string;
  email: string;
  phone: string;
  preferredContact: string;
}

export const projectTypes = [
  {
    id: 'full-adu',
    title: 'Full ADU Construction',
    description: 'Complete ADU from permits to completion',
    icon: 'Building',
    estimatedTimeline: '6-12 months',
    priceRange: '$150K - $400K+'
  },
  {
    id: 'kitchen',
    title: 'Kitchen Renovation',
    description: 'Luxury kitchen transformation',
    icon: 'ChefHat',
    estimatedTimeline: '2-4 months',
    priceRange: '$50K - $150K'
  },
  {
    id: 'bathroom',
    title: 'Bathroom Remodel',
    description: 'Spa-quality bathroom renovation',
    icon: 'Bath',
    estimatedTimeline: '1-2 months',
    priceRange: '$25K - $75K'
  },
  {
    id: 'full-renovation',
    title: 'Full Home Renovation',
    description: 'Complete home transformation',
    icon: 'Home',
    estimatedTimeline: '4-8 months',
    priceRange: '$200K - $800K+'
  },
  {
    id: '3d-planning',
    title: '3D Architecture Plans',
    description: 'Professional architectural design',
    icon: 'Ruler',
    estimatedTimeline: '2-4 weeks',
    priceRange: '$5K - $15K'
  }
];

export const leadScoring = {
  projectType: {
    'full-adu': 10,
    'full-renovation': 8,
    'kitchen': 6,
    'bathroom': 4,
    '3d-planning': 2
  },
  budget: {
    'qualified': 10,
    'unqualified': 0
  },
  timeline: {
    'immediate': 10,
    '1-3months': 8,
    '3-6months': 6,
    '6-12months': 4,
    'planning': 2
  },
  ownership: {
    'own': 10,
    'buying': 8,
    'investor': 6
  }
};

export const budgetRanges = {
  'full-adu': [
    { range: '$150K - $200K', qualified: true },
    { range: '$200K - $300K', qualified: true },
    { range: '$300K - $400K', qualified: true },
    { range: '$400K+', qualified: true },
    { range: 'Under $150K', qualified: false }
  ],
  'kitchen': [
    { range: '$50K - $75K', qualified: true },
    { range: '$75K - $100K', qualified: true },
    { range: '$100K - $150K', qualified: true },
    { range: '$150K+', qualified: true },
    { range: 'Under $50K', qualified: false }
  ],
  'bathroom': [
    { range: '$25K - $50K', qualified: true },
    { range: '$50K - $75K', qualified: true },
    { range: '$75K+', qualified: true },
    { range: 'Under $25K', qualified: false }
  ],
  'full-renovation': [
    { range: '$200K - $400K', qualified: true },
    { range: '$400K - $600K', qualified: true },
    { range: '$600K - $800K', qualified: true },
    { range: '$800K+', qualified: true },
    { range: 'Under $200K', qualified: false }
  ],
  '3d-planning': [
    { range: '$5K - $10K', qualified: true },
    { range: '$10K - $15K', qualified: true },
    { range: '$15K+', qualified: true },
    { range: 'Under $5K', qualified: false }
  ]
};

export function calculateLeadScore(leadData: Partial<LeadData>): number {
  let score = 0;
  
  if (leadData.projectType) {
    score += leadScoring.projectType[leadData.projectType] || 0;
  }
  
  if (leadData.timeline) {
    score += leadScoring.timeline[leadData.timeline] || 0;
  }
  
  if (leadData.ownershipStatus) {
    if (leadData.ownershipStatus.includes('own')) score += leadScoring.ownership.own;
    else if (leadData.ownershipStatus.includes('buying')) score += leadScoring.ownership.buying;
    else if (leadData.ownershipStatus.includes('investor')) score += leadScoring.ownership.investor;
  }
  
  if (leadData.budget && leadData.projectType) {
    const ranges = budgetRanges[leadData.projectType];
    const budgetRange = ranges?.find(b => b.range === leadData.budget);
    if (budgetRange?.qualified) {
      score += leadScoring.budget.qualified;
    }
  }
  
  return Math.min(score, 40); // Cap at 40 points
}