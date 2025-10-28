import { z } from 'zod';

// ============================================
// CONTACT & ENQUIRY FORMS
// ============================================

export const contactFormSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits').optional(),
  country: z.string().min(2, 'Please select a country'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContactMethod: z.enum(['email', 'phone', 'whatsapp']).optional(),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: 'You must agree to terms and conditions',
  }),
});

export const enquiryFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  countryOfResidence: z.string().min(2, 'Please select your country'),
  studyDestination: z.string().min(2, 'Please select study destination'),
  programLevel: z.enum(['undergraduate', 'postgraduate', 'phd', 'short-course']),
  fieldOfStudy: z.string().min(2, 'Please select field of study'),
  intakeYear: z.number().min(2025).max(2030),
  intakeSeason: z.enum(['spring', 'summer', 'fall', 'winter']),
  budgetRange: z.enum(['under-20k', '20k-40k', '40k-60k', '60k-80k', 'above-80k']),
  message: z.string().optional(),
});

// ============================================
// STUDENT PROFILE
// ============================================

export const studentProfileSchema = z.object({
  personalInfo: z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    dateOfBirth: z.date().or(z.string()),
    gender: z.enum(['male', 'female', 'other', 'prefer-not-to-say']),
    nationality: z.string(),
    passportNumber: z.string().optional(),
    email: z.string().email(),
    phone: z.string(),
    address: z.object({
      street: z.string(),
      city: z.string(),
      state: z.string().optional(),
      country: z.string(),
      postalCode: z.string(),
    }),
  }),
  
  academicInfo: z.object({
    currentEducationLevel: z.enum(['high-school', 'bachelors', 'masters', 'phd']),
    gpa: z.number().min(0).max(4.0).optional(),
    percentageScore: z.number().min(0).max(100).optional(),
    graduationYear: z.number().min(1990).max(2030),
    institution: z.string(),
    fieldOfStudy: z.string(),
  }),
  
  testScores: z.object({
    ielts: z.object({
      overall: z.number().min(0).max(9).optional(),
      reading: z.number().min(0).max(9).optional(),
      writing: z.number().min(0).max(9).optional(),
      listening: z.number().min(0).max(9).optional(),
      speaking: z.number().min(0).max(9).optional(),
    }).optional(),
    toefl: z.object({
      overall: z.number().min(0).max(120).optional(),
      reading: z.number().min(0).max(30).optional(),
      writing: z.number().min(0).max(30).optional(),
      listening: z.number().min(0).max(30).optional(),
      speaking: z.number().min(0).max(30).optional(),
    }).optional(),
    gre: z.object({
      verbal: z.number().min(130).max(170).optional(),
      quantitative: z.number().min(130).max(170).optional(),
      analyticalWriting: z.number().min(0).max(6).optional(),
    }).optional(),
    gmat: z.object({
      total: z.number().min(200).max(800).optional(),
      verbal: z.number().min(0).max(60).optional(),
      quantitative: z.number().min(0).max(60).optional(),
      analyticalWriting: z.number().min(0).max(6).optional(),
    }).optional(),
    sat: z.object({
      total: z.number().min(400).max(1600).optional(),
      reading: z.number().min(200).max(800).optional(),
      math: z.number().min(200).max(800).optional(),
    }).optional(),
  }).optional(),
  
  preferences: z.object({
    studyDestinations: z.array(z.string()).min(1, 'Select at least one destination'),
    programLevel: z.enum(['undergraduate', 'postgraduate', 'phd', 'diploma']),
    fieldsOfInterest: z.array(z.string()).min(1),
    budget: z.object({
      min: z.number().min(0),
      max: z.number().min(0),
    }),
    intakePreference: z.enum(['spring', 'summer', 'fall', 'winter']),
  }),
});

// ============================================
// COLLEGE / UNIVERSITY
// ============================================

export const collegeSchema = z.object({
  id: z.number(),
  name: z.string().min(2),
  location: z.string(),
  type: z.enum(['Public', 'Private']),
  image: z.string().url().or(z.string().startsWith('/')),
  tuition: z.string(),
  acceptance: z.string(),
  students: z.string(),
  requirements: z.object({
    gpa: z.string(),
    sat: z.string(),
    act: z.string(),
    toefl: z.string(),
    essays: z.string(),
    recommendations: z.string(),
  }),
  programs: z.array(z.string()),
  popular: z.boolean(),
  affordable: z.boolean(),
});

// ============================================
// APPLICATION TRACKING
// ============================================

