"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { FileText, User, Calendar, CheckCircle, ArrowRight, Loader2 } from "lucide-react";

export default function AdmissionsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  const steps = [
    { title: "Registration", description: "Fill out the online inquiry form.", icon: FileText },
    { title: "Assessment", description: "Student interaction & basic assessment.", icon: User },
    { title: "Verification", description: "Document verification & fee payment.", icon: CheckCircle },
    { title: "Enrollment", description: "Welcome to the PMPSSS family!", icon: Calendar },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 pt-24">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden bg-slate-900/50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Admissions <span className="text-blue-500">Open</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Join a community dedicated to academic excellence and holistic development. Apply now for the academic session 2024-25.
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">Admission Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-6 border-2 border-slate-700 group-hover:border-blue-500 transition-colors z-10 relative">
                  <step.icon className="w-8 h-8 text-blue-400 group-hover:text-white transition-colors" />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-0" />
                )}
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 px-4 bg-slate-900/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Fee Structure (2024-25)</h2>
          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-800 text-slate-200 uppercase font-semibold">
                <tr>
                  <th className="px-6 py-4">Grade</th>
                  <th className="px-6 py-4">Admission Fee</th>
                  <th className="px-6 py-4">Tuition Fee (Quarterly)</th>
                  <th className="px-6 py-4">Annual Charges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 bg-slate-900/50">
                <tr>
                  <td className="px-6 py-4 font-medium text-white">Nursery - KG</td>
                  <td className="px-6 py-4">₹ 10,000</td>
                  <td className="px-6 py-4">₹ 12,500</td>
                  <td className="px-6 py-4">₹ 5,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">I - V</td>
                  <td className="px-6 py-4">₹ 15,000</td>
                  <td className="px-6 py-4">₹ 15,500</td>
                  <td className="px-6 py-4">₹ 8,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">VI - X</td>
                  <td className="px-6 py-4">₹ 20,000</td>
                  <td className="px-6 py-4">₹ 18,500</td>
                  <td className="px-6 py-4">₹ 10,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-white">XI - XII</td>
                  <td className="px-6 py-4">₹ 25,000</td>
                  <td className="px-6 py-4">₹ 22,000</td>
                  <td className="px-6 py-4">₹ 12,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-slate-500 text-center">* Fees are subject to change. Transport and optional activity fees are extra.</p>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Apply Online</h2>
              <p className="text-slate-400">Fill out the form below to start your application.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Application Submitted!</h3>
                <p className="text-slate-400">We have received your details. Our admissions team will contact you shortly.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Student Name</label>
                    <input type="text" required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Grade Applying For</label>
                    <select className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                      <option>Nursery</option>
                      <option>Kindergarten</option>
                      <option>Grade 1</option>
                      <option>Grade 5</option>
                      <option>Grade 9</option>
                      <option>Grade 11 (Science)</option>
                      <option>Grade 11 (Commerce)</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Parent Name</label>
                    <input type="text" required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Contact Number</label>
                    <input type="tel" required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="+91 98765 43210" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                  <input type="email" required className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" placeholder="parent@example.com" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Application
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
