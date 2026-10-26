/**
 * Practice Configuration
 * 
 * All doctor-specific content, services, hours, fees, locations and URLs
 * are centralised here for easy updating without redesigning the website.
 * 
 * Fields marked [CONFIGURE] require verified information before publication.
 */

export const practiceConfig = {
  // Doctor Identity
  doctor: {
    name: "Dr James Mitchell",
    title: "General Practitioner",
    fullName: "Dr James Mitchell",
    qualifications: "[MBBS — To Be Confirmed]",
    registrationNumber: "[AHPRA Registration — To Be Confirmed]",
    languagesSpoken: ["English"],
    areasOfInterest: [
      "General family medicine",
      "Chronic disease management",
      "Preventive health and screening",
      "Men's health",
      "Mental health",
    ],
    bio: "Dr James Mitchell is a General Practitioner committed to providing personal, comprehensive medical care to patients and their families. He believes in building long-term doctor-patient relationships based on trust, clear communication and evidence-based medicine.",
    approach: "Dr Mitchell takes time to listen, explain options clearly and work collaboratively with patients on their health goals. He practises evidence-based medicine and refers to specialists when appropriate.",
    // Portrait image — replace with authentic photography before publication
    portrait: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&h=750&fit=crop&crop=top",
  },

  // Practice Details
  practice: {
    name: "Dr James Mitchell — General Practice",
    suburb: "Camberwell",
    state: "VIC",
    postcode: "[Postcode — To Be Confirmed]",
    address: "[Street Address — To Be Confirmed]",
    fullAddress: "[Full Address — To Be Confirmed], Camberwell VIC [Postcode]",
    phone: "[Phone — To Be Confirmed]",
    phoneDisplay: "[Phone — To Be Confirmed]",
    email: "[Email — To Be Confirmed]",
    website: "www.drmitchell.com.au",
    newPatientsAccepted: true,
    billingType: "Mixed billing — [details to be confirmed]",
    bulkBilling: false,
  },

  // Opening Hours
  hours: {
    monday: "[Hours — To Be Confirmed]",
    tuesday: "[Hours — To Be Confirmed]",
    wednesday: "[Hours — To Be Confirmed]",
    thursday: "[Hours — To Be Confirmed]",
    friday: "[Hours — To Be Confirmed]",
    saturday: "[Hours — To Be Confirmed]",
    sunday: "Closed",
  },

  // Booking
  booking: {
    platform: "[HotDoc / Healthengine — To Be Confirmed]",
    bookingUrl: "[Booking URL — To Be Confirmed]",
    phoneBooking: true,
    walkInAccepted: false,
  },

  // Services offered — set to true only when confirmed by the doctor
  services: {
    generalConsultations: {
      available: true,
      description: "Comprehensive medical consultations for acute illness, injury assessment and ongoing health concerns.",
    },
    preventiveHealth: {
      available: true,
      description: "Health assessments, screening programs and preventive care tailored to your age and risk factors.",
    },
    chronicDisease: {
      available: true,
      description: "Ongoing management plans for diabetes, cardiovascular disease, asthma, COPD and other chronic conditions.",
    },
    immunisations: {
      available: true,
      description: "Routine childhood and adult immunisations, travel vaccinations and influenza vaccines.",
    },
    childAndFamilyHealth: {
      available: true,
      description: "Infant and child health checks, developmental assessments and family health care.",
    },
    womensHealth: {
      available: true,
      description: "Women's health consultations including reproductive health, cervical screening and menopause care.",
    },
    mensHealth: {
      available: true,
      description: "Men's health consultations including cardiovascular risk, prostate health and general wellbeing.",
    },
    mentalHealth: {
      available: true,
      description: "Mental health assessments, treatment plans and ongoing support for anxiety, depression and related conditions.",
    },
    telehealth: {
      available: true,
      description: "Telephone and video consultations for follow-ups, repeat prescriptions and non-urgent matters.",
    },
  },

  // Fees — all values must be confirmed before publication
  fees: {
    currency: "AUD",
    standardConsultation: "[Fee — To Be Confirmed]",
    longConsultation: "[Fee — To Be Confirmed]",
    extendedConsultation: "[Fee — To Be Confirmed]",
    telehealthStandard: "[Fee — To Be Confirmed]",
    telehealthLong: "[Fee — To Be Confirmed]",
    medicareRebate: "Patients with a valid Medicare card may be eligible for a Medicare rebate. The out-of-pocket cost will be discussed at the time of booking.",
    paymentMethods: "[Payment methods — To Be Confirmed]",
  },

  // Map
  map: {
    googleMapsUrl: "[Google Maps URL — To Be Confirmed]",
    embedUrl: "[Google Maps Embed URL — To Be Confirmed]",
    parking: "[Parking information — To Be Confirmed]",
    publicTransport: "[Public transport details — To Be Confirmed]",
    accessibility: "[Accessibility information — To Be Confirmed]",
  },

  // After hours
  afterHours: {
    message: "For after-hours medical assistance, contact the Victorian after-hours GP service or call healthdirect on 1800 022 222.",
  },
};

export default practiceConfig;
