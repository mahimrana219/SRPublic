import React, { useEffect, useRef } from 'react';
import { IconCircleCheck, IconShieldCheck } from '@tabler/icons-react';

import karachiBoardImg from '../assets/karachi.png';
import biekLogo from '../assets/interlogo.png';
import ziauddinLogo from '../assets/zialogo.png';

const AffiliatedBoards = () => {
    const boards = [
        {
            id: 1,
            name: "Board of Secondary Education Karachi",
            category: "Secondary & Matric",
            description: "Official registration and affiliation for matriculation and foundational educational programs under the Karachi Board framework.",
            image: karachiBoardImg,
            borderColor: "hover:border-blue-500/50",
            badgeColor: "bg-blue-50 text-blue-600 border-blue-100",
            animationClass: "animate-from-left",
        },
        {
            id: 2,
            name: "Intermediate Board of Karachi",
            category: "BIEK Intermediate",
            description: "Recognized affiliation for higher secondary education, offering rigorous programs in Pre-Engineering, Pre-Medical, Commerce, and Arts.",
            image: biekLogo,
            borderColor: "hover:border-orange-500/50",
            badgeColor: "bg-orange-50 text-[#EC7727] border-orange-100",
            animationClass: "animate-from-up",
        },
        {
            id: 3,
            name: "Ziauddin Examination Board",
            category: "Advanced Board",
            description: "Affiliated with Ziauddin Examination Board to provide modern curriculum standards, fast-track academic paths, and specialized learning.",
            image: ziauddinLogo,
            borderColor: "hover:border-emerald-500/50",
            badgeColor: "bg-emerald-50 text-emerald-600 border-emerald-100",
            animationClass: "animate-from-right",
        }
    ];

    // Scroll Observer for triggering animations on scroll
    const cardRefs = useRef([]);

    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -80px 0px',
            threshold: 0.15,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        cardRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            cardRefs.current.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <section className="py-24 px-4 md:px-16 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Official Accreditations
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        Recognized & Affiliated Boards
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                        SR Public operates under official government and board recognitions to ensure authentic, high-value credentials for every student.
                    </p>
                </div>

                {/* Boards Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-xl lg:max-w-none mx-auto">
                    {boards.map((board, index) => (
                        <div 
                            key={board.id}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className={`board-card opacity-0 group p-8 rounded-3xl bg-white border border-gray-100 ${board.borderColor} shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between relative overflow-hidden ${board.animationClass}`}
                        >
                            {/* Decorative background ambient glow on hover */}
                            <div className="absolute -right-16 -top-16 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-[#EC7727]/10 transition-colors duration-500 pointer-events-none"></div>

                            <div>
                                {/* Prominent Logo Container */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-28 h-28 flex items-center justify-center p-2 rounded-2xl bg-slate-50/80 border border-slate-100 group-hover:scale-110 group-hover:bg-white transition-all duration-500 shadow-inner">
                                        <img src={board.image} alt={board.name} className="w-full h-full object-contain drop-shadow-sm" />
                                    </div>
                                </div>

                                {/* Category Tag */}
                                <div className="text-center mb-3">
                                    <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider border ${board.badgeColor} shadow-2xs`}>
                                        {board.category}
                                    </span>
                                </div>

                                {/* Board Name */}
                                <h3 className="text-xl font-black text-center text-[#062B66] mb-4 leading-snug">
                                    {board.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm text-center leading-relaxed mb-6 font-normal">
                                    {board.description}
                                </p>
                            </div>

                            {/* Footer Status */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs font-bold text-slate-700 bg-slate-50/50 -mx-8 -mb-8 p-4 mt-4 group-hover:bg-blue-50/30 transition-colors duration-300">
                                <IconCircleCheck size={16} className="text-emerald-500" />
                                <span>Official Board Verified</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Custom Scroll Animations CSS */}
            <style>{`
                .board-card.animate-from-left {
                    transform: translateX(-60px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .board-card.animate-from-up {
                    transform: translateY(60px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .board-card.animate-from-right {
                    transform: translateX(60px);
                    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
                }

                .board-card.is-visible {
                    opacity: 1;
                    transform: translate(0, 0);
                }
            `}</style>
        </section>
    );
};

export default AffiliatedBoards;