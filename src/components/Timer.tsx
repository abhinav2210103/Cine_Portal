"use client";

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { useTimer } from 'react-timer-hook'    

interface props {
    remainTime: number;
}

export default function Timer(props: props) {
    const router = useRouter();
    const {
        totalSeconds,
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        start,
        pause,
        resume,
        restart,
    } = useTimer({ expiryTimestamp: new Date(Date.now() + parseInt(localStorage.getItem("TREM") || "")), onExpire: async  () => {
        if (typeof window === "undefined")
            return;
        const userId = localStorage.getItem("userId");
        if (!userId)
            router.push("/login");        
        localStorage.setItem("TREM", "0");
        router.push("/feedback") ; 
    }});
    useEffect(() => {
        if (typeof window === "undefined")
            return;
        const prevTime = parseInt(localStorage.getItem("TREM") || "");
        localStorage.setItem("TREM", `${prevTime - 1000}`);
    }, [seconds])
    return (
        <span>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>
    )
}
