import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { SCHOOL_INFO } from "@/config/school";

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">{SCHOOL_INFO.name}</h3>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Preparing young minds to lead with confidence, compassion, and limitless vision. Where tradition meets technology.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-blue-400 transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:text-blue-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="hover:text-pink-400 transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-white transition-colors">Admissions</Link></li>
              <li><Link href="/#features" className="hover:text-white transition-colors">Academics</Link></li>
              <li><Link href="/campus" className="hover:text-white transition-colors">Campus Life</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SCHOOL_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-3 hover:text-white transition-colors group"
                >
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 group-hover:text-blue-400" />
                  <span>{SCHOOL_INFO.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SCHOOL_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="flex gap-3 hover:text-white transition-colors group"
                >
                  <Phone className="w-5 h-5 text-blue-500 shrink-0 group-hover:text-emerald-400" />
                  <span>{SCHOOL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SCHOOL_INFO.email}`}
                  className="flex gap-3 hover:text-white transition-colors group"
                >
                  <Mail className="w-5 h-5 text-blue-500 shrink-0 group-hover:text-purple-400" />
                  <span>{SCHOOL_INFO.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} {SCHOOL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
