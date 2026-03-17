export interface Notice {
  id: string;
  date: string;    // ISO string
  title: string;
  description: string;
  // CMS-ready: add `slug` or `externalUrl` here when connecting to a CMS
}

export const notices: Notice[] = [
  // TODO: Replace with real notice content
  {
    id: "1",
    date: "2025-08-01",
    title: "Admissions Open 2025-26",
    description: "Applications are now being accepted for the academic year 2025-26.",
  },
  // Add more notices here
];
