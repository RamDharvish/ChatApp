import React, { useEffect, useState } from 'react'
import './quiz.css'
import useSound from 'use-sound'
import play from  '../Assets/226000-d8c5d02e-e2d8-4552-a34f-ee006709e7b3.mp3'
import correct from'../Assets/226000-40bfdd88-c10f-4f75-99af-8569db18de8e.mp3'
import wrong from  '../Assets/226000-9027b0d6-7a4f-4ee7-946f-6d011370681f.mp3'

function Quiz({ data, questionNumber, setQuestionNumber, setTimeoutCallback }) {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className, setClassName] = useState("answer")

    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

    useEffect(() => {
        setQuestion(data[questionNumber - 1])
    }, [data, questionNumber])

    useEffect(() => {
        letsPlay()
    }, [letsPlay])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration)
    }

    const handleClick = (item) => {
        setSelectedAnswer(item)
        setClassName("answer active")

        delay(3000, () => {
            setClassName(item.answer ? "answer correct" : "answer wrong")
        })

        delay(5000, () => {
            if (item.answer) {
                correctAnswer()
                delay(1000, () => {
                    setQuestionNumber((prev) => prev + 1)
                    setSelectedAnswer(null)
                })
            } else {
                wrongAnswer()
                delay(1000, () => {
                    setTimeoutCallback(true)
                })
            }
        })
    }
console.log(questionNumber);
    return (
        <div className='quiz'>
            <div className="question">{questionNumber} {question?.question}</div>
            <div className="answers">
                {question?.answer.map((item) => (
                    <div
                        key={item.text}
                        className={selectedAnswer === item ? className : "answer"}
                        onClick={() => !selectedAnswer && handleClick(item)}
                    >
                        {item.text}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Quiz
