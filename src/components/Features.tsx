"use client";

import { motion } from "framer-motion";
import { Cpu, BookOpen, Trophy, Microscope } from "lucide-react";

const features = [
  {
    title: "Smart Classrooms",
    description: "Interactive learning with state-of-the-art digital boards and AI-assisted teaching tools.",
    icon: Cpu,
    color: "text-blue-400",
    bg: "bg-blue-900/20",
    border: "border-blue-800"
  },
  {
    title: "Values & Ethics",
    description: "Rooted in tradition, we instill timeless values that guide students through life's challenges.",
    icon: BookOpen,
    color: "text-amber-400",
    bg: "bg-amber-900/20",
    border: "border-amber-800"
  },
  {
    title: "Sports Excellence",
    description: "World-class facilities for cricket, football, and athletics to foster team spirit and resilience.",
    icon: Trophy,
    color: "text-emerald-400",
    bg: "bg-emerald-900/20",
    border: "border-emerald-800"
  },
  {
    title: "Modern Laboratories",
    description: "Advanced physics, chemistry, and robotics labs to fuel the scientific temper of young minds.",
    icon: Microscope,
    color: "text-purple-400",
    bg: "bg-purple-900/20",
    border: "border-purple-800"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`p-8 rounded-2xl border ${feature.border} ${feature.bg} backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 bg-slate-900/50 ${feature.color}`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-100">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
