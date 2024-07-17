'use client'
import { setActiveQuestionNumber } from '@/store/questionSlice';
import { RootState } from '@/store/store';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

interface QuesCardProps {
    display: number,
    id: number;
    state: string,
}

export default function QuesNoCard(props: QuesCardProps) {

    const dispatch = useDispatch()
    const activeQuestionNumber = useSelector((state: RootState) => state.question.activeQuestionNumber);
    const allQuestions = useSelector((state: RootState) => state.questionState.allQuestions);

    const getProperties = (state: number) => {
        if (state == activeQuestionNumber) {
            var pts = {
                backgroundColor: "#546CFF",
                color: "white"
            }
            return pts;
        }
        else {
            var pts = {
                backgroundColor: "",
                color: ""
            }
            if (allQuestions[props.id].state == "A") {
                pts = {
                    backgroundColor: '#00C289',
                    color: "white"
                }
            }
            else if (allQuestions[props.id].state == "MR") {
                pts = {
                    backgroundColor: '#EAB308',
                    color: "white"
                }
            }
            else if (allQuestions[props.id].state == "NA") {
                pts = {
                    backgroundColor: 'red',
                    color: "white"
                }
            }
            return pts;
        }
    }

    return (
        <div key={props.id} className='w-[45px] h-[45px] shadow-md text-xl flex justify-center items-center m-4 font-bold rounded-xl cursor-pointer bg-white hover:bg-[#546CFF] hover:text-white' style={getProperties(props.id + 1)} onClick={() => {
            dispatch(setActiveQuestionNumber(props.id + 1));
        }}>{props.display % 100}</div>
    )
}

export { QuesNoCard }
