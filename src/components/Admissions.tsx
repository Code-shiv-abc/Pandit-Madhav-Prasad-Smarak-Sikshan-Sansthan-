"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Admissions() {
  return (
    <section id="admissions" className="py-24 bg-gradient-to-br from-blue-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Community</h2>
          <p className="text-lg text-blue-100 mb-10 leading-relaxed">
            Admissions for the upcoming academic year are now open.
            Take the first step towards a future of excellence and innovation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/admissions">
              <button className="px-8 py-4 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Apply Now
              </button>
            </Link>
            <button className="px-8 py-4 border-2 border-white/20 hover:border-white text-white font-semibold rounded-full transition-all duration-300 backdrop-blur-sm bg-white/5">
              Download Prospectus
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
