import React, { useState, useEffect, useRef } from 'react';
import { 
    IconMapPin, 
    IconExternalLink, 
    IconBuilding, 
    IconDirection,
    IconCompass
} from '@tabler/icons-react';

const Maps = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCampus, setActiveCampus] = useState('main'); // 'main' or 'second'
    const sectionRef = useRef(null);

    // Scroll reveal observer
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

    // Google Maps Embed and Search URLs
    const mainEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.0347898858175!2d67.1285!3d24.8865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3398c21a4f0b1%3A0x8e2c0e865f32a5e8!2sShah%20Faisal%20Colony%20No.%203%2C%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";
    const secondEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.854123456789!2d67.2012!3d24.8934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d5b21234567%3A0x123456789abcdef!2sSaudabad%2C%20Malir%2C%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

    const mainCampusMapUrl = "https://www.google.com/maps/search/?api=1&query=B-146+Shah+Faisal+Colony+No+3+Near+Shaukat+Memorial+Hospital+Karachi";
    const secondCampusMapUrl = "https://www.google.com/maps/search/?api=1&query=A-66+Indus+Mehran+Saudabad+Malir+Karachi";

    return (
        <section ref={sectionRef} id="campuses" className="py-20 md:py-28 px-4 md:px-16 bg-white relative overflow-hidden font-sans border-t border-gray-100">
            
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Our Institutional Network
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-5">
                        Explore Our Campuses & Maps
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Visit our academic branches across Karachi. Select a campus below to view its live interactive map location.
                    </p>
                </div>

                {/* Campus Toggle Switcher Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="flex flex-col sm:inline-flex sm:flex-row w-full sm:w-auto gap-1 p-1.5 rounded-2xl bg-slate-100 border border-gray-200 shadow-inner">
                        <button
                            onClick={() => setActiveCampus('main')}
                            className={`px-4 sm:px-6 py-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                activeCampus === 'main' 
                                    ? 'bg-[#062B66] text-white shadow-md' 
                                    : 'text-gray-600 hover:text-[#062B66]'
                            }`}
                        >
                            Main Campus (Shah Faisal)
                        </button>
                        <button
                            onClick={() => setActiveCampus('second')}
                            className={`px-4 sm:px-6 py-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                activeCampus === 'second' 
                                    ? 'bg-[#EC7727] text-white shadow-md' 
                                    : 'text-gray-600 hover:text-[#EC7727]'
                            }`}
                        >
                            Second Campus (Saudabad Malir)
                        </button>
                    </div>
                </div>

                {/* Live Google Map Container */}
                <div className="mb-12 rounded-[1.5rem] sm:rounded-[2.5rem] overflow-hidden border-4 border-slate-100 shadow-[0_20px_50px_rgba(6,43,102,0.1)] h-[320px] sm:h-[400px] md:h-[480px] relative transition-all duration-500">
                    <iframe 
                        title="Campus Location Map"
                        src={activeCampus === 'main' ? mainEmbedUrl : secondEmbedUrl}
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full grayscale-20 contrast-125"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-gray-200 shadow-lg pointer-events-none">
                        <p className="text-xs font-black text-[#062B66] uppercase">
                            {activeCampus === 'main' ? '📍 Main Campus View' : '📍 Second Campus View'}
                        </p>
                    </div>
                </div>

                {/* Campuses Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    
                    {/* Main Campus Card */}
                    <div 
                        onClick={() => setActiveCampus('main')}
                        className={`group bg-gradient-to-b from-slate-50/80 to-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border-2 transition-all duration-500 cursor-pointer ${
                            activeCampus === 'main' 
                                ? 'border-[#062B66] shadow-[0_20px_50px_rgba(6,43,102,0.15)] ring-4 ring-blue-900/5' 
                                : 'border-blue-100 shadow-[0_15px_40px_rgba(6,43,102,0.06)] opacity-75 hover:opacity-100'
                        }`}
                    >
                        <div className="flex items-start justify-between gap-3 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#062B66] text-white flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
                                <IconBuilding size={32} />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-[#EC7727]/10 text-[#EC7727] text-xs font-black uppercase tracking-wider">
                                Headquarters
                            </span>
                        </div>

                        <h3 className="text-2xl font-black text-[#062B66] mb-3 group-hover:text-[#EC7727] transition-colors">
                            Main Campus
                        </h3>
                        
                        <div className="flex items-start gap-3 mb-8">
                            <IconMapPin size={22} className="text-[#EC7727] shrink-0 mt-1" />
                            <div>
                                <p className="text-base font-bold text-[#062B66]">Shah Faisal Colony No. 3</p>
                                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                                    B-146, Shah Faisal Colony No. 3, Near Shaukat Memorial Hospital, Karachi.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                            <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5">
                                <IconCompass size={16} className="text-[#062B66]" /> Click card to view on map
                            </span>
                            <a 
                                href={mainCampusMapUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#062B66] hover:bg-[#EC7727] text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md group/btn cursor-pointer"
                            >
                                <span>Get Directions</span>
                                <IconExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Second Campus Card */}
                    <div 
                        onClick={() => setActiveCampus('second')}
                        className={`group bg-gradient-to-b from-slate-50/80 to-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 border-2 transition-all duration-500 cursor-pointer ${
                            activeCampus === 'second' 
                                ? 'border-[#EC7727] shadow-[0_20px_50px_rgba(236,119,39,0.15)] ring-4 ring-orange-500/5' 
                                : 'border-orange-100 shadow-[0_15px_40px_rgba(6,43,102,0.06)] opacity-75 hover:opacity-100'
                        }`}
                    >
                        <div className="flex items-start justify-between gap-3 mb-8">
                            <div className="w-16 h-16 rounded-2xl bg-[#EC7727] text-white flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform duration-300">
                                <IconDirection size={32} />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-[#062B66]/10 text-[#062B66] text-xs font-black uppercase tracking-wider">
                                Extension Branch
                            </span>
                        </div>

                        <h3 className="text-2xl font-black text-[#062B66] mb-3 group-hover:text-[#EC7727] transition-colors">
                            Second Campus
                        </h3>
                        
                        <div className="flex items-start gap-3 mb-8">
                            <IconMapPin size={22} className="text-[#062B66] shrink-0 mt-1" />
                            <div>
                                <p className="text-base font-bold text-[#062B66]">Saudabad Malir</p>
                                <p className="text-xs md:text-sm text-gray-500 font-medium mt-1">
                                    A-66, Indus Mehran, Saudabad, Malir, Karachi.
                                </p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
                            <span className="text-xs font-bold text-gray-400 flex items-center gap-1.5">
                                <IconCompass size={16} className="text-[#EC7727]" /> Click card to view on map
                            </span>
                            <a 
                                href={secondCampusMapUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#062B66] hover:bg-[#EC7727] text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-md group/btn cursor-pointer"
                            >
                                <span>Get Directions</span>
                                <IconExternalLink size={16} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Maps;