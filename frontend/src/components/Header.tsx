import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Sun, Moon, Menu, X, ChevronRight, Server, Phone, Users, ShieldAlert, ChevronDown } from "lucide-react";
import { IMAGE_CONFIG } from "../imageConfig";
import { SERVICES_DATA, TEAM_MEMBERS } from "../data";
import { ServiceDetail } from "../types";

interface HeaderProps {
  currentView: string;
  setView: (view: string, subTab?: string) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenOrderModal: (srv?: ServiceDetail) => void;
}

const CustomDropdownCaret = ({ isOpen, active }: { isOpen: boolean; active?: boolean }) => (
  <svg 
    viewBox="0 0 100 80" 
    className={`w-3.5 h-3 transition-transform duration-200 inline-block ml-1.5 shrink-0 ${isOpen ? "rotate-180" : ""}`}
  >
    <polygon 
      points="10,15 90,15 50,75" 
      fill="#e6f1f5" 
      stroke="#0C4D69" 
      strokeWidth="16" 
      strokeLinejoin="round" 
    />
  </svg>
);

export default function Header({ currentView, setView, darkMode, setDarkMode, onOpenOrderModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [mobileCareersOpen, setMobileCareersOpen] = useState(true);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [graphicsSubMenuOpen, setGraphicsSubMenuOpen] = useState(false);
  const [vacancyDropdownOpen, setVacancyDropdownOpen] = useState(false);

  // Search Engine state
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<{ type: string; title: string; route: string; subTab?: string; desc: string }[]>([]);
  const [searchFocused, setSearchFocused] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on clicking outside
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const vacancyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (searchRef.current && !searchRef.current.contains(target)) {
        setSearchFocused(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(target)) {
        setAboutDropdownOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(target)) {
        setServicesDropdownOpen(false);
        setGraphicsSubMenuOpen(false);
      }
      if (vacancyRef.current && !vacancyRef.current.contains(target)) {
        setVacancyDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Simple real-time search match finder
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results: typeof searchResults = [];

    // Search static views
    if ("home".includes(query) || "main page".includes(query)) {
      results.push({ type: "Page", title: "Home Dashboard", route: "home", desc: "En-Tech S.C home and main metrics" });
    }
    if ("about content sc company mission vision values".split(" ").some(w => query.includes(w))) {
      results.push({ type: "Page", title: "About En-Tech S.C", route: "about-company", desc: "Corporate vision & core values" });
    }
    if ("founder executive principal enyew mekete ceo".split(" ").some(w => query.includes(w))) {
      results.push({ type: "Page", title: "About The Founder & CEO", route: "about-founder", desc: "Mr. Enyew Mekete's statements" });
    }
    if ("contact map headquarters phone location support message email".split(" ").some(w => query.includes(w))) {
      results.push({ type: "Page", title: "Contact & Location", route: "contact", desc: "Send direct correspondence" });
    }

    // Search services
    SERVICES_DATA.forEach(srv => {
      if (srv.title.toLowerCase().includes(query) || srv.shortDesc.toLowerCase().includes(query)) {
        let r = "service-web";
        let sub: string | undefined;
        if (srv.category === "website-dev") r = "service-website";
        if (srv.category === "graphics") {
          r = "service-graphics";
          sub = srv.subCategory;
        }

        results.push({
          type: "Expertise",
          title: srv.title,
          route: r,
          subTab: sub,
          desc: srv.shortDesc
        });
      }
    });

    // Search management/team
    TEAM_MEMBERS.forEach(member => {
      if (member.name.toLowerCase().includes(query) || member.role.toLowerCase().includes(query)) {
        results.push({
          type: "Team Member",
          title: member.name,
          route: "about-company",
          desc: member.role
        });
      }
    });

    setSearchResults(results.slice(0, 5));
  }, [searchQuery]);

  const toggleTheme = () => {
    const newVal = !darkMode;
    setDarkMode(newVal);
    localStorage.setItem("theme-selection", newVal ? "dark" : "light");
    if (newVal) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const handleSearchResultClick = (result: any) => {
    setView(result.route, result.subTab);
    setSearchQuery("");
    setSearchFocused(false);
    setMobileMenuOpen(false);
  };

  return (
    <header id="main-navigation-header" className="sticky top-0 z-40 w-full bg-[#0C4D69]/95 backdrop-blur-md border-b border-white/10 shadow-lg select-none text-white transition-all duration-300">
      <div className="w-full max-w-[98%] mx-auto px-1 md:px-2">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Corner: Interactive Flexible Logo */}
          <div className="flex-shrink-0 flex items-center">
            <button
              onClick={() => setView("home")}
              className="flex items-center gap-3 group focus:outline-none cursor-pointer"
              id="header-logo-container-btn"
            >
              {IMAGE_CONFIG.logoSVGAlternative ? (
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 shadow-[0_0_12px_rgba(34,211,238,0.25)] group-hover:rotate-6 transition-transform duration-300">
                  <span className="text-slate-950 font-black text-xl tracking-tight">ET</span>
                </div>
              ) : (
                <img
                  src={IMAGE_CONFIG.logoDark}
                  alt="En-Tech S.C Logo"
                  className="w-10 h-10 object-contain rounded-lg shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                />
              )}
              <div className="text-left">
                <span className="block font-bold text-lg tracking-wider text-white select-none">
                  EN-TECH <span className="text-cyan-400 font-extrabold">S.C</span>
                </span>
                <span className="block text-[9px] text-[#22d3ee]/80 uppercase tracking-widest font-mono">
                  Partnering for Excellence
                </span>
              </div>
            </button>
          </div>

          {/* Right Grouped Navigation and Actions Container */}
          <div className="flex items-center space-x-4 ml-auto">
            
            {/* Center-Right Desk Menu */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Main navigation">
              {/* Home Link */}
              <button
                onClick={() => {
                  setView("home");
                  setAboutDropdownOpen(false);
                  setServicesDropdownOpen(false);
                  setVacancyDropdownOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  currentView === "home" ? "bg-white/10 text-cyan-400 font-bold border-b border-cyan-400/30" : "hover:bg-white/5 text-slate-100 hover:text-white"
                }`}
                id="nav-link-home"
              >
                Home
              </button>

              {/* About Dropdown */}
              <div
                ref={aboutRef}
                className="relative"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setAboutDropdownOpen(!aboutDropdownOpen);
                    setServicesDropdownOpen(false);
                    setVacancyDropdownOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    aboutDropdownOpen || currentView.startsWith("about") ? "bg-white/10 text-cyan-400 font-bold" : "hover:bg-white/5 text-slate-100"
                  }`}
                  id="nav-dropdown-about-trigger"
                  aria-haspopup="true"
                  aria-expanded={aboutDropdownOpen}
                >
                  About
                  <CustomDropdownCaret isOpen={aboutDropdownOpen} active={currentView.startsWith("about")} />
                </button>

                {aboutDropdownOpen && (
                  <div
                    id="about-menu-dropdown"
                    className="absolute left-0 mt-1 w-52 bg-[#0C4D69]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <button
                      onClick={() => { setView("about-company"); setAboutDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors cursor-pointer"
                      id="nav-sub-about-company"
                    >
                      En-Tech S.C
                    </button>
                    <button
                      onClick={() => { setView("about-founder"); setAboutDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors cursor-pointer"
                      id="nav-sub-about-founder"
                    >
                      The Founder
                    </button>
                  </div>
                )}
              </div>

              {/* Services Dropdown */}
              <div
                ref={servicesRef}
                className="relative"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    setAboutDropdownOpen(false);
                    setVacancyDropdownOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    servicesDropdownOpen || currentView.startsWith("service") ? "bg-white/10 text-cyan-400 font-bold" : "hover:bg-white/5 text-slate-100"
                  }`}
                  id="nav-dropdown-services-trigger"
                  aria-haspopup="true"
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <CustomDropdownCaret isOpen={servicesDropdownOpen} active={currentView.startsWith("service")} />
                </button>

                {servicesDropdownOpen && (
                  <div
                    id="services-menu-dropdown"
                    className="absolute left-0 mt-1 w-64 bg-[#0C4D69]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <button
                      onClick={() => { setView("service-web"); setServicesDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors flex items-center justify-between cursor-pointer"
                      id="nav-sub-service-web"
                    >
                      <span>1. Web Design & Development</span>
                    </button>
                    <button
                      onClick={() => { setView("service-website"); setServicesDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors flex items-center justify-between cursor-pointer"
                      id="nav-sub-service-website"
                    >
                      <span>2. Website Design & Development</span>
                    </button>

                    <div
                      className="relative"
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setGraphicsSubMenuOpen(!graphicsSubMenuOpen);
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors flex items-center justify-between cursor-pointer"
                        id="nav-sub-service-graphics-trigger"
                      >
                        <span>3. Graphics Design</span>
                        <ChevronRight className={`w-4 h-4 text-blue-300 transition-transform ${graphicsSubMenuOpen ? "rotate-90" : ""}`} />
                      </button>

                      {/* Cascading SubDropdown for Graphics Design */}
                      {graphicsSubMenuOpen && (
                        <div
                          id="graphics-nested-menu"
                          className="absolute left-full top-0 mt-0 ml-1 w-52 bg-[#0C4D69]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl py-2 animate-in fade-in slide-in-from-left-1 duration-150"
                        >
                          <button
                            onClick={() => {
                              setView("service-graphics", "Logo Design");
                              setServicesDropdownOpen(false);
                              setGraphicsSubMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            id="nav-sub-graphics-logo"
                          >
                            Logo Design
                          </button>
                          <button
                            onClick={() => {
                              setView("service-graphics", "Banner");
                              setServicesDropdownOpen(false);
                              setGraphicsSubMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            id="nav-sub-graphics-banner"
                          >
                            Banner Design
                          </button>
                          <button
                            onClick={() => {
                              setView("service-graphics", "Youtube Thumbnail");
                              setServicesDropdownOpen(false);
                              setGraphicsSubMenuOpen(false);
                            }}
                            className="w-full text-left px-4 py-2 text-xs hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                            id="nav-sub-graphics-thumb"
                          >
                            Youtube Thumbnail
                          </button>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => { setView("service-erp"); setServicesDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors flex items-center justify-between cursor-pointer"
                      id="nav-sub-service-erp"
                    >
                      <span>4. ERP System</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Contact */}
              <button
                onClick={() => {
                  setView("contact");
                  setAboutDropdownOpen(false);
                  setServicesDropdownOpen(false);
                  setVacancyDropdownOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  currentView === "contact" ? "bg-white/10 text-cyan-400 font-bold border-b border-cyan-400/30" : "hover:bg-white/5 text-slate-100 hover:text-white"
                }`}
                id="nav-link-contact"
              >
                Contact
              </button>

              {/* Vacancy Dropdown */}
              <div
                ref={vacancyRef}
                className="relative"
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setVacancyDropdownOpen(!vacancyDropdownOpen);
                    setAboutDropdownOpen(false);
                    setServicesDropdownOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                    vacancyDropdownOpen || currentView === "vacancy" ? "bg-white/10 text-cyan-400 font-bold" : "hover:bg-white/5 text-slate-100"
                  }`}
                  id="nav-dropdown-vacancy-trigger"
                  aria-haspopup="true"
                  aria-expanded={vacancyDropdownOpen}
                >
                  Vacancy
                  <CustomDropdownCaret isOpen={vacancyDropdownOpen} active={currentView === "vacancy"} />
                </button>

                {vacancyDropdownOpen && (
                  <div
                    id="vacancy-menu-dropdown"
                    className="absolute left-0 mt-1 w-48 bg-[#0C4D69]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <button
                      onClick={() => { setView("vacancy"); setVacancyDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-white/10 text-slate-200 hover:text-white transition-colors flex items-center justify-between cursor-pointer"
                      id="nav-sub-vacancy-new"
                    >
                      <span>New Vacancy</span>
                    </button>
                  </div>
                )}
              </div>
            </nav>

            {/* Right Corner Buttons: Search, Theme, Order CTA, & Mobile Menu Trigger */}
            <div className="flex items-center space-x-3">
              
              {/* Search Engine Input Container */}
              <div ref={searchRef} className="relative hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Query services / team..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    className="w-48 xl:w-56 pl-9 pr-4 py-2 bg-[#041154]/40 border border-white/10 rounded-full text-xs text-white placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:w-64 transition-all duration-300"
                    id="desktop-search-input"
                  />
                  <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-blue-300 pointer-events-none" />
                </div>

                {/* Search Floating Overlay */}
                {searchFocused && resultsForQuery(searchResults, searchQuery, handleSearchResultClick)}
              </div>

              {/* Header Direct Order CTA */}
              <button
                onClick={() => onOpenOrderModal()}
                className="hidden sm:inline-block px-5 py-2 bg-white hover:bg-[#e6f1f5] text-[#0C4D69] font-black rounded-lg text-xs tracking-wider uppercase transition-all shadow-md transform hover:scale-[1.02] active:scale-95 cursor-pointer"
                id="nav-cta-order-now"
              >
                Order Now
              </button>

              {/* Day / Night Theme Switch with on/off slider placed on the right side of Order Now button */}
              <div className="hidden sm:flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 ml-2" id="theme-toggle-wrapper">
                <span className="text-[11px] font-bold text-white tracking-wide">Night Mode:</span>
                <button
                  onClick={toggleTheme}
                  className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    darkMode ? "bg-cyan-500" : "bg-slate-400"
                  }`}
                  id="theme-toggle-switch-btn"
                >
                  <span className={`absolute text-[8px] font-bold text-white transition-opacity ${darkMode ? "left-1.5 opacity-100" : "left-1.5 opacity-0"}`}>ON</span>
                  <span className={`absolute text-[8px] font-bold text-white transition-opacity ${darkMode ? "right-1.5 opacity-0" : "right-1.5 opacity-100"}`}>OFF</span>
                  <div
                    className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                      darkMode ? "translate-x-6" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Mobile Menu Icon Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-100 hover:text-white rounded-xl hover:bg-white/5 cursor-pointer"
                aria-label="Toggle navigation parameters"
                id="mobile-drawer-hamburger"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* --- Mobile Menu Drawer Panel --- */}
      {mobileMenuOpen && (
        <div id="mobile-navigation-drawer" className="lg:hidden border-t border-white/10 bg-[#0C4D69]/95 backdrop-blur-md px-4 pt-4 pb-6 space-y-4 animate-in fade-in duration-300 select-none">
          
          {/* Mobile search bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services, team, views..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setSearchFocused(true);
              }}
              className="w-full px-10 py-2.5 bg-[#041154]/40 border border-white/10 rounded-xl text-sm placeholder-blue-300 focus:outline-none focus:ring-1 focus:ring-cyan-400"
              id="mobile-search-input"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-blue-300" />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(""); setSearchResults([]); }}
                className="absolute right-3 top-3 text-blue-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            
            {searchQuery && (
              <div className="mt-2 bg-[#041154] border border-white/10 rounded-xl p-2 space-y-1">
                {searchResults.length === 0 ? (
                  <p className="text-xs text-slate-400 p-2 text-center">No results match "{searchQuery}"</p>
                ) : (
                  searchResults.map((res, i) => (
                    <button
                      key={i}
                      onClick={() => handleSearchResultClick(res)}
                      className="w-full text-left p-2 hover:bg-white/5 rounded-lg flex items-center justify-between text-xs text-white"
                    >
                      <div>
                        <div className="font-bold flex items-center gap-1.5">
                          <span className="bg-cyan-400 text-[#041154] font-mono scale-90 px-1.5 rounded uppercase font-bold text-[8px]">
                            {res.type}
                          </span>
                          {res.title}
                        </div>
                        <div className="text-[10px] text-slate-300 line-clamp-1">{res.desc}</div>
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  ))
                )}
              </div>
            )}
          </div>

          <div className="space-y-1">
            <button
              onClick={() => { setView("home"); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold ${currentView === "home" ? "bg-white/10 text-cyan-400 font-bold" : "text-slate-100"}`}
            >
              Home
            </button>

            {/* About parameters */}
            <div className="space-y-1 pl-4 pt-1 border-l-2 border-white/10">
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] uppercase font-mono tracking-widest text-[#22d3ee] hover:opacity-80 transition-opacity"
              >
                <span>About Section</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileAboutOpen && (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      show: {
                        opacity: 1,
                        height: "auto",
                        transition: { staggerChildren: 0.1, height: { duration: 0.2 } }
                      }
                    }}
                    className="space-y-1 overflow-hidden"
                  >
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { opacity: 1, x: 0 }
                      }}
                      onClick={() => { setView("about-company"); setMobileMenuOpen(false); }}
                      className={`w-full text-left px-2 py-2 rounded-lg text-xs block ${currentView === "about-company" ? "text-cyan-400 font-bold" : "text-slate-300"}`}
                    >
                      - En-Tech S.C
                    </motion.button>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { opacity: 1, x: 0 }
                      }}
                      onClick={() => { setView("about-founder"); setMobileMenuOpen(false); }}
                      className={`w-full text-left px-2 py-2 rounded-lg text-xs block ${currentView === "about-founder" ? "text-cyan-400 font-bold" : "text-slate-300"}`}
                    >
                      - Mr. Enyew Mekete (Founder)
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Services parameters */}
            <div className="space-y-1 pl-4 pt-2 border-l-2 border-white/10">
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] uppercase font-mono tracking-widest text-[#22d3ee] hover:opacity-80 transition-opacity"
              >
                <span>Services Channels</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileServicesOpen && (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      show: {
                        opacity: 1,
                        height: "auto",
                        transition: { staggerChildren: 0.08, height: { duration: 0.2 } }
                      }
                    }}
                    className="space-y-1 overflow-hidden"
                  >
                    {[
                      { view: "service-web", label: "1. Web Design & Development" },
                      { view: "service-website", label: "2. Website Design & Development" },
                      { view: "service-graphics", label: "3. Graphics Design (All Categories)" },
                      { view: "service-erp", label: "4. ERP System" }
                    ].map((srv) => (
                      <motion.button
                        key={srv.view}
                        variants={{
                          hidden: { opacity: 0, x: -10 },
                          show: { opacity: 1, x: 0 }
                        }}
                        onClick={() => { setView(srv.view); setMobileMenuOpen(false); }}
                        className={`w-full text-left px-2 py-2 rounded-lg text-xs block ${currentView === srv.view ? "text-cyan-400 font-bold" : "text-slate-300 hover:text-white"}`}
                      >
                        {srv.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => { setView("contact"); setMobileMenuOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold block ${currentView === "contact" ? "bg-white/10 text-cyan-400 font-bold" : "text-slate-100"}`}
            >
              Contact Us
            </button>

            {/* Vacancy Career Section */}
            <div className="space-y-1 pl-4 pt-2 border-l-2 border-white/10">
              <button
                onClick={() => setMobileCareersOpen(!mobileCareersOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-[10px] uppercase font-mono tracking-widest text-[#22d3ee] hover:opacity-80 transition-opacity"
              >
                <span>Career Channels</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileCareersOpen ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {mobileCareersOpen && (
                  <motion.div
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    variants={{
                      hidden: { opacity: 0, height: 0 },
                      show: {
                        opacity: 1,
                        height: "auto",
                        transition: { staggerChildren: 0.1, height: { duration: 0.2 } }
                      }
                    }}
                    className="space-y-1 overflow-hidden"
                  >
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        show: { opacity: 1, x: 0 }
                      }}
                      onClick={() => { setView("vacancy"); setMobileMenuOpen(false); }}
                      className={`w-full text-left px-2 py-2 rounded-lg text-xs block ${currentView === "vacancy" ? "text-cyan-400 font-bold" : "text-slate-300"}`}
                    >
                      - New Vacancy
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Day/Night Theme Switch */}
          <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10" id="theme-toggle-wrapper-mobile">
            <span className="text-xs font-bold text-white">Night Mode:</span>
            <button
              onClick={toggleTheme}
              className={`relative w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                darkMode ? "bg-cyan-500" : "bg-slate-400"
              }`}
              id="theme-toggle-switch-btn-mobile"
            >
              <span className={`absolute text-[8px] font-bold text-white transition-opacity ${darkMode ? "left-1.5 opacity-100" : "left-1.5 opacity-0"}`}>ON</span>
              <span className={`absolute text-[8px] font-bold text-white transition-opacity ${darkMode ? "right-1.5 opacity-0" : "right-1.5 opacity-100"}`}>OFF</span>
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
                  darkMode ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          <button
            onClick={() => { onOpenOrderModal(); setMobileMenuOpen(false); }}
            className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold rounded-xl text-center text-sm shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          >
            APPLY TO ORDER
          </button>
        </div>
      )}
    </header>
  );
}

function resultsForQuery(
  searchResults: any[],
  searchQuery: string,
  handleSearchResultClick: (res: any) => void
) {
  if (!searchQuery.trim()) return null;
  return (
    <div
      id="search-overlay-float"
      className="absolute right-0 mt-2 w-72 bg-[#0C4D69]/95 backdrop-blur-md border border-white/15 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150 text-white"
    >
      <div className="px-3 py-1.5 border-b border-white/10 mb-1 flex items-center justify-between">
        <span className="text-[10px] text-[#22d3ee] uppercase font-mono tracking-widest">Search Engine Results</span>
        <span className="text-[9px] bg-[#041154] text-cyan-300 px-1.5 py-0.5 rounded-full font-mono border border-cyan-400/20">{searchResults.length} found</span>
      </div>
      {searchResults.length === 0 ? (
        <div className="px-4 py-3 text-xs text-slate-400 text-center flex flex-col items-center gap-1">
          <ShieldAlert className="w-5 h-5 text-cyan-400" />
          <span>No matches for "{searchQuery}"</span>
        </div>
      ) : (
        <div className="space-y-0.5 max-h-64 overflow-y-auto">
          {searchResults.map((result, i) => (
            <button
              key={i}
              onClick={() => handleSearchResultClick(result)}
              className="w-full text-left px-3 py-2 text-xs hover:bg-white/10 transition-colors flex items-start gap-2 border-b border-blue-950/20 last:border-0 cursor-pointer"
            >
              {result.type === "Page" ? (
                <Server className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              ) : result.type === "Team Member" ? (
                <Users className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
              )}
              <div className="min-w-0">
                <span className="block font-bold text-slate-100 truncate">{result.title}</span>
                <span className="block text-[10px] text-blue-200 line-clamp-1">{result.desc}</span>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
