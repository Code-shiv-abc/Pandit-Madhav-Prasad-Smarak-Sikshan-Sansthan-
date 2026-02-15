import Hero from "@/components/Hero";
import RealTimeNotices from "@/components/RealTimeNotices";
import AIChatWidget from "@/components/AIChatWidget";
import About from "@/components/About";
import Features from "@/components/Features";
import Admissions from "@/components/Admissions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 relative overflow-x-hidden">
      <Hero />

      {/* About Section */}
      <About />

      {/* Features Grid */}
      <Features />

      {/* Live Updates Section */}
      <section id="campus" className="py-24 bg-slate-900/50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
             <div className="text-white max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                  Campus Pulse
                </h2>
                <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                  Stay connected with the heartbeat of our campus. From exam schedules to cultural events, get real-time updates ensuring you never miss a moment of the vibrant school life.
                </p>
                <button className="px-6 py-3 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:border-white transition-all">
                  View All Notices
                </button>
             </div>

             <div className="w-full md:w-auto flex justify-center">
                <RealTimeNotices />
             </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <Admissions />

      <Footer />
      <AIChatWidget />
    </main>
  );
}
