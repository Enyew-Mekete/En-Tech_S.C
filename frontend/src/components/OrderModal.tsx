import { useEffect, useState, FormEvent } from "react";
import { X, Send, Mail, Disc } from "lucide-react";
import { ServiceDetail } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: ServiceDetail | null;
  services: ServiceDetail[];
}

const EXPERTISE_OPTIONS = [
  { id: "web-dev", title: "Web Design and Development" },
  { id: "website-dev", title: "Website Design and Development" },
  { id: "erp-system", title: "ERP System" },
  { id: "logo-design", title: "Logo Design" },
  { id: "youtube-thumbnail", title: "YouTube Thumbnail" },
  { id: "brand-banner", title: "Brand Banner Design" }
];

function mapServiceToOptionId(srv: any): string {
  if (!srv) return "web-dev";
  const id = (srv.id || "").toLowerCase();
  const title = (srv.title || "").toLowerCase();
  const subCategory = (srv.subCategory || "").toLowerCase();
  
  if (id.includes("logo") || subCategory.includes("logo") || title.includes("logo")) {
    return "logo-design";
  }
  if (id.includes("youtube") || subCategory.includes("youtube") || id.includes("thumbnail") || subCategory.includes("thumbnail") || title.includes("youtube") || title.includes("thumbnail")) {
    return "youtube-thumbnail";
  }
  if (id.includes("social") || id.includes("banner") || subCategory.includes("banner") || title.includes("banner")) {
    return "brand-banner";
  }
  if (id.includes("erp") || id.includes("ledger") || id.includes("inventory") || title.includes("erp")) {
    return "erp-system";
  }
  if (id.includes("corp-website") || id.includes("landing-pages") || id === "website-dev" || title.includes("website")) {
    return "website-dev";
  }
  if (id.includes("custom-web") || id.includes("api") || id === "web-dev" || title.includes("web design")) {
    return "web-dev";
  }
  return "web-dev";
}

