import React from 'react';
import rizwanImg from '../assets/rizwan1.png';

const CEO = () => {
    return (
        <section id="ceo" className="py-24 px-4 md:px-16 bg-white relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#062B66]/5 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC7727]"></span>
                        Leadership & Vision
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        The Mastermind Behind SR Public
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Driving structural excellence and redefining academic standards across Karachi through unwavering dedication and leadership.
                    </p>
                </div>

                {/* Main Two-Column Layout (No Background Box, Clean Look) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: Prominent CEO Image */}
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-slate-900 aspect-[4/5]">
                            {rizwanImg ? (
                                <img 
                                    src={rizwanImg} 
                                    alt="Mr. Rizwan Ahmed - CEO & Founder" 
                                    className="w-full h-full object-cover object-top"
                                />
                            ) : (
                                <div className="text-white text-xs p-4 text-center">Add rizwan1.png in assets</div>
                            )}
                        </div>
                    </div>

                    {/* Right Side: Professional Details */}
                    <div className="lg:col-span-7 space-y-6">
                        <div>
                            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-orange-50 text-[#EC7727] uppercase tracking-wider mb-3">
                                Founder & CEO
                            </span>
                            <h3 className="text-3xl md:text-4xl font-black text-[#062B66] tracking-tight mb-4">
                                Mr. Rizwan Ahmed
                            </h3>
                        </div>

                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-medium">
                            "Education is not just about passing exams, it is about building a capable, disciplined, and confident generation equipped for real-world success."
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                            As the visionary mastermind behind <strong className="text-[#062B66]">SR Public</strong>,  <strong>Muhammad Rizwan Ahmed</strong> established this institution with a single-minded commitment: to bridge traditional educational gaps and provide accessible, high-standard academic and career paths for students in Karachi.
                        </p>

                        <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                            Under his dynamic leadership, SR Public has expanded into a trusted multi-campus educational hub encompassing schools, colleges, academies, and professional institutes, staying true to uncompromising quality and student-first values.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CEO;