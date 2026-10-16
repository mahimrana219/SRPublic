import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'School', path: '/pages/school' },
        { name: 'College', path: '/pages/college' },
        { name: 'Academy', path: '/pages/academy' },
        { name: 'About Us', path: '/pages/aboutus' },
        { name: 'Courses', path: '/pages/courses' },
        { name: 'Founder', path: '/pages/founder' },
        { name: 'Gallery', path: '/pages/gallery' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center p-3 md:p-5 transition-all duration-300">
            <nav className={`w-full max-w-7xl flex items-center justify-between px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl transition-all duration-300 backdrop-blur-xl bg-white/40 border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] ${isScrolled ? "shadow-md bg-white/60" : ""}`}>

                {/* Logo */}
                <a href="/" className="flex items-center gap-2">
                    <img src={logo} alt="SR Public Institute Logo" className="h-9 md:h-11 w-auto object-contain drop-shadow-sm" />
                </a>

                {/* Desktop Nav Links */}
                <div className="hidden xl:flex items-center gap-6 font-medium text-gray-800 text-sm">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className="relative group py-1 hover:text-[#EC7727] transition-colors">
                            {link.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#EC7727] transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </div>

                {/* Desktop Right Buttons */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="/pages/contactform" className="px-4.5 py-2 rounded-xl font-medium border border-[#2A5393]/40 text-[#2A5393] bg-white/30 hover:bg-[#2A5393] hover:text-white hover:border-[#2A5393] transition-all duration-300 text-xs md:text-sm shadow-sm">
                        Contact Us
                    </a>
                    <a href="/pages/admission" className="px-4.5 py-2 rounded-xl font-semibold bg-[#EC7727] text-white hover:bg-orange-600 transition-all duration-300 shadow-md text-xs md:text-sm">
                        Admission Open
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center xl:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-800 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                        </svg>
                    </button>
                </div>

            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white/85 backdrop-blur-2xl text-base flex flex-col xl:hidden items-center justify-center gap-4 sm:gap-6 overflow-y-auto font-semibold text-gray-800 transition-all duration-500 shadow-2xl z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-6 right-6 p-2 text-gray-800" onClick={() => setIsMenuOpen(false)}>
                    <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </button>

                <img src={logo} alt="Logo" className="h-12 w-auto mb-2" />

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)} className="text-lg hover:text-[#EC7727] transition-colors">
                        {link.name}
                    </a>
                ))}

                <div className="flex flex-col gap-3 w-3/4 mt-4">
                    <a href="/pages/contactform" onClick={() => setIsMenuOpen(false)} className="w-full text-center border-2 border-[#2A5393] text-[#2A5393] py-2.5 rounded-xl font-medium bg-white/50">
                        Contact Us
                    </a>
                    <a href="/pages/admission" onClick={() => setIsMenuOpen(false)} className="w-full text-center bg-[#EC7727] text-white py-2.5 rounded-xl shadow-md">
                        Admission Open
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;