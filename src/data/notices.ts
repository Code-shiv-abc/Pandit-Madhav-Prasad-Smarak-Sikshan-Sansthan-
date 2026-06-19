export interface Notice {
  id: string;
  date: string;    // ISO string
  title: string;
  description: string;
  // CMS-ready: add `slug` or `externalUrl` here when connecting to a CMS
}

export const notices: Notice[] = [
  {
    id: "1",
    date: "2025-12-01",
    title: "Admissions Open 2026-27",
    description: "Registration for the upcoming academic session 2026-27 will commence from January 1st, 2026.",
  },
  {
    id: "2",
    date: "2025-11-15",
    title: "Annual Sports Meet 2025",
    description: "The Annual Sports Meet is scheduled for November 25th-27th. All participants must report by 8:00 AM.",
  },
  {
    id: "3",
    date: "2025-10-10",
    title: "Half-Yearly Exam Results",
    description: "Results for the half-yearly examinations will be declared on October 15th during the PTM.",
  },
  {
    id: "4",
    date: "2025-10-01",
    title: "Gandhi Jayanti Holiday",
    description: "School will remain closed on October 2nd in observance of Mahatma Gandhi's birth anniversary.",
  },
  {
    id: "5",
    date: "2025-09-05",
    title: "Teacher's Day Celebration",
    description: "Special assembly and cultural programs organized by students to honor our teachers.",
  },
  {
    id: "6",
    date: "2025-08-14",
    title: "Independence Day Program",
    description: "Join us for the 79th Independence Day flag hoisting ceremony at 8:30 AM tomorrow.",
  }
];
