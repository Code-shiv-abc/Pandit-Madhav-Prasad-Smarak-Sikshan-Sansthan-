"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, Clock } from "lucide-react";
import { notices as dataNotices } from "@/data/notices";

type Notice = {
  id: number;
  text: string;
  time: string;
  type: "info" | "urgent" | "event";
};

export default function RealTimeNotices() {
  const [notices] = useState<Notice[]>(() => {
    const initialNotices: Notice[] = dataNotices.map((n, i) => ({
      id: Number(n.id) || i,
      text: `${n.title}: ${n.description}`,
      time: new Date(n.date).toLocaleDateString(),
      type: "info" as const
    }));
    return initialNotices.slice(0, 5);
  });

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
