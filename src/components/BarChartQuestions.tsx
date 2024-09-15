import React from 'react'

interface props {
    array: number[]
}

export default function BarChartQuestions(props: props) {
    const total = props.array[0] + props.array[1] + props.array[2] + props.array[3];
    return (
        <div>
            <div className='w-[90%] m-auto flex justify-evenly items-end h-[300px] border-l-2 border-b-2 border-black'>
                <div className={`w-[50px] font-bold text-white pt-2 rounded-t-lg min-h-[35px] bg-gray-500 flex justify-center`} style={{ height: `${(props.array[0] * 200) / total}px` }}>{props.array[0]}</div>
                <div className={`w-[50px] font-bold text-white pt-2 rounded-t-lg min-h-[35px] bg-[#ECB701] flex justify-center`} style={{ height: `${(props.array[1] * 200) / total}px` }}>{props.array[1]}</div>
                <div className={`w-[50px] font-bold text-white pt-2 rounded-t-lg min-h-[35px] bg-[#00C289] flex justify-center`} style={{ height: `${(props.array[2] * 200) / total}px` }}>{props.array[2]}</div>
                <div className={`w-[50px] font-bold text-white pt-2 rounded-t-lg min-h-[35px] bg-[#FF122E] flex justify-center`} style={{ height: `${(props.array[3] * 200) / total}px` }}>{props.array[3]}</div>
            </div>
            <div className='flex justify-evenly items-center w-full mt-5'>
                <div className='flex items-center'>
                    <div className='bg-gray-500 w-[30px] h-[30px] rounded-full'></div>
                    <h1 className='ml-2 text-sm font-bold'>Not Visited</h1>
                </div>
                <div className='flex items-center'>
                    <div className='bg-[#ECB701] w-[30px] h-[30px] rounded-full'></div>
                    <h1 className='ml-2 text-sm font-bold'>Mark & Review</h1>
                </div>
                <div className='flex items-center'>
                    <div className='bg-[#00C289] w-[30px] h-[30px] rounded-full'></div>
                    <h1 className='ml-2 text-sm font-bold'>Answered</h1>
                </div>
                <div className='flex items-center'>
                    <div className='bg-[#FF122E] w-[30px] h-[30px] rounded-full'></div>
                    <h1 className='ml-2 text-sm font-bold'>Skipped</h1>
                </div>
            </div>
        </div>
    )
}
