import React from 'react'
import "./Loader.css"

function Loader() {
    return (
        <div className='flex justify-center items-center h-screen w-full'>
            <div className='relative flex justify-center items-center w-[400px] h-[400px]'>
                <img id='c' className='absolute top-[76px] left-7 z-50 scale-50' src="./loader/c.svg" alt="" />
                <img id='s' className='absolute top-[50%] left-[50%] scale-50 -translate-x-1/2 -translate-y-1/2 z-50' src="./loader/s.svg" alt="" />
                <img id='i' className='absolute top-28 right-[122px] z-50 scale-50' src="./loader/i.svg" alt="" />
            </div>
        </div>
    )
}

export default Loader