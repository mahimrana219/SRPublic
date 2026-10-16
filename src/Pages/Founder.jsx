import React from 'react';
import { IconQuote, IconAward, IconChecklist, IconSparkles, IconTarget, IconArrowUpRight } from '@tabler/icons-react';

// CEO Image
import rizwanImg from '../assets/rizwan1.png';

const Founder = () => {
    return (
        <section 
            id="ceo" 
            className="py-28 px-4 md:px-16 bg-gradient-to-b from-white via-slate-50/70 to-white relative overflow-hidden font-sans border-b border-gray-100"
        >
            {/* Ambient Bright Glows */}
            <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Leadership & Visionary Guidance
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        The Mastermind Behind SR Public
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Driving structural excellence and redefining academic standards across Karachi through unwavering dedication and progressive educational frameworks.
                    </p>
                </div>

                {/* Main Content Card Container */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border-2 border-blue-100 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-14 shadow-[0_20px_60px_rgba(6,43,102,0.08)] relative overflow-hidden">
                    
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#062B66] via-blue-500 to-[#EC7727]"></div>

                    {/* Left Side: CEO Image Container with Badge */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative group w-full max-w-[320px] md:max-w-[360px]">
                            
                            {/* Decorative Glow Ring */}
                            <div className="absolute -inset-2 bg-gradient-to-tr from-[#062B66] to-[#EC7727] rounded-[2rem] opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                            
                            <div className="relative w-full rounded-[2rem] overflow-hidden border-4 border-white bg-slate-900 aspect-[4/5] shadow-2xl">
                                {rizwanImg ? (
                                    <img 
                                        src={rizwanImg} 
                                        alt="Mr. Muhammad Rizwan Ahmed - CEO & Founder" 
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                ) : (
                                    <div className="text-white text-xs p-4 text-center flex items-center justify-center h-full">Add rizwan1.png in assets</div>
                                )}

                                {/* Floating Experience Badge */}
                                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-lg flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-[#062B66] text-[#EC7727] flex items-center justify-center shrink-0 shadow-md">
                                        <IconAward size={22} />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-black text-[#062B66]">15+ Years Experience</h4>
                                        <p className="text-[11px] text-gray-500 font-medium">Educational Leadership in Karachi</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Detailed Info & Highlights */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-[#EC7727]/10 text-[#EC7727] border border-[#EC7727]/20 uppercase tracking-wider mb-3">
                                <IconSparkles size={14} />
                                Founder & Executive Head
                            </span>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062B66] tracking-tight mb-1">
                                Muhammad Rizwan Ahmed
                            </h3>
                            <p className="text-[#EC7727] font-bold text-sm tracking-wide">
                                Visionary Educator & Managing Director, SR Public Educational Network
                            </p>
                        </div>

                        {/* Glass Quote Box */}
                        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 shadow-sm">
                            <div className="absolute top-4 right-4 text-[#062B66]/10 pointer-events-none">
                                <IconQuote size={40} />
                            </div>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed italic font-semibold relative z-10">
                                "Education is not just about passing exams; it is about building a capable, disciplined, and confident generation equipped for real-world success."
                            </p>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                            Under his visionary leadership, SR Public has grown into a beacon of quality learning, offering comprehensive schooling, intermediate coaching, and professional skill pathways designed to empower youth in Karachi.
                        </p>

                        {/* Key Leadership Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-gray-100">
                                <div className="w-8 h-8 rounded-xl bg-[#062B66]/10 text-[#062B66] flex items-center justify-center shrink-0 mt-0.5">
                                    <IconTarget size={18} />
                                </div>
                                <div>
                                    <h5 className="text-xs font-black text-[#062B66]">Mission Driven</h5>
                                    <p className="text-[11px] text-gray-500 font-medium">Accessible and premium education for every deserving student.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-gray-100">
                                <div className="w-8 h-8 rounded-xl bg-[#EC7727]/10 text-[#EC7727] flex items-center justify-center shrink-0 mt-0.5">
                                    <IconChecklist size={18} />
                                </div>
                                <div>
                                    <h5 className="text-xs font-black text-[#062B66]">Quality Standards</h5>
                                    <p className="text-[11px] text-gray-500 font-medium">Rigorous academic monitoring and modern faculty training.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default Founder;