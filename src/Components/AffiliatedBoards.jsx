import React from 'react';
import { IconCircleCheck } from '@tabler/icons-react';

import karachiBoardImg from '../assets/karachi.png';
import biekLogo from '../assets/interlogo.png';
import ziauddinLogo from '../assets/zialogo.png';

const AffiliatedBoards = () => {
    const boards = [
        {
            id: 1,
            name: " Board of Secondary Education Karachi",
            category: "Secondary & Matric",
            description: "Official registration and affiliation for matriculation and foundational educational programs under the Karachi Board framework.",
            image: karachiBoardImg,
            borderColor: "border-blue-500/20",
        },
        {
            id: 2,
            name: "Intermediate Board of Karachi",
            category: "BIEK Intermediate",
            description: "Recognized affiliation for higher secondary education, offering rigorous programs in Pre-Engineering, Pre-Medical, Commerce, and Arts.",
            image: biekLogo,
            borderColor: "border-orange-500/20",
        },
        {
            id: 3,
            name: "Ziauddin Board",
            category: "Advanced Board",
            description: "Affiliated with Ziauddin Examination Board to provide modern curriculum standards, fast-track academic paths, and specialized learning.",
            image: ziauddinLogo,
            borderColor: "border-emerald-500/20",
        }
    ];

    return (
        <section className="py-24 px-4 md:px-16 bg-slate-50/50 relative overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-[#062B66] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-[#EC7727]"></span>
                        Official Accreditations
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#062B66] tracking-tight mb-4">
                        Recognized & Affiliated Boards
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">
                        SR Public operates under official government and board recognitions to ensure authentic, high-value credentials for every student.
                    </p>
                </div>

                {/* Boards Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {boards.map((board) => (
                        <div 
                            key={board.id}
                            className={`group p-8 rounded-3xl bg-white border ${board.borderColor} shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden`}
                        >
                            <div>
                                {/* Prominent Logo Container (Transparent Background, No Box/Bg Color) */}
                                <div className="flex justify-center mb-8">
                                    <div className="w-28 h-28 flex items-center justify-center p-2 group-hover:scale-105 transition-transform duration-300">
                                        <img src={board.image} alt={board.name} className="w-full h-full object-contain drop-shadow-sm" />
                                    </div>
                                </div>

                                {/* Category Tag */}
                                <div className="text-center mb-3">
                                    <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-slate-100 text-[#062B66]">
                                        {board.category}
                                    </span>
                                </div>

                                {/* Board Name */}
                                <h3 className="text-xl font-black text-center text-[#062B66] mb-4 leading-snug">
                                    {board.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm text-center leading-relaxed mb-6 font-normal">
                                    {board.description}
                                </p>
                            </div>

                            {/* Footer Status */}
                            <div className="pt-4 border-t border-gray-100 flex items-center justify-center gap-2 text-xs font-bold text-slate-700">
                                <IconCircleCheck size={16} className="text-emerald-500" />
                                <span>Official Board Verified</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AffiliatedBoards;