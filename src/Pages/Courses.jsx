// import React from 'react';
// import { 
//   IconLanguage, 
//   IconDeviceLaptop, 
//   IconPalette, 
//   IconCode, 
//   IconShoppingBag, 
//   IconLayout, 
//   IconTrendingUp, 
//   IconBrandAmazon, 
//   IconFileSpreadsheet, 
//   IconBriefcase, 
//   IconChartLine, 
//   IconArrowRight,
//   IconClock,
//   IconStar,
//   IconCheck
// } from '@tabler/icons-react';

// const Courses = () => {
//   const coursesList = [
//     { 
//       title: "English Language", 
//       category: "Language", 
//       duration: "2 Months", 
//       rating: "4.9", 
//       features: ["Spoken Fluency", "Grammar & Vocab", "Certificate"],
//       icon: <IconLanguage className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "CIT (Information Tech)", 
//       category: "Technology", 
//       duration: "3 Months", 
//       rating: "4.8", 
//       features: ["Computer Fundamentals", "MS Windows", "Office Automation"],
//       icon: <IconDeviceLaptop className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Graphic Designing", 
//       category: "Design", 
//       duration: "3 Months", 
//       rating: "4.9", 
//       features: ["Photoshop & Illustrator", "Brand Identity", "Portfolio Projects"],
//       icon: <IconPalette className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Full Stack Development", 
//       category: "Development", 
//       duration: "6 Months", 
//       rating: "5.0", 
//       features: ["React, Node.js", "Tailwind & Databases", "Live Capstone Project"],
//       icon: <IconCode className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Shopify & WordPress", 
//       category: "E-Commerce", 
//       duration: "2 Months", 
//       rating: "4.8", 
//       features: ["Store Customization", "Payment Gateways", "Dropshipping setup"],
//       icon: <IconShoppingBag className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "UI/UX Designing", 
//       category: "Design", 
//       duration: "3 Months", 
//       rating: "4.9", 
//       features: ["Figma & Wireframing", "User Research", "Interactive Prototypes"],
//       icon: <IconLayout className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Digital Marketing", 
//       category: "Marketing", 
//       duration: "3 Months", 
//       rating: "4.7", 
//       features: ["Meta & Google Ads", "SEO Strategies", "Social Media Growth"],
//       icon: <IconTrendingUp className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Amazon FBA / E-Comm", 
//       category: "E-Commerce", 
//       duration: "2 Months", 
//       rating: "4.8", 
//       features: ["Product Research", "PPC Campaigns", "Account Management"],
//       icon: <IconBrandAmazon className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "MS Office Suite", 
//       category: "Productivity", 
//       duration: "1.5 Months", 
//       rating: "4.9", 
//       features: ["Advanced Excel", "Word & PowerPoint", "Data Management"],
//       icon: <IconFileSpreadsheet className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Job Interview Prep", 
//       category: "Career", 
//       duration: "1 Month", 
//       rating: "4.9", 
//       features: ["Mock Interviews", "Resume Optimization", "Soft Skills Training"],
//       icon: <IconBriefcase className="w-6 h-6 text-[#EC7727]" /> 
//     },
//     { 
//       title: "Forex & Crypto Trading", 
//       category: "Trading", 
//       duration: "3 Months", 
//       rating: "5.0", 
//       features: ["Technical Analysis", "Risk Management", "Live Market Setup"],
//       icon: <IconChartLine className="w-6 h-6 text-[#EC7727]" /> 
//     },
//   ];

//   return (
//     <section className="relative w-full bg-[#FFFFFF] py-20 px-4 sm:px-6 overflow-hidden border-t border-neutral-200">
      
//       {/* Soft Bright Background Glow Effect using brand colors */}
//       <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
//         <div className="w-[600px] h-[300px] bg-gradient-to-r from-[#062B66] to-[#EC7727] rounded-full blur-[120px]"></div>
//       </div>

//       {/* Main Container */}
//       <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
//         {/* Section Header */}
//         <div className="w-full text-center mb-12 flex flex-col items-center">
//           <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#062B66] bg-[#062B66]/5 border border-[#062B66]/15 px-3.5 py-1 rounded-full mt-10 shadow-2xs">
//             PROFESSIONAL CERTIFICATIONS
//           </span>
//           <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062B66] mb-3">
//             Explore Our <span className="bg-gradient-to-r from-[#062B66] to-[#EC7727] bg-clip-text text-transparent">Courses</span>
//           </h2>
//           <p className="text-neutral-600 text-xs sm:text-sm max-w-lg">
//             Enroll this month and get <span className="text-[#EC7727] font-bold">1 course absolutely free</span> for the next month! Master in-demand skills with expert mentors.
//           </p>
//         </div>

