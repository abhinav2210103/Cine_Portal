import React, { useEffect, useState } from 'react';

function Timer() {
    const [time, setTime] = useState({
        hours: 3,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(prevTime => {
                const { hours, minutes, seconds } = prevTime;

                if (seconds > 0) {
                    return { ...prevTime, seconds: seconds - 1 };
                } else if (minutes > 0) {
                    return { hours, minutes: minutes - 1, seconds: 59 };
                } else if (hours > 0) {
                    return { hours: hours - 1, minutes: 59, seconds: 59 };
                } else {
                    clearInterval(interval);
                    return prevTime;
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const { hours, minutes, seconds } = time;

    return (
        <span className='text-lg'>
            Time Left : <span>{`${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} hr`}</span>
        </span>
    );
}

export default Timer;
