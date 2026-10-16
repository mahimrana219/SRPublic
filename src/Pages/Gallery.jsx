import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    IconPhoto,
    IconVideo,
    IconLayoutGrid,
    IconX,
    IconChevronLeft,
    IconChevronRight,
    IconPlayerPlayFilled,
    IconZoomIn,
    IconArrowRight,
} from '@tabler/icons-react';

import campusCorridor1 from '../assets/gallery/campus-corridor-1.jpg';
import campusCorridor2 from '../assets/gallery/campus-corridor-2.jpg';
import principalOffice1 from '../assets/gallery/principal-office-1.jpg';
import principalOffice2 from '../assets/gallery/principal-office-2.jpg';
import reception1 from '../assets/gallery/reception-1.jpg';
import reception2 from '../assets/gallery/reception-2.jpg';
import studentUniform from '../assets/gallery/student-uniform.jpg';
import classroomWallArt from '../assets/gallery/classroom-wall-art.jpg';

// Saari videos gallery folder se khud-ba-khud load ho jayengi (video-01.mp4, video-02.mp4 ...)
const videoFiles = import.meta.glob('../assets/gallery/*.mp4', { eager: true, import: 'default' });

const photos = [
    { type: 'image', src: campusCorridor1, title: 'Campus Corridor & Result Board' },
    { type: 'image', src: studentUniform, title: 'Ahmed – Class 1' },
    { type: 'image', src: principalOffice1, title: 'Principal Office' },
    { type: 'image', src: reception1, title: 'Reception & Admission Desk' },
    { type: 'image', src: classroomWallArt, title: 'Classroom Learning Wall Art' },
    { type: 'image', src: campusCorridor2, title: 'Library & Toppers Board' },
    { type: 'image', src: principalOffice2, title: 'Administration Office' },
    { type: 'image', src: reception2, title: 'Front Office' },
];

const videos = Object.keys(videoFiles)
    .sort()
    .map((path, i) => ({ type: 'video', src: videoFiles[path], title: `Campus Moments ${i + 1}` }));

// Photos aur videos ko mix kar ke dikhana (2 photo, 1 video ...) taake grid balanced lage
const mixMedia = () => {
    const result = [];
    let p = 0, v = 0;
    while (p < photos.length || v < videos.length) {
        if (p < photos.length) result.push(photos[p++]);
        if (p < photos.length) result.push(photos[p++]);
        if (v < videos.length) result.push(videos[v++]);
    }
    return result;
};
const allMedia = mixMedia();

const filters = [
    { key: 'all', label: 'All', icon: IconLayoutGrid, count: allMedia.length },
    { key: 'image', label: 'Photos', icon: IconPhoto, count: photos.length },
    { key: 'video', label: 'Videos', icon: IconVideo, count: videos.length },
];

