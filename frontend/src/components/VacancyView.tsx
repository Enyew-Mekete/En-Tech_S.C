import { useState, useEffect } from "react";
import { Search, FileText, Calendar, MapPin, Briefcase, Clock, Award, DollarSign, X, CheckCircle2, FileCheck, Landmark, Copy, Check, ArrowLeft } from "lucide-react";

interface VacancyJob {
  id: string;
  title: string;
  vacancyNumber: string;
  postedDate: string;
  status: string;
  education: string;
  experience: string;
  placeOfWork: string;
  salary: string;
  positions: string;
  appliedDate: string;
  applicationId: string;
  startDate: string;
  endDate: string;
  rolesAndResp: string;
  jobPurpose: string;
}

const PAST_VACANCIES: VacancyJob[] = [
  {
    id: "past-1",
    title: "Junior Full Stack Developer",
    vacancyNumber: "EN-TE/EXT/0007/2026",
    postedDate: "2026-04-02T13:56:02.285Z",
    status: "Submitted",
    education: "Bachelor's Degree in Computer Science, Computer Engineering, Information System, Information Science, Software Engineering, Electrical Engineering or related field. CGPA 3.2 and above. Only 2025 graduates can apply. Age < 25. Exit Exam result ≥ 80.",
    experience: "Work experience is not required.",
    placeOfWork: "Head Office",
    salary: "As Per The Bank's Salary Scale & Attractive",
    positions: "1 positions",
    appliedDate: "April 2, 2026 at 04:56 PM",
    applicationId: "APP_1775138162270_72KH11",
    startDate: "March 31, 2026 at 03:00 AM",
    endDate: "April 6, 2026 at 03:00 AM (Passed)",
    rolesAndResp: "To design, build, and maintain both front-end and back-end components of web applications, ensuring functionality, performance, and user experience across the full technology stack.",
    jobPurpose: "To design, build, and maintain both front-end and back-end components of web applications, ensuring functionality, performance, and user experience across the full technology stack."
  },
  {
    id: "past-2",
    title: "Junior Business Analyst",
    vacancyNumber: "EN-TE/EXT/0008/2026",
    postedDate: "2026-04-02T14:15:22.112Z",
    status: "Submitted",
    education: "Bachelor's Degree in Computer Science, Computer Engineering, Information System, Information Science, Software Engineering, Electrical Engineering or related field. CGPA 3.2 and above. Only 2025 graduates can apply. Age < 25. Exit Exam result ≥ 80.",
    experience: "Work experience is not required.",
    placeOfWork: "Head Office",
    salary: "As Per The Bank's Salary Scale & Attractive",
    positions: "1 positions",
    appliedDate: "April 2, 2026 at 04:56 PM",
    applicationId: "APP_1775138162270_72KH11",
    startDate: "March 31, 2026 at 03:00 AM",
    endDate: "April 6, 2026 at 03:00 AM (Passed)",
    rolesAndResp: "To gather, analyze, and document business requirements, bridging the gap between stakeholders and technical teams to support effective solutions and process improvements.",
    jobPurpose: "To gather, analyze, and document business requirements, bridging the gap between stakeholders and technical teams to support effective solutions and process improvements."
  }
];

