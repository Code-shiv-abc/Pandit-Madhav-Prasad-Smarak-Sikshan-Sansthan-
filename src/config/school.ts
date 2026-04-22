export const SCHOOL_INFO = {
  name: "Pandit Madhav Prasad Smarak Sikshan Sansthan",
  shortName: "PMPSSS",
  address: "2MGG+26 Rek Sadiya, Uttar Pradesh",
  phone: "+91 7651995858",
  phoneAdmissions: "+91 9792954343",
  email: process.env.NEXT_PUBLIC_SCHOOL_EMAIL || "",
  emailAdmissions: process.env.NEXT_PUBLIC_SCHOOL_EMAIL_ADMISSIONS || "",
  officeHours: "Monday - Saturday: 8:00 AM - 2:00 PM",
  mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=80.9,26.8,81.1,27.0&layer=mapnik",
  currentAcademicYear: "2025-26",
} as const;