const Gallery = ({ limit }) => {
    const isPreview = Boolean(limit);
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeIndex, setActiveIndex] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    const touchStartX = useRef(null);

    const filtered = activeFilter === 'all' ? allMedia : allMedia.filter((m) => m.type === activeFilter);
    const items = isPreview ? filtered.slice(0, limit) : filtered;
    const activeItem = activeIndex !== null ? items[activeIndex] : null;

    // Scroll reveal observer
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.05 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const close = useCallback(() => setActiveIndex(null), []);
    const next = useCallback(() => setActiveIndex((i) => (i + 1) % items.length), [items.length]);
    const prev = useCallback(() => setActiveIndex((i) => (i - 1 + items.length) % items.length), [items.length]);

    // Keyboard controls + background scroll lock jab lightbox khula ho
    useEffect(() => {
        if (activeIndex === null) return;
        const onKey = (e) => {
            if (e.key === 'Escape') close();
            if (e.key === 'ArrowRight') next();
            if (e.key === 'ArrowLeft') prev();
        };
        window.addEventListener('keydown', onKey);
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
        };
    }, [activeIndex, close, next, prev]);

    // Mobile swipe
    const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
    const onTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = e.changedTouches[0].clientX - touchStartX.current;
        if (Math.abs(diff) > 50) (diff < 0 ? next : prev)();
        touchStartX.current = null;
    };

    return (
        <section
            ref={sectionRef}
            id="gallery"
            className={`relative overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white px-4 md:px-8 lg:px-16 font-sans border-t border-gray-100 ${isPreview ? 'py-20 md:py-24' : 'pt-28 pb-20 md:pt-36 md:pb-24'}`}
        >
            {/* Background Decorative Glow */}
            <div className="absolute top-0 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-10 md:mb-14 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Life at SR Public
                    </div>
                    {isPreview ? (
                        <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                            Our <span className="text-[#EC7727]">Gallery</span>
                        </h2>
                    ) : (
                        <h1 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                            Our <span className="text-[#EC7727]">Gallery</span>
                        </h1>
                    )}
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        A glimpse into our campus, classrooms, offices and everyday student life. Tap any photo or video to view it in full screen.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="inline-flex w-full sm:w-auto p-1.5 rounded-2xl bg-slate-100 border border-gray-200 shadow-inner">
                        {filters.map((f) => (
                            <button
                                key={f.key}
                                onClick={() => setActiveFilter(f.key)}
                                className={`flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                                    activeFilter === f.key ? 'bg-[#062B66] text-white shadow-md' : 'text-gray-600 hover:text-[#062B66]'
                                }`}
                            >
                                <f.icon size={16} className="shrink-0" />
                                <span>{f.label}</span>
                                <span className={`hidden sm:inline-block px-1.5 py-0.5 rounded-md text-[10px] ${activeFilter === f.key ? 'bg-white/20' : 'bg-gray-200'}`}>
                                    {f.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Media Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
                    {items.map((item, index) => (
                        <button
                            key={item.src}
                            onClick={() => setActiveIndex(index)}
                            className={`group relative aspect-[4/5] w-full overflow-hidden rounded-2xl md:rounded-3xl bg-slate-900 border-2 border-white shadow-lg shadow-slate-300/40 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 cursor-pointer text-left ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                            style={{ transitionDelay: isVisible ? `${Math.min(index, 12) * 50}ms` : '0ms' }}
                            aria-label={`Open ${item.title}`}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />
                            ) : (
                                <video
                                    src={`${item.src}#t=0.5`}
                                    muted
                                    playsInline
                                    preload="metadata"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                                />
                            )}

                            {/* Gradient + Caption */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                <p className="text-white text-[11px] sm:text-sm font-bold leading-snug line-clamp-2 drop-shadow">{item.title}</p>
                            </div>

                            {/* Type badge */}
                            <div className="absolute top-2 left-2 sm:top-3 sm:left-3 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white/90 backdrop-blur-md text-[#062B66] text-[9px] sm:text-[10px] font-black uppercase tracking-wider shadow">
                                {item.type === 'image' ? <IconPhoto size={12} /> : <IconVideo size={12} />}
                                {item.type === 'image' ? 'Photo' : 'Video'}
                            </div>

                            {/* Center icon */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                {item.type === 'video' ? (
                                    <span className="w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#EC7727] text-white flex items-center justify-center shadow-xl ring-4 ring-white/30 group-hover:scale-110 transition-transform duration-300">
                                        <IconPlayerPlayFilled size={20} className="ml-0.5" />
                                    </span>
                                ) : (
                                    <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white/90 text-[#062B66] flex items-center justify-center shadow-xl opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                                        <IconZoomIn size={20} />
                                    </span>
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                {/* View full gallery button (sirf Home page preview par) */}
                {isPreview && (
                    <div className="flex justify-center mt-10 md:mt-14">
                        <a
                            href="/pages/gallery"
                            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#062B66] hover:bg-[#EC7727] text-white text-xs font-black uppercase tracking-wider transition-all duration-300 shadow-lg shadow-blue-900/20"
                        >
                            <span>View Full Gallery</span>
                            <IconArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {activeItem && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex flex-col"
                    onClick={close}
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                    role="dialog"
                    aria-modal="true"
                >
                    {/* Top bar */}
                    <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3 sm:py-4 text-white shrink-0" onClick={(e) => e.stopPropagation()}>
                        <div className="min-w-0">
                            <p className="text-sm sm:text-base font-bold truncate">{activeItem.title}</p>
                            <p className="text-[11px] sm:text-xs text-gray-400">{activeIndex + 1} / {items.length}</p>
                        </div>
                        <button
                            onClick={close}
                            className="w-10 h-10 sm:w-11 sm:h-11 shrink-0 rounded-full bg-white/10 hover:bg-[#EC7727] flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Close"
                        >
                            <IconX size={22} />
                        </button>
                    </div>

                    {/* Media */}
                    <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16 md:px-20 pb-4 sm:pb-6">
                        <div className="w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                            {activeItem.type === 'image' ? (
                                <img
                                    key={activeItem.src}
                                    src={activeItem.src}
                                    alt={activeItem.title}
                                    className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-[galleryZoom_0.3s_ease-out]"
                                />
                            ) : (
                                <video
                                    key={activeItem.src}
                                    src={activeItem.src}
                                    controls
                                    autoPlay
                                    playsInline
                                    className="max-w-full max-h-full rounded-xl shadow-2xl bg-black animate-[galleryZoom_0.3s_ease-out]"
                                />
                            )}
                        </div>

                        {items.length > 1 && (
                            <>
                                <button
                                    onClick={(e) => { e.stopPropagation(); prev(); }}
                                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#EC7727] text-white flex items-center justify-center transition-colors cursor-pointer"
                                    aria-label="Previous"
                                >
                                    <IconChevronLeft size={24} />
                                </button>
                                <button
                                    onClick={(e) => { e.stopPropagation(); next(); }}
                                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-[#EC7727] text-white flex items-center justify-center transition-colors cursor-pointer"
                                    aria-label="Next"
                                >
                                    <IconChevronRight size={24} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            <style>{`
                @keyframes galleryZoom {
                    0% { opacity: 0; transform: scale(0.95); }
                    100% { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </section>
    );
};

export default Gallery;
