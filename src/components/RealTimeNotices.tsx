"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Clock } from "lucide-react";

type Notice = {
  id: number;
  text: string;
  time: string;
  type: "info" | "urgent" | "event";
};

const INITIAL_NOTICES: Notice[] = [
  { id: 1, text: "Annual Sports Day registration closes tomorrow.", time: "10:30 AM", type: "event" },
  { id: 2, text: "Science Lab 2 maintenance scheduled for Friday.", time: "09:15 AM", type: "info" },
  { id: 3, text: "Bus Route #5 will be delayed by 10 mins today.", time: "08:45 AM", type: "urgent" },
];

const UPCOMING_NOTICES: string[] = [
  "Math Olympiad results are out! Check the portal.",
  "Parent-Teacher Meeting scheduled for next Saturday.",
  "New library books have arrived - come check them out!",
  "Weather alert: School closes at 1 PM tomorrow due to heatwave.",
  "Debate Club meeting moved to Room 104.",
];

export default function RealTimeNotices() {
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNotice = UPCOMING_NOTICES[Math.floor(Math.random() * UPCOMING_NOTICES.length)];
      const newNotice: Notice = {
        id: Date.now(),
        text: randomNotice,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: Math.random() > 0.8 ? "urgent" : Math.random() > 0.5 ? "event" : "info",
      };

      setNotices((prev) => [newNotice, ...prev].slice(0, 5)); // Keep latest 5
    }, 5000); // New notice every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-xl overflow-hidden shadow-2xl">
      <div className="p-4 bg-slate-800/50 border-b border-slate-700 flex justify-between items-center">
        <h3 className="text-white font-semibold flex items-center gap-2">
          <Bell className="w-4 h-4 text-yellow-400 animate-pulse" />
          Live Notice Board
        </h3>
        <span className="text-xs text-green-400 flex items-center gap-1">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Real-time
        </span>
      </div>

      <div className="p-4 h-[300px] overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/50 pointer-events-none z-10" />

        <AnimatePresence mode="popLayout">
          {notices.map((notice) => (
            <motion.div
              key={notice.id}
              layout
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`mb-3 p-3 rounded-lg border-l-4 ${
                notice.type === "urgent" ? "border-red-500 bg-red-900/20" :
                notice.type === "event" ? "border-blue-500 bg-blue-900/20" :
                "border-slate-500 bg-slate-800/30"
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className={`text-xs font-bold uppercase ${
                  notice.type === "urgent" ? "text-red-400" :
                  notice.type === "event" ? "text-blue-400" :
                  "text-slate-400"
                }`}>
                  {notice.type}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {notice.time}
                </span>
              </div>
              <p className="text-sm text-slate-200 leading-snug">
                {notice.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
