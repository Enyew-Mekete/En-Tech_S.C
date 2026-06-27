import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight, Award, Shield, Cpu, Users, MailOpen, Briefcase, Building, Sparkles } from "lucide-react";
import { HERO_SLIDES, BENEFITS, SERVICES_DATA, TEAM_MEMBERS, STATS, PARTNERS } from "../data";
import { IMAGE_CONFIG } from "../imageConfig";
import { ServiceDetail } from "../types";
import { motion, AnimatePresence } from "motion/react";

interface HomeViewProps {
  setView: (view: string, subTab?: string) => void;
  onOpenOrderModal: (srv?: ServiceDetail) => void;
  currentSlideIndex: number;
  setCurrentSlideIndex: (idx: number | ((prev: number) => number)) => void;
}

// Helper to draw beautiful high-quality vector partner logos
function getPartnerLogo(slug: string) {
  switch (slug) {
    case "microsoft":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 23 23" fill="currentColor">
          <path d="M0 0h11v11H0z" />
          <path d="M12 0h11v11H12z" />
          <path d="M0 12h11v11H0z" />
          <path d="M12 12h11v11H12z" />
        </svg>
      );
    case "dell":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M7 15V9h3a2.5 2.5 0 0 1 0 5H7z" />
          <path d="M12 9v6h3" />
          <path d="M12 12h2.5" />
        </svg>
      );
    case "cisco":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="10" width="1.5" height="4" rx="0.5" />
          <rect x="5" y="6" width="1.5" height="12" rx="0.5" />
          <rect x="8" y="10" width="1.5" height="4" rx="0.5" />
          <rect x="11" y="4" width="1.5" height="16" rx="0.5" />
          <rect x="14" y="4" width="1.5" height="16" rx="0.5" />
          <rect x="17" y="10" width="1.5" height="4" rx="0.5" />
          <rect x="20" y="6" width="1.5" height="12" rx="0.5" />
          <rect x="23" y="10" width="1.5" height="4" rx="0.5" />
        </svg>
      );
    case "motorola":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M6 16l4-8 2 4 2-4 4 8" />
        </svg>
      );
    case "huawei":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c-.4 0-.8.3-.9.7l-.8 4c-.1.5.2 1 .7 1.1s1-.2 1.1-.7l.8-4c.1-.4-.2-.8-.7-.9zM15.5 3.5c-.3-.3-.8-.3-1.1-.1l-3.2 2.6c-.4.3-.5.9-.2 1.3s.9.5 1.3.2l3.2-2.6c.3-.3.3-.8.1-1.1zM8.5 3.5c-.3.3-.3.8-.1 1.1l3.2 2.6c.4.3 1 .2 1.3-.2s.2-.9-.2-1.3L9.6 3.4c-.3-.2-.8-.2-1.1.1zM18.5 6.5c-.2-.4-.7-.5-1.1-.3l-3.6 2c-.4.2-.6.8-.4 1.2s.8.6 1.2.4l3.6-2c.4-.2.5-.7.3-1.3zM5.5 6.5c-.4.5-.3 1 .1 1.3l3.6 2c.4.2 1 0 1.2-.4s0-1-.4-1.2l-3.6-2c-.3-.2-.7-.1-.9.3zM21 11c0-.5-.4-.9-.9-.9h-4c-.5 0-.9.4-.9.9s.4.9.9.9h4c.5 0 .9-.4.9-.9zM3 11c0 .5.4.9.9.9h4c.5 0 .9-.4.9-.9s-.4-.9-.9-.9h-4c-.5 0-.9.4-.9.9z" />
        </svg>
      );
    case "checkpoint":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 11l2 2 4-4" />
        </svg>
      );
    case "odoo":
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-4-9c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm8 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z" />
          <path d="M12 9.5c-1.38 0-2.5 1.12-2.5 2.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5-1.12-2.5-2.5-2.5z" />
        </svg>
      );
    default:
      return (
        <svg className="w-8 h-8 text-[#0C4D69] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="4" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}

export default function HomeView({ setView, onOpenOrderModal, currentSlideIndex, setCurrentSlideIndex }: HomeViewProps) {
  // Stats counter state
  const [animatedStats, setAnimatedStats] = useState({
    customers: 0,
    subscribers: 0,
    employees: 0,
    branches: 0,
  });

  // Calculate dynamic subscribers (starts from 432 on 2026-06-01, increasing by 3 per day)
  const getDynamicSubscribers = () => {
    const startDate = new Date("2026-06-01T00:00:00Z");
    const today = new Date();
    const daysDiff = Math.max(0, Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
    return 432 + daysDiff * 3;
  };

  const targetSubscribers = getDynamicSubscribers();
  const targetProjects = 120; // 120 Successful / Delivered Projects

  // Automated slider rotation
  useEffect(() => {
    const sliderInterval = setInterval(() => {
      setCurrentSlideIndex((prevIdx) => (prevIdx + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(sliderInterval);
  }, [setCurrentSlideIndex]);

  // Handle counter animations when the component mounts
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 40;
    const stepTime = duration / steps;
    let stepCount = 0;

    const timer = setInterval(() => {
      stepCount++;
      setAnimatedStats({
        customers: Math.round((450 / steps) * stepCount),
        subscribers: Math.round((targetSubscribers / steps) * stepCount),
        employees: Math.round((35 / steps) * stepCount),
        branches: Math.round((targetProjects / steps) * stepCount),
      });

      if (stepCount >= steps) {
        clearInterval(timer);
        // Ensure accurate final values
        setAnimatedStats({
          customers: 450,
          subscribers: targetSubscribers,
          employees: 35,
          branches: targetProjects,
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [targetSubscribers, targetProjects]);

  const slide = HERO_SLIDES[currentSlideIndex];

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  return (
    <div id="home-view-stage" className="space-y-0 text-[#0C4D69] bg-white transition-colors duration-300">
      
      {/* 1. Hero Dynamic Slider with subtle light background */}
      <section id="hero-slider-section" className="relative h-[650px] w-full overflow-hidden flex items-center justify-between text-[#0C4D69] bg-white border-b border-[#0C4D69]/10">
        
        {/* Dynamic sliding background images at subtle opacity */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlideIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.30, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${
                  currentSlideIndex === 0 ? IMAGE_CONFIG.heroSlide1 :
                  currentSlideIndex === 1 ? IMAGE_CONFIG.heroSlide2 :
                  currentSlideIndex === 2 ? IMAGE_CONFIG.heroSlide3 : IMAGE_CONFIG.heroSlide4
                })`
              }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-white via-[#0C4D69]/5 to-transparent" />
        </div>

        {/* Content Overlay container with a beautiful #0C4D69-framed card */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl bg-white/90 backdrop-blur-md p-8 sm:p-10 border-2 border-[#0C4D69] rounded-2xl shadow-[0_4px_30px_rgba(12,77,105,0.08)] space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#0C4D69]/10 border border-[#0C4D69]/30 rounded-full text-xs font-black text-[#0C4D69] uppercase tracking-widest font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  {slide.badge}
                </div>

                <h1 className="text-3xl sm:text-4xl font-black font-sans tracking-tight leading-[1.12] text-[#0C4D69]">
                  {slide.title}
                </h1>

                <p className="text-sm sm:text-base text-[#0C4D69]/80 max-w-xl font-sans font-medium leading-relaxed">
                  {slide.subtitle}
                </p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={() => {
                      if (slide.id === 1) {
                        setView("service-web");
                      } else if (slide.id === 2) {
                        setView("service-website");
                      } else if (slide.id === 3) {
                        setView("service-graphics");
                      } else {
                        setView("service-erp");
                      }
                    }}
                    className="px-6 py-3.5 bg-[#0C4D69] hover:bg-[#083447] text-white font-extrabold rounded-xl flex items-center gap-2 transition-all shadow-[0_4px_15px_rgba(12,77,105,0.15)] transform hover:scale-[1.02] active:scale-95 cursor-pointer text-sm"
                  >
                    {slide.actionText}
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setView("contact")}
                    className="px-6 py-3.5 bg-white hover:bg-[#0C4D69]/5 border-2 border-[#0C4D69] text-[#0C4D69] font-black rounded-xl transition-all cursor-pointer text-sm"
                  >
                    {slide.secondaryActionText}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel controls with customized styled buttons */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-between items-center px-4 max-w-7xl mx-auto">
          {/* Indicators */}
          <div className="flex space-x-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlideIndex(i)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlideIndex === i ? "w-8 bg-[#0C4D69] shadow-[0_0_10px_rgba(12,77,105,0.2)]" : "w-2.5 bg-[#0C4D69]/30 hover:bg-[#0C4D69]/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Left/Right controls */}
          <div className="flex space-x-2">
            <button
              onClick={handlePrevSlide}
              className="p-2.5 rounded-xl bg-white hover:bg-[#0C4D69]/5 border-2 border-[#0C4D69]/20 text-[#0C4D69] transition-all cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNextSlide}
              className="p-2.5 rounded-xl bg-white hover:bg-[#0C4D69]/5 border-2 border-[#0C4D69]/20 text-[#0C4D69] transition-all cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </section>

      {/* 2. WHY CHOOSE EN-TECH S.C Portion with White Background and #0C4D69 boxes */}
      <section id="why-choose-us-section" className="py-24 bg-white border-b border-[#0C4D69]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">partnering for excellence</span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#0C4D69]">
              Why Choose En-Tech S.C
            </h2>
            <div className="w-12 h-1 bg-[#0C4D69] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BENEFITS.map((benefit) => (
              <div
                key={benefit.id}
                className="p-8 bg-white border-2 border-[#0C4D69] rounded-2xl shadow-[0_4px_30px_rgba(12,77,105,0.03)] text-center flex flex-col items-center space-y-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-14 h-14 bg-[#0C4D69]/10 text-[#0C4D69] border border-[#0C4D69]/20 rounded-xl flex items-center justify-center shadow-inner">
                  {benefit.iconName === "Lightbulb" ? <Award className="w-7 h-7" /> :
                   benefit.iconName === "Globe" ? <Shield className="w-7 h-7" /> : <Cpu className="w-7 h-7" />}
                </div>
                <h3 className="text-lg font-black font-sans text-[#0C4D69]">{benefit.title}</h3>
                <p className="text-xs text-[#0C4D69]/80 leading-relaxed max-w-xs">{benefit.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. EXPERTISE - Core Services Portion with beautiful #0C4D69 cards */}
      <section id="expertise-services-section" className="py-24 bg-white border-b border-[#0C4D69]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">our expertise</span>
              <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#0C4D69]">Our Core Services</h2>
            </div>
            
            <button
              onClick={() => setView("service-web")}
              className="inline-flex items-center gap-1.5 text-xs font-black text-[#0C4D69] hover:underline cursor-pointer bg-transparent"
            >
              Explore All Services
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Service card 1 */}
            <div className="bg-white border-2 border-[#0C4D69]/25 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(12,77,105,0.03)] flex flex-col justify-between hover:shadow-lg hover:border-[#0C4D69] transition-all duration-300 group">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/image/services_web.jpg`}
                  alt="Web Design & Development"
                  referrerPolicy="no-referrer"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 space-y-2">
                  <div className="inline-flex items-center gap-1 text-[9px] bg-[#0C4D69]/10 text-[#0C4D69] border border-[#0C4D69]/20 px-2 py-0.5 rounded-full font-mono font-bold">
                    ARCHITECTURE
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#0C4D69] line-clamp-1">Web Design & Dev</h3>
                  <p className="text-[11px] text-[#0C4D69]/80 leading-relaxed line-clamp-3">
                    Custom modular programming, lightning-fast React SPAs, interactive user portals, and optimized databases.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setView("service-web")}
                  className="w-full py-2 border-2 border-[#0C4D69] text-[#0C4D69] hover:bg-[#0C4D69]/5 font-semibold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer bg-transparent"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenOrderModal({ id: "web-dev", title: "Web Design & Development" })}
                  className="w-full py-2 bg-[#0C4D69] hover:bg-[#083447] text-white font-bold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer"
                >
                  Apply to Order
                </button>
              </div>
            </div>

            {/* Service card 2 */}
            <div className="bg-white border-2 border-[#0C4D69]/25 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(12,77,105,0.03)] flex flex-col justify-between hover:shadow-lg hover:border-[#0C4D69] transition-all duration-300 group">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/image/services_website.jpg`}
                  alt="Website Design & Development"
                  referrerPolicy="no-referrer"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 space-y-2">
                  <div className="inline-flex items-center gap-1 text-[9px] bg-[#0C4D69]/10 text-[#0C4D69] border border-[#0C4D69]/20 px-2 py-0.5 rounded-full font-mono font-bold">
                    BRANDING
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#0C4D69] line-clamp-1">Website Design & Dev</h3>
                  <p className="text-[11px] text-[#0C4D69]/80 leading-relaxed line-clamp-3">
                    Stunning corporate showcases, multi-platform landing pages, validated lead-capture forms, and Google maps.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setView("service-website")}
                  className="w-full py-2 border-2 border-[#0C4D69] text-[#0C4D69] hover:bg-[#0C4D69]/5 font-semibold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer bg-transparent"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenOrderModal({ id: "website-dev", title: "Website Design & Development" })}
                  className="w-full py-2 bg-[#0C4D69] hover:bg-[#083447] text-white font-bold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer"
                >
                  Apply to Order
                </button>
              </div>
            </div>

            {/* Service card 3 */}
            <div className="bg-white border-2 border-[#0C4D69]/25 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(12,77,105,0.03)] flex flex-col justify-between hover:shadow-lg hover:border-[#0C4D69] transition-all duration-300 group">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/image/services_graphics.jpg`}
                  alt="Graphics Design"
                  referrerPolicy="no-referrer"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 space-y-2">
                  <div className="inline-flex items-center gap-1 text-[9px] bg-[#0C4D69]/10 text-[#0C4D69] border border-[#0C4D69]/20 px-2 py-0.5 rounded-full font-mono font-bold">
                    CREATIVE
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#0C4D69] line-clamp-1">Graphics Design</h3>
                  <p className="text-[11px] text-[#0C4D69]/80 leading-relaxed line-clamp-3">
                    Corporate logo vector designs, digital banner configurations, high-impact YouTube thumbnails, and brand handbooks.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setView("service-graphics")}
                  className="w-full py-2 border-2 border-[#0C4D69] text-[#0C4D69] hover:bg-[#0C4D69]/5 font-semibold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer bg-transparent"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenOrderModal({ id: "graphics", title: "Graphics Design Services" })}
                  className="w-full py-2 bg-[#0C4D69] hover:bg-[#083447] text-white font-bold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer"
                >
                  Apply to Order
                </button>
              </div>
            </div>

            {/* Service card 4 */}
            <div className="bg-white border-2 border-[#0C4D69]/25 rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(12,77,105,0.03)] flex flex-col justify-between hover:shadow-lg hover:border-[#0C4D69] transition-all duration-300 group">
              <div>
                <img
                  src={`${import.meta.env.BASE_URL}assets/image/services_erp.jpg`}
                  alt="ERP System Consulting"
                  referrerPolicy="no-referrer"
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 space-y-2">
                  <div className="inline-flex items-center gap-1 text-[9px] bg-[#0C4D69]/10 text-[#0C4D69] border border-[#0C4D69]/20 px-2 py-0.5 rounded-full font-mono font-bold">
                    ENTERPRISE
                  </div>
                  <h3 className="text-base font-bold font-sans text-[#0C4D69] line-clamp-1">ERP System Consulting</h3>
                  <p className="text-[11px] text-[#0C4D69]/80 leading-relaxed line-clamp-3">
                    Strategy meetings, data migration, module configurations, systems integrations, and staff workshops.
                  </p>
                </div>
              </div>
              <div className="p-5 pt-0 space-y-2">
                <button
                  onClick={() => setView("service-erp")}
                  className="w-full py-2 border-2 border-[#0C4D69] text-[#0C4D69] hover:bg-[#0C4D69]/5 font-semibold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer bg-transparent"
                >
                  View Details
                </button>
                <button
                  onClick={() => onOpenOrderModal({ id: "erp-system", title: "ERP System Consulting" })}
                  className="w-full py-2 bg-[#0C4D69] hover:bg-[#083447] text-white font-bold rounded-lg text-center text-xs tracking-wider uppercase transition-all block cursor-pointer"
                >
                  Apply to Order
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. LEADERSHIP - Management Division with #0C4D69/5 soft shading background and white bordered boxes */}
      <section id="leadership-division-section" className="py-24 bg-[#0C4D69]/5 border-b border-[#0C4D69]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">executive crew</span>
            <h2 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#0C4D69]">Meet Our Management</h2>
            <div className="w-12 h-1 bg-[#0C4D69] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => {
              // Select appropriate member photo url from central list
              let imgUrl = IMAGE_CONFIG.leadership.sosina;
              if (member.id === 2) imgUrl = IMAGE_CONFIG.leadership.abel;
              if (member.id === 3) imgUrl = IMAGE_CONFIG.leadership.meseret;
              if (member.id === 4) imgUrl = IMAGE_CONFIG.leadership.seifu;

              return (
                <div
                  key={member.id}
                  className="bg-white border-2 border-[#0C4D69] rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(12,77,105,0.03)] flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-5 flex flex-col items-center">
                    <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-[#0C4D69]/20 shadow-[0_0_15px_rgba(12,77,105,0.15)] bg-slate-100 relative group">
                      <img
                        src={imgUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="text-center mt-5">
                      <h4 className="text-base font-bold font-sans text-[#0C4D69]">{member.name}</h4>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#0C4D69]/85 mt-1">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-[#0C4D69]/5 border-t border-[#0C4D69]/10 text-center">
                    <button
                      onClick={() => setView("about-company")}
                      className="text-[11px] text-[#0C4D69] font-black hover:underline bg-transparent cursor-pointer"
                    >
                      View Profile Core
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. EN-TECH S.C IN NUMBERS with premium white background & #0C4D69 bordered boxes */}
      <section id="statistics-figures-section" className="py-20 bg-white border-b border-[#0C4D69]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">metrics</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight font-sans text-[#0C4D69]">En-Tech S.C in Numbers</h2>
            <div className="w-12 h-1 bg-[#0C4D69] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => {
              // Select target count
              let valueToRender = animatedStats.customers;
              if (stat.id === "subscribers") valueToRender = animatedStats.subscribers;
              if (stat.id === "employees") valueToRender = animatedStats.employees;
              if (stat.id === "branches") valueToRender = animatedStats.branches;

              return (
                <div
                  key={stat.id}
                  className="p-6 bg-white border-2 border-[#0C4D69] rounded-2xl flex flex-col justify-center items-center shadow-[0_4px_30px_rgba(12,77,105,0.03)] hover:shadow-md transition-all duration-300"
                >
                  <div className="text-[#0C4D69] mb-3 block">
                    {stat.iconName === "Users" ? <Users className="w-8 h-8" /> :
                     stat.iconName === "MailOpen" ? <MailOpen className="w-8 h-8" /> :
                     stat.iconName === "Briefcase" ? <Briefcase className="w-8 h-8" /> : <Building className="w-8 h-8" />}
                  </div>
                  
                  <span className="block text-4xl font-black font-sans tracking-tight text-[#0C4D69] mt-1">
                    {valueToRender}
                    <span className="text-[#0C4D69]/75 font-mono text-2xl font-extrabold">{stat.suffix}</span>
                  </span>

                  <span className="block text-xs font-mono uppercase tracking-widest text-[#0C4D69]/70 mt-2 font-bold">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 6. PARTNERS LOGO SHELF with border-2 outline containers and #0C4D69 fill */}
      <section id="corporate-partners-section" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold">global alliance</span>
            <h3 className="text-lg font-bold text-[#0C4D69]">Our Technology Partners</h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8" id="partners-logos-container">
            {PARTNERS.map((partner) => (
              <div
                key={partner.slug}
                className="px-6 py-5 bg-white border-2 border-[#0C4D69]/20 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all hover:scale-105 duration-300 hover:border-[#0C4D69] w-36 shadow-sm"
              >
                <div className="flex items-center justify-center h-10 w-10 text-[#0C4D69]">
                  {getPartnerLogo(partner.slug)}
                </div>
                <span className="font-extrabold text-[#0C4D69] text-xs tracking-wider font-mono">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
