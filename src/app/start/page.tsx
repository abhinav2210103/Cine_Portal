import React from 'react'

const QuestionsPage = () => {
    return (
        <div className='bg-[#EAEEFF] h-screen relative'>
            <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                <div className='flex justify-center items-center'>
                    <img src="./icons/csi_logo.svg" alt="" className='px-3 w-[50px]' />
                    <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                </div>
                <span className='text-lg'>
                    Time Left : <span>03:00:00 hr</span>
                </span>
            </div>
            <div className='flex ml-[50%] -translate-x-[50%]'>
                {['HTML', 'SQL', 'CSS', 'Aptitude', 'Language'].map((element, id) => (
                    <div key={id} className={`w-[120px] shadow-md hover:text-white font-medium mt-5 hover:bg-[#546CFF] cursor-pointer bg-white flex justify-center items-center px-10 py-2  mx-[2px] ${id == 0 ? "rounded-l-lg" : null} ${id == 4 ? "rounded-r-lg" : null}`}>{element}</div>
                ))}
            </div>
            <div className='w-[94%] mt-8 m-auto flex justify-between items-center'>
                <div className='w-[72%] h-[72vh] px-14 bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10'>
                    <h1 className='text-3xl font-bold py-6'>Question-1</h1>
                    <hr />
                    <h1 className='font-semibold text-xl py-2'>What is the full form of HTML ?</h1>
                    {[1, 2, 3, 4].map((i, id) => (
                        <div key={id} className='my-4 cursor-pointer'>
                            <input type="radio" className='mr-6 cursor-pointer' name={`opt`} id={`opt${i}`} />
                            <label className='ml-2 text-[17px] font-medium cursor-pointer' htmlFor={`opt${i}`}>Hyper Text Markup Language</label>
                        </div>
                    ))}
                    <div className='mt-[19vh]'>
                        <button className='bg-[#546CFF] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium'>Review</button>
                        <button className='bg-[#00C289] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium'>Save & Next</button>
                    </div>
                </div>
                <div className='w-[25%] h-[72vh] bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10 flex flex-col justify-center items-center'>
                    <div className='w-[90%] outline outline-3 outline-[#546CFF] mb-3 text-2xl text-center rounded-lg font-bold text-[#546CFF] p-2'>
                        Questions
                    </div>
                    <div className='flex w-[90%] justify-around flex-wrap mt-2 h-[44vh] overflow-y-scroll'>
                        {Array.from({ length: 25 }, (_, index) => index + 1).map((i, id) => (
                            <div key={id} className='w-[45px] h-[45px] shadow-md text-xl flex justify-center items-center m-4 font-bold rounded-xl cursor-pointer bg-white'>{i}</div>
                        ))}
                    </div>
                    <button className='bg-[#546CFF] w-[80%] mt-6 mx-2 rounded-xl px-4 py-[10px] text-white font-medium'>Submit</button>
                </div>
            </div>
            <img src="./icons/bg_logo.svg" alt="" className='absolute z-0 top-[57%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25%]' />
        </div>
    )
}

export default QuestionsPage