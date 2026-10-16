import React from "react";
import {
  IconArrowRight,
  IconSparkles,
  IconSchool,
  IconUsers,
  IconAward,
  IconBook2,
  IconStar,
} from "@tabler/icons-react";

import heroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#FAFAFA] px-4 pb-16 pt-24 font-sans text-[#062B66] md:px-8 md:pb-20 md:pt-28 lg:px-16"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-180px] h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#062B66]/10 via-[#EC7727]/15 to-purple-500/10 blur-3xl" />
        <div className="absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-[#EC7727]/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#062B66]/10 blur-3xl" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center">

        {/* Top Badge (Left se animate hokar aayega) */}
        <div className="animate-[slideInLeft_0.8s_ease-out_forwards] flex flex-wrap items-center justify-center gap-2.5 rounded-2xl sm:rounded-full border border-[#062B66]/10 bg-white/90 px-4 py-2.5 shadow-md shadow-[#062B66]/5 backdrop-blur-md text-center">
          <div className="flex -space-x-2">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
              alt="Student"
              className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
              alt="Student"
              className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white object-cover shadow-sm"
            />
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
              alt="Student"
              className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-2 border-white object-cover shadow-sm"
            />
          </div>

          <div className="flex items-center gap-0.5 text-[#EC7727]">
            <IconStar size={13} className="fill-[#EC7727]" />
            <IconStar size={13} className="fill-[#EC7727]" />
            <IconStar size={13} className="fill-[#EC7727]" />
            <IconStar size={13} className="fill-[#EC7727]" />
            <IconStar size={13} className="fill-[#EC7727]" />
          </div>

          <span className="text-[11px] sm:text-xs font-black tracking-tight text-[#062B66]">
            Join our <span className="text-[#EC7727]">1000+</span> Students Community
          </span>
        </div>

        {/* Heading (Left se animate hokar aayega) */}
        <h1 className="animate-[slideInLeft_0.9s_ease-out_forwards] mt-7 max-w-5xl text-center text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[#062B66] sm:text-5xl md:text-6xl lg:text-7xl">
          SR Public School {" "} <br />
          <span className="bg-gradient-to-r from-[#EC7727] via-orange-500 to-[#062B66] bg-clip-text text-transparent">
          & College
          </span>{" "}
            | Acadmey | Institute
        </h1>

        {/* Description (Left se animate hokar aayega) */}
        <p className="animate-[slideInLeft_1s_ease-out_forwards] mt-5 max-w-2xl text-center text-sm leading-7 text-gray-600 sm:text-base md:text-lg">
          From foundational schooling (Grades 1–10) and intermediate college
          education to professional IT courses under the visionary leadership
          of{" "}
          <strong className="font-bold text-[#062B66]">
            Mr. Rizwan Ahmed
          </strong>
          .
        </p>

        {/* CTA Buttons (Left se animate hokar aayega) */}
        <div className="animate-[slideInLeft_1.1s_ease-out_forwards] mt-7 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="/pages/admission"
            className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#062B66] px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-white shadow-xl shadow-[#062B66]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0a3b87] sm:w-auto"
          >
            <span>Apply For Admission</span>
            <IconArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <a
            href="#programs"
            className="flex w-full items-center justify-center rounded-xl border border-[#062B66]/15 bg-white px-7 py-3.5 text-xs font-extrabold uppercase tracking-wider text-[#062B66] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#062B66]/5 sm:w-auto"
          >
            Explore Programs
          </a>
        </div>

        {/* Hero Image Container (Right side se slide hokar aayega) */}
        <div className="animate-[slideInRight_1s_ease-out_forwards] relative mt-12 w-full max-w-5xl md:mt-16">

          {/* Glow Behind Image */}
          <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-400/15 via-sky-300/10 to-transparent blur-3xl pointer-events-none" />

          {/* Left Floating Icon */}
          <div className="absolute left-[2%] top-[20%] z-20 hidden animate-[float_4s_ease-in-out_infinite] rounded-2xl border border-white bg-white p-3 shadow-xl sm:block">
            <IconSchool size={22} className="text-[#062B66]" />
          </div>

          {/* Right Floating Icon */}
          <div className="absolute right-[3%] top-[30%] z-20 hidden animate-[floatReverse_5s_ease-in-out_infinite] rounded-2xl border border-white bg-white p-3 shadow-xl sm:block">
            <IconAward size={22} className="text-[#EC7727]" />
          </div>

          {/* Image */}
          <div className="relative mx-auto w-full max-w-4xl p-2 md:p-3">
            <div className="relative overflow-hidden">
              <img
                src={heroImage}
                alt="SR Public students"
                className="relative z-10 mx-auto block h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Excellence Floating Card */}
          <div className="absolute -bottom-5 left-2 z-30 hidden items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl sm:flex md:-left-5 md:p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EC7727]/10 text-[#EC7727]">
              <IconSparkles size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Excellence</p>
              <p className="text-xs font-black text-[#062B66] md:text-sm">Education That Inspires</p>
            </div>
          </div>

          {/* Community Floating Card */}
          <div className="absolute -right-1 bottom-8 z-30 hidden items-center gap-3 rounded-2xl border border-gray-100 bg-white p-3 shadow-2xl sm:flex md:-right-6 md:p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#062B66]/10 text-[#062B66]">
              <IconUsers size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Community</p>
              <p className="text-xs font-black text-[#062B66] md:text-sm">1000+ Students</p>
            </div>
          </div>
        </div>

        {/* Programs Cards (Neeche se upar aayenge) */}
        <div className="animate-[slideInUp_1.2s_ease-out_forwards] mt-10 grid w-full max-w-4xl grid-cols-1 gap-3 sm:grid-cols-3">

          {/* School */}
          <div className="group flex items-center gap-3 rounded-2xl border border-[#062B66]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#062B66]/10 text-[#062B66]">
              <IconBook2 size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-[#062B66]">School System</p>
              <p className="text-[11px] text-gray-500">Grades 1–10</p>
            </div>
          </div>

          {/* College */}
          <div className="group flex items-center gap-3 rounded-2xl border border-[#EC7727]/10 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EC7727]/10 text-[#EC7727]">
              <IconSchool size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-[#062B66]">Intermediate College</p>
              <p className="text-[11px] text-gray-500">Pre-Eng • Pre-Medical • Commerce</p>
            </div>
          </div>

          {/* Institute */}
          <div className="group flex items-center gap-3 rounded-2xl border border-indigo-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <IconAward size={20} />
            </div>
            <div>
              <p className="text-xs font-black text-[#062B66]">IT & Skills Institute</p>
              <p className="text-[11px] text-gray-500">Career-focused training</p>
            </div>
          </div>

        </div>
      </div>

      {/* Built-in Keyframes for Smooth Left/Right Animations */}
      <style>{`
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(12px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;