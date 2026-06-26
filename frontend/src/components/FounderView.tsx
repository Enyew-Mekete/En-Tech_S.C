import { IMAGE_CONFIG } from "../imageConfig";
import { Award, Mail, Phone, MessageCircleCode, CheckCircle, GraduationCap, Trophy, Globe } from "lucide-react";
import { ServiceDetail } from "../types";

interface FounderViewProps {
  onOpenOrderModal: (srv?: ServiceDetail) => void;
}

export default function FounderView({ onOpenOrderModal }: FounderViewProps) {
  const openPortfolio = () => {
    window.open("https://enyew-mekete.github.io/Enyew-Mekete-portfolio/", "_blank");
  };

  return (
    <div id="founder-profile-view" className="py-16 selection:bg-cyan-400 text-slate-800 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title block */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">executive profiling</span>
          <h1 className="text-4xl font-black font-sans tracking-tight text-[#0C4D69]">
            Founder and CEO of En-Tech S.C.
          </h1>
          <div className="w-16 h-1 bg-[#0C4D69] mx-auto rounded-full" />
        </div>

        {/* Dossier layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          
          {/* Portrait card (Left - 5 span) */}
          <div className="lg:col-span-5 bg-[#0C4D69]/5 border-2 border-[#0C4D69]/20 rounded-2xl overflow-hidden p-6 text-center space-y-6 shadow-[0_4px_30px_rgba(12,77,105,0.03)]">
            <div 
              onClick={openPortfolio}
              className="w-56 h-56 rounded-2xl overflow-hidden shadow-md border-4 border-[#0C4D69] shadow-[0_0_15px_rgba(12,77,105,0.2)] mx-auto bg-slate-100 relative group cursor-pointer"
              title="Click to view Mr. Enyew Mekete's Portfolio"
            >
              <img
                src={IMAGE_CONFIG.founder}
                alt="Mr. Enyew Mekete"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#0C4D69]/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                <span className="text-white text-xs font-bold tracking-wider uppercase bg-[#0C4D69] px-3 py-1.5 rounded-lg shadow-md">View Portfolio</span>
              </div>
            </div>

            <div className="space-y-1">
              <h2 
                onClick={openPortfolio}
                className="text-2xl font-bold font-sans text-[#0C4D69] cursor-pointer hover:underline"
              >
                Mr. Enyew Mekete
              </h2>
              <p className="text-xs font-mono text-[#0C4D69] uppercase tracking-widest font-bold">Founder, CEO & Lead Technologist</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#0C4D69]/20">
              <div className="flex items-center gap-3 text-xs justify-center p-2.5 bg-white rounded-xl border border-slate-150">
                <GraduationCap className="w-5 h-5 text-[#0C4D69] shrink-0" />
                <span className="text-left font-sans text-[#0C4D69] font-bold">B.Sc. In Computer Science (Gold Medalist)</span>
              </div>

              <div className="flex items-center gap-3 text-xs justify-center p-2.5 bg-white rounded-xl border border-slate-150">
                <Trophy className="w-5 h-5 text-[#0C4D69] shrink-0" />
                <span className="text-left font-sans text-[#0C4D69] font-bold">Distinguished Tech Entrepreneur Of Ethiopia</span>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 pt-4">
              <button
                onClick={openPortfolio}
                className="py-3 bg-[#0C4D69] hover:bg-[#083447] text-white font-extrabold font-sans rounded-xl text-xs flex items-center justify-center gap-2 tracking-wider uppercase transition-all shadow-md cursor-pointer"
              >
                <Globe className="w-4 h-4" />
                The Founder Portfolio Website
              </button>
              <a
                href="mailto:enyewmekete65@gmail.com"
                className="py-3 bg-white hover:bg-[#0C4D69]/5 border-2 border-[#0C4D69] text-[#0C4D69] font-bold font-sans rounded-xl text-xs flex items-center justify-center gap-2 tracking-wider uppercase transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                Email Founder Directly
              </a>
              <a
                href="https://t.me/Paulos_21"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 bg-white hover:bg-[#0C4D69]/5 border border-slate-300 text-[#0C4D69] font-bold font-sans rounded-xl text-xs flex items-center justify-center gap-2 tracking-wider uppercase transition-all cursor-pointer"
              >
                <MessageCircleCode className="w-4 h-4" />
                Message via Telegram
              </a>
            </div>
          </div>

          {/* Biography texts (Right - 7 span) */}
          <div className="lg:col-span-7 space-y-8 leading-relaxed text-sm">
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold font-sans text-[#0C4D69] flex items-center gap-2">
                <Award className="w-5 h-5 text-[#0C4D69]" />
                Academic Excellence & Visionary Driver
              </h3>
              <p className="text-slate-700">
                Mr. Enyew Mekete, Founder and CEO of En-Tech S.C, is an accomplished Ethiopian Technologist and software systems visionary. He graduated with <strong>high distinction</strong> and earned the prestigious <strong>Gold Medal</strong> in the Engineering & Technology College, Computer Science Department, demonstrating outstanding academic performance, leadership, and analytical depth.
              </p>
              <p className="text-slate-700">
                Driven by a deep passion for clean software design patterns, enterprise database integrity, and operational automation, Mr. Enyew founded En-Tech S.C. to contribute to Ethiopia's growing technology ecosystem and prepare the corporate framework for local global trade compliance.
              </p>
            </div>

            <div className="space-y-4 border-t border-slate-200 pt-6">
              <h3 className="text-xl font-bold font-sans text-[#0C4D69] flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-[#0C4D69]" />
                Core Philosophy & Executive Mandate
              </h3>
              <p className="text-slate-700">
                Under Mr. Enyew's lead, En-Tech S.C organizes its development pipelines around three unbreakable rules:
              </p>
              
              <ul className="space-y-3.5 pl-2 text-xs">
                <li className="flex gap-2.5 items-start">
                  <span className="font-bold text-[#0C4D69]">•</span>
                  <div>
                    <strong className="text-[#0C4D69] font-bold">Absolute High Contrast Visuals:</strong> Prioritizing high contrast visual clarity and accessibility, ensuring screens look gorgeous on low-luminosity and high-luminosity devices alike.
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="font-bold text-[#0C4D69]">•</span>
                  <div>
                    <strong className="text-[#0C4D69] font-bold">Unbreakable Speed:</strong> Avoiding bloated client scripts. We bundle lean code built with React, Vite, and standard Tailwind layouts to output lightning fast page loads.
                  </div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="font-bold text-[#0C4D69]">•</span>
                  <div>
                    <strong className="text-[#0C4D69] font-bold">Authoritative Support:</strong> Providing transparent paths for any enterprise to apply order and receive instant dual route (Mail + Telegram) communications directly from developers.
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#0C4D69]/5 p-6 rounded-xl border border-[#0C4D69]/20 font-sans italic space-y-2 text-slate-800 shadow-inner">
              <p className="text-lg leading-relaxed font-semibold text-[#0C4D69]">
                "Our technology represents more than code; it represents our pledge to build a highly optimized digital backbone for East Africa's active mercantile operations."
              </p>
              <span className="block text-right text-xs font-mono font-bold text-[#0C4D69]">
                — Mr. Enyew Mekete
              </span>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={openPortfolio}
                className="px-6 py-3.5 bg-[#0C4D69] hover:bg-[#083447] text-white font-extrabold rounded-xl transition-all shadow-md duration-300 cursor-pointer text-xs uppercase tracking-wider text-center"
              >
                VIEW PORTFOLIO WEBSITE OF THE FOUNDER
              </button>
              <button
                onClick={() => onOpenOrderModal()}
                className="px-6 py-3.5 border-2 border-[#0C4D69] hover:bg-[#0C4D69]/5 text-[#0C4D69] font-extrabold rounded-xl transition-all duration-300 cursor-pointer text-xs uppercase tracking-wider text-center"
              >
                APPLY TO ORDER FROM EN-TECH S.C. NOW
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
