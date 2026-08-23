import React from 'react';
import { IconMapPin, IconPhone, IconMail, IconClock, IconSend, IconCircleCheck } from '@tabler/icons-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 md:px-16 bg-slate-50/50 relative overflow-hidden font-sans border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#062B66]/5 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#EC7727]"></span>
                        Get In Touch
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        Contact SR Public
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        Have questions about admissions, campuses, or professional courses? Reach out to us or visit our campus today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left Side: Contact Info Cards */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Phone Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#062B66] flex items-center justify-center shrink-0">
                                <IconPhone size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Call Us</h4>
                                <p className="text-base font-black text-[#062B66]">+92 (Karachi)</p>
                                <p className="text-xs text-gray-500 mt-0.5">Mon - Sat: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#EC7727] flex items-center justify-center shrink-0">
                                <IconMapPin size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Our Campuses</h4>
                                <p className="text-base font-black text-[#062B66]">Karachi, Sindh, Pakistan</p>
                                <p className="text-xs text-gray-500 mt-0.5">Multi-campus school, college & institute network</p>
                            </div>
                        </div>

                        {/* Email / Info Card */}
                        <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-start gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                                <IconMail size={24} />
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email Inquiries</h4>
                                <p className="text-base font-black text-[#062B66]">info@srpublic.edu.pk</p>
                                <p className="text-xs text-gray-500 mt-0.5">We reply within 24 hours</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Side: Professional Inquiry Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <h3 className="text-2xl font-black text-[#062B66] mb-2">Send Us a Message</h3>
                            <p className="text-gray-500 text-sm mb-8 font-medium">Fill out the form below for admissions or course registrations.</p>

                            <form onSubmit={(e) => { e.preventDefault(); alert("Message sent successfully!"); }} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-xs font-bold text-[#062B66] uppercase tracking-wider mb-2">Your Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="e.g. Ali Khan" 
                                            required
                                            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-sm font-medium text-[#062B66] focus:outline-none focus:border-[#062B66] transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold text-[#062B66] uppercase tracking-wider mb-2">Phone Number</label>
                                        <input 
                                            type="tel" 
                                            placeholder="e.g. 0300 1234567" 
                                            required
                                            className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-sm font-medium text-[#062B66] focus:outline-none focus:border-[#062B66] transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#062B66] uppercase tracking-wider mb-2">Select Program / Interest</label>
                                    <select className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-sm font-medium text-[#062B66] focus:outline-none focus:border-[#062B66] transition-colors">
                                        <option>School System (Grades 1-10)</option>
                                        <option>College & Intermediate (Pre-Eng / Pre-Med / Commerce)</option>
                                        <option>Professional IT & Skills Courses</option>
                                        <option>General Inquiry</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#062B66] uppercase tracking-wider mb-2">Your Message</label>
                                    <textarea 
                                        rows="4" 
                                        placeholder="Write your query here..." 
                                        required
                                        className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-gray-200 text-sm font-medium text-[#062B66] focus:outline-none focus:border-[#062B66] transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full py-4 rounded-2xl bg-[#062B66] hover:bg-[#05204d] text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20"
                                >
                                    <span>Send Message</span>
                                    <IconSend size={16} />
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Contact;