//         {/* Detailed Cards Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
//           {coursesList.map((course, index) => (
//             <div
//               key={index}
//               className="bg-[#FAFAFA] border border-neutral-200 rounded-2xl p-5 relative flex flex-col justify-between shadow-2xs transition-all duration-300 hover:border-[#EC7727]/60 hover:shadow-md hover:-translate-y-1.5 group"
//             >
//               {/* Top Accent Gradient Bar */}
//               <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#062B66] to-[#EC7727] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>

//               <div>
//                 {/* Header Top: Icon & Rating */}
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="w-11 h-11 rounded-xl bg-[#062B66]/5 border border-[#062B66]/10 flex items-center justify-center shadow-2xs">
//                     {course.icon}
//                   </div>
//                   <div className="flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-full">
//                     <IconStar className="w-3 h-3 text-amber-500 fill-amber-500" />
//                     <span className="text-[11px] font-bold text-neutral-800">{course.rating}</span>
//                   </div>
//                 </div>

//                 {/* Course Title */}
//                 <h3 className="text-sm sm:text-base font-bold text-[#062B66] mb-2 group-hover:text-[#EC7727] transition-colors">
//                   {course.title}
//                 </h3>

//                 {/* Duration Tag */}
//                 <div className="flex items-center gap-1.5 text-neutral-500 text-xs mb-4">
//                   <IconClock className="w-3.5 h-3.5 text-[#EC7727]" />
//                   <span>Duration: <strong className="text-neutral-800">{course.duration}</strong></span>
//                 </div>

//                 {/* Detailed Features List */}
//                 <div className="flex flex-col gap-1.5 mb-6 pt-3 border-t border-neutral-200">
//                   {course.features.map((feature, fIdx) => (
//                     <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-600">
//                       <div className="w-4 h-4 rounded-full bg-[#EC7727]/10 flex items-center justify-center text-[#EC7727] shrink-0">
//                         <IconCheck className="w-3 h-3" />
//                       </div>
//                       <span>{featuresMappingCheck(feature)}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Bottom Action Footer */}
//               <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
//                 <span className="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">{course.category}</span>
//                 <a 
//                   href="#contact" 
//                   className="text-xs font-bold text-white inline-flex items-center gap-1 bg-gradient-to-r from-[#062B66] to-[#041a3d] px-3.5 py-1.5 rounded-lg shadow-2xs hover:from-[#041a3d] hover:to-[#062B66] transition-all group-hover:scale-105"
//                 >
//                   <span>Enroll</span>
//                   <IconArrowRight className="w-3.5 h-3.5 text-[#EC7727]" />
//                 </a>
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// // Helper renderer for features to avoid repetitive code block variables
// const featuresMappingCheck = (feature) => feature;

// export default Courses;

import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IconLanguage, 
  IconDeviceLaptop, 
  IconPalette, 
  IconCode, 
  IconShoppingBag, 
  IconLayout, 
  IconTrendingUp, 
  IconBrandAmazon, 
  IconFileSpreadsheet, 
  IconBriefcase, 
  IconChartLine, 
  IconArrowRight,
  IconClock,
  IconStar,
  IconCheck
} from '@tabler/icons-react';

