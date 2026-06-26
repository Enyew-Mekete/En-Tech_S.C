import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, MessageSquare, Facebook, Youtube } from "lucide-react";
import { ServiceDetail } from "../types";

interface FooterProps {
  setView: (view: string, subTab?: string) => void;
  onOpenOrderModal: (srv?: ServiceDetail) => void;
}

export default function Footer({ setView, onOpenOrderModal }: FooterProps) {
  const [newsEmail, setNewsEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;

    if (!newsEmail.includes("@") || !newsEmail.includes(".")) {
      setErrorText("Please provide a valid email structure.");
      return;
    }

    setErrorText("");
    setSubscribed(true);
    setNewsEmail("");
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-corporate-footer" className="bg-[#0C4D69] text-white/90 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: About Summary & Interactive Social Links */}
          <div className="space-y-6">
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
              id="footer-logo-btn"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white font-black text-[#0C4D69] text-sm shadow-[0_0_10px_rgba(255,255,255,0.25)]">
                ET
              </div>
              <span className="font-bold text-lg text-white font-sans tracking-wide">
                EN-TECH <span className="text-cyan-300">S.C</span>
              </span>
            </button>

            <p className="text-xs text-white/80 leading-relaxed font-sans max-w-sm">
              En-Tech S.C is a premier Ethiopian technology and consultative collective focused on custom systems architecture, full-stack web products, robust graphic branding, and executive IT services.
            </p>

            <div className="space-y-2">
              <span className="block text-[10px] font-mono uppercase tracking-widest text-white/60">Corporate Channels</span>
              <div className="flex items-center space-x-3.5" id="footer-social-media-container">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-blue-600 rounded-full hover:text-white transition-all text-white/80"
                  aria-label="LinkedIn"
                  id="social-link-linkedin"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://t.me/Paulos_21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-sky-500 rounded-full hover:text-white transition-all text-white/80"
                  aria-label="Telegram Channel"
                  id="social-link-telegram"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-blue-700 rounded-full hover:text-white transition-all text-white/80"
                  aria-label="Facebook Page"
                  id="social-link-facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/10 hover:bg-red-600 rounded-full hover:text-white transition-all text-white/80"
                  aria-label="YouTube channel"
                  id="social-link-youtube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links to Core Services */}
          <div className="space-y-5">
            <h3 className="text-xs font-sans uppercase tracking-widest text-white font-extrabold">Specialized Services</h3>
            <ul className="space-y-3" id="footer-services-links">
              <li>
                <button
                  onClick={() => setView("service-web")}
                  className="text-xs text-white/80 hover:text-cyan-300 tracking-wide block hover:translate-x-1 transition-transform cursor-pointer text-left"
                  id="foot-link-web"
                >
                  Web Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView("service-website")}
                  className="text-xs text-white/80 hover:text-cyan-300 tracking-wide block hover:translate-x-1 transition-transform cursor-pointer text-left"
                  id="foot-link-website"
                >
                  Website Design & Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView("service-graphics")}
                  className="text-xs text-white/80 hover:text-cyan-300 tracking-wide block hover:translate-x-1 transition-transform cursor-pointer text-left"
                  id="foot-link-graphics"
                >
                  Graphics Design (All Types)
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView("service-graphics", "Logo Design")}
                  className="text-[10px] pl-3 text-white/60 hover:text-cyan-300 tracking-wide block hover:translate-x-1 transition-transform cursor-pointer text-left"
                  id="foot-link-sub-logo"
                >
                  - Custom Logo Craft
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView("service-graphics", "Banner")}
                  className="text-[10px] pl-3 text-white/60 hover:text-cyan-300 tracking-wide block hover:translate-x-1 transition-transform cursor-pointer text-left"
                  id="foot-link-sub-banner"
                >
                  - Promotional Banners
                </button>
              </li>
              <li>
                <button
                  onClick={() => setView("service-graphics", "Youtube Thumbnail")}
                  className="text-[10px] pl-3 text-white/60 hover:text-cyan-300 tracking-wide block hover:translate-x-1 transition-transform cursor-pointer text-left"
                  id="foot-link-sub-thumb"
                >
                  - YouTube CTR Thumbnails
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact details & Information policies */}
          <div className="space-y-5">
            <h3 className="text-xs font-sans uppercase tracking-widest text-white font-extrabold">Contact Info</h3>
            <ul className="space-y-4 text-xs text-white/80" id="footer-contact-details">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5 filter drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]" />
                <div>
                  <span className="block text-white font-bold font-mono tracking-wider">+251-943-305937</span>
                  <span className="block text-[10px] text-white/60">Business Correspondence</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5 filter drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]" />
                <div>
                  <span className="block text-white font-semibold truncate font-mono">enyewmekete65@gmail.com</span>
                  <span className="block text-[10px] text-white/60">Direct Founder Inbox</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-300 shrink-0 mt-0.5 filter drop-shadow-[0_0_5px_rgba(34,211,238,0.3)]" />
                <div>
                  <span className="block text-white font-medium">Addis Ababa, Ethiopia</span>
                  <span className="block text-[10px] text-white/60">Headquarters Hub</span>
                </div>
              </li>
              <li className="border-t border-white/10 pt-3 flex gap-4">
                <button
                  onClick={() => setView("privacy-policy")}
                  className="text-[11px] text-white/60 hover:text-cyan-300 transition-colors cursor-pointer"
                  id="foot-link-privacy"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => setView("contact")}
                  className="text-[11px] text-white/60 hover:text-cyan-300 transition-colors cursor-pointer"
                  id="foot-link-support"
                >
                  Get Support
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="space-y-5">
            <h3 className="text-xs font-sans uppercase tracking-widest text-white font-extrabold">Newsletter</h3>
            <p className="text-xs text-white/80 leading-relaxed font-sans">
              Subscribe to stay updated with product updates, corporate figures, and technology insights from En-Tech S.C.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2" id="footer-newsletter-form">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter email address"
                  value={newsEmail}
                  onChange={(e) => setNewsEmail(e.target.value)}
                  disabled={subscribed}
                  className="w-full px-4 py-2.5 pr-12 bg-white/10 border border-white/20 rounded-xl text-xs text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-cyan-300 focus:border-cyan-300 transition-colors"
                  id="newsletter-email-input"
                  required
                />
                <button
                  type="submit"
                  disabled={subscribed}
                  className="absolute right-1 top-1 p-2 bg-white hover:bg-slate-100 disabled:bg-emerald-500 text-[#0C4D69] font-bold rounded-lg transition-colors cursor-pointer flex items-center justify-center"
                  id="newsletter-submit-btn"
                  aria-label="Subscribe"
                >
                  {subscribed ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 animate-bounce" /> : <Send className="w-3.5 h-3.5" />}
                </button>
              </div>

              {errorText && (
                <p className="text-[10px] text-red-300 animate-pulse px-1" id="newsletter-error-message">
                  {errorText}
                </p>
              )}

              {subscribed && (
                <p className="text-[10px] text-emerald-300 animate-fade-in px-1" id="newsletter-success-message">
                  ✓ Successfully subscribed! Thank you.
                </p>
              )}
            </form>
          </div>

        </div>

        {/* Bottom copyright banner */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 font-sans">
          <p id="footer-copyright-text">
            &copy; {currentYear} En-Tech S.C Technology Company. All Rights Reserved.
          </p>
          <p id="footer-credit-text">
            Designed & Engineered by <span className="text-white hover:text-cyan-300 font-bold cursor-pointer transition-colors" onClick={() => setView("about-founder")}>Enyew.M</span> - Founder and CEO
          </p>
        </div>
      </div>
    </footer>
  );
}
