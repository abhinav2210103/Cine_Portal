// 'use client'
// import React, { useState } from 'react';
// import Image from 'next/image';
// import StartButton from './components/StartButton';
// import SelectLanguageDropdown from './components/SelectLanguageDropdown';

// export default function Instruction() {
//     const [selectedLanguage, setSelectedLanguage] = useState<string>('');

//     const circleData = [
//         { src: '/icons/redCircle.png', text: 'Not Answered' },
//         { src: '/icons/yellowCircle.png', text: 'Review' },
//         { src: '/icons/blueCircle.png', text: 'Answered & Review' },
//         { src: '/icons/greenCircle.png', text: 'Answered' }
//     ];

//     const instructions = [
//         "Do not navigate away from the exam window during the exam.",
//         "You cannot pause or resume the exam once you begin.",
//         "Read each question carefully and choose the best answer.",
//         "In case of unexpected technical difficulties, such as a power outage or internet disruption, try refreshing the webpage first.",
//         "If the issue persists, do not close the browser window.",
//         "Immediately contact your instructor or exam proctor via the designated communication channel.",
//         "Plagiarism and cheating of any kind will not be tolerated.",
//         "You are expected to complete the exam independently and according to the instructions provided.",
//         "Any violation of academic integrity will result in disciplinary action."
//     ];

//     return (
//         <div className='bg-[#EAEEFF] min-h-screen min-w-screen bg-[url("/icons/bg_logo.svg")] bg-no-repeat bg-[48%]'>
//             <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
//                 <div className='flex justify-center items-center'>
//                     <Image src="/icons/csi_logo.svg" alt="" width={50} height={50} className='px-3' />
//                     <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
//                 </div>
//             </div>

//             <div className='flex flex-col items-center'>
//                 <div className='w-[90%] h-[100%] flex flex-col justify-between items-center'>
//                     <div className='p-5 mt-6 relative bg-cover bg-center' style={{ backgroundImage: "url('/icons/bg.png')" }}>
//                         <h1 className='font-bold mb-4 text-2xl ml-3'>INSTRUCTIONS</h1>
//                         <div className='flex'>
//                             <Image src='/icons/verticalLine.png' alt="Vertical Line" width={5} height={50} />
//                             <ul className='list-disc w-[90%] text-justify ml-7 font-medium text-lg'>
//                                 {instructions.map((instruction, index) => (
//                                     <li key={index} className='mb-3'>{instruction}</li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className='mt-4 font-semibold text-lg ml-3'>
//                             <p>The following color represents the categories of question which you Answered, Not Answered, Answered and mark for Review, Not Answered and marked for review.</p>
//                         </div>

//                         <div className='flex justify-around w-full mt-4'>
//                             {circleData.map((item, index) => (
//                                 <div key={index} className='flex items-center'>
//                                     <Image src={item.src} alt={`${item.text} Circle`} width={24} height={24} />
//                                     <div className='font-medium pl-2'>{item.text}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>

//                     <div className='flex justify-start'>
//                         <div className='w-[40%] mt-7 pb-4'>
//                             <div className='w-[96%] h-[100%] flex flex-col pl-8 rounded-lg' style={{ backgroundImage: "url('/icons/SelectLanguagebg.png')" }}>
//                                 <span className='my-6 font-bold text-lg'>Select Language</span>
//                                 <SelectLanguageDropdown selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
//                             </div>
//                         </div>

//                         <div className='w-[100%] h-full flex flex-col rounded-lg mt-7 ml-3' style={{ backgroundImage: "url('/icons/Startbg.png')" }}>
//                             <StartButton selectedLanguage={selectedLanguage} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// Dynamically import client-side container
const SelectLanguageContainer = dynamic(() => import('./components/SelectLanguageContainer'), { ssr: false });

export default function Instruction() {
    const circleData = [
        { src: '/icons/redCircle.png', text: 'Not Answered' },
        { src: '/icons/yellowCircle.png', text: 'Review' },
        { src: '/icons/blueCircle.png', text: 'Answered & Review' },
        { src: '/icons/greenCircle.png', text: 'Answered' }
    ];

    const instructions = [
        "Do not navigate away from the exam window during the exam.",
        "You cannot pause or resume the exam once you begin.",
        "Read each question carefully and choose the best answer.",
        "In case of unexpected technical difficulties, such as a power outage or internet disruption, try refreshing the webpage first.",
        "If the issue persists, do not close the browser window.",
        "Immediately contact your instructor or exam proctor via the designated communication channel.",
        "Plagiarism and cheating of any kind will not be tolerated.",
        "You are expected to complete the exam independently and according to the instructions provided.",
        "Any violation of academic integrity will result in disciplinary action."
    ];

    return (
        <div className='bg-[#EAEEFF] min-h-screen min-w-screen bg-[url("/icons/bg_logo.svg")] bg-no-repeat bg-[48%]'>
            <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                <div className='flex justify-center items-center'>
                    <Image src="/icons/csi_logo.svg" alt="" width={50} height={50} className='px-3' />
                    <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className='w-[90%] h-[100%] flex flex-col justify-between items-center'>
                    <div className='p-5 mt-6 relative bg-cover bg-center' style={{ backgroundImage: "url('/icons/bg.png')" }}>
                        <h1 className='font-bold mb-4 text-2xl ml-3'>INSTRUCTIONS</h1>
                        <div className='flex'>
                            <Image src='/icons/verticalLine.png' alt="Vertical Line" width={5} height={50} />
                            <ul className='list-disc w-[90%] text-justify ml-7 font-medium text-lg'>
                                {instructions.map((instruction, index) => (
                                    <li key={index} className='mb-3'>{instruction}</li>
                                ))}
                            </ul>
                        </div>

                        <div className='mt-4 font-semibold text-lg ml-3'>
                            <p>The following color represents the categories of question which you Answered, Not Answered, Answered and mark for Review, Not Answered and marked for review.</p>
                        </div>

                        <div className='flex justify-around w-full mt-4'>
                            {circleData.map((item, index) => (
                                <div key={index} className='flex items-center'>
                                    <Image src={item.src} alt={`${item.text} Circle`} width={24} height={24} />
                                    <div className='font-medium pl-2'>{item.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <SelectLanguageContainer />
                </div>
            </div>
        </div>
    );
}
