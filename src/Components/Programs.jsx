import React from 'react';
import { IconSchool, IconCertificate, IconCpu, IconCircleCheck } from '@tabler/icons-react';

const Programs = () => {
    const offerings = [
        {
            id: 1,
            icon: <IconSchool size={48} className="text-[#062B66]" stroke={1.5} />,
            badge: "Grades 1 to 10",
            title: "School System",
            desc: "Strong foundational learning, conceptual clarity, and disciplined grooming for matriculation under premier board standards.",
            verifyText: "Complete Board Prep",
            hoverBorder: "hover:border-blue-200"
        },
        {
            id: 2,
            icon: <IconCertificate size={48} className="text-[#EC7727]" stroke={1.5} />,
            badge: "Intermediate",
            title: "College & Academy",
            desc: "Rigorous higher secondary education programs (Pre-Eng, Pre-Med, Commerce, Arts) to secure top grades and university admissions.",
            verifyText: "Expert Subject Faculty",
            hoverBorder: "hover:border-orange-200"
        },
        {
            id: 3,
            icon: <IconCpu size={48} className="text-emerald-700" stroke={1.5} />,
            badge: "IT & Skills",
            title: "Professional Institute",
            desc: "Cutting-edge courses including Web Development, Graphic Design, Amazon, Digital Marketing, English Language, and Forex Trading.",
            verifyText: "100% Practical Training",
            hoverBorder: "hover:border-emerald-200"
        }
    ];

    return (
        <section id="programs" className="py-24 px-4 md:px-16 bg-white relative overflow-hidden font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#062B66]/5 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC7727]"></span>
                        Comprehensive Education
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        What We Offer
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Complete academic and professional pathways under one roof, designed for absolute success.
                    </p>
                </div>

                {/* Clean Modern Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offerings.map((item) => (
                        <div 
                            key={item.id}
                            className={`bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${item.hoverBorder} transition-all duration-300 flex flex-col items-center text-center`}
                        >
                            {/* Icon */}
                            <div className="mb-6 flex justify-center w-full">
                                {item.icon}
                            </div>

                            {/* Pill Badge */}
                            <div className="bg-slate-50 border border-gray-100 text-[#062B66] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-5">
                                {item.badge}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-black text-[#062B66] mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed font-medium mb-10 flex-grow">
                                {item.desc}
                            </p>

                            {/* Bottom Verification Text (Similar to Board Verified) */}
                            <div className="flex items-center justify-center gap-2 w-full pt-6 border-t border-gray-50">
                                <IconCircleCheck size={16} className="text-emerald-500" stroke={2.5} />
                                <span className="text-xs font-bold text-[#062B66]">{item.verifyText}</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Programs;