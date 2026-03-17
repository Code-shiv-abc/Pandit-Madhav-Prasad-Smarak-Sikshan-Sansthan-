export interface CampusEvent {
  id: string;
  date: string;    // ISO string, e.g. "2025-08-15"
  title: string;
  time: string;
  venue: string;
}

export const campusEvents: CampusEvent[] = [
  // TODO: Replace with real upcoming event dates
  {
    id: "1",
    date: "2025-09-01",   // TODO: Replace with real date
    title: "Annual Sports Day",
    time: "9:00 AM",
    venue: "School Ground",
  },
  {
    id: "2",
    date: "2025-10-15",   // TODO: Replace with real date
    title: "Science Exhibition",
    time: "10:00 AM",
    venue: "School Hall",
  },
  // Add more events here
];
