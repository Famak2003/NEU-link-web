"use client"

import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import { useDictionary } from '@/i18n/dictionary-provider';



export default function QandA() {
    const [openId, setOpenId] = useState<string | null>(null);
    const toggle = (id: string) => setOpenId(openId === id ? null : id);
    const dict = useDictionary()
    const faqData = [
        {
            category: dict.FOR_ALUMNI,
            questions: [
            { q: dict.HOW_DO_I_VERIFY_MY_ALUMNI_STATUS, a: dict.HOW_DO_I_VERIFY_MY_ALUMNI_STATUS_ANS },
            { q: dict.HOW_DO_I_POST_A_JOB_OPENING_FOR_OTHER_ALUMNI, a: dict.HOW_DO_I_POST_A_JOB_OPENING_FOR_OTHER_ALUMNI_ANS },
            { q: dict.CAN_I_MESSAGE_OTHER_ALUMNI_DIRECTLY_THEOUGH_THE_DIRECTORY, a: dict.CAN_I_MESSAGE_OTHER_ALUMNI_DIRECTLY_THEOUGH_THE_DIRECTORY_ANS },
            { q: dict.HOW_DO_I_UPDATE_MY_CURRENT_WORK_INDUSTRY_AND_POSITION, a: dict.HOW_DO_I_UPDATE_MY_CURRENT_WORK_INDUSTRY_AND_POSITION_ANS },
            // { q: dict.ARE_THERE_PHYSICAL_CAMPUS_BENEFIT_FOR_VERIFIED_ALUMNI, a: dict.ARE_THERE_PHYSICAL_CAMPUS_BENEFIT_FOR_VERIFIED_ALUMNI_ANS },
            ]
        },
        {
            category: dict.FOR_STUDENTS,
            questions: [
            { q: dict.CAN_I_USE_THE_CAMPUS_MAP_TO_FIND_SPECIFIC_LECTURE_HALLS, a: dict.CAN_I_USE_THE_CAMPUS_MAP_TO_FIND_SPECIFIC_LECTURE_HALLS_ANS },
            { q: dict.HOW_DO_I_CHECK_THE_ACADEMIC, a: dict.HOW_DO_I_CHECK_THE_ACADEMIC_ANS },
            { q: dict.CAN_STUDENTS_APPLY_FOR_THE_JOBS_LISTED_IN_THE_APP, a: dict.CAN_STUDENTS_APPLY_FOR_THE_JOBS_LISTED_IN_THE_APP_ANS },
            { q: dict.DOES_THE_RADIO_STREAM_WORK_IN_THE_BACKGROUND, a: dict.DOES_THE_RADIO_STREAM_WORK_IN_THE_BACKGROUND_ANS },
            { q: dict.WHERE_CAN_I_FIND_THE_LATEST_UNIVERSITY_EVENTS, a: dict.WHERE_CAN_I_FIND_THE_LATEST_UNIVERSITY_EVENTS_ANS },
            ]
        },
        {
            category: dict.FOR_ALL_USERS,
            questions: [
            { q: dict.WHAT_SHOULD_I_DO_IF_I_LOSE_ACCESS_TO_MY_2FA_DEVICE, a: dict.WHAT_SHOULD_I_DO_IF_I_LOSE_ACCESS_TO_MY_2FA_DEVICE_ANS },
            { q: dict.IS_MY_PERSONAL_DATA_VISIBLE_TO_PEOPLE_OUTSIDE_NEU_COMMUNITY, a: dict.IS_MY_PERSONAL_DATA_VISIBLE_TO_PEOPLE_OUTSIDE_NEU_COMMUNITY_ANS },
            { q: dict.HOW_DO_I_CHANGE_MY_PASSWORD, a: dict.HOW_DO_I_CHANGE_MY_PASSWORD_ANS },
            { q: dict.HOW_DO_I_REPORT_A_BUG_OR_SUGGEST_A_NEW_FEATURE, a: dict.HOW_DO_I_REPORT_A_BUG_OR_SUGGEST_A_NEW_FEATURE_ANS },
            { q: dict.DOES_THE_CAMPUS_MAP_WORK_OFFLINE, a: dict.DOES_THE_CAMPUS_MAP_WORK_OFFLINE_ANS },
            ]
        }
    ];

    return (
        <div className=" page min-h-screen py-12 px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
                <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">{dict.SUPPORT_AND_FAQ}</h1>
                <p className="mt-4 text-lg text-slate-600">{dict.EVERYTHING_YOU_NEED_TO_KNOW}</p>
                </header>

                {faqData.map((section, sIdx) => (
                <div key={sIdx} className="mb-10">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-black mb-4 ml-1">
                        {section.category}
                    </h2>
                    
                    <div className="space-y-3">
                        {section.questions.map((item, qIdx) => {
                            const id = `${sIdx}-${qIdx}`;
                            const isOpen = openId === id;

                            return (
                            <div 
                                key={id} 
                                className={`group border border-slate-200 rounded-xl transition-all duration-200 bg-white ${isOpen ? 'ring-2 ring-slate-500 border-transparent shadow-md' : 'hover:border-slate-300'}`}
                            >
                                <button
                                    onClick={() => toggle(id)}
                                    className="w-full flex items-center justify-between p-5 text-left"
                                >
                                    <span className={`font-semibold transition-colors ${isOpen ? 'text-slate-300' : 'text-slate-700'}`}>
                                        {item.q}
                                    </span>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-black' : ''}`} 
                                    />
                                </button>

                                <div 
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="p-5 pt-0 text-slate-600 leading-relaxed border-t border-slate-50 mt-1">
                                        {item.a}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}
