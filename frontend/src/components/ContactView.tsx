import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";

export default function ContactView() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white text-slate-800 min-h-screen">
      {/* Hero Header */}
      <section className="py-20 bg-gradient-to-b from-[#0C4D69]/10 to-white text-center select-none">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-black block">get in touch</span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#0C4D69]">Contact Our HQ</h1>
          <p className="text-base text-[#0C4D69]/80 max-w-2xl mx-auto leading-relaxed">
            Reach out to our executive headquarters or submit inquiries about software architecture, ERP systems, and branding contracts.
          </p>
          <div className="w-16 h-1 bg-[#0C4D69] mx-auto rounded-full" />
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Side: Contact Information Cards */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#0C4D69]">Direct Correspondence</h3>
                <p className="text-xs text-[#0C4D69]/80 max-w-sm">We respond to corporate proposals and project schedules within 24 working hours.</p>
              </div>

              <div className="space-y-6">
                {/* Location */}
                <div className="p-5 rounded-xl border border-[#0C4D69]/20 bg-[#0C4D69]/5 flex items-start gap-4">
                  <div className="p-3 bg-[#0C4D69] text-white rounded-lg"><MapPin className="w-5 h-5" /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs text-[#0C4D69] uppercase tracking-wide">Corporate Offices</h5>
                    <p className="text-xs text-slate-700 font-medium">Bole Road, Central Business</p>
                    <p className="text-[10px] text-slate-500">Addis Ababa, Ethiopia</p>
                  </div>
                </div>

                {/* Email Contacts */}
                <div className="p-5 rounded-xl border border-[#0C4D69]/20 bg-[#0C4D69]/5 flex items-start gap-4">
                  <div className="p-3 bg-[#0C4D69] text-white rounded-lg"><Mail className="w-5 h-5" /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs text-[#0C4D69] uppercase tracking-wide">Electronic Mail</h5>
                    <p className="text-xs text-slate-700 font-semibold hover:underline">
                      <a href="mailto:enyewmekete65@gmail.com">enyewmekete65@gmail.com</a>
                    </p>
                    <p className="text-[10px] text-slate-500">For Direct Developer / CEO inquiries</p>
                  </div>
                </div>

                {/* Telegram / Phone */}
                <div className="p-5 rounded-xl border border-[#0C4D69]/20 bg-[#0C4D69]/5 flex items-start gap-4">
                  <div className="p-3 bg-[#0C4D69] text-white rounded-lg"><Phone className="w-5 h-5" /></div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs text-[#0C4D69] uppercase tracking-wide">Direct Lines</h5>
                    <p className="text-xs text-slate-700 font-medium">+251-943-305937</p>
                    <p className="text-[10px] text-slate-500">Telegram Direct Support Available</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Interactive Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-2xl border-2 border-[#0C4D69]/20 shadow-sm">
              {submitted ? (
                <div className="h-full flex flex-col justify-center items-center text-center space-y-4 py-12">
                  <div className="w-16 h-16 bg-[#0C4D69]/10 text-[#0C4D69] rounded-full flex items-center justify-center border-2 border-[#0C4D69]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0C4D69]">Message Sent</h4>
                  <p className="text-xs text-[#0C4D69]/80 max-w-md leading-relaxed">
                    Thank you for contacting En-Tech S.C. Your message has been logged, and Mr. Enyew Mekete's office will review your request.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 bg-[#0C4D69] text-white rounded-lg font-bold text-xs hover:bg-[#0c4d69]/90 cursor-pointer transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-[#0C4D69]">Send Correspondence</h4>
                    <p className="text-xs text-slate-500">Complete the form below to register your operational request.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#0C4D69] uppercase tracking-wider block">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 border border-[#0C4D69]/20 rounded-xl focus:outline-none focus:border-[#0C4D69] text-xs text-slate-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-[#0C4D69] uppercase tracking-wider block">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 border border-[#0C4D69]/20 rounded-xl focus:outline-none focus:border-[#0C4D69] text-xs text-slate-800"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#0C4D69] uppercase tracking-wider block">Phone Number (Optional)</label>
                    <input
                      type="text"
                      placeholder="+251..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-[#0C4D69]/20 rounded-xl focus:outline-none focus:border-[#0C4D69] text-xs text-slate-800"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-[#0C4D69] uppercase tracking-wider block">Operational Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Detail your technology requirements, schedules, or feedback..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 border border-[#0C4D69]/20 rounded-xl focus:outline-none focus:border-[#0C4D69] text-xs text-slate-800 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3.5 bg-[#0C4D69] text-white rounded-xl font-bold text-xs hover:bg-[#0c4d69]/90 shadow-md cursor-pointer transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" /> Send Message
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
