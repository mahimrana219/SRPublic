import React, { useState, useEffect } from 'react';
import { IconUsers, IconSchool, IconBuilding } from '@tabler/icons-react';

const Stats = () => {
    const [studentsCount, setStudentsCount] = useState(0);
    const [teachersCount, setTeachersCount] = useState(0);
    const [campusesCount, setCampusesCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger smooth entry animation after mount
        setIsVisible(true);

        const duration = 2000;
        const steps = 50;
        const intervalTime = duration / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
            currentStep++;
            setStudentsCount(Math.min(1000, Math.floor((1000 / steps) * currentStep)));
            setTeachersCount(Math.min(12, Math.floor((50 / steps) * currentStep)));
            setCampusesCount(Math.min(3, Math.floor((3 / steps) * currentStep)));

            if (currentStep >= steps) {
                clearInterval(timer);
            }
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={`py-10 px-4 md:px-16 bg-transparent transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-gray-200/60">
                
                {/* Stat 1: Students */}
                <div className="flex items-center justify-center gap-4 lg:gap-5 p-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-orange-50 text-[#EC7727] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <IconUsers size={28} stroke={1.8} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-3xl lg:text-4xl font-black text-[#062B66] tracking-tight">
                            {studentsCount.toLocaleString()}+
                        </h3>
                        <p className="text-gray-400 font-bold text-xs tracking-wider uppercase mt-0.5">
                            Enrolled Students
                        </p>
                    </div>
                </div>

                {/* Stat 2: Teachers */}
                <div className="flex items-center justify-center gap-4 lg:gap-5 p-4 pt-6 md:pt-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#062B66] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <IconSchool size={28} stroke={1.8} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-3xl lg:text-4xl font-black text-[#EC7727] tracking-tight">
                            {teachersCount}+
                        </h3>
                        <p className="text-gray-400 font-bold text-xs tracking-wider uppercase mt-0.5">
                            Expert Teachers
                        </p>
                    </div>
                </div>

                {/* Stat 3: Campuses */}
                <div className="flex items-center justify-center gap-4 lg:gap-5 p-4 pt-6 md:pt-4 group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-[#062B66] flex items-center justify-center shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <IconBuilding size={28} stroke={1.8} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-3xl lg:text-4xl font-black text-[#062B66] tracking-tight">
                            {campusesCount}+
                        </h3>
                        <p className="text-gray-400 font-bold text-xs tracking-wider uppercase mt-0.5">
                            Active Campuses
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Stats;