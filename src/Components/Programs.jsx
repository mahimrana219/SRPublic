import React, { useEffect, useRef, useState } from 'react';
import { IconArrowRight } from '@tabler/icons-react';

// Images import kar liye hain assets folder se
import schoolImg from '../assets/school.png';
import collegeImg from '../assets/college.png';
import academyImg from '../assets/acadmey.png';
import coursesImg from '../assets/courses.png';

const Programs = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll Observer to trigger left/right slide animation when visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    const offerings = [
        {
            id: 1,
            image: schoolImg,
            title: "Explore School System",
            path: "/pages/school", // Yahan apna school ka page path dal dein
            slideClass: "from-left"
        },
        {
            id: 2,
            image: collegeImg,
            title: "Explore College System",
            path: "/pages/college", // Yahan college ka path dal dein
            slideClass: "from-right"
        },
        {
            id: 3,
            image: academyImg,
            title: "Join Coaching Academy",
            path: "/pages/academy", // Yahan academy ka path dal dein
            slideClass: "from-left"
        },
        {
            id: 4,
            image: coursesImg,
            title: "Browse Professional Courses",
            path: "/pages/courses", // Yahan courses ka path dal dein
            slideClass: "from-right"
        }
    ];

    return (
        <section ref={sectionRef} id="programs" className="py-24 px-4 md:px-16 bg-white relative overflow-hidden font-sans border-t border-gray-100">
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-3 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Comprehensive Education
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        What We Offer
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Complete academic and professional pathways under one roof, designed for absolute success.
                    </p>
                </div>

                {/* 2x2 Grid with Left/Right Scroll Entry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {offerings.map((item) => {
                        // Determine initial transform based on whether it comes from left or right
                        const isFromLeft = item.slideClass === "from-left";
                        
                        return (
                            <div key={item.id} className="flex flex-col items-center">
                                
                                {/* Card with Dark Blue Glow & Side Slide Animation */}
                                <div 
                                    className={`relative group w-full cursor-pointer transform transition-all duration-1000 ease-out hover:-translate-y-2 ${
                                        isVisible 
                                            ? 'opacity-100 translate-x-0' 
                                            : `opacity-0 ${isFromLeft ? '-translate-x-24' : 'translate-x-24'}`
                                    }`}
                                    onClick={() => {
                                        // TODO: Replace with your router navigation e.g., navigate(item.path)
                                        console.log(`Redirecting to: ${item.path}`);
                                        window.location.href = item.path;
                                    }}
                                >
                                    {/* Darker Rich Blue Glow behind card */}
                                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-700/40 via-blue-900/30 to-blue-600/40 rounded-[2.5rem] opacity-60 blur-2xl group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

                                    <div className="relative bg-white rounded-[2rem] p-4 md:p-6 border-2 border-blue-200 shadow-[0_10px_40px_rgba(6,43,102,0.12)] overflow-hidden flex flex-col items-center">
                                        <div className="w-full rounded-2xl overflow-hidden bg-slate-50 flex items-center justify-center">
                                            <img 
                                                src={item.image} 
                                                alt={item.title} 
                                                className="w-full h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 ease-out"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button with Continuous Loop Animation */}
                                <a 
                                    href={item.path}
                                    className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#062B66] hover:bg-[#EC7727] text-white text-xs md:text-sm font-bold tracking-wide transition-all duration-300 shadow-lg shadow-blue-900/20 group animate-bounce hover:animate-none"
                                    style={{ animationDuration: '3s' }}
                                >
                                    <span>{item.title}</span>
                                    <IconArrowRight size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                                </a>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Programs;