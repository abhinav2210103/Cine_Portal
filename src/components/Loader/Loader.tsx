import React from 'react'
import "./Loader.css"
import Image from 'next/image'

function Loader() {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='relative flex justify-center items-center w-[400px] h-[400px]'>
                <Image id='c' className='absolute w-[300px] top-[76px] left-7 z-50 scale-50' src="./loader/c.svg" width={200} height={200} alt="c" priority />
                <Image id='s' className='absolute top-[48%] w-[120px] left-[48%] scale-50 -translate-x-1/2 -translate-y-1/2 z-50' src="./loader/s.svg" width={200} height={200} alt="s" />
                <Image id='i' className='absolute top-[108px] w-[53px] right-[132px] z-50 scale-50' src="./loader/i.svg" width={200} height={200} alt="i" />
            </div>
        </div>
    )
}

export default Loader