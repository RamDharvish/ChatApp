import React, { useEffect, useState } from 'react'
import '../main.css'

function Timer({ setTimeoutCallback, questionNumber }) {
    const [timer, setTimer] = useState(30)

    useEffect(() => {
        if (timer === 0) {
            return setTimeoutCallback(true)
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer, setTimeoutCallback])

    useEffect(() => {
        setTimer(30)
    }, [questionNumber])

    return <div className="timer">{timer}</div>
}

export default Timer
