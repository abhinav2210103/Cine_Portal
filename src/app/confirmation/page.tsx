'use client';

import BarChartQuestions from '@/components/BarChartQuestions';
import Loader from '@/components/Loader/Loader';
import Timer from '@/components/Timer';
import { questionFetcher } from '@/constants/questionFetcher';
import { responseFetcher } from '@/constants/responseFetcher';
import { setQuestionsState } from '@/store/questionStateSlice';
import { RootState } from '@/store/store';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

interface option {
    desc: string,
    id: number,
}

interface questionType {
    _id: string,
    state: string,
    quesId: number,
    subject: string,
    question: string,
    options: option[],
    recordedAns: number,
    answer: number
}

export default function Confirmation() {

    const allQuestions = useSelector((state: RootState) => state.questionState.allQuestions);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()
    let remainTime;
    const [arr, setArr] = useState<number[]>([0, 0, 0, 0])
    const [sep, setSep] = useState<questionType[][]>([[], [], [], [], []])
    const [menu, setMenu] = useState<string[]>(['HTML', 'SQL', 'CSS', 'Aptitude', "Java"]);
    let states = ["UA", "MR", "A", "NA"];
    let colors = ["#6B7280", "#ECB701", "#00C289", "#FF122E"];
    useEffect(() => {
        if (typeof window != undefined)
            remainTime = localStorage.getItem('TREM');
        async function getQuestion() {
            if (typeof window == undefined)
                return;
            const userId = localStorage.getItem('userId')
            if (userId == null) {
                return;
            }
            let responses = await responseFetcher(userId);
            let data: questionType[] = [];
            let language;
            if (typeof window == undefined)
                return;
            language = localStorage.getItem('language');
            setMenu(['HTML', 'SQL', 'CSS', 'Aptitude', language || ""]);
            for (let i = 0; i < ['HTML', 'SQL', 'CSS', 'Aptitude', language].length; i++) {
                let temp = await questionFetcher(['HTML', 'SQL', 'CSS', 'Aptitude', language || ""], ['HTML', 'SQL', 'CSS', 'Aptitude', language || ""][i], userId, responses)
                data = [...data, ...temp];
            }
            dispatch(setQuestionsState(data))
        }
        getQuestion();
    }, []);

    function separatorStatus() {
        let temp = [0, 0, 0, 0]
        let obj: questionType[][] = [[], [], [], [], []]
        allQuestions.forEach(element => {
            const id: number = Math.floor((element.quesId / 100) - 1);
            obj[id] = [...obj[id], element]
            if (element.state == "UA") {
                temp[0] = temp[0] + 1;
            }
            else if (element.state == "MR") {
                temp[1] = temp[1] + 1;
            }
            else if (element.state == "A") {
                temp[2] = temp[2] + 1;
            }
            else {
                temp[3] = temp[3] + 1;
            }
        });
        setSep(obj)
        setArr(temp)
    }

    useEffect(() => {
        separatorStatus()
        if (allQuestions.length != 0) {
            setLoading(false)
        }
    }, [allQuestions])

    return (
        <div>
            <Toaster />
            {!loading ? <div>
                <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                    <div className='flex justify-center items-center'>
                        <Image src="./icons/csi_logo.svg" width={50} height={50} alt="csiLogo" className='px-3 w-[50px]' />
                        <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                    </div>
                    <span className='text-lg'>
                        Time Left : <Timer remainTime={parseInt(remainTime || "")} />
                    </span>
                </div>
                <div className='w-[94%] mt-8 m-auto flex justify-between items-center'>
                    <div className='w-[47%] bg-[#ffffff44] backdrop-blur-[6px] rounded-md h-[80vh] z-10 overflow-y-scroll'>
                        {menu.map((title, id) => (
                            <div key={id} className='w-[90%] m-auto mt-5'>
                                <h1 className='outline outline-4 rounded-lg py-2 text-center outline-[#546CFF] font-bold text-2xl text-[#546CFF]'>{title}</h1>
                                <div className='flex flex-wrap'>
                                    {sep[id].map((question, index) => (
                                        <div key={index} className={`w-[50px] text-white mx-4 mt-6 flex justify-center items-center h-[50px] font-bold text-2xl rounded-lg`} style={{ backgroundColor: `${colors[states.indexOf(question.state)]}` }}>{question.quesId % 100}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='w-[51.5%] h-[80vh] bg-[#ffffff44] backdrop-blur-[6px] rounded-md z-10 relative'>
                        <BarChartQuestions array={arr} />
                        <div className='absolute flex flex-col justify-center items-center right-8 top-0'>
                            <h1 className='font-bold text-4xl'>{arr[0] + arr[1] + arr[2] + arr[3]}</h1>
                            <h1 className='font-semibold'>Total Questions</h1>
                        </div>
                        <div className="m-auto mt-16 flex flex-col items-center justify-center ">
                            <h1 className='text-2xl w-[80%] text-center font-bold'>Are you sure you want to submit your exam ?</h1>
                            <div className='flex justify-evenly w-full mt-6'>
                                <button onClick={() => router.push("/start")} className='bg-[#B795E2] text-white font-bold py-2 px-10 rounded-xl'>Back to Test</button>
                                <button onClick={() => router.push("/feedback")} className='bg-[#546CFF] text-white font-bold py-2 px-10 rounded-xl'>Submit Test</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Image src="./icons/bg_logo.svg" alt="bgLogo" priority width={10} height={10} className='absolute z-0 top-[57%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25%]' />
            </div> : <Loader />}
        </div>
    )
}
