import React from 'react';
import { 
    IconUserCheck, 
    IconBooks, 
    IconSchool, 
    IconCertificate, 
    IconUsers, 
    IconClock, 
    IconAward,
    IconSparkles,
    IconCheck
} from '@tabler/icons-react';

import AcademyBanner from '../assets/academy1.png'; 

const Academy = () => {
  
  // Classes Offered Data
  const programs = [
    { 
      title: "1st to 8th Standard", 
      desc: "Strong conceptual base building for primary and middle school students across all subjects.",
      badge: "Foundational Classes"
    },
    { 
      title: "9th & Matric (Science & Arts)", 
      desc: "Comprehensive board exam preparation with specialized science and arts faculty under Karachi & Ziauddin boards.",
      badge: "Board Exam Focus"
    },
    { 
      title: "1st Year & 2nd Year (Intermediate)", 
      desc: "Pre-Engineering, Pre-Medical, Commerce, and Arts groups with advanced coaching and past-paper sessions.",
      badge: "College Level"
    }
  ];

  // Coaching Modes
  const modes = [
    {
      title: "Individual Tuitions",
      subtitle: "One-on-One Personalized Attention",
      desc: "Tailored specifically for students who need individual focus, customized pacing, and targeted help in specific subjects.",
      icon: IconUserCheck
    },
    {
      title: "Group Classes",
      subtitle: "Interactive & Competitive Environment",
      desc: "Structured batch classes with peer interaction, regular tests, and comprehensive syllabus coverage.",
      icon: IconUsers
    }
  ];

  // Key Highlights
  const highlights = [
    "Well-Known & Highly Experienced Subject Specialists",
    "Individual Focus for Weak Students",
    "Regular Weekly & Monthly Test Sessions",
    "Complete Board Exam Pattern Preparation",
    "Flexible Timings for School & College Students",
    "Conducive & Disciplined Environment"
  ];

  return (
    <div className="font-sans bg-gray-50 text-[#062B66] overflow-x-hidden">
      
      {/* --- Hero Header Section with Centered Heading --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -left-20 sm:-left-30 top-1/4 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-blue-100 blur-3xl animate-pulse" />
          <div className="absolute -right-20 sm:-right-30 bottom-5 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-orange-100 blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center mb-8 sm:mb-12 px-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#062B66]/15 bg-white px-3.5 py-1.5 shadow-sm backdrop-blur-md mb-4 sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-[#EC7727] animate-ping shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#062B66]">
              SR Coaching & Training Academy
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#062B66] mb-4 sm:mb-5 leading-tight">
            Excellence in <span className="text-[#EC7727]">Tuitions & Coaching</span>
          </h1>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-normal px-2">
            Individual Tuitions & Regular Classes from 1st Standard to Matric & 1st/2nd Year Intermediate with Karachi's finest subject specialists.
          </p>
        </div>

        {/* --- academy1.png Banner Image placed below heading --- */}
        <div className="relative mx-auto max-w-6xl px-2 sm:px-4">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-slate-900">
            <img 
              src={AcademyBanner} 
              alt="SR Academy Campus" 
              className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-contain object-center rounded-2xl sm:rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* --- Main Content Wrapper with proper side paddings --- */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24 space-y-16 sm:space-y-24">

        {/* --- Learning Modes: Individual Tuitions vs Group Classes --- */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto px-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest mb-2">
              <IconSparkles size={13} className="text-[#EC7727]" /> Flexible Learning Options
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062B66] tracking-tight">Individual Tuitions & Regular Classes</h2>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-lg">We understand that every student learns differently. Choose between dedicated one-on-one sessions or dynamic group classes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {modes.map((mode, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 flex flex-col justify-between hover:border-[#EC7727]/40 transition-all group">
                <div className="space-y-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#062B66] text-white flex items-center justify-center shadow-md group-hover:bg-[#EC7727] transition-colors">
                    <mode.icon size={26} />
                  </div>
                  <span className="inline-block text-xs font-bold text-[#EC7727] uppercase tracking-wider">{mode.subtitle}</span>
                  <h3 className="text-xl sm:text-2xl font-black text-[#062B66]">{mode.title}</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{mode.desc}</p>
                </div>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100 flex items-center gap-2 text-xs sm:text-sm font-bold text-[#062B66]">
                  <IconCheck size={16} className="text-[#EC7727]" /> Expert Teacher Assigned
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Programs Offered (1st to Matric & Inter 1st/2nd Year) --- */}
        <section className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-gray-100">
          <div className="text-center mb-10 sm:mb-16">
            <span className="inline-block bg-[#062B66] text-white px-5 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow">Complete Academic Coverage</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#062B66] tracking-tighter">Classes from 1st to Intermediate</h2>
            <p className="text-base sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto px-2">Structured coaching programs designed to build robust academic fundamentals and ensure top grades in board examinations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((prog, index) => (
              <div key={index} className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-200 flex flex-col justify-between space-y-4 sm:space-y-6 hover:border-[#062B66]/30 transition-all">
                <div className="space-y-3">
                  <span className="inline-block bg-[#EC7727]/10 text-[#EC7727] text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full">{prog.badge}</span>
                  <h3 className="text-lg sm:text-xl font-black text-[#062B66]">{prog.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{prog.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#062B66] uppercase tracking-wider pt-4 border-t border-gray-200">
                  <IconBooks size={15} className="text-[#EC7727]" /> All Subjects Covered
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Experienced Faculty & Key Highlights --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-[10px] sm:text-[11px] font-bold uppercase tracking-widest">
              <IconAward size={13} className="text-[#EC7727]" /> Elite Faculty
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062B66] tracking-tight">Jantey Maantey (Well-Known) Experienced Teachers</h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">At SR Academy, we pride ourselves on having a pool of highly qualified, veteran educators and subject specialists who know exactly how to simplify complex concepts and mentor students to academic glory.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 sm:p-3.5 rounded-xl shadow-xs border border-gray-100">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 rounded-full bg-orange-100 text-[#EC7727] flex items-center justify-center shrink-0">
                    <IconCheck size={12} />
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#062B66]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#062B66] to-[#041a40] p-6 sm:p-8 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] text-white shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 sm:w-48 h-40 sm:h-48 bg-[#EC7727]/20 rounded-full blur-2xl"></div>
            <IconCertificate size={45} className="text-[#EC7727]" />
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight">Enroll Today for Guaranteed Success</h3>
            <p className="text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed">
              Whether your child needs intensive individual coaching or structured group classes from primary to intermediate level, SR Academy provides the ultimate educational ecosystem in Karachi.
            </p>
            <div className="pt-2 sm:pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-[#EC7727] text-white font-extrabold px-6 sm:px-8 py-3 sm:py-3.5 rounded-xl shadow-lg hover:bg-[#d6671f] transition-all uppercase tracking-wider text-[11px] sm:text-xs text-center"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Academy;