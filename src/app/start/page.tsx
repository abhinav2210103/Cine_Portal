'use client'
import React, { useEffect, useState } from 'react'
import { QuesNoCard } from '@/components/QuesNoCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setQuestionsState } from '@/store/questionStateSlice';
import { setActiveQuestionNumber } from '@/store/questionSlice';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '@/components/Loader/Loader';
import { questionFetcher } from '@/constants/questionFetcher';
import Image from 'next/image';

interface option {
    desc: string,
    id: number,
}

interface questionType {
    state: string,
    quesId: number,
    subject: string,
    question: string,
    options: option[],
    recordedAns: number,
    answer: number
}

export default function page() {
    const [questions, setQuestions] = useState<questionType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [navMenu, setNavMenu] = useState<string[]>(['HTML', 'SQL', 'CSS', 'Aptitude', 'Language']);
    const dispatch = useDispatch();
    const activeQuestionNumber = useSelector((state: RootState) => state.question.activeQuestionNumber);
    const allQuestions = useSelector((state: RootState) => state.questionState.allQuestions);
    const [idx, setIdx] = useState<number>(activeQuestionNumber);
    const [answer, setAnswer] = useState<string>("")
    const changeState = (type: string, ansId: number) => {
        let temp: questionType[] = []
        allQuestions.forEach(element => {
            element.quesId == activeQuestionNumber ? temp.push({ ...element, state: type, recordedAns: ansId }) : temp.push(element)
        });
        if (activeQuestionNumber == allQuestions.length) {
            dispatch(setActiveQuestionNumber(1))
        }
        else {
            dispatch(setActiveQuestionNumber(activeQuestionNumber + 1))
        }
        dispatch(setQuestionsState(temp))
    }

    const saveAndNextHandler = () => {
        let ansId: number = 0;
        allQuestions[activeQuestionNumber - 1].options.forEach(option => {
            if (option.desc == answer) {
                ansId = option.id
            }
        })
        if (ansId == 0) {
            toast.error("Please select an answer")
            return
        }
        changeState("A", ansId)
    }

    const getQuestions = async () => {
        let data = await questionFetcher("Java", "6676a99b91436f80e4dd9821");
        if (data == "Error fetching the questions")
            return;
        for (let index = 0; index < data.length; index++) {
            data[index] = { ...data[index], quesId: index + 1, state: "UA", recordedAns: 0 }
        }
        dispatch(setQuestionsState(data))
        setLoading(false)
    }

    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <div><Toaster />{loading ? <Loader /> : <div className='bg-[#EAEEFF] h-screen relative'>

            <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                <div className='flex justify-center items-center'>
                    <Image src="./icons/csi_logo.svg" width={50} height={50} alt="csiLogo" className='px-3 w-[50px]' />
                    <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                </div>
                <span className='text-lg'>
                    Time Left : <span>03:00:00 hr</span>
                </span>
            </div>
            <div className='flex ml-[50%] -translate-x-[50%]'>
                {navMenu?.map((element, id) => (
                    <div key={id} className={`w-[120px] shadow-md hover:text-white font-medium mt-5 hover:bg-[#546CFF] cursor-pointer bg-white flex justify-center items-center px-10 py-2  mx-[2px] transition-all duration-500 ${id == 0 ? "rounded-l-lg" : null} ${id == 4 ? "rounded-r-lg" : null}`}>{element}</div>
                ))}
            </div>
            <div className='w-[94%] mt-8 m-auto flex justify-between items-center'>
                <div className='w-[72%] h-[72vh] px-14 bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10'>
                    <h1 className='text-3xl font-bold py-6'>Question-{activeQuestionNumber}</h1>
                    <hr />
                    <h1 className='font-semibold text-xl py-2'>{allQuestions[activeQuestionNumber - 1]?.question}</h1>
                    {allQuestions[activeQuestionNumber - 1]?.options.map((i, id) => (
                        <div key={id} className='my-4 cursor-pointer' >
                            <input type="radio" checked={i.id == allQuestions[activeQuestionNumber - 1].recordedAns || answer == i.desc} onChange={() => {
                                setAnswer(i.desc)
                            }} name={`opt${activeQuestionNumber}${i.id}`} id={`opt${activeQuestionNumber}${i.id}`} />
                            <label className='ml-2 text-[17px] font-medium cursor-pointer' htmlFor={`opt${activeQuestionNumber}${i.id}`}>{i.desc}</label>
                        </div>
                    ))}
                    <div className='mt-[19vh]'>
                        <button className='bg-[#546CFF] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium'>Review</button>
                        <button className='bg-[#00C289] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={saveAndNextHandler}>Save & Next</button>
                        <button className='bg-yellow-400 w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => changeState("NA", 0)}>Skip</button>
                    </div>
                </div>
                <div className='w-[25%] h-[72vh] bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10 flex flex-col justify-center items-center'>
                    <div className='w-[90%] outline outline-3 outline-[#546CFF] mb-3 text-2xl text-center rounded-lg font-bold text-[#546CFF] p-2'>
                        Questions
                    </div>
                    <div className='flex w-[90%] justify-around flex-wrap mt-2 h-[44vh] overflow-y-scroll'>
                        {Array.from({ length: allQuestions.length }, (_, index) => index + 1).map((i, id) => (
                            <div key={id}>
                                <QuesNoCard id={id} state={id == 0 ? "V" : "UV"} />
                            </div>
                        ))}
                    </div>
                    <button className='bg-[#546CFF] w-[80%] mt-6 mx-2 rounded-xl px-4 py-[10px] text-white font-medium'>Submit</button>
                </div>
            </div>
            <Image src="./icons/bg_logo.svg" alt="bgLogo" width={10} height={10} className='absolute z-0 top-[57%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25%]' />
        </div>}</div>
    )
}