export default function OrderModal({ isOpen, onClose, selectedService, services }: OrderModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState("web-dev");
  const [instructions, setInstructions] = useState("");
  const [preferredContact, setPreferredContact] = useState<"both" | "email" | "telegram">("both");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Synchronize initial input with the service clicked
  useEffect(() => {
    if (selectedService) {
      setSelectedServiceId(mapServiceToOptionId(selectedService));
    } else {
      setSelectedServiceId("web-dev");
    }
  }, [selectedService, isOpen]);

  if (!isOpen) return null;

  const currentOption = EXPERTISE_OPTIONS.find((opt) => opt.id === selectedServiceId) || EXPERTISE_OPTIONS[0];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) return;

    // Trigger submission state to expose the external redirect controls
    setIsSubmitted(true);
  };

  const getEmailLink = () => {
    const serviceTitle = currentOption.title;
    const subject = encodeURIComponent(`En-Tech S.C - Order Request: ${serviceTitle}`);
    const body = encodeURIComponent(
      `Hello En-Tech S.C,

I would like to place an order request for the following service: ${serviceTitle}.

Details & Specifications:
--------------------------------------------
Client Name: ${fullName}
Client Email: ${email}
Client Phone: ${phone}
Preferred Contact Channel: ${preferredContact}

Requirements Description:
${instructions || "No custom instructions provided."}

--------------------------------------------
Submitted from En-Tech S.C custom order portal.
Sincerely,
${fullName}`
    );
    return `mailto:enyewmekete65@gmail.com?subject=${subject}&body=${body}`;
  };

  const getTelegramLink = () => {
    const serviceTitle = currentOption.title;
    const text = encodeURIComponent(
      `🔔 *NEW EN-TECH ORDER REQUEST* 🔔\n\n` +
      `👤 *Name:* ${fullName}\n` +
      `📞 *Phone:* ${phone}\n` +
      `✉️ *Email:* ${email}\n` +
      `💼 *Service:* ${serviceTitle}\n` +
      `📝 *Details:* ${instructions || "No details specified."}\n\n` +
      `Preferred: ${preferredContact}`
    );
    // Redirect direct to Paulos_21 Telegram username
    return `https://t.me/Paulos_21?text=${text}`;
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhone("");
    setInstructions("");
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div id="order-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
        <motion.div
          id="order-modal-content"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden bg-white border-2 border-[#0C4D69]/30 rounded-2xl shadow-2xl flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-[#0C4D69]/15 bg-[#0C4D69] text-white">
            <div>
              <h2 className="text-xl font-bold tracking-tight font-sans">Apply to Order Service</h2>
              <p className="text-xs text-white/80 mt-0.5 font-mono">En-Tech S.C - Empowering Business Operations</p>
            </div>
            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="p-1 text-white/80 hover:text-white transition-colors hover:bg-white/10 rounded-lg outline-none cursor-pointer"
              aria-label="Close modal"
              id="close-order-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 text-[#0C4D69] bg-white">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="order-fullname" className="block text-xs font-black mb-1 text-[#0C4D69]">
                    FULL NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="order-fullname"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 bg-white border-2 border-[#0C4D69]/20 rounded-lg text-[#0C4D69] focus:outline-none focus:ring-1 focus:ring-[#0C4D69] focus:border-[#0C4D69] placeholder-[#0C4D69]/40 text-xs font-bold"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="order-email" className="block text-xs font-black mb-1 text-[#0C4D69]">
                      EMAIL ADDRESS <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="order-email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 bg-white border-2 border-[#0C4D69]/20 rounded-lg text-[#0C4D69] focus:outline-none focus:ring-1 focus:ring-[#0C4D69] focus:border-[#0C4D69] placeholder-[#0C4D69]/40 text-xs font-bold"
                    />
                  </div>

                  <div>
                    <label htmlFor="order-phone" className="block text-xs font-black mb-1 text-[#0C4D69]">
                      TELEPHONE NUMBER <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="order-phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+251..."
                      className="w-full px-4 py-2.5 bg-white border-2 border-[#0C4D69]/20 rounded-lg text-[#0C4D69] focus:outline-none focus:ring-1 focus:ring-[#0C4D69] focus:border-[#0C4D69] placeholder-[#0C4D69]/40 text-xs font-bold"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="order-service-select" className="block text-xs font-black mb-1 text-[#0C4D69]">
                    SELECT CORE EXPERTISE
                  </label>
                  <select
                    id="order-service-select"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className="w-full px-4 py-2.5 bg-white border-2 border-[#0C4D69]/20 rounded-lg text-[#0C4D69] focus:outline-none focus:ring-1 focus:ring-[#0C4D69] focus:border-[#0C4D69] text-xs font-bold"
                  >
                    {EXPERTISE_OPTIONS.map((srv) => (
                      <option key={srv.id} value={srv.id} className="text-[#0C4D69] bg-white font-bold">
                        {srv.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="order-instructions" className="block text-xs font-black mb-1 text-[#0C4D69]">
                    PROJECT GOALS / REQUIREMENTS
                  </label>
                  <textarea
                    id="order-instructions"
                    rows={4}
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    placeholder="Provide details about your project, target audience, sizing, timelines or aesthetics..."
                    className="w-full px-4 py-2 bg-white border-2 border-[#0C4D69]/20 rounded-lg text-[#0C4D69] focus:outline-none focus:ring-1 focus:ring-[#0C4D69] focus:border-[#0C4D69] placeholder-[#0C4D69]/40 text-xs font-bold"
                  />
                </div>

                <div>
                  <span className="block text-xs font-black mb-2 text-[#0C4D69]">
                    PREFERRED COMMUNICATION PATH
                  </span>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#0C4D69]">
                      <input
                        type="radio"
                        name="preferred-contact"
                        checked={preferredContact === "both"}
                        onChange={() => setPreferredContact("both")}
                        className="accent-[#0C4D69]"
                      />
                      <span>Both Channels</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#0C4D69]">
                      <input
                        type="radio"
                        name="preferred-contact"
                        checked={preferredContact === "email"}
                        onChange={() => setPreferredContact("email")}
                        className="accent-[#0C4D69]"
                      />
                      <span>Email ONLY</span>
                    </label>
                    <label className="flex items-center gap-1.5 cursor-pointer text-xs font-bold text-[#0C4D69]">
                      <input
                        type="radio"
                        name="preferred-contact"
                        checked={preferredContact === "telegram"}
                        onChange={() => setPreferredContact("telegram")}
                        className="accent-[#0C4D69]"
                      />
                      <span>Telegram Direct</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0C4D69] hover:bg-[#083447] text-white font-extrabold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer font-sans shadow-[0_4px_15px_rgba(12,77,105,0.15)]"
                  id="submit-order-btn"
                >
                  <Send className="w-4 h-4" />
                  Proceed to Direct Channels
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-6 space-y-6"
              >
                <div className="mx-auto w-16 h-16 bg-[#0C4D69]/10 border border-[#0C4D69]/20 flex items-center justify-center rounded-full text-[#0C4D69] filter drop-shadow-[0_0_5px_rgba(12,77,105,0.15)]">
                  <Disc className="w-8 h-8 animate-pulse text-[#0C4D69]" />
                </div>

                <div>
                  <h3 className="text-xl font-bold font-sans">Ready for Submission Redirection!</h3>
                  <p className="text-sm text-[#0C4D69]/80 mt-2 px-4 max-w-sm mx-auto leading-relaxed font-semibold">
                    To comply with security and high availability standards, your order form will now redirect you to launch the En-Tech communication systems.
                  </p>
                </div>

                <div className="flex flex-col gap-3 max-w-sm mx-auto">
                  <a
                    href={getEmailLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-[#0C4D69] hover:bg-[#083447] text-white font-extrabold rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_15px_rgba(12,77,105,0.15)] cursor-pointer text-sm"
                    id="order-link-email"
                  >
                    <Mail className="w-5 h-5" />
                    Open Automated Mail Client
                  </a>

                  <a
                    href={getTelegramLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-white hover:bg-[#0C4D69]/5 border-2 border-[#0C4D69] text-[#0C4D69] font-black rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer text-sm"
                    id="order-link-telegram"
                  >
                    <span className="font-bold flex items-center justify-center bg-[#0C4D69] text-white text-[10px] w-5 h-5 rounded-full mr-0.5">T</span>
                    Message Founder on Telegram
                  </a>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs font-bold text-[#0C4D69]/70 hover:text-[#0C4D69] hover:underline inline-block mt-4 cursor-pointer focus:outline-none"
                  id="order-reset-btn"
                >
                  Edit details / Back to form
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
