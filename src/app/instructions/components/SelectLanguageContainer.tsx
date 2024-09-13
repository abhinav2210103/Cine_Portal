'use client'
import React, { useState } from 'react';
import SelectLanguageDropdown from './SelectLanguageDropdown';
import StartButton from './StartButton';

export default function SelectLanguageContainer() {
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    if (typeof window == undefined) {
        return;
    }

    return (
        <div className='flex justify-start'>
            <div className='w-[40%] mt-7 pb-4'>
                <div className='w-[96%] h-[100%] flex flex-col pl-8 rounded-lg' style={{ backgroundImage: "url('/icons/SelectLanguagebg.png')" }}>
                    <span className='my-6 font-bold text-lg'>Select Language</span>
                    <SelectLanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
                </div>
            </div>

            <div className='w-[100%] h-full flex flex-col rounded-lg mt-7 ml-3' style={{ backgroundImage: "url('/icons/Startbg.png')" }}>
                <StartButton selectedLanguage={selectedLanguage} />
            </div>
        </div>
    );
}
