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
import { responseFetcher } from '@/constants/responseFetcher';
import { responseSetter } from '@/constants/responseSetter';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import Timer from '@/components/Timer';
import { languageFetcher } from '@/constants/languageFetcher';

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

export default function page() {
    const query = useParams()
    if (typeof window == undefined)
        return;
    const [questions, setQuestions] = useState<questionType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [remainTime, setRemainTime] = useState<number>(0)
    const router = useRouter()
    const [navMenu, setNavMenu] = useState<string[]>(['HTML', 'SQL', 'CSS', 'Aptitude', 'Java']);
    const [activeMenu, setActiveMenu] = useState<number>(0)
    const [subject, setSubject] = useState<string>("HTML")
    const dispatch = useDispatch();
    const activeQuestionNumber = useSelector((state: RootState) => state.question.activeQuestionNumber);
    const allQuestions = useSelector((state: RootState) => state.questionState.allQuestions);
    const [idx, setIdx] = useState<number>(activeQuestionNumber);
    const [answer, setAnswer] = useState<string>("")
    const changeState = (type: string, ansId: number) => {
        let temp: questionType[] = []
        allQuestions.forEach((element, id) => {
            id + 1 == activeQuestionNumber ? temp.push({ ...element, state: type, recordedAns: ansId }) : temp.push(element)
        });
        if (activeQuestionNumber == allQuestions.length) {
            dispatch(setActiveQuestionNumber(1))
        }
        else {
            setActiveMenu(Math.floor(allQuestions[activeQuestionNumber].quesId / 100) - 1)
            dispatch(setActiveQuestionNumber(activeQuestionNumber + 1))
        }
        dispatch(setQuestionsState(temp))
    }

    const buttonHandler = async (state: string) => {
        let ansId: number = allQuestions[activeQuestionNumber - 1].recordedAns;
        if (["NA", "MR", "A"].indexOf(state) < ["NA", "MR", "A"].indexOf(allQuestions[activeQuestionNumber - 1].state)) {
            toast.error("Already saved and recorded")
            return
        }
        if (typeof window == undefined)
            return
        const userId = localStorage.getItem("userId");
        if (userId == null)
            return;
        for (const option of allQuestions[activeQuestionNumber - 1].options) {
            if (option.desc == answer) {
                ansId = option.id
                changeState(state, state == "NA" ? 0 : ansId)
                await responseSetter(userId, allQuestions[activeQuestionNumber - 1]._id, ["NA", "MR", "A"].indexOf(state), state == "NA" ? 0 : ansId)
                setAnswer("")
            }
        }
        if (ansId == 0 && state != "NA") {
            toast.error("Please select an answer")
            return
        }
        changeState(state, state == "NA" ? 0 : ansId)
        await responseSetter(userId, allQuestions[activeQuestionNumber - 1]._id, ["NA", "MR", "A"].indexOf(state), state == "NA" ? 0 : ansId)
    }


    const clearResponseHandler = () => {
        const currentState: string = allQuestions[activeQuestionNumber - 1]?.state
        if (currentState != "A" && currentState != "MR") {
            setAnswer("");
        }
        else {
            toast.error("Already saved and recorded")
        }
    }

    const getQuestions = async () => {
        if (typeof window == undefined)
            return
        const userId = localStorage.getItem("userId")
        if (userId == null) {
            toast.error("User not found")
            router.replace("/login")
            return
        }
        let language = await languageFetcher(userId);
        setNavMenu(['HTML', 'SQL', 'CSS', 'Aptitude', language])
        if (typeof window == undefined)
            return;
        localStorage.setItem("language", language);
        let responses = await responseFetcher(userId);
        console.log(responses)
        if (responses?.message) {
            router.replace("/login")
            return
        }
        let data: questionType[] = [];
        for (let i = 0; i < navMenu.length; i++) {
            let temp = await questionFetcher(['HTML', 'SQL', 'CSS', 'Aptitude', language], ['HTML', 'SQL', 'CSS', 'Aptitude', language][i], userId, responses)
            data = [...data, ...temp];
        }
        dispatch(setQuestionsState(data))
        setLoading(false)
    }

    useEffect(() => {
        function BeforeUnloadHandler(event: BeforeUnloadEvent) {
            event.preventDefault();
            return (event.returnValue = "")
        }
        window.addEventListener('beforeunload', BeforeUnloadHandler, { capture: true })
    }, [])

    useEffect(() => {
        console.log(query)
        if (typeof window == undefined)
            return
        if (localStorage.getItem("userId") == null) {
            router.replace("/login")
        }
        if (localStorage.getItem("TREM") != null) {
            let data: number = parseInt(localStorage.getItem("TREM") || "0")
            setRemainTime(data)
        }
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
                    Time Left : <Timer remainTime={remainTime} />
                </span>
            </div>
            <div className='flex ml-[50%] -translate-x-[50%]'>
                {navMenu?.map((element, id) => (
                    <div key={id} className={`w-[120px] shadow-md hover:text-white font-medium mt-5 hover:bg-[#546CFF] cursor-pointer ${activeMenu == id ? "bg-[#546CFF] text-white" : "bg-white text-black"} flex justify-center items-center px-10 py-2  mx-[2px] transition-all duration-500 ${id == 0 ? "rounded-l-lg" : null} ${id == 4 ? "rounded-r-lg" : null}`} onClick={() => {
                        setSubject(navMenu[id])
                        setActiveMenu(id)
                    }}>{element}</div>
                ))}
            </div>
            <div className='w-[94%] mt-8 m-auto flex justify-between items-center'>
                <div className='w-[72%] h-[72vh] px-14 bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10'>
                    <h1 className='text-3xl font-bold py-6'>Question-{allQuestions[activeQuestionNumber - 1].quesId % 100}</h1>
                    <hr />
                    <h1 className='font-semibold text-xl py-2'>{allQuestions[activeQuestionNumber - 1]?.question}</h1>
                    {allQuestions[activeQuestionNumber - 1]?.options.map((i, id) => (
                        <div key={id} className='my-4 cursor-pointer' >
                            <input type="radio" checked={allQuestions[activeQuestionNumber - 1].recordedAns != 0 ? answer != "" ? answer == i.desc : allQuestions[activeQuestionNumber - 1].recordedAns == i.id : answer == i.desc}
                                onChange={() => {
                                    setAnswer(i.desc)
                                }} name={`opt${activeQuestionNumber}${i.id}`} id={`opt${activeQuestionNumber}${i.id}`} />
                            <label className='ml-2 text-[17px] font-medium cursor-pointer' htmlFor={`opt${activeQuestionNumber}${i.id}`}>{i.desc}</label>
                        </div>
                    ))}
                    <div className='mt-[19vh]'>
                        <button className='bg-yellow-500 w-fit mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => buttonHandler("MR")}>Mark for Review & Next</button>
                        <button className='bg-[#00C289] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => buttonHandler("A")}>Save & Next</button>
                        <button className='bg-[#FF0000] w-[135px] mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => buttonHandler("NA")}>Skip</button>
                        <button className='bg-white outline outline-1 outline-black mx-2 rounded-xl px-4 py-[10px] text-sm text-black font-medium' onClick={clearResponseHandler}>Clear Response</button>
                    </div>
                </div>
                <div className='w-[25%] h-[72vh] bg-[#FFFFFF] backdrop-filter backdrop-blur-[6px] rounded-md bg-opacity-30 z-10 flex flex-col justify-center items-center'>
                    <div className='w-[90%] outline outline-3 outline-[#546CFF] mb-3 text-2xl text-center rounded-lg font-bold text-[#546CFF] p-2'>
                        Questions
                    </div>
                    <div className='flex w-[90%] justify-around flex-wrap mt-2 h-[44vh] overflow-y-scroll'>
                        {allQuestions.map((element, id) => {
                            if (Math.floor(element.quesId / 100) - 1 == activeMenu)
                                return (
                                    <div key={id} onClick={() => setAnswer("")}>
                                        <QuesNoCard display={element.quesId} id={id} state={id == 0 ? "V" : "UV"} />
                                    </div>
                                )
                        })}
                    </div>
                    <button className='bg-[#546CFF] w-[80%] mt-6 mx-2 rounded-xl px-4 py-[10px] text-white font-medium' onClick={() => router.push('/confirmation')}>Submit</button>
                </div>
            </div>
            <Image src="./icons/bg_logo.svg" alt="bgLogo" priority width={10} height={10} className='absolute z-0 top-[57%] left-[45%] -translate-x-1/2 -translate-y-1/2 w-[25%]' />
        </div>}</div>
    )
}


