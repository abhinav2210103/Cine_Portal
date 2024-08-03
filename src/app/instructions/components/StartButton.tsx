'use client'
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useState } from 'react';

export default function StartButton() {
    const [start, setStart] = useState<string>("");
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const router = useRouter()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setStart(event.target.value);
    }
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };


    return (<>
        <div className='flex text-base mb-5 mt-5 pl-3 pr-4 font-bold'>
            <input type='checkbox' className='rounded w-5 h-5 mt-0.5' onChange={handleCheckboxChange} />
            <span className='pl-2'>
                I hereby confirm that I have read all the instructions and am ready to begin my test. Write START in the Text Box to enable Start Button
            </span>

        </div>

        <div className='flex justify-end mb-8 pr-4'>
            <input
                className='w-[20%] border border-black focus:outline-none rounded-lg p-3 text-center bg-transparent placeholder-gray-500'
                type="text"
                value={start}
                onChange={handleChange}
                placeholder="START"
            />
            <button
                disabled={!(start === "START" && isChecked)}
                onClick={() => {
                    if (typeof window == undefined)
                        return
                    localStorage.setItem("TREM", "10800000")
                    router.replace("/start")
                }}
                className={`${!(start === "START" && isChecked) ? 'bg-gray-300 text-gray-600' : 'bg-[#546CFF] text-white'} w-[20%] rounded-xl p-2 pl-5 pr-5 ml-4 text-lg`}
            >
                Start
            </button>
        </div>

    </>

    )
}
