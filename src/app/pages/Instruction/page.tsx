'use client'

import React, { ChangeEvent, useState } from 'react';

const Instruction = () => {
    const [start, setStart] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };

    const circleData = [
        { src: '/icons/redCircle.png', text: 'Not Answered' },
        { src: '/icons/yellowCircle.png', text: 'Review' },
        { src: '/icons/blueCircle.png', text: 'Answered & Review' },
        { src: '/icons/greenCircle.png', text: 'Answered' }
    ];

    return (
        <div className='bg-[#EAEEFF] min-h-screen'>
            <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                <div className='flex justify-center items-center'>
                    <img src="/icons/csi_logo.svg" alt="" className='px-3 w-[50px]' />
                    <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                </div>
            </div>

            <div className='flex flex-col items-center'>
                <div className='w-[90%] z-10 flex flex-col justify-between items-center'>
                    <div className='p-5 mt-6 relative bg-cover bg-center' style={{ backgroundImage: "url('/icons/bg.png')" }}>
                        <h1 className='font-bold mb-4 text-xl'>INSTRUCTIONS</h1>
                        <div className='flex'>
                            <img src='/icons/verticalLine.png' style={{ height: '60%' }} />
                            <ul className='list-disc w-[90%] text-justify ml-7 font-medium text-lg'>
                                <li>Do not navigate away from the exam window during the exam.</li>
                                <li className='my-3'>You cannot pause or resume the exam once you begin.</li>
                                <li className='my-3'>Read each question carefully and choose the best answer.</li>
                                <li className='my-3'>In case of unexpected technical difficulties, such as a power outage or internet disruption, try refreshing the webpage first.</li>
                                <li className='my-3'>If the issue persists, do not close the browser window.</li>
                                <li className='my-3'>Immediately contact your instructor or exam proctor via the designated communication channel.</li>
                                <li className='my-3'>Plagiarism and cheating of any kind will not be tolerated.</li>
                                <li className='my-3'>You are expected to complete the exam independently and according to the instructions provided.</li>
                                <li className='my-3'>Any violation of academic integrity will result in disciplinary action.</li>
                            </ul>
                        </div>

                    <div className='mt-4 font-semibold text-lg'>
                            <p>The following color represents the categories of question which you Answered, Not Answered, Answered and mark for Review, Not Answered and marked for review.</p>
                    </div>

                     <div className='flex justify-around w-full mt-4'>
                            {circleData.map((item, index) => (
                                <div key={index} className='flex items-center'>
                                    <img src={item.src} alt={`${item.text} Circle`} className='w-6 h-6' />
                                    <div className='font-medium pl-2'>{item.text}</div>
                                </div>
                            ))}
                        </div>
                     </div>

                    <div className='w-full flex justify-evenly items-center h-[8%] rounded-lg mt-4'>
                        <div className='w-[30%] h-full flex flex-col justify-evenly items-center shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                            <span className='my-4'>Select Language</span>
                            <select
                                className='p-3 px-8 w-[60%] rounded-xl shadow-[0px_0px_20px_0px_#00000040] appearance-none cursor-pointer focus:outline-none font-bold'
                                onClick={() => setOpen(!open)}
                            >
                                <option value="">C++</option>
                                <option value="c">C</option>
                                <option value="py">Python</option>
                                <option value="java">Java</option>
                            </select>
                            <div className={`font-bold absolute transition-all duration-300 right-5 top-1/2 transform ${open ? 'rotate-180' : 'rotate-0'}`}>▼</div>
                        </div>

                        <div className='w-[30%] h-full flex flex-col justify-evenly items-center shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                            <span className='text-sm text-center mb-2 text-gray-500'>
                                <input type='checkbox' className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded' />
                                <label className='text-gray-700'>
                                    I agree to the terms and conditions. I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
                                </label>
                            </span>
                            <div className='flex flex-row'>
                                <input
                                    className='shadow-[0px_0px_20px_0px_#00000040] focus:outline-none rounded-md p-3'
                                    type="text"
                                    value={start}
                                    onChange={handleChange}
                                />
                                <button
                                    disabled={start !== "START"}
                                    className={`${start !== "START" ? 'bg-gray-300 text-gray-600' : 'bg-blue-300 text-black'} w-[100%] rounded-xl p-2 pl-6 pr-6`}
                                >
                                    START
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Instruction;
