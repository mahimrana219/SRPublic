import React from 'react';
import { IconSchool, IconBook, IconCertificate, IconChecklist, IconHelpOctagon, IconAward } from '@tabler/icons-react';

const About = () => {
    return (
        <section id="about" className="py-24 px-4 md:px-16 bg-white relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Our Journey & Identity
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        About Us SR Public
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                        Empowering students since 2021 with comprehensive education across our School, College, Academy, and Institute branches.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                    
                    {/* Left Column: Story & 2021 Origin */}
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-3xl font-black text-[#062B66] leading-snug">
                            Started in 2021: Building a Trusted Hub for Academic Excellence
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
                            Established in 2021, <strong className="text-[#062B66]">SR Public</strong> started with a clear mission: to resolve the study and career challenges faced by students. Recognized and registered with the <strong className="text-[#062B66]">Karachi Board & Govt of Sindh</strong>, and affiliated with top educational frameworks including the <strong className="text-[#062B66]">Ziauddin Board</strong>, we have grown into a trusted multi-campus network in Shah Faisal Colony and Saudabad.
                        </p>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base font-normal">
                            Whether a student is struggling with foundational concepts in school, preparing for board examinations through our academy, or aiming for professional success via our institute and college programs, we provide the right environment, expert faculty, and structured mentorship.
                        </p>

                        {/* Affiliation Badges */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <span className="px-4 py-2 rounded-xl bg-blue-50 border border-blue-100 text-[#062B66] text-xs font-bold flex items-center gap-2">
                                <IconAward size={16} className="text-[#EC7727]" /> Karachi & Govt of Sindh
                            </span>
                            <span className="px-4 py-2 rounded-xl bg-orange-50 border border-orange-100 text-[#EC7727] text-xs font-bold flex items-center gap-2">
                                <IconAward size={16} className="text-[#062B66]" /> Ziauddin Board Affiliated
                            </span>
                        </div>
                    </div>

                    {/* Right Column: What We Offer & How We Solve Problems */}
                    <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-blue-50/40 via-white to-orange-50/30 border border-blue-100 shadow-xl shadow-blue-900/5 relative">
                        
                        <h4 className="text-2xl font-black text-[#062B66] mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[#062B66] text-white flex items-center justify-center shrink-0">
                                <IconChecklist size={22} />
                            </div>
                            <span>What We Offer & How We Solve Your Problems</span>
                        </h4>

                        <div className="space-y-4">
                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#EC7727] flex items-center justify-center shrink-0 mt-0.5">
                                    <IconSchool size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-[#062B66]">Complete School & College System</h5>
                                    <p className="text-xs text-gray-500 mt-0.5">From Play Group to Matric and Intermediate (Pre-Engineering, Pre-Medical, Commerce, Arts) with regular and fast-track options.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#062B66] flex items-center justify-center shrink-0 mt-0.5">
                                    <IconBook size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-[#062B66]">Specialized Academy & Courses</h5>
                                    <p className="text-xs text-gray-500 mt-0.5">Targeted coaching, 1-year intermediate classes, and professional certificate courses to overcome learning gaps.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-orange-50 text-[#EC7727] flex items-center justify-center shrink-0 mt-0.5">
                                    <IconHelpOctagon size={18} />
                                </div>
                                <div>
                                    <h5 className="text-sm font-bold text-[#062B66]">Personalized Student Support</h5>
                                    <p className="text-xs text-gray-500 mt-0.5">We solve study problems through individual attention, career guidance counseling, and rigorous exam preparation strategies.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;