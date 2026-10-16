import React, { useState, useEffect, useRef } from 'react';
import { 
    IconMapPin, 
    IconPhone, 
    IconMail, 
    IconClock, 
    IconSend, 
    IconShieldCheck, 
    IconSparkles, 
    IconBrandTiktok, 
    IconBrandInstagram, 
    IconBrandFacebook 
} from '@tabler/icons-react';

const Admission = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [formStatus, setFormStatus] = useState(false);
    const sectionRef = useRef(null);

    // Form state for detailed admission/query data
    const [formData, setFormData] = useState({
        studentName: '',
        fatherName: '',
        phone: '',
        email: '',
        program: 'College & Intermediate System',
        gender: 'Male',
        shift: 'Morning',
        previousSchool: '',
        message: ''
    });

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

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormStatus(true);
        // Yahan aap apni API ya backend integration kar sakte hain
        setTimeout(() => {
            setFormStatus(false);
            setFormData({
                studentName: '',
                fatherName: '',
                phone: '',
                email: '',
                program: 'College & Intermediate System',
                gender: 'Male',
                shift: 'Morning',
                previousSchool: '',
                message: ''
            });
        }, 5000);
    };

    return (
        <section ref={sectionRef} id="admission" className="pt-28 pb-20 md:pt-32 md:pb-28 px-4 md:px-16 bg-gradient-to-b from-slate-50/50 via-white to-slate-50/50 relative overflow-hidden font-sans border-t border-gray-100">
            
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className={`text-center max-w-3xl mx-auto mb-12 md:mb-20 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#062B66]/5 border border-[#062B66]/10 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727] animate-pulse"></span>
                        Admissions Open 2026-2027
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-5">
                        Apply Online or Send Inquiry
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Fill out the detailed admission form below to secure your placement or inquire about our programs. Our registrar office will reach out instantly.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Professional Information & Support Cards */}
                    <div className={`lg:col-span-5 space-y-6 transition-all duration-1000 delay-200 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`}>
                        
                        {/* Direct Helpline Card */}
                        <div className="group bg-white rounded-3xl p-5 sm:p-7 border-2 border-blue-100 shadow-[0_10px_30px_rgba(6,43,102,0.06)] hover:shadow-[0_20px_40px_rgba(6,43,102,0.1)] transition-all duration-300 flex items-start gap-4 sm:gap-5">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 text-[#062B66] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <IconPhone size={26} />
                            </div>
                            <div className="min-w-0">
                                <span className="inline-block text-xs font-black text-[#EC7727] uppercase tracking-wider mb-1">Direct Helpline</span>
                                <h4 className="text-lg font-black text-[#062B66]">+92 03025022117</h4>
                                <p className="text-xs text-gray-500 mt-1 font-medium flex items-center gap-1.5">
                                    <IconClock size={14} className="text-gray-400" /> Mon - Sat: 8:30 AM - 5:00 PM
                                </p>
                            </div>
                        </div>

                        {/* Campus Headquarters Card */}
                        <div className="group bg-white rounded-3xl p-5 sm:p-7 border-2 border-orange-100 shadow-[0_10px_30px_rgba(6,43,102,0.06)] hover:shadow-[0_20px_40px_rgba(6,43,102,0.1)] transition-all duration-300 flex items-start gap-4 sm:gap-5">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 text-[#EC7727] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <IconMapPin size={26} />
                            </div>
                            <div className="min-w-0">
                                <span className="inline-block text-xs font-black text-[#EC7727] uppercase tracking-wider mb-1">Main Campus</span>
                                <h4 className="text-lg font-black text-[#062B66]">Shah Faisal Colony No. 3</h4>
                                <p className="text-xs text-gray-500 mt-1 font-medium">
                                    B-146 Shah Faisal Colony No 3, Near Shaukat Memorial Hospital, Karachi
                                </p>
                            </div>
                        </div>

                        {/* Official Support Email Card */}
                        <div className="group bg-white rounded-3xl p-5 sm:p-7 border-2 border-emerald-100 shadow-[0_10px_30px_rgba(6,43,102,0.06)] hover:shadow-[0_20px_40px_rgba(6,43,102,0.1)] transition-all duration-300 flex items-start gap-4 sm:gap-5">
                            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                                <IconMail size={26} />
                            </div>
                            <div className="min-w-0">
                                <span className="inline-block text-xs font-black text-emerald-600 uppercase tracking-wider mb-1">Official Communications</span>
                                <h4 className="text-base sm:text-lg font-black text-[#062B66] break-all">info.srpublicedu@gmail.com</h4>
                                <p className="text-xs text-gray-500 mt-1 font-medium flex items-center gap-1.5">
                                    <IconShieldCheck size={14} className="text-emerald-600" /> Verified secure response desk
                                </p>
                            </div>
                        </div>

                        {/* Follow Us Social Box */}
                        <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-[0_10px_30px_rgba(6,43,102,0.04)] flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <span className="block text-xs font-black text-[#062B66] uppercase tracking-wider">Follow Our Channels</span>
                                <p className="text-xs text-gray-400 font-medium mt-0.5">Stay connected on social feeds</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <a 
                                    href="https://www.tiktok.com/@srpublic_official" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-[#062B66] hover:text-white text-[#062B66] flex items-center justify-center transition-all duration-300 shadow-sm group cursor-pointer"
                                    title="TikTok"
                                >
                                    <IconBrandTiktok size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a 
                                    href="https://www.instagram.com/srpublic_official01/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-[#EC7727] hover:text-white text-[#062B66] flex items-center justify-center transition-all duration-300 shadow-sm group cursor-pointer"
                                    title="Instagram"
                                >
                                    <IconBrandInstagram size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a 
                                    href="https://www.facebook.com/profile.php?id=61582179983690" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-[#062B66] hover:text-white text-[#062B66] flex items-center justify-center transition-all duration-300 shadow-sm group cursor-pointer"
                                    title="Facebook"
                                >
                                    <IconBrandFacebook size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Detailed Admission Form */}
                    <div className={`lg:col-span-7 transition-all duration-1000 delay-400 transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`}>
                        <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 border-2 border-blue-100 shadow-[0_20px_60px_rgba(6,43,102,0.08)] relative overflow-hidden">
                            
                            {/* Top Accent bar */}
                            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#062B66] via-blue-600 to-[#EC7727]"></div>

                            <div className="mb-8">
                                <h3 className="text-2xl md:text-3xl font-black text-[#062B66] mb-2 tracking-tight">Student Admission Form</h3>
                                <p className="text-gray-500 text-xs md:text-sm font-medium">Please provide accurate applicant details for registration and seat reservation.</p>
                            </div>

                            {formStatus && (
                                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs md:text-sm font-bold flex items-center gap-3 animate-fade-in">
                                    <IconSparkles size={20} className="shrink-0 text-emerald-600" />
                                    <span>Application submitted successfully! Our admission desk will contact you soon.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Student Name */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Student Full Name *</label>
                                        <input 
                                            type="text" 
                                            name="studentName"
                                            value={formData.studentName}
                                            onChange={handleChange}
                                            placeholder="e.g. Muhammad Ahmed" 
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all"
                                        />
                                    </div>
                                    {/* Father's Name */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Father's / Guardian Name *</label>
                                        <input 
                                            type="text" 
                                            name="fatherName"
                                            value={formData.fatherName}
                                            onChange={handleChange}
                                            placeholder="e.g. Tariq Ahmed" 
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Phone Number */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Contact / WhatsApp Number *</label>
                                        <input 
                                            type="tel" 
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="e.g. 0300 1234567" 
                                            required
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all"
                                        />
                                    </div>
                                    {/* Email Address */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Email Address (Optional)</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="name@example.com" 
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Target Program */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Select Program *</label>
                                        <select 
                                            name="program"
                                            value={formData.program}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all cursor-pointer"
                                        >
                                            <option value="School System (Grades 1-10)">School System (Grades 1-10)</option>
                                            <option value="College & Intermediate System">College & Intermediate System</option>
                                            <option value="Coaching & Academic Academy">Coaching & Academic Academy</option>
                                            <option value="Professional IT & Skill Courses">Professional IT & Skill Courses</option>
                                            <option value="General Administration Query">General Administration Query</option>
                                        </select>
                                    </div>
                                    {/* Shift Selection */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Preferred Shift *</label>
                                        <select 
                                            name="shift"
                                            value={formData.shift}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all cursor-pointer"
                                        >
                                            <option value="Morning">Morning Shift</option>
                                            <option value="Evening">Evening / Coaching Shift</option>
                                            <option value="Weekend">Weekend Batch</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Gender */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Gender *</label>
                                        <select 
                                            name="gender"
                                            value={formData.gender}
                                            onChange={handleChange}
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all cursor-pointer"
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    {/* Previous School / College */}
                                    <div>
                                        <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Previous School / Institute</label>
                                        <input 
                                            type="text" 
                                            name="previousSchool"
                                            value={formData.previousSchool}
                                            onChange={handleChange}
                                            placeholder="e.g. ABC Public School" 
                                            className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Message Description */}
                                <div>
                                    <label className="block text-xs font-black text-[#062B66] uppercase tracking-wider mb-2">Additional Comments / Queries</label>
                                    <textarea 
                                        name="message"
                                        rows="3" 
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Any specific subjects or questions you want to ask..." 
                                        className="w-full px-5 py-4 rounded-2xl bg-slate-50/80 border border-gray-200 text-sm font-semibold text-[#062B66] focus:outline-none focus:bg-white focus:border-[#062B66] focus:ring-4 focus:ring-blue-900/5 transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    className="w-full py-4.5 rounded-2xl bg-[#062B66] hover:bg-[#EC7727] text-white font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-xl shadow-blue-900/20 group cursor-pointer"
                                >
                                    <span>Submit Admission Form</span>
                                    <IconSend size={16} className="transform group-hover:translate-x-1.5 transition-transform duration-300" />
                                </button>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Admission;