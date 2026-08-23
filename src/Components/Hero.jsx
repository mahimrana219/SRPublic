import React from 'react';
import { IconSchool, IconBuildingCastle, IconBook, IconCertificate, IconChecklist, IconStarFilled, IconArrowRight } from '@tabler/icons-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-4 md:px-16 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-orange-50/20 font-sans">
            
            {/* Background Decorative Glows */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-[#2A5393]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-5 right-10 w-72 h-72 bg-[#EC7727]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center">
                
                {/* Top Bar: Clean, No Background, With Real Icons */}
                <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[#062B66] text-xs md:text-sm font-extrabold uppercase tracking-widest mb-6">
                    <span className="flex items-center gap-1.5"><IconSchool size={16} className="text-[#EC7727]" /> SCHOOL</span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5"><IconBuildingCastle size={16} className="text-[#EC7727]" /> COLLEGE</span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5"><IconBook size={16} className="text-[#EC7727]" /> ACADEMY</span>
                    <span className="text-gray-300">|</span>
                    <span className="flex items-center gap-1.5"><IconCertificate size={16} className="text-[#EC7727]" /> INSTITUTE</span>
                </div>

                {/* Main Heading: Welcome To (Black) SR Public (Dark Blue) */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.15] mb-6">
                    <span className="text-black">Welcome To</span> <span className="text-[#062B66]">SR Public</span>
                </h1>

                {/* Professional Engaging Paragraph with Slightly Bold/Medium Font */}
                <p className="text-base sm:text-lg lg:text-xl text-gray-700 font-medium leading-relaxed max-w-3xl mb-8">
                    You are in the right place to solve all your study and career problems. We offer Karachi and Ziauddin Board programs, fast-track 9th, Matric, and 1-year Intermediate classes, plus professional academy courses to ensure your success.
                </p>

                {/* Feature Highlights Grid with Real Icons */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 w-full max-w-2xl mb-10 text-left">
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#EC7727] flex items-center justify-center shrink-0">
                            <IconChecklist size={18} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-[#062B66]">2 Boards Affiliation</span>
                    </div>
                    <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#062B66] flex items-center justify-center shrink-0">
                            <IconSchool size={18} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-[#062B66]">1-Year Intermediate</span>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-white border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-xl bg-orange-50 text-[#EC7727] flex items-center justify-center shrink-0">
                            <IconStarFilled size={16} />
                        </div>
                        <span className="text-xs md:text-sm font-bold text-[#062B66]">Expert Mentorship</span>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <a 
                        href="#admission" 
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl font-bold bg-[#EC7727] text-white hover:bg-orange-600 transition-all duration-300 shadow-xl shadow-orange-500/25 text-base tracking-wide flex items-center justify-center gap-2"
                    >
                        <span>Admission Open</span>
                       
                    </a>
                    <a 
                        href="#career" 
                        className="w-full sm:w-auto px-8 py-4 rounded-2xl font-semibold border-2 border-[#062B66] text-[#062B66] hover:bg-[#062B66] hover:text-white transition-all duration-300 text-base tracking-wide flex items-center justify-center"
                    >
                        Career Guidance
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
