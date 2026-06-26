import { useState, useEffect } from "react";
import { Check, ArrowRight, Sparkles, Layout, Palette, FileCode, Server, Search, ChevronRight, ExternalLink } from "lucide-react";
import { DETAILED_SERVICES_MAP } from "../data";

interface ServicesViewsProps {
  category: "web-dev" | "website-dev" | "graphics" | "erp-system";
  initialSubTab?: string;
  setView: (view: string, subTab?: string) => void;
  onOpenOrderModal: (srv?: any) => void;
}

export default function ServicesViews({ category, initialSubTab = "Logo Design", setView, onOpenOrderModal }: ServicesViewsProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeGraphicsSubTab, setActiveGraphicsSubTab] = useState(initialSubTab);

  // Sync Graphics Subtab choice when navigating from outside
  useEffect(() => {
    if (initialSubTab) {
      setActiveGraphicsSubTab(initialSubTab);
    }
  }, [initialSubTab, category]);

  // Extract the main service detail layout based on active category
  const detailedData = DETAILED_SERVICES_MAP[category];

  if (!detailedData) {
    return (
      <div className="py-24 text-center">
        <p className="text-slate-500">Service data not found.</p>
        <button onClick={() => setView("home")} className="mt-4 px-4 py-2 bg-[#0C4D69] text-white rounded-lg">
          Back to Home
        </button>
      </div>
    );
  }

  // Define database of other services for the search engine
  const searchIndex = [
    {
      id: "web-dev",
      route: "service-web",
      title: "Web Design & Development",
      shortDesc: "Complete architectural structuring, UI designing, and full-stack implementation of robust modern web properties using React & Tailwind.",
      image: "assets/image/services_web.jpg",
      keywords: "coding terminal backend api logic server vite custom ui"
    },
    {
      id: "website-dev",
      route: "service-website",
      title: "Website Design & Development",
      shortDesc: "Corporate showcase networks, responsive marketing portals, lead funnels, and fluid grid systems optimized for desktops & mobiles.",
      image: "assets/image/services_website.jpg",
      keywords: "showcase responsive layout lead capture contact geolocation map"
    },
    {
      id: "graphics",
      route: "service-graphics",
      title: "Graphics Design (All Assets)",
      shortDesc: "Premium vector corporate logo creation, high-click promotional banners, and click-optimized Youtube thumbnails.",
      image: "assets/image/services_graphics.jpg",
      keywords: "logo vectors digital banners youtube thumbnail brand guide ctr"
    },
    {
      id: "erp-system",
      route: "service-erp",
      title: "ERP System Consulting",
      shortDesc: "Comprehensive implementation, custom configuration, technical database migrations, and active support for Odoo and custom systems.",
      image: "assets/image/services_erp.jpg",
      keywords: "erp consulting odoo logistics database migration integration training"
    }
  ];

  // Filter other services based on user search query
  const filteredServices = searchIndex.filter(item => {
    // Exclude current service from search list
    if (item.id === category) return false;

    if (!searchQuery.trim()) return true; // Show all other services by default

    const query = searchQuery.toLowerCase();
    return (
      item.title.toLowerCase().includes(query) ||
      item.shortDesc.toLowerCase().includes(query) ||
      item.keywords.toLowerCase().includes(query)
    );
  });

  const handleServiceSelect = (route: string) => {
    setSearchQuery("");
    setView(route);
  };

  return (
    <div id="service-dedicated-template" className="py-12 bg-white text-[#0C4D69] transition-colors duration-300">
      <div className="w-[99.9%] mx-auto px-1 sm:px-2 lg:px-3">

        {/* --- MAIN WHITE CARD --- */}
        <div className="bg-white rounded-2xl border-2 border-[#0C4D69]/20 shadow-xl overflow-hidden p-6 sm:p-12 space-y-12 w-full">
          
          {/* 1. Centered Title Heading */}
          <div className="text-center space-y-2">
            <h1 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-[#0C4D69]">
              {detailedData.title}
            </h1>
            {/* SOLID CYAN/TEAL DIVIDER LINE */}
            <div className="w-full h-[2px] bg-[#0C4D69]/80 mt-4" />
          </div>

          {/* 2. Main Illustration Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-md border border-[#0C4D69]/10 h-64 sm:h-80">
            <img
              src={detailedData.bannerImage}
              alt={detailedData.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* 3. Executive Introduction */}
          <p className="text-sm text-[#0C4D69]/90 leading-relaxed text-justify font-sans">
            {detailedData.introText}
          </p>

          {/* 4. Our Approach Bullets Section */}
          <div className="space-y-6">
            <h2 className="text-lg sm:text-xl font-bold font-sans text-[#0C4D69]">
              {detailedData.approachTitle}
            </h2>

            <ul className="grid grid-cols-1 gap-4 font-sans text-xs">
              {detailedData.approachSteps.map((step, index) => (
                <li key={index} className="flex gap-3 items-start leading-relaxed text-[#0C4D69]/85">
                  <span className="inline-block mt-1 text-[#0C4D69] font-extrabold text-base shrink-0">•</span>
                  <div>
                    <strong className="text-[#0C4D69] font-bold">{step.title}:</strong>{" "}
                    <span>{step.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 5. Service In Action Alternating Grid Blocks */}
          <div className="space-y-8">
            <h2 className="text-lg sm:text-xl font-bold font-sans text-[#0C4D69] pb-2 border-b border-[#0C4D69]/20">
              {detailedData.actionTitle}
            </h2>

            <div className="space-y-12">
              {detailedData.actionBlocks.map((block, index) => {
                const isEven = index % 2 === 1;
                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isEven ? "md:flex-row-reverse" : "md:flex-row"} gap-6 items-center`}
                  >
                    {/* Left Column: Image with beautiful caption card inside a frame */}
                    <div className="w-full md:w-[45%] shrink-0">
                      <div className="bg-[#0C4D69]/5 p-2.5 rounded-2xl border border-[#0C4D69]/20 shadow-sm">
                        <div className="relative rounded-xl overflow-hidden aspect-[16/11] border border-[#0C4D69]/20">
                          <img
                            src={block.image}
                            alt={block.captionTitle}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                          {/* Dark Caption Card at the bottom of the image frame */}
                          <div className="absolute inset-x-0 bottom-0 bg-[#0C4D69]/95 text-white p-2.5 text-[10px] space-y-0.5 border-t border-[#0C4D69]/20 leading-tight">
                            <span className="block font-bold tracking-wide text-cyan-300">
                              {block.captionTitle}
                            </span>
                            <span className="block text-[8px] text-slate-100/90 font-sans truncate">
                              {block.captionDesc}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Detailed Scenario Description */}
                    <div className="flex-1 space-y-3 text-left">
                      <h3 className="text-base font-extrabold font-sans text-[#0C4D69] leading-snug">
                        {block.title}
                      </h3>
                      <p className="text-xs text-[#0C4D69]/85 leading-relaxed font-sans">
                        {block.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 5.5. Delivered Projects Showcase Section */}
          {detailedData.deliveredProjects && detailedData.deliveredProjects.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-[#0C4D69]/20">
              <div className="space-y-1">
                <h2 className="text-lg sm:text-xl font-bold font-sans text-[#0C4D69]">
                  Delivered Projects
                </h2>
                <p className="text-xs text-[#0C4D69]/70">
                  A curated collection of industry-proven solutions deployed successfully by En-Tech S.C.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {detailedData.deliveredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="group bg-white rounded-xl border-2 border-[#0C4D69]/20 overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
                  >
                    {/* Project Image Frame */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-slate-100 border-b border-[#0C4D69]/20">
                      <img
                        src={project.imageUrl}
                        alt={project.projectName}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                      {/* Company Name Badge over the Image */}
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-[#0C4D69]/90 text-white font-mono text-[9px] font-extrabold uppercase rounded shadow-sm tracking-wider">
                        {project.companyName}
                      </span>
                    </div>

                    {/* Project Info Block */}
                    <div className="p-4 flex-grow space-y-2">
                      <h4 className="text-sm font-extrabold text-[#0C4D69] group-hover:underline transition-colors">
                        {project.projectName}
                      </h4>
                      <p className="text-xs text-[#0C4D69]/80 leading-relaxed text-justify">
                        {project.label}
                      </p>
                    </div>

                    {/* Optional Link Button */}
                    {project.link && (
                      <div className="p-4 pt-0">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#0C4D69] hover:underline transition-colors uppercase tracking-wider"
                        >
                          Explore Project
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Action button to directly order this service */}
          <div className="p-6 bg-[#0C4D69]/5 rounded-xl border-2 border-[#0C4D69]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] font-mono text-[#0C4D69] uppercase tracking-widest font-extrabold">Ready to streamline?</span>
              <span className="block text-sm font-bold font-sans text-[#0C4D69] mt-0.5">Let En-Tech S.C craft custom {detailedData.title} assets today.</span>
            </div>
            <button
              onClick={() => onOpenOrderModal({ id: category, title: detailedData.title })}
              className="px-6 py-3 bg-[#0C4D69] text-white hover:bg-cyan-750 font-bold rounded-xl text-xs uppercase tracking-wider transition-all shadow-[0_4px_14px_rgba(12,77,105,0.25)] cursor-pointer shrink-0"
            >
              Apply to Order
            </button>
          </div>

          {/* 6. Back Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => setView("home")}
              className="px-8 py-2.5 border-2 border-[#0C4D69] text-[#0C4D69] hover:bg-[#0C4D69]/5 font-bold rounded-xl text-xs tracking-wider transition-all uppercase cursor-pointer"
            >
              Back to Services
            </button>
          </div>

        </div>

        {/* --- INLINE INTERACTIVE SEARCH FORM (Image & Description Format) --- */}
        <div className="mt-12 bg-white rounded-2xl border-2 border-[#0C4D69]/20 shadow-lg p-6 sm:p-10 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#0C4D69] flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              Discover Other Core Technical Solutions
            </h3>
            <p className="text-xs text-[#0C4D69]/70">
              Type keywords below to explore En-Tech S.C's other major pipelines. Select any result to transition directly to its full structured details.
            </p>
          </div>

          {/* Search Input field */}
          <div className="relative">
            <input
              type="text"
              placeholder="Query other systems (e.g. website, erp, graphics, custom logic)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-[#0C4D69]/5 border border-[#0C4D69]/20 rounded-xl text-xs text-[#0C4D69] focus:outline-none focus:ring-1 focus:ring-[#0C4D69] placeholder-[#0C4D69]/55"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-[#0C4D69]" />
          </div>

          {/* Search Result Grid matches "image and description" format exactly! */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            {filteredServices.length === 0 ? (
              <div className="col-span-1 md:col-span-3 text-center py-6 text-slate-400 text-xs font-mono">
                No matching expertises found for "{searchQuery}"
              </div>
            ) : (
              filteredServices.map((srv) => (
                <div
                  key={srv.id}
                  className="group bg-white border-2 border-[#0C4D69]/20 rounded-xl overflow-hidden flex flex-col justify-between hover:shadow-md transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60" />
                  </div>

                  <div className="p-4 space-y-2 flex-grow">
                    <span className="inline-block text-[8px] font-mono font-bold px-1.5 py-0.5 bg-[#0C4D69]/10 text-[#0C4D69] rounded uppercase">
                      Core Pipeline
                    </span>
                    <h4 className="text-xs font-bold font-sans text-[#0C4D69] group-hover:underline transition-colors line-clamp-1">
                      {srv.title}
                    </h4>
                    <p className="text-[10px] text-[#0C4D69]/80 leading-relaxed line-clamp-3">
                      {srv.shortDesc}
                    </p>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => handleServiceSelect(srv.route)}
                      className="w-full py-2 bg-white border border-[#0C4D69]/25 hover:bg-[#0C4D69] hover:text-white text-[#0C4D69] rounded-lg text-[10px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all cursor-pointer"
                    >
                      View Details
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