const Courses = () => {
  const coursesList = [
    { 
      title: "English Language", 
      category: "Language", 
      duration: "2 Months", 
      rating: "4.9", 
      features: ["Spoken Fluency", "Grammar & Vocab", "Certificate"],
      icon: <IconLanguage className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "CIT (Information Tech)", 
      category: "Technology", 
      duration: "3 Months", 
      rating: "4.8", 
      features: ["Computer Fundamentals", "MS Windows", "Office Automation"],
      icon: <IconDeviceLaptop className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Graphic Designing", 
      category: "Design", 
      duration: "3 Months", 
      rating: "4.9", 
      features: ["Photoshop & Illustrator", "Brand Identity", "Portfolio Projects"],
      icon: <IconPalette className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Full Stack Development", 
      category: "Development", 
      duration: "6 Months", 
      rating: "5.0", 
      features: ["React, Node.js", "Tailwind & Databases", "Live Capstone Project"],
      icon: <IconCode className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Shopify & WordPress", 
      category: "E-Commerce", 
      duration: "2 Months", 
      rating: "4.8", 
      features: ["Store Customization", "Payment Gateways", "Dropshipping setup"],
      icon: <IconShoppingBag className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "UI/UX Designing", 
      category: "Design", 
      duration: "3 Months", 
      rating: "4.9", 
      features: ["Figma & Wireframing", "User Research", "Interactive Prototypes"],
      icon: <IconLayout className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Digital Marketing", 
      category: "Marketing", 
      duration: "3 Months", 
      rating: "4.7", 
      features: ["Meta & Google Ads", "SEO Strategies", "Social Media Growth"],
      icon: <IconTrendingUp className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Amazon FBA / E-Comm", 
      category: "E-Commerce", 
      duration: "2 Months", 
      rating: "4.8", 
      features: ["Product Research", "PPC Campaigns", "Account Management"],
      icon: <IconBrandAmazon className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "MS Office Suite", 
      category: "Productivity", 
      duration: "1.5 Months", 
      rating: "4.9", 
      features: ["Advanced Excel", "Word & PowerPoint", "Data Management"],
      icon: <IconFileSpreadsheet className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Job Interview Prep", 
      category: "Career", 
      duration: "1 Month", 
      rating: "4.9", 
      features: ["Mock Interviews", "Resume Optimization", "Soft Skills Training"],
      icon: <IconBriefcase className="w-6 h-6 text-[#EC7727]" /> 
    },
    { 
      title: "Forex & Crypto Trading", 
      category: "Trading", 
      duration: "3 Months", 
      rating: "5.0", 
      features: ["Technical Analysis", "Risk Management", "Live Market Setup"],
      icon: <IconChartLine className="w-6 h-6 text-[#EC7727]" /> 
    },
  ];

  return (
    <section className="relative w-full bg-[#FFFFFF] py-20 px-4 sm:px-6 overflow-hidden border-t border-neutral-200">
      
      {/* Soft Bright Background Glow Effect using brand colors */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-10">
        <div className="w-[600px] h-[300px] bg-gradient-to-r from-[#062B66] to-[#EC7727] rounded-full blur-[120px]"></div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="w-full text-center mb-12 flex flex-col items-center">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-[#062B66] bg-[#062B66]/5 border border-[#062B66]/15 px-3.5 py-1 rounded-full mt-10 shadow-2xs">
            PROFESSIONAL CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#062B66] mb-3">
            Explore Our <span className="bg-gradient-to-r from-[#062B66] to-[#EC7727] bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-neutral-600 text-xs sm:text-sm max-w-lg">
            Enroll this month and get <span className="text-[#EC7727] font-bold">1 course absolutely free</span> for the next month! Master in-demand skills with expert mentors.
          </p>
        </div>

        {/* Detailed Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {coursesList.map((course, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] border border-neutral-200 rounded-2xl p-5 relative flex flex-col justify-between shadow-2xs transition-all duration-300 hover:border-[#EC7727]/60 hover:shadow-md hover:-translate-y-1.5 group"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#062B66] to-[#EC7727] rounded-t-2xl opacity-80 group-hover:opacity-100 transition-opacity"></div>

              <div>
                {/* Header Top: Icon & Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#062B66]/5 border border-[#062B66]/10 flex items-center justify-center shadow-2xs">
                    {course.icon}
                  </div>
                  <div className="flex items-center gap-1.5 bg-neutral-100 border border-neutral-200 px-2.5 py-1 rounded-full">
                    <IconStar className="w-3 h-3 text-amber-500 fill-amber-500" />
                    <span className="text-[11px] font-bold text-neutral-800">{course.rating}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#062B66] mb-2 group-hover:text-[#EC7727] transition-colors">
                  {course.title}
                </h3>

                {/* Duration Tag */}
                <div className="flex items-center gap-1.5 text-neutral-500 text-xs mb-4">
                  <IconClock className="w-3.5 h-3.5 text-[#EC7727]" />
                  <span>Duration: <strong className="text-neutral-800">{course.duration}</strong></span>
                </div>

                {/* Detailed Features List */}
                <div className="flex flex-col gap-1.5 mb-6 pt-3 border-t border-neutral-200">
                  {course.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-600">
                      <div className="w-4 h-4 rounded-full bg-[#EC7727]/10 flex items-center justify-center text-[#EC7727] shrink-0">
                        <IconCheck className="w-3 h-3" />
                      </div>
                      <span>{featuresMappingCheck(feature)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-3 border-t border-neutral-200 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-wide text-neutral-500 uppercase">{course.category}</span>
                <Link 
                  to="/pages/admission" 
                  className="text-xs font-bold text-white inline-flex items-center gap-1 bg-gradient-to-r from-[#062B66] to-[#041a3d] px-3.5 py-1.5 rounded-lg shadow-2xs hover:from-[#041a3d] hover:to-[#062B66] transition-all group-hover:scale-105"
                >
                  <span>Enroll</span>
                  <IconArrowRight className="w-3.5 h-3.5 text-[#EC7727]" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const featuresMappingCheck = (feature) => feature;

export default Courses;