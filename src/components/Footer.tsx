import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";
import { SCHOOL_INFO } from "@/config/school";
import WhatsAppIcon from "@/components/WhatsAppIcon";

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
              {SCHOOL_INFO.social.facebook && (
                <a href={SCHOOL_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {SCHOOL_INFO.social.twitter && (
                <a href={SCHOOL_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              )}
              {SCHOOL_INFO.social.instagram && (
                <a href={SCHOOL_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              )}
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
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{SCHOOL_INFO.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                <a href={`tel:${SCHOOL_INFO.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {SCHOOL_INFO.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <WhatsAppIcon className="w-5 h-5 text-[#25D366] shrink-0" />
                <a
                  href={`https://wa.me/${SCHOOL_INFO.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <span>{SCHOOL_INFO.email}</span>
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
