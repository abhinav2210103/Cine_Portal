'use client'
import React, { ChangeEvent, useState } from 'react';

const Instruction = () => {
    // State to manage the input value for starting the exam
    const [start, setStart] = useState<string>("");
    // State to manage the dropdown open/close status
    const [open, setOpen] = useState<boolean>(false);

    // Handler for the input change event
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };

    return (
        <div className='flex flex-col items-center h-screen w-full overflow-clip'>
            {/* Main content container */}
            <div className='w-[90%] z-10 h-[90vh] flex flex-col justify-between items-center'>
                {/* Instructions container */}
                <div className='w-full z-10 h-[70%] bg-white shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                    <h1 className='font-semibold py-4 px-5 text-lg rounded-lg'>INSTRUCTIONS</h1>
                    <ul className='list-disc w-[90%] text-justify m-auto font-medium'>
                        <li className='my-2'>Do not navigate away from the exam window during the exam.</li>
                        <li className='my-2'>You cannot pause or resume the exam once you begin.</li>
                        <li className='my-2'>Read each question carefully and choose the best answer. </li>
                        <li className='my-2'>In case of unexpected technical difficulties,  such as a power outage or internet disruption,  try refreshing the webpage first.</li>
                        <li className='my-2'>If the issue persists,  do not close the browser window.</li>
                        <li className='my-2'>Immediately contact your instructor or exam proctor via the designated communication channel.</li>
                        <li className='my-2'>Plagiarism and cheating of any kind will not be tolerated.</li>
                        <li className='my-2'>You are expected to complete the exam independently and according to the instructions provided.</li>
                        <li className='my-2'>Any violation of academic integrity will result in disciplinary action.</li>
                    </ul>
                </div>
                {/* Input and Sidebar container */}
                <div className='w-full flex justify-evenly items-center h-[28%]  rounded-lg mt-4'>
                    {/* Input container */}
                    
                    <div className='w-[30%] h-full flex flex-col justify-evenly items-center shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                    <span className='my-4'>Select Language</span>
                            <select
                                className=' p-3 px-8 w-[60%] rounded-xl shadow-[0px_0px_20px_0px_#00000040] appearance-none cursor-pointer focus:outline-none font-bold'
                                onClick={() => setOpen(!open)}
                            >
                                <option value="">C++</option>
                                <option value="c">C</option>
                                
                                <option value="py">Python</option>
                                <option value="java">Java</option>
                            </select>
                            {/* Dropdown arrow icon */}
                            <div className={`font-bold absolute transition-all duration-300 right-5 top-1/2 transform ${open ? 'rotate-180' : 'rotate-0'}`}>▼</div>
                        </div>
                    <div className='w-[30%] h-full flex flex-col justify-evenly items-center shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                        <span className='text-sm text-center mb-2 text-gray-500'>
                        <input type='checkbox'className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'></input>
                        <label className="text-gray-700">I agree to the terms and conditions
                            I hereby confirm that I have read all the instructions and ready to begin my test.    Write START in the Text Box to enable Start Button </label> </span>
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
    )
}

export default Instruction;
