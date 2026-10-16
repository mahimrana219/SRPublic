import React, { useEffect, useRef } from 'react';
import { 
     IconSchool, 
     IconBook, 
     IconCertificate, 
     IconChecklist, 
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

import collegeBanner from '../assets/college1.png'; // Path apne folder ke mutabiq adjust kar lein

// Importing Contact and Maps components for consistent page flow
import Contact from '../Components/Contact';
import Maps from '../Components/Maps';

const College = () => {
     const sectionRef = useRef(null);

     useEffect(() => {
          const observerCallback = (entries, observer) => {
              entries.forEach((entry) => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('college-visible');
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
             
             {/* Main Content Section */}
             <section className="relative overflow-hidden px-4 py-16 md:px-8 lg:px-12 bg-white">
                 <div className="relative z-10 mx-auto max-w-5xl">
                     {/* Intermediate & Higher Education Header Details */}
                     <div className="animate-on-scroll college-fade-down text-center mt-14">
                         <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-[11px] font-bold uppercase tracking-widest mb-2.5">
                             <span className="h-2 w-2 rounded-full bg-[#EC7727]  animate-ping" />
                             <span>Intermediate & Higher Education</span>
                         </div>
                         <h2 className="text-3xl md:text-5xl font-black text-[#062B66] mb-4">
                             SR Public <span className="text-[#EC7727]">College System</span>
                         </h2>
                         <p className="mt-3 text-xs sm:text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
                             Empowering higher secondary students with comprehensive pre-engineering, pre-medical, and commerce programs backed by expert faculty and structured board exam preparation.
                         </p>
                     </div>

                     {/* College Banner (college1.png) */}
                     <div className="animate-on-scroll college-fade-down mb-12">
                         <div className="relative rounded-2xl overflow-hidden border border-[#062B66]/15 shadow-lg bg-white p-2 md:p-3">
                             <img 
                                 src={collegeBanner} 
                                 alt="SR Public College Campus Banner" 
                                 className="w-full h-auto object-cover rounded-xl"
                             />
                         </div>
                     </div>

                     {/* Detailed Text & Deep Dive Content */}
                     <div className="animate-on-scroll college-fade-down space-y-8 text-gray-700 text-xs sm:text-sm leading-relaxed">
                         
                         <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xs">
                             <h3 className="text-base md:text-lg font-black text-[#062B66] mb-3 flex items-center gap-2">
                                 <IconShieldCheck className="text-[#EC7727]" size={20} />
                                 Our Intermediate Programs & Academic Structure
                             </h3>
                             <p className="mb-4">
                                 At <strong className="text-[#062B66]">SR Public College</strong>, we recognize that the intermediate years (Class XI and XII) are the most critical turning point in a student's academic journey. Whether our students aim to enter medical colleges, engineering universities, top-tier business schools, or pursue the arts, our faculty ensures complete conceptual clarity and examination preparedness.
                             </p>
                             <p>
                                 We offer regular two-year programs alongside specialized <strong className="text-[#062B66]">1-year fast-track intermediate options</strong> for eligible candidates looking to optimize their academic timelines without compromising on curriculum depth or board requirements.
                             </p>
                         </div>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="border border-[#062B66]/15 rounded-2xl p-6 bg-white shadow-xs hover:shadow-md transition-all">
                                 <div className="w-10 h-10 rounded-xl bg-[#062B66] text-white flex items-center justify-center mb-4">
                                     <IconSchool size={20} />
                                 </div>
                                 <h4 className="text-sm font-black text-[#062B66] uppercase tracking-wide mb-2">Science & Pre-Professional Streams</h4>
                                 <p className="text-xs text-gray-600 leading-relaxed">
                                     Our Pre-Engineering and Pre-Medical faculties feature intensive coaching in Mathematics, Physics, Chemistry, and Biology. Students benefit from regular test sessions, past-paper solving workshops, and concept-building lectures designed to excel in board examinations and entry tests.
                                 </p>
                             </div>

                             <div className="border border-[#EC7727]/20 rounded-2xl p-6 bg-white shadow-xs hover:shadow-md transition-all">
                                 <div className="w-10 h-10 rounded-xl bg-[#EC7727] text-white flex items-center justify-center mb-4">
                                     <IconCertificate size={20} />
                                 </div>
                                 <h4 className="text-sm font-black text-[#062B66] uppercase tracking-wide mb-2">Commerce & Corporate Pathways</h4>
                                 <p className="text-xs text-gray-600 leading-relaxed">
                                     The Commerce stream is structured to build strong foundations in Principles of Accounting, Economics, and Business Mathematics. We prepare future accountants, economists, and corporate leaders with practical problem-solving skills and analytical acumen.
                                 </p>
                             </div>
                         </div>

                         <div className="bg-gradient-to-br from-[#062B66] to-[#041a3d] text-white rounded-2xl p-6 md:p-8 shadow-lg">
                             <h3 className="text-base md:text-lg font-black mb-3 text-white">Why Choose SR Public College?</h3>
                             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
                                 <li className="flex items-center gap-2">✓ Affiliated with recognized educational boards</li>
                                 <li className="flex items-center gap-2">✓ Highly experienced and dedicated subject specialists</li>
                                 <li className="flex items-center gap-2">✓ Individualized student attention and mentoring</li>
                                 <li className="flex items-center gap-2">✓ Regular parent-teacher progress evaluations</li>
                             </ul>
                         </div>

                     </div>

                 </div>
             </section>

             {/* Seamless Contact and Maps Integration */}
             <Contact />
             <Maps />

             {/* Smooth Animations Styling */}
             <style>{`
                 .college-fade-down {
                     opacity: 0;
                     transform: translateY(-30px);
                     transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
                 }

                 .college-visible {
                     opacity: 1 !important;
                     transform: translate(0, 0) !important;
                 }
             `}</style>
         </div>
     );
};

export default College;