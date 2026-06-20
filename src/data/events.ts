export interface CampusEvent {
  id: string;
  date: string;    // ISO string, e.g. "2025-08-15"
  title: string;
  time: string;
  venue: string;
}

export const campusEvents: CampusEvent[] = [
  {
    id: "1",
    date: "2026-11-15",
    title: "Annual Sports Day",
    time: "9:00 AM",
    venue: "School Ground",
  },
  {
    id: "2",
    date: "2026-12-10",
    title: "Science Exhibition",
    time: "10:00 AM",
    venue: "School Hall",
  },
  // Add more events here
];
