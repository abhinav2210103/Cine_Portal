'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

function page() {
    useEffect(() => {
        if (typeof window != undefined) {
            localStorage.removeItem("userId");
            localStorage.removeItem("TREM");
            localStorage.removeItem("language");
        }
    }, []);

    return (
        <>
            <div className='bg-[#EAEEFF] h-screen relative'>
                <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                    <div className='flex justify-center items-center'>
                        <Image src="/icons/csi_logo.svg" width={50} height={50} alt="csiLogo" className='px-3' />
                        <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                    </div>
                </div>
                <div className='w-[94%] mt-8 m-auto flex justify-center items-center'>
                    {/* <Image src="/icons/bg_logo.svg" alt="bgLogo" width={10} height={10} className='absolute z-0 top-[50%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[22%]' /> */}
                    <div className='w-[98%] h-[84vh] flex flex-col items-center justify-center px-14 bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10'>
                    
                        <div className='text-5xl font-medium text-center '>Thank you for completing the test! </div>
                       
                        <div className='text-2xl mt-4 font-regular text-center'>We appreciate the time and effort you've put into it. </div>
                        <Image src="/clock.png" width={300} height={300} alt="clock" className='px-3 mt-16' />
                        <div className='text-xl mt-16 text-center font-regular'><i>Regardless of the outcome, keep pushing forward. Every experience brings you closer to success.</i></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page;
