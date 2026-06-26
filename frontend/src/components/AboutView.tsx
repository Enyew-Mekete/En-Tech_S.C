import { IMAGE_CONFIG } from "../imageConfig";
import { PARTNERS, TEAM_MEMBERS } from "../data";
import { Eye, ShieldCheck, Target, Heart, Scale, Users, Flame, Star } from "lucide-react";

interface AboutViewProps {
  setView: (view: string, subTab?: string) => void;
}

export default function AboutView({ setView }: AboutViewProps) {
  return (
    <div id="about-company-view" className="py-16 space-y-20 selection:bg-cyan-400 text-slate-800 transition-colors duration-300 bg-white">
      
      {/* 1. Header Banner & Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">who we are</span>
          <h1 className="text-4xl sm:text-5xl font-black font-sans tracking-tight text-[#0C4D69]">
            About En-Tech S.C
          </h1>
          <div className="w-16 h-1 bg-[#0C4D69] mx-auto rounded-full" />
        </div>

        {/* BLUE-BORDERED BOX AS REQUISITIONED */}
        <div className="bg-white border-2 border-[#0C4D69] rounded-2xl p-6 sm:p-10 shadow-[0_4px_30px_rgba(12,77,105,0.05)] max-w-5xl mx-auto space-y-6">
          <p className="text-sm text-slate-700 leading-relaxed">
            <strong className="text-[#0C4D69] font-semibold text-lg block mb-2">En-Tech S.C</strong>
            En-Tech S.C is a dynamic and forward-thinking technology company established by <strong className="text-[#0C4D69] font-semibold">Mr. Enyew Mekete</strong>, a passionate and visionary professional with a strong background in Engineering and Technology, specializing in Computer Science. Founded with a clear mission to empower businesses and organizations through digital administration, En-Tech S.C stands as a trusted partner in providing cutting-edge IT and software solutions that drive operational excellence, efficiency, and growth.
          </p>

          <p className="text-sm text-slate-700 leading-relaxed border-t border-[#0C4D69]/20 pt-5">
            Our services cover a broad spectrum of the Information and Communication Technology (ICT) field, including Software Development i.e Web Design and Development, Website Design and Development, ERP System
, Graphics Design i.e Logo Design, YouTube Thumbnail, Brand Banner Design, IT consulting, System Administration, Network setup and maintenance, Database design and maintenance, and cloud-based solutions. Whether it's developing core business applications, implementing IT infrastructure, or providing ongoing technical support, En-Tech S.C ensures the highest standards of quality and performance.
          </p>

          <div className="bg-[#0C4D69] text-white p-4 rounded-xl text-center font-semibold text-xs tracking-wider border border-white/5 shadow-md">
            In essence, En-Tech S.C is more than a tech company; it is a catalyst for digital growth and innovation. Our vision is to empower organizations across Ethiopia and beyond to harness the full potential of technology creating smarter, faster, and more connected futures for all.
          </div>
        </div>
      </section>

      {/* 2. Timeline Slogan Section: We Build Progress through Technology */}
      <section className="bg-[#0C4D69]/5 py-20 border-t border-b border-[#0C4D69]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="rounded-2xl overflow-hidden border-2 border-[#0C4D69]/20 shadow-lg relative group">
            <img
              src={IMAGE_CONFIG.hqBuilding}
              alt="En-Tech Headquarters"
              referrerPolicy="no-referrer"
              className="w-full h-80 object-cover group-hover:scale-102 transition-transform duration-500"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-[#0C4D69]/95 text-white p-4 rounded-lg border border-white/10">
              <span className="block text-xs font-mono font-bold uppercase text-cyan-300">En-Tech S.C Head Quarter</span>
              <span className="block text-[11px] text-blue-100 mt-1">Our Hub of Technology Excellence / Our Hub of Innovation</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">our promise</span>
              <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#0C4D69]">
                We Build Progress through Technology
              </h2>
            </div>

            <p className="text-sm text-slate-755 leading-relaxed">
              En-Tech S.C is an Ethiopian Technology company established with the vision of building progress through technology. The company focuses on developing innovative digital solutions that address local and global challenges. By integrating creativity with advanced technology, the company aims to contribute to Ethiopia's digital transformation and sustainable development.
            </p>

            <blockquote className="border-l-4 border-[#0C4D69] pl-4 py-1 italic bg-[#0C4D69]/5 text-slate-800">
              <p className="text-lg font-bold font-sans text-[#0C4D69]">
                "እድገትን በቴክኖሎጂ እንገነባለን!"
              </p>
              <cite 
                className="block text-[11px] text-slate-600 mt-1 font-mono hover:underline cursor-pointer" 
                onClick={() => window.open("https://enyew-mekete.github.io/Enyew-Mekete-portfolio/", "_blank")}
              >
                - Mr. Enyew Mekete, Founder (Click to view portfolio)
              </cite>
            </blockquote>
          </div>

        </div>
      </section>

      {/* 3. Vision and Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Our Vision */}
        <div className="p-8 bg-white border-2 border-[#0C4D69]/20 rounded-2xl shadow-[0_4px_30px_rgba(12,77,105,0.02)] text-center flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-[#0C4D69]/10 text-[#0C4D69] rounded-2xl flex items-center justify-center border border-[#0C4D69]/20">
            <Eye className="w-8 h-8 text-[#0C4D69]" />
          </div>
          <h3 className="text-xl font-bold font-sans text-[#0C4D69]">Our Vision / ራዕያችን</h3>
          <p className="text-base text-slate-655 leading-relaxed max-w-sm text-justify">
            To be the leading catalyst for digital transformation in Ethiopia and beyond, empowering organizations to harness the full potential of technology for smarter, faster, and more connected futures.
          </p>
          <div className="text-[15px] italic text-slate-500 border-t border-slate-100 pt-3 font-sans leading-relaxed">
            በኢትዮጵያ እና ከዚያም በላይ ዲጂታል ትራንስፎርሜሽንን በመምራት የላቀ የቴክኖሎጂ አቅምን በመጠቀም ዘመናዊ፣ ፈጣን እና የተሳሰረ የነገን ምቹ ሁኔታ መፍጠር።
          </div>
        </div>

        {/* Our Mission */}
        <div className="p-8 bg-white border-2 border-[#0C4D69]/20 rounded-2xl shadow-[0_4px_30px_rgba(12,77,105,0.02)] text-center flex flex-col items-center space-y-4">
          <div className="w-14 h-14 bg-[#0C4D69]/10 text-[#0C4D69] rounded-2xl flex items-center justify-center border border-[#0C4D69]/20">
            <Target className="w-8 h-8 text-[#0C4D69]" />
          </div>
          <h3 className="text-xl font-bold font-sans text-[#0C4D69]">Our Mission / ተልዕኳችን</h3>
          <p className="text-base text-slate-655 leading-relaxed max-w-sm text-justify">
            To deliver innovative, reliable, and high-quality IT solutions that drive operational excellence, foster growth, and create sustainable value for businesses and communities through cutting-edge technology.
          </p>
          <div className="text-[15px] italic text-slate-500 border-t border-slate-100 pt-3 font-sans leading-relaxed">
            ለደንበኞቻችን እና ለማህበረሰቡ ዕድገትን፣ የላቀ አፈጻጸምን እና ዘላቂ እሴትን ለመፍጠር ፈጠራ ያላቸው፣ ጥራት ያላቸው እና እምነት የሚጣልባቸው የመረጃ ቴክኖሎጂ መፍትሄዎችን ማቅረብ።
          </div>
        </div>

      </section>

      {/* 4. OUR CORE VALUES */}
      <section className="bg-[#0C4D69] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-extrabold block">corporate guidelines</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">Our Core Values</h2>
            <div className="w-12 h-1 bg-white/40 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
            
            {/* Value 1: Excellence */}
            <div className="col-span-1 md:col-span-2 p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4 text-center flex flex-col items-center justify-center min-h-[260px] md:min-h-[300px]">
              <div className="text-cyan-300">
                <Star className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-base sm:text-lg font-sans tracking-tight">Excellence | ብቃት</h4>
              <p className="text-xs sm:text-sm text-blue-105 leading-relaxed font-sans">
                We are committed to delivering excellence in everything we do. From the quality of our solutions to the experience we provide our clients, we strive for the highest standards.
              </p>
            </div>

            {/* Value 2: Collaboration */}
            <div className="col-span-1 md:col-span-2 p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4 text-center flex flex-col items-center justify-center min-h-[260px] md:min-h-[300px]">
              <div className="text-cyan-300">
                <Users className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-base sm:text-lg font-sans tracking-tight">Collaboration | ትብብር</h4>
              <p className="text-xs sm:text-sm text-blue-105 leading-relaxed font-sans">
                We believe in the power of collaboration and teamwork. We foster a culture of working closely with our clients and partners to achieve mutual success and greater impact.
              </p>
            </div>

            {/* Value 3: Innovation */}
            <div className="col-span-1 md:col-span-2 p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4 text-center flex flex-col items-center justify-center min-h-[260px] md:min-h-[300px]">
              <div className="text-cyan-300">
                <Flame className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-base sm:text-lg font-sans tracking-tight">Innovation | ፈጠራ</h4>
              <p className="text-xs sm:text-sm text-blue-105 leading-relaxed font-sans">
                We embrace innovation and continuously explore new technologies, tools, and approaches to push the boundaries of what's possible and deliver cutting-edge solutions.
              </p>
            </div>

            {/* Value 4: Integrity */}
            <div className="col-span-1 md:col-start-2 md:col-span-2 p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4 text-center flex flex-col items-center justify-center min-h-[260px] md:min-h-[300px]">
              <div className="text-cyan-300">
                <Scale className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-base sm:text-lg font-sans tracking-tight">Integrity | ታማኝነት</h4>
              <p className="text-xs sm:text-sm text-blue-105 leading-relaxed font-sans">
                We uphold the highest ethical standards and prioritize integrity in all our interactions. We value transparency, honesty, and trust, building long-term relationships based on reliability.
              </p>
            </div>

            {/* Value 5: Customer Focus */}
            <div className="col-span-1 md:col-span-2 p-8 md:p-10 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 space-y-4 text-center flex flex-col items-center justify-center min-h-[260px] md:min-h-[300px]">
              <div className="text-cyan-300">
                <Heart className="w-10 h-10" />
              </div>
              <h4 className="font-bold text-base sm:text-lg font-sans tracking-tight">Customer Focus | ደንበኛ-ተኮር</h4>
              <p className="text-xs sm:text-sm text-blue-105 leading-relaxed font-sans">
                Our clients are at the center of everything we do. We listen to their needs, understand their challenges, and deliver solutions that meet and exceed expectations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Complete Management Team block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0C4D69] font-extrabold block">our leaders</span>
          <h2 className="text-3xl font-bold font-sans text-[#0C4D69]">The Management Team</h2>
          <div className="w-12 h-1 bg-[#0C4D69]/50 mx-auto rounded-full" />
        </div>

        {/* 1. Founder & CEO highlighted top portrait */}
        <div className="max-w-md mx-auto bg-white border-2 border-[#0C4D69] rounded-2xl overflow-hidden p-6 text-center space-y-4 hover:shadow-lg transition-all duration-350">
          <div 
            onClick={() => window.open("https://enyew-mekete.github.io/Enyew-Mekete-portfolio/", "_blank")}
            className="w-40 h-40 rounded-full overflow-hidden border-4 border-[#0C4D69] shadow-[0_0_15px_rgba(12,77,105,0.2)] bg-slate-100 mx-auto relative group cursor-pointer"
            title="Click to view portfolio"
          >
            <img
              src={IMAGE_CONFIG.founder}
              alt="Mr. Enyew Mekete"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div>
            <h3 
              onClick={() => window.open("https://enyew-mekete.github.io/Enyew-Mekete-portfolio/", "_blank")}
              className="text-xl font-bold font-sans text-[#0C4D69] hover:underline cursor-pointer"
            >
              Mr. Enyew Mekete
            </h3>
            <p className="text-[11px] font-mono text-[#0C4D69] tracking-wider mt-0.5 font-bold">Founder and CEO</p>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed font-sans">
            A passionate software tech leader holding deep qualifications in Engineering and Business systems. Drives the core Digital architecture at En-Tech S.C.
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => window.open("https://enyew-mekete.github.io/Enyew-Mekete-portfolio/", "_blank")}
              className="flex-1 py-2.5 bg-[#0C4D69] hover:bg-[#083447] text-white font-extrabold text-xs rounded-xl transition-all cursor-pointer shadow-md"
            >
              The Founder (Portfolio)
            </button>
            <button
              onClick={() => setView("about-founder")}
              className="flex-1 py-2.5 border-2 border-[#0C4D69] hover:bg-[#0C4D69]/5 text-[#0C4D69] font-bold text-xs rounded-xl transition-all cursor-pointer"
            >
              Read Executive Bio
            </button>
          </div>
        </div>

        {/* 2. Secondary management grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {TEAM_MEMBERS.map((member) => {
            let imgUrl = IMAGE_CONFIG.leadership.sosina;
            if (member.id === 2) imgUrl = IMAGE_CONFIG.leadership.abel;
            if (member.id === 3) imgUrl = IMAGE_CONFIG.leadership.meseret;
            if (member.id === 4) imgUrl = IMAGE_CONFIG.leadership.seifu;

            return (
              <div key={member.id} className="bg-white border border-slate-200 rounded-2xl p-5 text-center flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#0C4D69]/20 mx-auto bg-slate-100">
                    <img src={imgUrl} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-sans text-slate-900 truncate">{member.name}</h4>
                    <p className="text-[10px] text-[#0C4D69] uppercase tracking-wider font-mono font-bold mt-1">{member.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Dedicated Team Photo Segment */}
      <section className="bg-[#0C4D69]/5 py-20 border-t border-[#0C4D69]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          
          <div className="space-y-3">
            <h2 className="text-2xl font-bold font-sans text-[#0C4D69]">Our Dedicated Team</h2>
            <p className="text-xs text-slate-500 uppercase font-mono tracking-widest">Cohesive environment driving client achievements</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden border-2 border-[#0C4D69]/10 shadow-md bg-white">
              <img
                src={IMAGE_CONFIG.teamBanner1}
                alt="En-Tech Team meeting"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white font-semibold text-xs text-[#0C4D69] tracking-wider border-t border-[#0C4D69]/10">
                Co-Creative Engineering Sprint
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden border-2 border-[#0C4D69]/10 shadow-md bg-white">
              <img
                src={IMAGE_CONFIG.teamBanner2}
                alt="En-Tech Team brainstorming"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white font-semibold text-xs text-[#0C4D69] tracking-wider border-t border-[#0C4D69]/10">
                Operational Deployment & Monitoring Run
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
