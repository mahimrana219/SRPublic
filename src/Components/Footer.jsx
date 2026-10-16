import React, { useState } from 'react';
import { IconMail, IconSend, IconPhone, IconMapPin, IconCircleCheck } from '@tabler/icons-react';

// Logo Image (Apne assets folder ke path ke mutabiq adjust kar sakte hain)
import logoImg from '../assets/logo.png';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setSubscribed(true);
            setEmail('');
            setTimeout(() => setSubscribed(false), 4000);
        }
    };

    return (
        <footer className="bg-[#062B66] text-white pt-20 pb-12 px-4 md:px-16 font-sans relative overflow-hidden">
            
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#EC7727]/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Newsletter / Get Updates Section */}
                <div className="bg-gradient-to-r from-[#0a387d] to-[#05204d] rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10 shadow-2xl mb-16 flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl text-center lg:text-left">
                        <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold bg-[#EC7727]/20 text-[#EC7727] uppercase tracking-wider mb-3">
                            Stay Updated
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mb-2">
                            Get Admissions & Course Updates
                        </h3>
                        <p className="text-gray-300 text-sm font-normal">
                            Subscribe to our newsletter to receive latest announcements, admission notices, and tech course schedules directly in your inbox.
                        </p>
                    </div>

                    <div className="w-full lg:w-auto lg:min-w-[320px]">
                        {subscribed ? (
                            <div className="bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 px-6 py-4 rounded-2xl flex items-center justify-center gap-3 text-sm font-bold">
                                <IconCircleCheck size={20} />
                                <span>Thank you for subscribing!</span>
                            </div>
                        ) : (
                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-grow">
                                    <IconMail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address" 
                                        required
                                        className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 border border-white/20 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#EC7727] transition-colors"
                                    />
                                </div>
                                <button 
                                    type="submit"
                                    className="px-6 py-3.5 rounded-2xl bg-[#EC7727] hover:bg-[#d9681e] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shrink-0"
                                >
                                    <span>Subscribe</span>
                                    <IconSend size={15} />
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Main Footer Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
                    
                    {/* Brand Col with Logo */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            {logoImg ? (
                                <img 
                                    src={logoImg} 
                                    alt="SR Public Logo" 
                                    className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-xl bg-white/10 p-1.5 border border-white/15"
                                />
                            ) : null}
                            <h2 className="text-2xl font-black tracking-tight text-white">
                                SR <span className="text-[#EC7727]">Public</span>
                            </h2>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed font-normal">
                            The premier educational hub in Karachi encompassing schools, colleges, academies, and professional technical institutes under the visionary leadership of Mr. Rizwan Ahmed.
                        </p>
                        <div className="pt-2 text-xs text-gray-400 space-y-1.5 font-medium">
                            <p className="flex items-center gap-2"><IconMapPin size={14} className="text-[#EC7727]" /> Karachi, Sindh, Pakistan</p>
                            <p className="flex items-center gap-2"><IconPhone size={14} className="text-[#EC7727]" /> Official Helpline Support</p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#EC7727]">Quick Links</h4>
                        <ul className="space-y-2.5 text-sm text-gray-300 font-medium">
                            <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                            <li><a href="/pages/founder" className="hover:text-white transition-colors">Mastermind</a></li>
                            <li><a href="/affiliatedboards" className="hover:text-white transition-colors">Board Affiliations</a></li>
                            <li><a href="/programs" className="hover:text-white transition-colors">Programs & Courses</a></li>
                            <li><a href="/pages/gallery" className="hover:text-white transition-colors">Gallery</a></li>
                            <li><a href="/pages/contactform" className="hover:text-white transition-colors">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Programs Offered */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#EC7727]">Offerings</h4>
                        <ul className="space-y-2.5 text-sm text-gray-300 font-medium">
                            <li>School System (Grades 1-10)</li>
                            <li>College & Intermediate</li>
                            <li>English Language & CIT</li>
                            <li>Full Stack & Web Development</li>
                            <li>Graphic & UI/UX Designing</li>
                            <li>Digital Marketing & Amazon</li>
                        </ul>
                    </div>

                    {/* Examination Boards */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-sm font-extrabold uppercase tracking-widest text-[#EC7727]">Affiliated Boards</h4>
                        <ul className="space-y-2.5 text-sm text-gray-300 font-medium">
                            <li>Board of Secondary Education Karachi</li>
                            <li>Intermediate Board of Karachi (BIEK)</li>
                            <li>Ziauddin Examination Board</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Copyright */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-medium gap-4">
                    <p>© {new Date().getFullYear()} SR Public. All Rights Reserved.</p>
                    <p>Designed for Excellence in Karachi</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;