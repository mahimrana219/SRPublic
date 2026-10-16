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
  IconBuildingCommunity 
} from '@tabler/icons-react';

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
      rootMargin: '0px 0px -100px 0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = sectionRef.current.querySelectorAll('.animate-on-scroll');

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative overflow-hidden bg-white px-4 py-24 font-sans md:px-8 lg:px-16 text-[#062B66]">
      
      {/* Background Subtle Gradients */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-3xl animate-pulse" />
        <div className="absolute -right-40 bottom-10 h-[450px] w-[450px] rounded-full bg-[#EC7727]/5 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="animate-on-scroll about-fade-down mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#062B66]/10 bg-blue-50/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#EC7727] animate-ping" />
            <span className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#062B66] sm:text-xs">
              Our Journey & Identity
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-[#062B66] sm:text-4xl md:text-5xl lg:text-6xl">
            About <span className="bg-gradient-to-r from-[#EC7727] via-orange-500 to-[#062B66] bg-clip-text text-transparent">SR Public</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg font-medium">
            Empowering students since 2021 with comprehensive education, professional training, and structured mentorship across our multi-campus network.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Column: Story & Affiliations (Animates from Left) */}
          <div className="animate-on-scroll about-slide-left space-y-6">
            <h3 className="text-2xl font-black leading-snug text-[#062B66] sm:text-3xl">
              Started in 2021: Building a Trusted Hub for Academic & Career Excellence
            </h3>

            <p className="text-sm font-normal leading-relaxed text-gray-600 sm:text-base">
              Established in 2021, <strong className="font-bold text-[#062B66]">SR Public</strong> started with a clear mission: to resolve the academic and career challenges faced by students. Recognized and registered with the <strong className="font-bold text-[#062B66]">Karachi Board & Govt of Sindh</strong>, and affiliated with top frameworks including the <strong className="font-bold text-[#062B66]">Ziauddin Board</strong>, we have grown into a trusted multi-campus educational network.
            </p>

            <p className="text-sm font-normal leading-relaxed text-gray-600 sm:text-base">
              Whether you are mastering foundational concepts in school, preparing intensively for board exams through our academy, or aiming for professional career paths via our specialized institute, we provide expert faculty and a success-driven environment.
            </p>

            {/* Core Pillars / Mission & Vision Cards */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              <div className="group rounded-2xl border border-[#062B66]/10 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#062B66]/30 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#062B66] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <IconTarget size={18} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#062B66]">Our Mission</h4>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">To bridge learning gaps and build strong conceptual foundations for every student.</p>
              </div>

              <div className="group rounded-2xl border border-[#EC7727]/20 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#EC7727]/40 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-[#EC7727] text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  <IconCompass size={18} />
                </div>
                <h4 className="text-xs font-black uppercase tracking-wider text-[#062B66]">Our Vision</h4>
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">Leading the future of education with quality schooling, college programs, and IT skills.</p>
              </div>
            </div>

            {/* Affiliation Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-xl border border-[#062B66]/15 bg-white px-4 py-2 text-xs font-extrabold text-[#062B66] shadow-sm hover:shadow-md transition-shadow">
                <IconAward size={16} className="text-[#EC7727]" /> 
                <span>Karachi & Govt of Sindh</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-[#EC7727]/20 bg-orange-50/50 px-4 py-2 text-xs font-extrabold text-[#EC7727] shadow-sm hover:shadow-md transition-shadow">
                <IconAward size={16} className="text-[#062B66]" /> 
                <span>Ziauddin Board Affiliated</span>
              </div>
            </div>
          </div>

          {/* Right Column: What We Offer & Problem Solving (Animates from Right) */}
          <div className="animate-on-scroll about-slide-right relative rounded-[2rem] border border-[#062B66]/10 bg-white p-6 shadow-2xl shadow-[#062B66]/10 md:p-8 lg:p-10 backdrop-blur-xl">
            
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#062B66] text-white shadow-lg shadow-[#062B66]/20">
                <IconChecklist size={24} />
              </div>
              <div>
                <h4 className="text-xl font-black text-[#062B66] sm:text-2xl">
                  What We Offer
                </h4>
                <p className="text-xs font-medium text-gray-500">
                  Comprehensive solutions tailored for student success
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Offer 1 */}
              <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#062B66]/30 hover:bg-white hover:shadow-md hover:translate-x-1">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#062B66]/10 text-[#062B66] transition-all duration-300 group-hover:bg-[#062B66] group-hover:text-white group-hover:scale-110">
                  <IconSchool size={18} />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide text-[#062B66] sm:text-sm">
                    Complete School & College System
                  </h5>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    From Play Group to Matric and Intermediate (Pre-Engineering, Pre-Medical, Commerce, Arts) with regular and fast-track options.
                  </p>
                </div>
              </div>

              {/* Offer 2 */}
              <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-[#EC7727]/30 hover:bg-white hover:shadow-md hover:translate-x-1">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EC7727]/10 text-[#EC7727] transition-all duration-300 group-hover:bg-[#EC7727] group-hover:text-white group-hover:scale-110">
                  <IconBook size={18} />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide text-[#062B66] sm:text-sm">
                    Specialized Academy & Courses
                  </h5>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    Targeted coaching, 1-year intermediate classes, and professional certificate courses designed to conquer learning gaps.
                  </p>
                </div>
              </div>

              {/* Offer 3 */}
              <div className="group flex items-start gap-4 rounded-2xl border border-gray-100 bg-[#FAFAFA] p-4 transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-md hover:translate-x-1">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-110">
                  <IconHelpOctagon size={18} />
                </div>
                <div>
                  <h5 className="text-xs font-black uppercase tracking-wide text-[#062B66] sm:text-sm">
                    Personalized Student Support
                  </h5>
                  <p className="mt-1 text-xs text-gray-600 leading-relaxed">
                    We solve study obstacles through individual focus, expert career counseling, and high-performance exam strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Footer inside Card */}
            <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
              <div className="flex items-center gap-2">
                <IconBuildingCommunity size={18} className="text-[#EC7727]" />
                <span className="text-xs font-bold text-[#062B66]">Multi-Campus Network</span>
              </div>
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#062B66] transition-colors hover:text-[#EC7727]"
              >
                <span>Join Us Today</span>
                <IconArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>
            </div>

          </div>

        </div>
      </div>

      {/* Custom Styles for Smooth Scroll Reveal Animations */}
      <style>{`
        .about-slide-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-slide-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-fade-down {
          opacity: 0;
          transform: translateY(-40px);
          transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .about-visible {
          opacity: 1 !important;
          transform: translate(0, 0) !important;
        }
      `}</style>
    </section>
  );
};

export default About;