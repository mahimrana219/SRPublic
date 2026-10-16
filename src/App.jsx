import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// Home Page Components
import Hero from './Components/Hero';
import Staks from './Components/Stacks';
import Campuses from './Components/Campuses';
import AffiliatedBoards from './Components/AffiliatedBoards';
import CEO from './Components/CEO';
import Programs from './Components/Programs';
import Contact from './Components/Contact';
import Maps from './Components/Maps';

// Pages Folder Components
import AboutUs from './Pages/AboutUs';
import School from './Pages/School';
import Academy from './Pages/Academy';
import College from './Pages/College';
import Courses from './Pages/Courses';
import Contactform  from './Pages/Contactform';
import Admission from './Pages/Admission';
import Founder from './Pages/Founder';
import Gallery from './Pages/Gallery';

// WhatsApp Icon Image
import whatsappImg from './assets/whatsapp.png';

function Home() {
  return (
    <>
      <Hero />
      <Staks />
      <Campuses />
      <AffiliatedBoards />
      <CEO />
      <Programs />
      <Contact />
      <Maps />
      <Gallery limit={8} />
    </>
  );
}

// Floating WhatsApp Button Component with Image-matched Dark Transparent UI & Auto-Popup
const WhatsAppFloat = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [autoShow, setAutoShow] = useState(false);

  // Har 3 second baad message khud-ba-khud show/hide hoga
  useEffect(() => {
    const interval = setInterval(() => {
      setAutoShow((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const showMessage = isHovered || autoShow;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      {/* Sleek Dark Transparent Message Box (Matching the provided reference image) */}
      <div 
        className={`transition-all duration-500 transform bg-neutral-950/85 backdrop-blur-md text-white text-xs px-4 py-3 rounded-2xl shadow-2xl border border-neutral-800 flex items-center gap-3 relative ${
          showMessage ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        {/* Left Side Status Indicator (Green dot & 24/7 text) */}
        <div className="flex flex-col items-center shrink-0 pr-2 border-r border-neutral-800">
          <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse mb-1"></div>
          <span className="text-[10px] font-bold text-[#25D366] tracking-tighter">24/7</span>
        </div>

        {/* Message Text */}
        <p className="font-medium tracking-wide max-w-[200px] leading-relaxed">
          We here to assist your program!
        </p>

        {/* Small pointer tail pointing towards WhatsApp icon */}
        <div className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-neutral-950/85 border-r border-b border-neutral-800 transform rotate-[-45deg] rounded-xs"></div>
      </div>

      {/* Floating Green WhatsApp Button */}
      <a
        href="https://wa.me/923000000000" // Yahan apna WhatsApp number dal dein
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5c] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 relative group border-2 border-white shrink-0"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 pointer-events-none"></div>
        
        {/* WhatsApp Image */}
        <img 
          src={whatsappImg} 
          alt="WhatsApp" 
          className="w-8 h-8 object-contain relative z-10 filter drop-shadow-sm" 
        />
      </a>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/aboutus" element={<AboutUs />} />
        <Route path="/pages/school" element={<School />} />
        <Route path="/pages/academy" element={<Academy />} />
        <Route path="/pages/college" element={<College />} />
        <Route path="/pages/courses" element={<Courses />} />
        <Route path="/pages/contactform" element={<Contactform />} />
        <Route path="/pages/admission" element={<Admission />} />
        <Route path="/pages/founder" element={<Founder />} />
        <Route path="/pages/gallery" element={<Gallery />} />
        <Route path="/affiliatedboards" element={<AffiliatedBoards />} />
        <Route path="/programs" element={<Programs />} />
      </Routes>
      <Footer />
      
      {/* Global Floating WhatsApp Widget */}
      <WhatsAppFloat />
    </BrowserRouter>
  );
}

export default App;