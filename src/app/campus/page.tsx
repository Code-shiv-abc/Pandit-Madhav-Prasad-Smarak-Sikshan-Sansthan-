"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Music, Palette, Microscope, Trophy, Globe } from "lucide-react";

const clubs = [
  { name: "Science Club", icon: Microscope, color: "text-blue-400", desc: "Exploring the wonders of physics, chemistry, and biology through experiments." },
  { name: "Art & Culture", icon: Palette, color: "text-pink-400", desc: "Nurturing creativity through painting, sculpture, and performing arts." },
  { name: "Sports Academy", icon: Trophy, color: "text-amber-400", desc: "Training champions in cricket, football, athletics, and more." },
  { name: "Debate Society", icon: Globe, color: "text-emerald-400", desc: "Fostering critical thinking and public speaking skills." },
  { name: "Music Club", icon: Music, color: "text-purple-400", desc: "From classical to contemporary, celebrating the joy of rhythm and melody." },
];

const events = [
  { day: "15", month: "MAR", title: "Annual Sports Day", time: "09:00 AM", location: "Main Stadium" },
  { day: "22", month: "MAR", title: "Science Exhibition", time: "10:30 AM", location: "School Auditorium" },
  { day: "05", month: "APR", title: "Cultural Fest", time: "05:00 PM", location: "Open Air Theatre" },
  { day: "10", month: "APR", title: "Parent-Teacher Meeting", time: "08:30 AM", location: "Classrooms" },
];

const galleryItems = [
  { color: "bg-blue-500", size: "col-span-1 row-span-1", title: "Morning Assembly" },
  { color: "bg-emerald-500", size: "col-span-1 md:col-span-2 row-span-1", title: "Annual Day Celebrations" },
  { color: "bg-amber-500", size: "col-span-1 row-span-2", title: "Sports Championship" },
  { color: "bg-purple-500", size: "col-span-1 row-span-1", title: "Science Lab" },
  { color: "bg-pink-500", size: "col-span-1 row-span-1", title: "Art Workshop" },
  { color: "bg-cyan-500", size: "col-span-1 md:col-span-2 row-span-1", title: "Library Reading Session" },
];

export default function CampusPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-slate-950 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-200 via-white to-purple-200"
          >
            Campus Life
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Experience a vibrant community where learning extends beyond the classroom. From cultural festivals to sports championships, every day is an opportunity to grow.
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Moments Captured</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] gap-4">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${item.size} rounded-xl overflow-hidden relative group cursor-pointer`}
              >
                <div className={`w-full h-full ${item.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors">
                    {/* Placeholder content since we don't have images */}
                    <div className="w-full h-full bg-slate-800/50 flex items-end p-4">
                        <span className="font-semibold text-white drop-shadow-md transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            {item.title}
                        </span>
                    </div>
                </div>
                {/* Border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Clubs & Societies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-lg bg-slate-900 ${club.color}`}>
                    <club.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{club.name}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {club.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-slate-400">Mark your calendars for what&apos;s happening next.</p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
              View Academic Calendar <Calendar className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row gap-6 items-start md:items-center hover:bg-slate-900 transition-colors"
              >
                <div className="flex-shrink-0 bg-slate-800 rounded-lg p-4 text-center min-w-[80px]">
                  <span className="block text-2xl font-bold text-white">{event.day}</span>
                  <span className="block text-xs text-slate-400 uppercase tracking-wider">{event.month}</span>
                </div>

                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> {event.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" /> {event.location}
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0 w-full md:w-auto">
                   <button className="w-full md:w-auto px-4 py-2 border border-slate-700 rounded-lg text-sm text-slate-300 hover:text-white hover:border-white transition-colors">
                     Details
                   </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
