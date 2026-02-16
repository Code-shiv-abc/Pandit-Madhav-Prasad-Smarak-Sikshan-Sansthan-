"use client";

import { motion } from "framer-motion";
import { Target, Eye, Award, Users, GraduationCap, School } from "lucide-react";

const leadership = [
  {
    name: "Dr. Rajesh Sharma",
    role: "Principal",
    image: "bg-blue-900", // Placeholder color
    bio: "With over 25 years in education, Dr. Sharma believes in fostering a learning environment that encourages curiosity and critical thinking."
  },
  {
    name: "Mrs. Anita Desai",
    role: "Vice Principal",
    image: "bg-emerald-900",
    bio: "Dedicated to student welfare and academic excellence, Mrs. Desai ensures that every child receives personalized attention."
  }
];

const milestones = [
  { year: "1995", title: "Foundation", description: "Established with a vision to provide quality education to all." },
  { year: "2005", title: "Expansion", description: "Added Senior Secondary wing with state-of-the-art laboratories." },
  { year: "2015", title: "Digital Leap", description: "Introduced smart classrooms and digital learning management systems." },
  { year: "2023", title: "Excellence Award", description: "Recognized as the 'Best Innovative School' in the district." }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 pointer-events-none" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-blue-200"
          >
            Our Legacy & Vision
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Since 1995, Pandit Madhav Prasad Smarak Sikshan Sansthan has been a beacon of knowledge, nurturing young minds to become global citizens grounded in values.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-slate-900/30">
        <div className="container mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-blue-500 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Mission</h2>
            <p className="text-slate-400 leading-relaxed">
              To provide a holistic education that balances academic excellence with character building. We aim to empower students with the skills, knowledge, and values necessary to thrive in a rapidly changing world while remaining rooted in their cultural heritage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 hover:border-emerald-500 transition-colors group"
          >
            <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Eye className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-white">Our Vision</h2>
            <p className="text-slate-400 leading-relaxed">
              To be a premier institution recognized for nurturing creative, compassionate, and resilient leaders who contribute positively to society. We envision a community where every learner discovers their potential and pursues it with passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-slate-400">Milestones that define our path to excellence.</p>
          </motion.div>

          <div className="relative border-l border-slate-800 ml-4 md:ml-1/2 space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative pl-8 md:pl-0 flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-3 h-3 bg-blue-500 rounded-full border-4 border-slate-950 shadow-[0_0_0_4px_rgba(59,130,246,0.2)]" />

                {/* Content */}
                <div className="md:w-1/2 md:px-12 w-full">
                  <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-600 transition-colors">
                    <span className="text-blue-400 font-bold text-sm block mb-2">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-slate-400 text-sm">{milestone.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16"
          >
            Leadership
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-slate-600 transition-all group"
              >
                <div className={`h-48 ${leader.image} relative overflow-hidden flex items-center justify-center`}>
                   <div className="text-white/20">
                     <Users className="w-24 h-24" />
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                </div>
                <div className="p-8 relative -mt-12">
                  <div className="w-20 h-20 rounded-full bg-slate-800 border-4 border-slate-950 flex items-center justify-center mb-4 shadow-xl">
                    <span className="text-2xl font-bold text-slate-500">{leader.name[0]}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{leader.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-4">{leader.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Facts */}
      <section className="py-16 px-4 border-t border-slate-900">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years of Excellence", value: "28+", icon: Award },
            { label: "Students Enrolled", value: "1500+", icon: Users },
            { label: "Expert Faculty", value: "85+", icon: GraduationCap },
            { label: "Campus Acres", value: "12", icon: School },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4"
            >
              <stat.icon className="w-8 h-8 text-blue-500 mx-auto mb-4 opacity-80" />
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
