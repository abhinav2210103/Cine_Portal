'use client'
import React, { act, useEffect, useState } from 'react'
import allQuestions from '../../constants/dummyQuestions.json'
import { QuesNoCard } from '@/components/QuesNoCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setQuestionsState } from '@/store/questionStateSlice';
import { setActiveQuestionNumber } from '@/store/questionSlice';
import Timer from '@/components/Timer';

type option = {
    desc: string,
    id: number,
}

type questionType = {
    state: string,
    quesId: number,
    subject: string,
    question: string,
    options: option[],
    answer: number
}

export default function page() {
    const [questions, setQuestions] = useState<questionType[]>([]);
    const dispatch = useDispatch();
    const activeQuestionNumber = useSelector((state: RootState) => state.question.activeQuestionNumber);
    const allQuestions = useSelector((state: RootState) => state.questionState.allQuestions);
    const [idx, setIdx] = useState<number>(activeQuestionNumber);
    const changeState = (type: string) => {
        let temp: questionType[] = [];
        allQuestions.forEach(element => {
            if (element.quesId == activeQuestionNumber) {
                temp.push({ ...element, state: type });
            } else {
                temp.push(element);
            }
        });
        if (activeQuestionNumber == 25) {
            dispatch(setActiveQuestionNumber(1));
        } else {
            dispatch(setActiveQuestionNumber(activeQuestionNumber + 1));
        }
        dispatch(setQuestionsState(temp));
    };
    

    return (
        <div className='bg-[#EAEEFF] h-screen relative'>
            <div className='bg-[#546CFF] w-full flex justify-between items-center px-6 py-4 text-white font-semibold'>
                <div className='flex justify-center items-center'>
                    <img src="./icons/csi_logo.svg" alt="" className='px-3 w-[50px]' />
                    <h1 className='text-xl font-medium pl-5'>CSI Exam Portal</h1>
                </div>
                <Timer/>
            </div>
            <div className='flex ml-[50%] -translate-x-[50%]'>
                {['HTML', 'SQL', 'CSS', 'Aptitude', 'Language'].map((element, id) => (
                    <div key={id} className={`w-[120px] shadow-md hover:text-white font-medium mt-5 hover:bg-[#546CFF] cursor-pointer bg-white flex justify-center items-center px-10 py-2  mx-[2px] transition-all duration-500 ${id == 0 ? "rounded-l-lg" : null} ${id == 4 ? "rounded-r-lg" : null}`}>{element}</div>
                ))}
            </div>
            <div className='w-[94%] mt-8 m-auto flex justify-between items-center'>
                <div className='w-[72%] h-[72vh] px-14 bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10'>
                    <h1 className='text-3xl font-bold py-6'>Question-{activeQuestionNumber}</h1>
                    <hr />
                    <h1 className='font-semibold text-xl py-2'>{allQuestions[activeQuestionNumber - 1]?.question}</h1>
                    {allQuestions[activeQuestionNumber - 1]?.options.map((i, id) => (
                        <div key={id} className='my-4 cursor-pointer'>
                            <input type="radio" className='mr-6 cursor-pointer' name={`opt`} id={`opt${activeQuestionNumber}${i.id}`} />
                            <label className='ml-2 text-[17px] font-medium cursor-pointer' htmlFor={`opt${activeQuestionNumber}${i.id}`}>{i.desc}</label>
                        </div>
                    ))}
                    <div className='mt-[19vh]'>
                    <button className='bg-[#546CFF] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => changeState("R")}>Review</button>
                        <button className='bg-[#00C289] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => changeState("A")}>Save & Next</button>
                        <button className='bg-[#FF122E] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => changeState("NA")}>Skip</button>
                       
                    </div>
                </div>
                <div className='w-[25%] h-[72vh] bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10 flex flex-col justify-center items-center'>
                    <div className='w-[90%] outline outline-3 outline-[#546CFF] mb-3 text-2xl text-center rounded-lg font-bold text-[#546CFF] p-2'>
                        Questions
                    </div>
                    <div className='flex w-[90%] justify-around flex-wrap mt-2 h-[44vh] overflow-y-scroll'>
                        {Array.from({ length: 25 }, (_, index) => index + 1).map((i, id) => (
                            <div key={id}>
                                <QuesNoCard id={id} state={id == 0 ? "V" : "UV"} />
                            </div>
                        ))}
                    </div>
                    <button className='bg-[#546CFF] w-[80%] mt-6 mx-2 rounded-xl px-4 py-[10px] text-white font-medium'>Submit</button>
                </div>
            </div>
            <img src="./icons/bg_logo.svg" alt="" className='absolute z-0 top-[57%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25%]' />
        </div>
    )
}



