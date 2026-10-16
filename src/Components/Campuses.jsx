import React, { useEffect, useRef } from 'react';
import { IconMapPin, IconClock, IconBuilding } from '@tabler/icons-react';

import campus1Img from '../assets/campus1.png';
import campus2Img from '../assets/campus2.png';

const Campuses = () => {
    const campusesData = [
        {
            id: 1,
            title: "Campus 1",
            location: "Shah Faisal Colony Number 3, Karachi",
            description: "Our main branch equipped with state-of-the-art labs, expansive classrooms, and a disciplined environment for foundational to higher studies.",
            image: campus1Img,
            status: "Active",
            animation: "slideInLeft", // Left se aayega
        },
        {
            id: 2,
            title: "Campus 2",
            location: "Saudabad, Karachi",
            description: "Dedicated campus focusing on intermediate education, pre-engineering, pre-medical, and rigorous academic mentorship under expert faculty.",
            image: campus2Img,
            status: "Active",
            animation: "slideInRight", // Right se aayega
        },
        {
            id: 3,
            title: "Campus 3",
            location: "Gulistan-e-Jauhar, Karachi",
            description: "Our upcoming grand campus bringing world-class educational standards closer to your neighborhood. Opening very soon!",
            image: null,
            status: "Coming Soon",
            animation: "slideInLeft", // Left se aayega
        },
    ];

    // Scroll Observer for scroll-triggered animations
    const cardRefs = useRef([]);

    useEffect(() => {
        const observerCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-active');
                    observer.unobserve(entry.target); // Ek dafa animate hone ke baad disconnect kar dein
                }
            });
        };

        const observerOptions = {
            root: null,
            rootMargin: '0px 0px -100px 0px', // Thoda pehle trigger ho jaye ga
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
        <section className="py-16 md:py-24 px-4 md:px-16 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto">
                
                {/* Professional Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Our Network
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        Explore Our Campuses
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                        Scroll through our campuses below. Hover over each view to reveal detailed information.
                    </p>
                </div>

                {/* Vertical Stacked Layout */}
                <div className="flex flex-col gap-8 md:gap-12">
                    {campusesData.map((campus, index) => (
                        <div 
                            key={campus.id}
                            ref={(el) => (cardRefs.current[index] = el)}
                            className={`scroll-card opacity-0 group relative w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-950 cursor-pointer ${campus.animation}`}
                        >
                            {campus.image ? (
                                <div className="relative w-full flex items-center justify-center bg-slate-950">
                                    {/* Original Image Display without cropping (object-contain) */}
                                    <img 
                                        src={campus.image} 
                                        alt={campus.title}
                                        className="w-full h-auto max-h-[600px] object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                                    />
                                    
                                    {/* Minimal bottom gradient for initial text readability */}
                                    <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"></div>

                                    {/* Hover Overlay - Clean Dark Professional Reveal */}
                                    <div className="hidden md:flex absolute inset-0 bg-[#062B66]/95 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex-col justify-center items-center text-center p-8 md:p-16">
                                        <span className="text-[#EC7727] text-xs md:text-sm font-bold tracking-widest uppercase mb-3 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                            SR Public Institute Network
                                        </span>
                                        <h3 className="text-4xl md:text-5xl font-black text-white mb-4 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                            {campus.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-orange-300 text-base md:text-lg font-semibold mb-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <IconMapPin size={22} />
                                            <span>{campus.location}</span>
                                        </div>
                                        <p className="text-gray-200 text-sm md:text-base max-w-2xl leading-relaxed transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                                            {campus.description}
                                        </p>
                                    </div>

                                    {/* Badge Top Right */}
                                    <div className="absolute top-3 right-3 md:top-6 md:right-6 z-10">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-bold text-white bg-emerald-500 shadow-lg">
                                            <span className="w-2 h-2 rounded-full bg-white"></span>
                                            {campus.status}
                                        </span>
                                    </div>

                                    {/* Always Visible Title Bottom Left (Before Hover) */}
                                    <div className="hidden md:block absolute bottom-6 left-6 right-6 z-10 group-hover:opacity-0 transition-opacity duration-300">
                                        <h3 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                                            {campus.title} — <span className="text-gray-200 font-medium text-base md:text-lg">{campus.location}</span>
                                        </h3>
                                    </div>
                                </div>
                            ) : null}

                            {/* Mobile info (touch screens have no hover) */}
                            {campus.image && (
                                <div className="md:hidden p-5 text-left">
                                    <h3 className="text-xl font-black text-white mb-1">{campus.title}</h3>
                                    <div className="flex items-start gap-1.5 text-orange-300 text-sm font-semibold mb-2">
                                        <IconMapPin size={16} className="shrink-0 mt-0.5" />
                                        <span>{campus.location}</span>
                                    </div>
                                    <p className="text-gray-300 text-xs leading-relaxed">{campus.description}</p>
                                </div>
                            )}

                            {!campus.image && (
                                /* 3rd Campus: Coming Soon Layout */
                                <div className="w-full min-h-[340px] md:h-[400px] bg-gradient-to-r from-[#062B66] via-[#0d3b88] to-gray-900 flex flex-col items-center justify-center p-8 md:p-16 text-center relative overflow-hidden group">
                                    <div className="absolute -right-20 -bottom-20 text-white/5 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                        <IconBuilding size={380} stroke={1} />
                                    </div>

                                    <span className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full text-xs md:text-sm font-bold text-white bg-[#EC7727] shadow-xl mb-6 animate-pulse">
                                        <IconClock size={16} />
                                        Coming Soon
                                    </span>

                                    <h3 className="text-3xl sm:text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                                        Campus III
                                    </h3>
                                    
                                    <div className="flex items-center justify-center gap-2 text-orange-200 text-base md:text-lg font-semibold mb-6">
                                        <IconMapPin size={22} className="text-[#EC7727]" />
                                        <span>Gulistan-e-Jauhar, Karachi</span>
                                    </div>

                                    <p className="text-gray-300 text-sm md:text-base max-w-xl leading-relaxed">
                                        {campus.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            {/* Custom Scroll Animations Styles */}
            <style>{`
                .scroll-card.slideInLeft {
                    transform: translateX(-80px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .scroll-card.slideInRight {
                    transform: translateX(80px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .scroll-card.animate-active {
                    opacity: 1;
                    transform: translateX(0);
                }
            `}</style>
        </section>
    );
};

export default Campuses;