export default function VacancyView() {
  const [activeTab, setActiveTab] = useState("Past Vacancy");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJob, setSelectedJob] = useState<VacancyJob | null>(null);
  const [copiedNotification, setCopiedNotification] = useState<string | null>(null);

  const tabs = ["All", "New Vacancy", "Past Vacancy"];

  // Filter vacancies
  const filteredJobs = PAST_VACANCIES.filter((job) => {
    if (activeTab === "New Vacancy") return false;
    const matchesSearch = 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.education.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.vacancyNumber.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // Copy details helper
  const copyJobDetailsText = (job: VacancyJob) => {
    const copyText = `${job.title}
Application ID: ${job.applicationId}
Vacancy Number: ${job.vacancyNumber}
Salary: ${job.salary}
Start Date: ${job.startDate}
End Date: ${job.endDate}
Education: ${job.education}
Experience: ${job.experience}
Roles & Responsibilities: ${job.rolesAndResp}
Job Purpose: ${job.jobPurpose}`;

    navigator.clipboard.writeText(copyText)
      .then(() => {
        setCopiedNotification(job.title);
        setTimeout(() => setCopiedNotification(null), 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const handleViewDetail = (job: VacancyJob) => {
    copyJobDetailsText(job);
    setSelectedJob(job);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Cohesive visual styles matching About view style color rules perfectly:
  // - Outer page has bg-white background and #0C4D69 text
  // - Card containers have bg-white background and #0C4D69 text with #0C4D69/30 borders
  // - High-contrast highlight elements have bg-[#0C4D69] background and white text
  const pageBg = "bg-white";
  const pageText = "text-[#0C4D69]";
  const borderTheme = "border-[#0C4D69]/20";
  const cardBorderAndBg = "bg-white border-2 border-[#0C4D69]/20 rounded-2xl p-6 sm:p-8 shadow-[0_4px_30px_rgba(12,77,105,0.03)]";

  return (
    <div id="vacancy-view-container" className={`${pageBg} ${pageText} min-h-screen flex flex-col font-sans transition-colors duration-300 relative pb-20`}>
      
      {/* 1. Header Banner */}
      <div 
        id="vacancy-banner-gradient" 
        className={`w-full py-12 px-6 sm:px-12 md:px-24 flex items-center border-b ${borderTheme} bg-[#0C4D69]/5`}
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">career options</span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0C4D69] mt-1">
              {selectedJob ? `Vacancy Details` : `Career Centre`}
            </h1>
            <p className="text-xs text-[#0C4D69]/70 mt-1">
              {selectedJob ? `${selectedJob.title} Description` : `Explore current and past vacancy opportunities`}
            </p>
          </div>
          {selectedJob && (
            <button
              onClick={() => setSelectedJob(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold border-2 border-[#0C4D69] text-[#0C4D69] hover:bg-[#0C4D69]/5 bg-white transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Vacancies
            </button>
          )}
        </div>
      </div>

      {/* 2. Main content area conditionally rendering LIST or FULL PAGE DETAIL */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col">
        
        {selectedJob ? (
          /* ======================== FULL PAGE JOB DETAIL SCREEN ======================== */
          <div id="vacancy-full-detail-screen" className="space-y-8 animate-in fade-in slide-in-from-bottom-3 duration-300 max-w-5xl mx-auto w-full">
            
            {/* Top Back and Copy Button Row */}
            <div className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 border-b border-dashed ${borderTheme}`}>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#0C4D69]">
                    {selectedJob.title}
                  </h2>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded border-2 border-[#0C4D69]/30 bg-white text-[#0C4D69]">
                    {selectedJob.vacancyNumber}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-xs text-[#0C4D69]/80 pt-1">
                  <span className="flex items-center gap-1 font-bold">
                    <Landmark className="w-3.5 h-3.5" />
                    {selectedJob.positions}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 font-bold">
                    <MapPin className="w-3.5 h-3.5" />
                    {selectedJob.placeOfWork}
                  </span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-[#0C4D69] text-white text-[10px] font-black uppercase tracking-wider">
                    <FileCheck className="w-3 h-3" />
                    {selectedJob.status}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => copyJobDetailsText(selectedJob)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer border-2 border-[#0C4D69] bg-[#0C4D69] text-white hover:bg-[#083447]"
                >
                  <Copy className="w-4 h-4" />
                  Copy Details Text
                </button>

                <button
                  onClick={() => setSelectedJob(null)}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-black transition-all cursor-pointer border-2 border-[#0C4D69] bg-white text-[#0C4D69] hover:bg-[#0C4D69]/5"
                >
                  Close Detail
                </button>
              </div>
            </div>

            {/* Detailed Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left & Middle Column (2 cols): Core job requirements and timeline */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Application Timeline Segment */}
                <div className={`${cardBorderAndBg} space-y-4`}>
                  <h3 className="text-sm font-black uppercase tracking-widest flex items-center gap-1.5 text-[#0C4D69] border-b border-[#0C4D69]/20 pb-2">
                    <Clock className="w-4 h-4" />
                    Application Timeline
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Flow Steps list */}
                    <div className="p-4 rounded-xl border-2 border-[#0C4D69]/20 bg-[#0C4D69]/5 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-1 rounded-full shrink-0 text-[#0C4D69]">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#0C4D69]">Applied</p>
                          <p className="text-[11px] font-bold text-[#0C4D69]/80 mt-0.5">{selectedJob.appliedDate}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 pt-2 border-t border-[#0C4D69]/25">
                        <div className="p-1 rounded-full shrink-0 text-[#0C4D69]">
                          <FileCheck className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#0C4D69]">Submitted</p>
                          <p className="text-[11px] font-bold text-[#0C4D69]/80 mt-0.5">Last updated: {selectedJob.appliedDate}</p>
                        </div>
                      </div>
                    </div>

                    {/* Timeline box markers with white background / #0C4D69 text or vice-versa */}
                    <div className="space-y-3 flex flex-col justify-between">
                      {/* Highlighted box is #0C4D69, so its text MUST be white */}
                      <div className="p-4 rounded-xl bg-[#0C4D69] text-white border-2 border-[#0C4D69] shadow-md">
                        <span className="block text-[10px] font-black uppercase tracking-wider text-cyan-300">Application ID</span>
                        <span className="block font-mono text-xs font-black mt-1 break-all">
                          {selectedJob.applicationId}
                        </span>
                      </div>

                      <div className="p-4 rounded-xl bg-[#0C4D69] text-white border-2 border-[#0C4D69] shadow-md">
                        <span className="block text-[10px] font-black uppercase tracking-wider text-cyan-300">Vacancy Number</span>
                        <span className="block font-mono text-xs font-black mt-1">
                          {selectedJob.vacancyNumber}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Detailed Breakdown List (White card background with #0C4D69 text) */}
                <div className={`${cardBorderAndBg} space-y-6`}>
                  <h3 className="text-sm font-black uppercase tracking-widest border-b border-[#0C4D69]/20 pb-2">
                    Job Specifications
                  </h3>

                  <div className="space-y-6 text-[#0C4D69]">
                    {/* Salary */}
                    <div className="flex items-start gap-3">
                      <DollarSign className="w-4 h-4 shrink-0 mt-0.5 text-[#0C4D69]" />
                      <div className="text-xs">
                        <span className="block opacity-65 font-black uppercase tracking-wider text-[9px]">Salary Details</span>
                        <span className="font-bold mt-0.5 block text-lg">{selectedJob.salary}</span>
                      </div>
                    </div>

                    {/* Start Date */}
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 shrink-0 mt-0.5 text-[#0C4D69]" />
                      <div className="text-xs">
                        <span className="block opacity-65 font-black uppercase tracking-wider text-[9px]">Start Date</span>
                        <span className="font-bold mt-0.5 block">{selectedJob.startDate}</span>
                      </div>
                    </div>

                    {/* End Date */}
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 shrink-0 mt-0.5 text-red-600" />
                      <div className="text-xs">
                        <span className="block opacity-65 font-black uppercase tracking-wider text-[9px] text-red-600">End Date</span>
                        <span className="font-black mt-0.5 block text-red-600">{selectedJob.endDate}</span>
                      </div>
                    </div>

                    {/* Education */}
                    <div className="flex items-start gap-3">
                      <Award className="w-4 h-4 shrink-0 mt-0.5 text-[#0C4D69]" />
                      <div className="text-xs">
                        <span className="block opacity-65 font-black uppercase tracking-wider text-[9px]">Education Requirements</span>
                        <p className="leading-relaxed font-bold mt-0.5 text-justify">
                          {selectedJob.education}
                        </p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-start gap-3">
                      <Briefcase className="w-4 h-4 shrink-0 mt-0.5 text-[#0C4D69]" />
                      <div className="text-xs">
                        <span className="block opacity-65 font-black uppercase tracking-wider text-[9px]">Required Experience</span>
                        <span className="font-bold mt-0.5 block">{selectedJob.experience}</span>
                      </div>
                    </div>

                    {/* Roles & Responsibilities */}
                    <div className="flex items-start gap-3">
                      <FileText className="w-4 h-4 shrink-0 mt-0.5 text-[#0C4D69]" />
                      <div className="text-xs">
                        <span className="block opacity-65 font-black uppercase tracking-wider text-[9px]">Key Roles & Responsibilities</span>
                        <p className="leading-relaxed font-bold mt-0.5 text-justify">
                          {selectedJob.rolesAndResp}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Right Side Column (1 col): Job Purpose summary box. It uses #0C4D69 background, so its text MUST be white! */}
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-[#0C4D69] text-white border-2 border-[#0C4D69] shadow-lg space-y-4 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest border-b border-white/20 pb-2 text-cyan-300">
                      Job Purpose
                    </h3>
                    <p className="text-xs leading-relaxed text-justify font-bold mt-3 text-blue-50">
                      {selectedJob.jobPurpose}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-dashed border-white/20 opacity-80 text-[10px] font-mono leading-relaxed text-blue-200">
                    Please keep the Application ID and Vacancy Number noted down for further assessments. You can copy the complete textual data using the copy action at the top right of the page.
                  </div>
                </div>
              </div>

            </div>

          </div>
        ) : (
          /* ======================== STANDARD VACANCIES LIST SCREEN ======================== */
          <>
            {/* Filter and Sub-Navigation bar */}
            <div className={`border-b ${borderTheme} py-2 mb-6`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                
                {/* Sub-Tabs */}
                <div className="flex items-center space-x-2 text-xs text-[#0C4D69]">
                  <span className="font-black uppercase tracking-wider opacity-70">Blogs:</span>
                  <div className="flex items-center space-x-4">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`transition-all font-black cursor-pointer py-1 border-b-2 ${
                          activeTab === tab 
                            ? "text-[#0C4D69] border-[#0C4D69]" 
                            : "opacity-60 hover:opacity-100 border-transparent"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Search query input */}
                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-3 pr-9 py-2 rounded text-xs bg-white text-[#0C4D69] border-2 border-[#0C4D69]/35 focus:outline-none focus:ring-1 focus:ring-[#0C4D69] placeholder-[#0C4D69]/60"
                  />
                  <Search className="absolute right-3 top-2.5 w-3.5 h-3.5 opacity-60 text-[#0C4D69]" />
                </div>

              </div>
            </div>

            {activeTab === "New Vacancy" || (activeTab === "All" && filteredJobs.length === 0) ? (
              /* "No New or current Vacancy is available" State */
              <div className="flex-1 flex flex-col items-center justify-center py-24 text-center space-y-4">
                <div className="p-4 rounded-full border-2 border-[#0C4D69]/30 text-[#0C4D69] animate-pulse bg-[#0C4D69]/5">
                  <Briefcase className="w-10 h-10" />
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight max-w-2xl text-[#0C4D69]">
                  No New or current Vacancy is available.
                </h2>

                <p className="text-sm opacity-80 max-w-md mx-auto leading-relaxed text-[#0C4D69]">
                  En-Tech S.C is currently fully staffed. Please stay tuned and check back later for exciting future opportunities or submit your CV to our general registry on the contact page.
                </p>
              </div>
            ) : (
              /* "Past Vacancy" (or "All") List of Items */
              <div className="space-y-6 w-full max-w-5xl mx-auto">
                <div className={`flex items-center justify-between border-b ${borderTheme} pb-4`}>
                  <h2 className="text-xl font-black text-[#0C4D69]">
                    {activeTab} Listings
                  </h2>
                  <span className="text-xs font-mono font-bold text-[#0C4D69]/80">
                    Showing {filteredJobs.length} positions
                  </span>
                </div>

                {filteredJobs.length === 0 ? (
                  <div className="text-center py-12 text-sm opacity-60 text-[#0C4D69]">
                    No vacancies match your search parameters.
                  </div>
                ) : (
                  <div className="space-y-6">
                    {filteredJobs.map((job) => (
                      /* Job Card Container: White background-color, #0C4D69 text-color, and border outline #0C4D69 */
                      <div 
                        key={job.id} 
                        className="bg-white border-2 border-[#0C4D69] rounded-2xl p-6 sm:p-8 shadow-[0_4px_35px_rgba(12,77,105,0.06)] space-y-4 transition-all hover:shadow-[0_4px_35px_rgba(12,77,105,0.12)] relative"
                      >
                        {/* Row 1: Title & Badge on Left, View Detail Button on Right */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-xl font-black text-[#0C4D69]">
                              {job.title}
                            </h3>
                            <span className="text-[10px] px-2.5 py-0.5 rounded border-2 border-[#0C4D69]/30 bg-[#0C4D69]/5 text-[#0C4D69] font-mono font-black">
                              {job.vacancyNumber}
                            </span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            {/* Copy Button */}
                            <button 
                              onClick={() => copyJobDetailsText(job)}
                              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-black transition-all cursor-pointer border-2 border-[#0C4D69] bg-white text-[#0C4D69] hover:bg-[#0C4D69]/5"
                              title="Copy Vacancy Details"
                            >
                              <Copy className="w-3.5 h-3.5" />
                              Copy
                            </button>

                            {/* View Detail Button - background is #0C4D69, so text must be white */}
                            <button 
                              onClick={() => handleViewDetail(job)}
                              className="inline-flex items-center gap-1.5 px-4.5 py-2 rounded-lg text-xs font-black transition-all cursor-pointer border-2 border-[#0C4D69] bg-[#0C4D69] text-white hover:bg-[#083447]"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              View Detail
                            </button>
                          </div>
                        </div>
                        
                        {/* Row 2: Date & Status */}
                        <div className="flex items-center gap-4 text-xs text-[#0C4D69]/80 font-semibold">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-[#0C4D69]" />
                            {job.postedDate}
                          </span>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#0C4D69] text-white font-black text-[9px] uppercase tracking-wider">
                            <FileCheck className="w-3.5 h-3.5" />
                            {job.status}
                          </span>
                        </div>

                        {/* Row 3: Education/Qualification text - uses white background / #0C4D69 text */}
                        <div className="flex items-start gap-2.5 text-xs leading-relaxed p-4 rounded-xl border border-[#0C4D69]/25 bg-[#0C4D69]/5 text-[#0C4D69]">
                          <Award className="w-4 h-4 shrink-0 mt-0.5 text-[#0C4D69]" />
                          <span className="font-medium text-justify">{job.education}</span>
                        </div>

                        {/* Row 4: Key Info Fields */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3.5 border-t border-[#0C4D69]/20 text-xs text-[#0C4D69]">
                          <div>
                            <span className="block opacity-60 font-black uppercase tracking-wider text-[9px]">Experience:</span>
                            <span className="font-black mt-1 block">{job.experience}</span>
                          </div>
                          <div>
                            <span className="block opacity-60 font-black uppercase tracking-wider text-[9px]">Place of Work:</span>
                            <span className="font-black mt-1 block">{job.placeOfWork}</span>
                          </div>
                          <div>
                            <span className="block opacity-60 font-black uppercase tracking-wider text-[9px]">Salary:</span>
                            <span className="font-black mt-1 block text-sm">{job.salary}</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Toast Notification Banner for Copied Clipboard Feedback. Background is #0C4D69, so text is white! */}
      {copiedNotification && (
        <div 
          id="toast-copied-notification" 
          className="fixed bottom-8 right-8 flex items-center gap-2.5 px-5 py-3 rounded-xl shadow-2xl z-[2000] border border-white/20 bg-[#0C4D69] text-white font-sans animate-in fade-in slide-in-from-bottom-2 duration-300"
        >
          <Check className="w-4 h-4 text-cyan-300" />
          <span className="text-xs font-bold">Vacancy Details Copied to Clipboard!</span>
        </div>
      )}

    </div>
  );
}
