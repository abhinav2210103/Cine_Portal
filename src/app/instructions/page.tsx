'use client'
import React, { ChangeEvent, useState } from 'react';

const InstructionsPage = () => {
    // State to manage the input value for starting the exam
    const [start, setStart] = useState<string>("");
    // State to manage the dropdown open/close status
    const [open, setOpen] = useState<boolean>(false);

    // Handler for the input change event
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    };

    return (
        <div className='flex justify-evenly items-center h-screen w-full overflow-clip'>
            {/* Decorative upper square patterns */}
            <div className='w-[200px] h-[200px] bg-[#763fe517] rotate-45 absolute right-[420px] -top-28'></div>
            <div className='w-[200px] h-[200px] bg-[#7bceef28] rotate-45 absolute right-[260px] -top-28'></div>
            <div className='w-[200px] h-[200px] bg-[#763fe515] rotate-45 absolute right-[90px] -top-28'></div>
            <div className='w-[400px] h-[400px] bg-[#7bceef18] rotate-45 absolute -right-[200px] -top-12'></div>
            {/* Decorative circle pattern */}
            <div className='w-[350px] h-[350px] rounded-full bg-[#7bceef41] rotate-45 absolute -right-[250px] top-[300px]'></div>
            {/* Decorative bottom square patterns */}
            <div className='w-[200px] h-[200px] bg-[#81cff12f] rotate-45 absolute left-[20px] -bottom-24'></div>
            <div className='w-[200px] h-[200px] bg-[#18a7e41a] rotate-45 absolute left-[180px] -bottom-36'></div>

            {/* Main content container */}
            <div className='w-[65%] z-10 h-[90vh] flex flex-col justify-between items-center'>
                {/* Instructions container */}
                <div className='w-full z-10 h-[70%] bg-white shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                    <h1 className='font-semibold py-4 px-5 text-lg rounded-lg bg-gradient-to-r from-[#baeff9bf] to-[#d5d6fa]'>INSTRUCTIONS</h1>
                    <ul className='list-disc w-[90%] text-justify m-auto font-medium'>
                        <li className='my-4'>Every student should check the exam date-sheet and time (session) of the examination.</li>
                        <li className='my-4'>Any student who is late by more than 30 minutes after commencement of examination shall not be permitted to enter the examination hall.</li>
                        <li className='my-4'>All the students should carry a valid College Identity card and Admit Card without which they shall not be permitted to write the examination.</li>
                        <li className='my-4'>No reading material is permitted inside the examination room.</li>
                        <li className='my-4'>Use of electronic gadgets (smart phones, smart watches etc.) is strictly prohibited. Anyone in possession is liable for disciplinary action.</li>
                        <li className='my-4'>There will be total 5 sections- HTML, SQL, CSS, Aptitude and one Language of your choice.</li>
                    </ul>
                </div>
                {/* Input container */}
                <div className='w-full flex justify-center items-center h-[28%] shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                    <div className='flex flex-col'>
                        <span className='text-sm text-center mb-2 text-gray-500'>Write START to start your exam</span>
                        <input
                            className='shadow-[0px_0px_20px_0px_#00000040] focus:outline-none rounded-md p-3'
                            type="text"
                            value={start}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            {/* Sidebar container */}
            <div className='w-[30%] z-10 h-[90vh] flex flex-col justify-evenly items-center shadow-[0px_0px_20px_0px_#00000040] rounded-lg'>
                {/* Dropdown container */}
                <div className='relative w-[65%]'>
                    <select
                        className='bg-gradient-to-r from-[#A5F2FF80] to-[#2153F93B] p-3 px-8 w-full rounded-xl shadow-[0px_0px_20px_0px_#00000040] appearance-none cursor-pointer focus:outline-none font-bold'
                        onClick={() => setOpen(!open)}
                    >
                        <option value="">Select a Language</option>
                        <option value="c">C</option>
                        <option value="cpp">C++</option>
                        <option value="py">Python</option>
                        <option value="java">Java</option>
                    </select>
                    {/* Dropdown arrow icon */}
                    <div className='font-bold absolute transition-all duration-300 right-5 -translate-y-[50%] top-[28%]' style={{ transform: `${open ? 'rotateZ(180deg)' : 'rotateZ(0deg)'}` }}>▼</div>
                </div>
                {/* Save & Next button */}
                <button
                    disabled={start !== "START"}
                    className={`${start !== "START" ? 'bg-gray-300 text-gray-600 w-[80%] py-4 rounded-xl' : 'bg-blue-300 text-black w-[80%] py-4 rounded-xl'}`}
                >
                    Save & Next &rarr;
                </button>
            </div>
        </div>
    )
}

export default InstructionsPage;
