import React, { useEffect, useRef } from 'react';
import { 
     IconSchool, 
     IconBook, 
     IconCertificate, 
     IconChecklist, 
     IconHelpOctagon, 
     IconAward, 
     IconArrowRight, 
     IconTarget, 
     IconCompass, 
     IconBuildingCommunity,
     IconUsers,
     IconClock,
     IconShieldCheck,
     IconSparkles
} from '@tabler/icons-react';

// Importing Contact and Maps components for seamless page flow
import Contact from '../Components/Contact';
import Maps from '../Components/Maps';

const About = () => {
     const sectionRef = useRef(null);

     useEffect(() => {
          const observerCallback = (entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('about-visible');
                      observer.unobserve(entry.target);
                  }
              });
          };

          const observerOptions = {
              root: null,
              rootMargin: '0px 0px -50px 0px',
              threshold: 0.1,
          };

          const observer = new IntersectionObserver(observerCallback, observerOptions);
          if (sectionRef.current) {
              const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
              elements.forEach((el) => observer.observe(el));
          }

          return () => {
              if (sectionRef.current) {
                  const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');
                  elements.forEach((el) => observer.unobserve(el));
              }
          };
     }, []);

     return (
         <div ref={sectionRef} className="font-sans bg-white text-[#062B66]">
             
             {/* Compact & Clean Page Hero Section */}
             <section className="relative overflow-hidden bg-gradient-to-br from-[#062B66] via-[#083b8a] to-[#041a3d] px-4 pt-28 pb-16 md:pt-36 md:px-8 lg:px-12 text-white">
                 <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
                     <div className="absolute -left-30 top-1/4 h-[350px] w-[350px] rounded-full bg-blue-400 blur-3xl animate-pulse" />
                     <div className="absolute -right-30 bottom-5 h-[350px] w-[350px] rounded-full bg-[#EC7727] blur-3xl animate-pulse" />
                 </div>

                 <div className="relative z-10 mx-auto max-w-5xl text-center">
                     <div className="animate-on-scroll about-fade-down inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-1.5 shadow-md backdrop-blur-md mb-4">
                         <span className="h-2 w-2 rounded-full bg-[#EC7727] animate-ping" />
                         <span className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-white">
                             Institutional Overview
                         </span>
                     </div>

                     <h1 className="animate-on-scroll about-fade-down text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl mb-4 leading-tight">
                         Shaping Futures at <span className="text-[#EC7727]">SR Public</span>
                     </h1>

                     <p className="animate-on-scroll about-fade-down mx-auto max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base font-normal">
                         Empowering students since 2021 with comprehensive education, professional training, and structured mentorship across our multi-campus network in Karachi.
                     </p>
                 </div>
             </section>

             {/* Main Detailed Story & Offerings Section (Optimized Spacing) */}
             <section className="relative overflow-hidden px-4 py-14 md:px-8 lg:px-12">
                 <div className="relative z-10 mx-auto max-w-7xl">
                     
                     {/* Story & What We Offer Grid */}
                     <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12 mb-16">
                         
                         {/* Left Column: Story & Affiliations */}
                         <div className="animate-on-scroll about-slide-left space-y-5">
                             <h2 className="text-xl font-black leading-snug text-[#062B66] sm:text-2xl md:text-3xl">
                                 Started in 2021: Building a Trusted Hub for Academic & Career Excellence
                             </h2>

                             <p className="text-xs sm:text-sm font-normal leading-relaxed text-gray-600">
                                 Established in 2021, <strong className="font-bold text-[#062B66]">SR Public</strong> started with a clear mission: to resolve the academic and career challenges faced by students. Recognized and registered with the <strong className="font-bold text-[#062B66]">Karachi Board & Govt of Sindh</strong>, and affiliated with top frameworks including the <strong className="font-bold text-[#062B66]">Ziauddin Board</strong>, we have grown into a trusted multi-campus educational network.
                             </p>

                             <p className="text-xs sm:text-sm font-normal leading-relaxed text-gray-600">
                                 Whether you are mastering foundational concepts in school, preparing intensively for board exams through our academy, or aiming for professional career paths via our specialized institute, we provide expert faculty and a success-driven environment.
                             </p>

                             {/* Core Pillars / Mission & Vision Cards */}
                             <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-1">
                                 <div className="group rounded-xl border border-[#062B66]/10 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#062B66]/30 hover:bg-white hover:shadow-md">
                                     <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#062B66] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                                         <IconTarget size={18} />
                                     </div>
                                     <h3 className="text-[11px] font-black uppercase tracking-wider text-[#062B66]">Our Mission</h3>
                                     <p className="mt-1 text-[11px] text-gray-500 leading-relaxed">To bridge learning gaps and build strong conceptual foundations for every student.</p>
                                 </div>

                                 <div className="group rounded-xl border border-[#EC7727]/20 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#EC7727]/40 hover:bg-white hover:shadow-md">
                                     <div className="mb-2.5 flex h-8 w-8 items-center justify-center rounded-lg bg-[#EC7727] text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                                         <IconCompass size={18} />
                                     </div>
                                     <h3 className="text-[11px] font-black uppercase tracking-wider text-[#062B66]">Our Vision</h3>
                                     <p className="mt-1 text-[11px] text-gray-500 leading-relaxed">Leading the future of education with quality schooling, college programs, and IT skills.</p>
                                 </div>
                             </div>

                             {/* Affiliation Badges */}
                             <div className="flex flex-wrap gap-2.5 pt-1">
                                 <div className="flex items-center gap-2 rounded-lg border border-[#062B66]/15 bg-white px-3.5 py-2 text-[11px] font-extrabold text-[#062B66] shadow-xs">
                                     <IconAward size={16} className="text-[#EC7727]" /> 
                                     <span>Karachi & Govt of Sindh</span>
                                 </div>
                                 <div className="flex items-center gap-2 rounded-lg border border-[#EC7727]/20 bg-orange-50/50 px-3.5 py-2 text-[11px] font-extrabold text-[#EC7727] shadow-xs">
                                     <IconAward size={16} className="text-[#062B66]" /> 
                                     <span>Ziauddin Board Affiliated</span>
                                 </div>
                             </div>
                         </div>

                         {/* Right Column: What We Offer */}
                         <div className="animate-on-scroll about-slide-right relative rounded-2xl border border-[#062B66]/10 bg-white p-5 shadow-xl shadow-[#062B66]/5 md:p-6 lg:p-8 backdrop-blur-xl">
                             
                             <div className="mb-6 flex items-center gap-3.5">
                                 <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#062B66] text-white shadow-md">
                                     <IconChecklist size={20} />
                                 </div>
                                 <div>
                                     <h3 className="text-lg font-black text-[#062B66]">
                                         What We Offer
                                     </h3>
                                     <p className="text-[11px] font-medium text-gray-500">
                                         Comprehensive solutions tailored for student success
                                     </p>
                                 </div>
                             </div>

                             <div className="space-y-3">
                                 {/* Offer 1 */}
                                 <div className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-[#FAFAFA] p-3.5 transition-all duration-300 hover:border-[#062B66]/30 hover:bg-white hover:shadow-sm">
                                     <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#062B66]/10 text-[#062B66] transition-all duration-300 group-hover:bg-[#062B66] group-hover:text-white">
                                         <IconSchool size={16} />
                                     </div>
                                     <div>
                                         <h4 className="text-xs font-black uppercase tracking-wide text-[#062B66]">
                                             Complete School & College System
                                         </h4>
                                         <p className="mt-0.5 text-[11px] text-gray-600 leading-relaxed">
                                             From Play Group to Matric and Intermediate (Pre-Engineering, Pre-Medical, Commerce, Arts) with regular and fast-track options.
                                         </p>
                                     </div>
                                 </div>

                                 {/* Offer 2 */}
                                 <div className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-[#FAFAFA] p-3.5 transition-all duration-300 hover:border-[#EC7727]/30 hover:bg-white hover:shadow-sm">
                                     <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EC7727]/10 text-[#EC7727] transition-all duration-300 group-hover:bg-[#EC7727] group-hover:text-white">
                                         <IconBook size={16} />
                                     </div>
                                     <div>
                                         <h4 className="text-xs font-black uppercase tracking-wide text-[#062B66]">
                                             Specialized Academy & Courses
                                         </h4>
                                         <p className="mt-0.5 text-[11px] text-gray-600 leading-relaxed">
                                             Targeted coaching, 1-year intermediate classes, and professional certificate courses designed to conquer learning gaps.
                                         </p>
                                     </div>
                                 </div>

                                 {/* Offer 3 */}
                                 <div className="group flex items-start gap-3 rounded-xl border border-gray-100 bg-[#FAFAFA] p-3.5 transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-sm">
                                     <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                                         <IconHelpOctagon size={16} />
                                     </div>
                                     <div>
                                         <h4 className="text-xs font-black uppercase tracking-wide text-[#062B66]">
                                             Personalized Student Support
                                         </h4>
                                         <p className="mt-0.5 text-[11px] text-gray-600 leading-relaxed">
                                             We solve study obstacles through individual focus, expert career counseling, and high-performance exam strategies.
                                         </p>
                                     </div>
                                 </div>
                             </div>

                             {/* Quick Action Footer inside Card */}
                             <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                                 <div className="flex items-center gap-2">
                                     <IconBuildingCommunity size={16} className="text-[#EC7727]" />
                                     <span className="text-[11px] font-bold text-[#062B66]">Multi-Campus Network</span>
                                 </div>
                                 <a 
                                     href="#contact" 
                                     className="group inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#062B66] transition-colors hover:text-[#EC7727]"
                                 >
                                     <span>Join Us Today</span>
                                     <IconArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                                 </a>
                             </div>

                         </div>

                     </div>

                     {/* Core Strengths Section */}
                     <div className="animate-on-scroll about-fade-down mb-10 text-center">
                         <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-[11px] font-bold uppercase tracking-widest mb-2.5">
                             <IconSparkles size={13} className="text-[#EC7727]" /> Core Strengths
                         </div>
                         <h3 className="text-xl md:text-3xl font-black text-[#062B66]">Why Students Choose SR Public</h3>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                         <div className="animate-on-scroll about-fade-down bg-slate-50/80 rounded-2xl p-6 border border-gray-200 hover:border-[#062B66]/30 transition-all shadow-xs">
                             <div className="w-10 h-10 rounded-xl bg-[#062B66] text-white flex items-center justify-center mb-4 shadow-sm">
                                 <IconUsers size={20} />
                             </div>
                             <h4 className="text-base font-black text-[#062B66] mb-1.5">Expert Faculty</h4>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                 Highly qualified educators and mentors dedicated to personalized student grooming and board exam success.
                             </p>
                         </div>

                         <div className="animate-on-scroll about-fade-down bg-slate-50/80 rounded-2xl p-6 border border-gray-200 hover:border-[#EC7727]/30 transition-all shadow-xs">
                             <div className="w-10 h-10 rounded-xl bg-[#EC7727] text-white flex items-center justify-center mb-4 shadow-sm">
                                 <IconClock size={20} />
                             </div>
                             <h4 className="text-base font-black text-[#062B66] mb-1.5">Flexible Learning</h4>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                 Regular school/college timings as well as fast-track 1-year intermediate options designed to save precious academic time.
                             </p>
                         </div>

                         <div className="animate-on-scroll about-fade-down bg-slate-50/80 rounded-2xl p-6 border border-gray-200 hover:border-[#062B66]/30 transition-all shadow-xs">
                             <div className="w-10 h-10 rounded-xl bg-[#062B66] text-white flex items-center justify-center mb-4 shadow-sm">
                                 <IconShieldCheck size={20} />
                             </div>
                             <h4 className="text-base font-black text-[#062B66] mb-1.5">Verified Frameworks</h4>
                             <p className="text-xs text-gray-600 leading-relaxed">
                                 Officially recognized and registered ensuring authentic qualifications accepted across all higher educational boards.
                             </p>
                         </div>
                     </div>

                 </div>
             </section>

             {/* Seamlessly calling Contact and Maps Components at the bottom of the About Page */}
             <Contact />
             <Maps />

             {/* Custom Styles for Smooth Scroll Reveal Animations */}
             <style>{`
                 .about-slide-left {
                     opacity: 0;
                     transform: translateX(-40px);
                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                 }

                 .about-slide-right {
                     opacity: 0;
                     transform: translateX(40px);
                     transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                 }

                 .about-fade-down {
                     opacity: 0;
                     transform: translateY(-30px);
                     transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                 }

                 .about-visible {
                     opacity: 1 !important;
                     transform: translate(0, 0) !important;
                 }
             `}</style>
         </div>
     );
};

export default About;