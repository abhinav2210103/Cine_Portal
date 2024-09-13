'use client'
import React, { useEffect } from 'react'

function page() {
    useEffect(() => {
        if (typeof window != undefined) {
            localStorage.removeItem("userId")
            localStorage.removeItem("TREM")
            localStorage.removeItem("language")
        }
    }, [])
    return (
        <div>Thank You</div>
    )
}

export default page