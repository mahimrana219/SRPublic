import React from 'react';
import { IconQuote, IconAward } from '@tabler/icons-react';

// CEO Image
import rizwanImg from '../assets/rizwan1.png';

const CEO = () => {
    return (
        <section 
            id="ceo" 
            className="py-20 px-4 md:px-12 relative overflow-hidden font-sans text-white bg-[#062B66]"
        >
            {/* Ambient Lighting Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-[#EC7727]/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#EC7727] text-[11px] font-bold uppercase tracking-widest mb-3 shadow-md backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Leadership & Vision
                    </div>
                    <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight mb-3">
                        The Mastermind Behind SR Public
                    </h2>
                    <p className="text-gray-200 text-xs md:text-sm leading-relaxed font-medium">
                        Driving structural excellence and redefining academic standards across Karachi through unwavering dedication.
                    </p>
                </div>

                {/* Main Content Layout (Without separate wrapper card) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/[0.02] border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-xl">
                    
                    {/* Left Side: CEO Image Container */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative group w-full max-w-[260px] md:max-w-[280px]">
                            {/* Subtle Glow behind image */}
                            <div className="absolute -inset-1.5 bg-gradient-to-t from-[#062B66] to-[#EC7727] rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                            
                            <div className="relative w-full rounded-2xl overflow-hidden border border-white/20 bg-slate-950 aspect-[4/5] shadow-lg">
                                {rizwanImg ? (
                                    <img 
                                        src={rizwanImg} 
                                        alt="Mr. Rizwan Ahmed - CEO & Founder" 
                                        className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                ) : (
                                    <div className="text-white text-xs p-4 text-center flex items-center justify-center h-full">Add rizwan1.png in assets</div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Details & Quote Box */}
                    <div className="lg:col-span-7 space-y-4">
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-[11px] font-bold bg-[#EC7727]/15 text-[#EC7727] border border-[#EC7727]/30 uppercase tracking-wider mb-2.5">
                                <IconAward size={13} />
                                Founder & Executive Head
                            </span>
                            <h3 className="text-2xl md:text-4xl font-black text-white tracking-tight mb-1">
                                Muhammad Rizwan Ahmed
                            </h3>
                            <p className="text-[#EC7727] font-semibold text-xs md:text-sm tracking-wide">
                                Visionary & Mastermind Behind SR Public
                            </p>
                        </div>

                        {/* Glass Quote Box */}
                        <div className="relative p-4 md:p-5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
                            <div className="absolute top-2 right-3 text-white/5 pointer-events-none">
                                <IconQuote size={32} />
                            </div>
                            <p className="text-gray-100 text-xs md:text-sm leading-relaxed italic font-medium relative z-10">
                                "Education is not just about passing exams, it is about building a capable, disciplined, and confident generation equipped for real-world success."
                            </p>
                        </div>

                        <p className="text-gray-200 text-xs md:text-sm leading-relaxed">
                            Established with a commitment to bridge traditional academic gaps, providing top-tier schooling, college systems, and professional pathways across Karachi.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CEO;