export const applicationSchema = z.object({
  id: z.string().uuid().optional(),
  studentId: z.string(),
  universityName: z.string(),
  programName: z.string(),
  programLevel: z.enum(['undergraduate', 'postgraduate', 'phd', 'diploma']),
  intake: z.object({
    season: z.enum(['spring', 'summer', 'fall', 'winter']),
    year: z.number(),
  }),
  status: z.enum([
    'draft',
    'submitted',
    'under-review',
    'interview-scheduled',
    'accepted',
    'rejected',
    'waitlisted',
    'withdrawn',
  ]),
  applicationFee: z.number().optional(),
  deadline: z.date().or(z.string()),
  documents: z.array(z.object({
    name: z.string(),
    type: z.enum(['transcript', 'sop', 'lor', 'resume', 'test-score', 'passport', 'other']),
    uploaded: z.boolean(),
    url: z.string().optional(),
  })),
  notes: z.string().optional(),
});

// ============================================
// VISA APPLICATION
// ============================================

export const visaApplicationSchema = z.object({
  passportNumber: z.string().min(6),
  passportExpiryDate: z.date().or(z.string()),
  visaType: z.enum(['student', 'tourist', 'work', 'dependent']),
  country: z.string(),
  appointmentDate: z.date().or(z.string()).optional(),
  status: z.enum(['not-started', 'in-progress', 'submitted', 'approved', 'rejected']),
  documents: z.array(z.object({
    name: z.string(),
    uploaded: z.boolean(),
  })),
});

// ============================================
// SCHOLARSHIP APPLICATION
// ============================================

export const scholarshipApplicationSchema = z.object({
  scholarshipName: z.string(),
  provider: z.string(),
  amount: z.number().min(0),
  deadline: z.date().or(z.string()),
  eligibility: z.object({
    gpaMin: z.number().min(0).max(4.0).optional(),
    nationality: z.array(z.string()).optional(),
    fieldOfStudy: z.array(z.string()).optional(),
  }),
  applicationStatus: z.enum(['not-applied', 'in-progress', 'submitted', 'awarded', 'rejected']),
  essayRequired: z.boolean(),
  letterOfRecommendationRequired: z.number().min(0).max(5),
});

// ============================================
// TEST REGISTRATION
// ============================================

export const testRegistrationSchema = z.object({
  testType: z.enum(['IELTS', 'TOEFL', 'GRE', 'GMAT', 'SAT', 'ACT', 'PTE', 'Duolingo']),
  testDate: z.date().or(z.string()),
  testCenter: z.string(),
  registrationId: z.string().optional(),
  fee: z.number().min(0),
  preparationLevel: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
  targetScore: z.number().optional(),
});

// ============================================
// ACCOMMODATION SEARCH
// ============================================

export const accommodationSearchSchema = z.object({
  city: z.string(),
  country: z.string(),
  moveInDate: z.date().or(z.string()),
  duration: z.number().min(1), // months
  budgetMin: z.number().min(0),
  budgetMax: z.number().min(0),
  accommodationType: z.enum(['dormitory', 'apartment', 'homestay', 'shared-housing']),
  preferences: z.object({
    furnished: z.boolean().optional(),
    utilitiesIncluded: z.boolean().optional(),
    nearCampus: z.boolean().optional(),
    petsAllowed: z.boolean().optional(),
  }).optional(),
});

// ============================================
// FINANCIAL PLANNING
// ============================================

export const financialPlanSchema = z.object({
  totalBudget: z.number().min(0),
  tuitionFees: z.number().min(0),
  livingExpenses: z.number().min(0),
  travelCosts: z.number().min(0),
  insuranceCosts: z.number().min(0),
  miscellaneous: z.number().min(0),
  fundingSources: z.array(z.object({
    source: z.enum(['personal-savings', 'family', 'scholarship', 'loan', 'sponsorship']),
    amount: z.number().min(0),
  })),
  currencyPreference: z.string().default('USD'),
});

// ============================================
// TYPE EXPORTS
// ============================================

export type ContactForm = z.infer<typeof contactFormSchema>;
export type EnquiryForm = z.infer<typeof enquiryFormSchema>;
export type StudentProfile = z.infer<typeof studentProfileSchema>;
export type College = z.infer<typeof collegeSchema>;
export type Application = z.infer<typeof applicationSchema>;
export type VisaApplication = z.infer<typeof visaApplicationSchema>;
export type ScholarshipApplication = z.infer<typeof scholarshipApplicationSchema>;
export type TestRegistration = z.infer<typeof testRegistrationSchema>;
export type AccommodationSearch = z.infer<typeof accommodationSearchSchema>;
export type FinancialPlan = z.infer<typeof financialPlanSchema>;
