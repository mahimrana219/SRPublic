import React from 'react';
import { 
    IconAirConditioning, 
    IconBook, 
    IconPalette, 
    IconFlask, 
    IconMath, 
    IconBrain, 
    IconUsers, 
    IconAward,
    IconDeviceLaptop,
    IconCertificate,
    IconSparkles
} from '@tabler/icons-react';

import SchoolBanner from '../assets/school1.png'; 

const School = () => {
  
  // 9th aur Matric ke Subjects ka Data
  const matricSubjects = {
    science: [
      { name: "Mathematics (Compulsory)", icon: IconMath },
      { name: "Physics (Compulsory)", icon: IconFlask },
      { name: "Chemistry (Compulsory)", icon: IconFlask },
      { name: "Biology (Elective)", icon: IconBrain },
      { name: "Computer Science (Elective)", icon: IconDeviceLaptop },
      { name: "English (Compulsory)", icon: IconBook },
      { name: "Urdu (Compulsory)", icon: IconBook },
      { name: "Islamiyat (Compulsory)", icon: IconAward },
      { name: "Pakistan Studies (Compulsory)", icon: IconCertificate },
    ],
    arts: [
      { name: "General Mathematics", icon: IconMath },
      { name: "General Science", icon: IconFlask },
      { name: "Economics", icon: IconBook },
      { name: "Civics", icon: IconUsers },
      { name: "Computer Studies", icon: IconDeviceLaptop },
      { name: "Physical Education", icon: IconUsers },
      { name: "English (Compulsory)", icon: IconBook },
      { name: "Urdu (Compulsory)", icon: IconBook },
      { name: "Islamiyat (Compulsory)", icon: IconAward },
      { name: "Pakistan Studies (Compulsory)", icon: IconCertificate },
    ]
  };

  // School Activities Data
  const activities = [
    { title: "Science Fair", description: "Innovative projects by young minds.", icon: IconFlask },
    { title: "Art & Craft Exhibition", description: "Showcasing creativity and talent.", icon: IconPalette },
    { title: "Sports Week", description: "Promoting physical fitness and teamwork.", icon: IconUsers },
    { title: "Debate & Naat Competitions", description: "Building confidence and public speaking.", icon: IconBrain },
    { title: "Educational Trips", description: "Learning beyond the classroom walls.", icon: IconBook },
  ];

  return (
    <div className="font-sans bg-gray-50 text-[#062B66] overflow-x-hidden">
      
      {/* --- Hero Header Section with Centered Heading --- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white px-5 sm:px-8 md:px-12 lg:px-16 pt-24 pb-10 sm:pt-28 sm:pb-12 border-b border-gray-100">
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute -left-20 sm:-left-30 top-1/4 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-blue-100 blur-3xl animate-pulse" />
          <div className="absolute -right-20 sm:-right-30 bottom-5 h-[250px] sm:h-[350px] w-[250px] sm:w-[350px] rounded-full bg-orange-100 blur-3xl animate-pulse" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center mb-8 sm:mb-12 px-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#062B66]/15 bg-white px-3.5 py-1.5 shadow-sm backdrop-blur-md mb-4 sm:mb-6">
            <span className="h-2 w-2 rounded-full bg-[#EC7727] animate-ping shrink-0" />
            <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#062B66]">
              Karachi Board & Ziauddin Board
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#062B66] mb-4 sm:mb-5 leading-tight">
            SR <span className="text-[#EC7727]">Public School</span>
          </h1>

          <p className="mx-auto max-w-2xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-600 font-normal px-2">
            Where Foundations of Excellence are Built. Providing Quality Education from Playgroup to Matric.
          </p>
        </div>

        {/* --- school1.png Banner Image placed below heading --- */}
        <div className="relative mx-auto max-w-6xl px-2 sm:px-4">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white bg-slate-900">
            <img 
              src={SchoolBanner} 
              alt="SR Public School Campus" 
              className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-contain object-center rounded-2xl sm:rounded-3xl"
            />
          </div>
        </div>
      </section>

      {/* --- Main Content Wrapper with proper side paddings --- */}
      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24 space-y-16 sm:space-y-24">

        {/* --- AC Classrooms & Environment --- */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <IconAirConditioning size={36} className="text-[#EC7727] bg-orange-50 p-2.5 rounded-2xl shadow-inner shrink-0" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062B66] tracking-tight">Premium Learning Environment</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-lg">At SR Public School, we believe comfort enhances concentration. Our entire campus, including every classroom, is fully air-conditioned to provide a cool, conducive, and focused atmosphere for your child's optimal learning experience, regardless of Karachi's weather.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-[#062B66] font-semibold text-xs sm:text-sm">
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-[#EC7727] rounded-full shrink-0"></span> Fully AC Classrooms</li>
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-[#EC7727] rounded-full shrink-0"></span> Modern Smart Boards</li>
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-[#EC7727] rounded-full shrink-0"></span> Ergonomic Furniture</li>
              <li className="flex items-center gap-2"><span className="w-2.5 h-2.5 bg-[#EC7727] rounded-full shrink-0"></span> Clean & Safe Campus</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop" alt="AC Classroom 1" className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-48 sm:h-64 object-cover mt-6 sm:mt-10 border-2 sm:border-4 border-white"/>
            <img src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=800&auto=format&fit=crop" alt="AC Classroom 2" className="rounded-2xl sm:rounded-3xl shadow-xl w-full h-48 sm:h-64 object-cover border-2 sm:border-4 border-white"/>
          </div>
        </section>

        {/* --- Activities & Co-Curricular --- */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center max-w-2xl mx-auto px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#062B66] tracking-tight">Beyond Books: Holistic Development</h2>
            <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-lg">Education isn't just about academics; it's about shaping a well-rounded personality. We offer a vibrant range of co-curricular activities to nurture talent, confidence, and leadership.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8 xl:gap-5">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white p-6 rounded-3xl shadow-xl text-center space-y-4 border-2 border-transparent hover:border-[#EC7727] transition-all duration-300 group transform hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex justify-center">
                  <activity.icon size={45} className="text-[#062B66] bg-blue-50 p-3 rounded-full group-hover:bg-[#EC7727] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#062B66]">{activity.title}</h4>
                <p className="text-gray-600 text-xs sm:text-sm">{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* --- 9th & Matric Subjects --- */}
        <section className="bg-white p-6 sm:p-10 md:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-2xl border border-gray-100">
          <div className="text-center mb-10 sm:mb-16 px-2">
            <span className="inline-block bg-[#062B66] text-white px-5 py-1.5 sm:px-6 sm:py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4 shadow">Class 9th & Matric (S.S.C)</span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-[#062B66] tracking-tighter">Comprehensive A-Z Subjects</h2>
            <p className="text-sm sm:text-xl text-gray-600 mt-4 sm:mt-6 max-w-3xl mx-auto">We follow the rigorous curriculum of the Boards of Intermediate and Secondary Education (Karachi & Ziauddin), preparing students for a bright future in both Science and Arts groups.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16">
            {/* Science Group */}
            <div className="space-y-6 sm:space-y-8 bg-blue-50 p-6 sm:p-10 rounded-3xl border border-blue-100 shadow-inner">
              <div className="flex items-center gap-3 sm:gap-4">
                <IconFlask size={40} className="text-[#EC7727] shrink-0" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B66] tracking-tight">Science Group</h3>
                  <p className="text-[#062B66]/80 text-sm sm:text-lg">For aspiring Engineers, Doctors, and IT Professionals.</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-4 text-sm sm:text-lg text-[#062B66]/90 font-medium">
                {matricSubjects.science.map((sub, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white px-4 sm:px-5 py-3 rounded-xl shadow-sm border border-gray-100">
                    <sub.icon size={18} className="text-[#EC7727] shrink-0" />
                    <span className="text-xs sm:text-sm">{sub.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Arts Group */}
            <div className="space-y-6 sm:space-y-8 bg-orange-50 p-6 sm:p-10 rounded-3xl border border-orange-100 shadow-inner">
              <div className="flex items-center gap-3 sm:gap-4">
                <IconUsers size={40} className="text-[#062B66] shrink-0" />
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B66] tracking-tight">Arts Group</h3>
                  <p className="text-[#062B66]/80 text-sm sm:text-lg">For students interested in Commerce, Humanities, and General fields.</p>
                </div>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-4 text-sm sm:text-lg text-[#062B66]/90 font-medium">
                {matricSubjects.arts.map((sub, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white px-4 sm:px-5 py-3 rounded-xl shadow-sm border border-gray-100">
                    <sub.icon size={18} className="text-[#EC7727] shrink-0" />
                    <span className="text-xs sm:text-sm">{sub.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 sm:mt-16 bg-[#062B66] text-white p-6 sm:p-8 rounded-3xl text-center shadow-lg">
            <p className="text-lg sm:text-2xl font-bold italic">"Our dedicated faculty ensures conceptual clarity and exam success for every student in 9th and Matric."</p>
          </div>
        </section>
        
      </main>
    </div>
  );
};

export default School;