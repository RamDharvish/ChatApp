import { useEffect, useState } from 'react'
import './QandA.css'
import useSound from 'use-sound'
import correct from '../../Assets/226000-40bfdd88-c10f-4f75-99af-8569db18de8e.mp3'
import wrong from '../../Assets/226000-9027b0d6-7a4f-4ee7-946f-6d011370681f.mp3'
import play from '../../Assets/226000-d8c5d02e-e2d8-4552-a34f-ee006709e7b3.mp3'

export default function QandA({data,setStop,questionNumber,setQuestionNumber}) {

    const [question,setQuestion]=useState(null)
    const [selectAnswer,setSelectAnswer]=useState(null)
    const [className,setClassName]=useState("answer")
    const [letsPlay]=useSound(play)
    const [correctAnswer]=useSound(correct)
    const [wrongAnswer]=useSound(wrong)

    useEffect(() => {
        letsPlay();
    }, [letsPlay]);
    

    const delay=(duration,callback)=> {
          setTimeout(()=> {
            callback()
          },duration)
    }

    const handleClick=(a)=> {
        setSelectAnswer(a)
        setClassName("answer active")
        delay(3000,()=>       setClassName(a.correct ? "answer correct": "answer wrong")
        )
        delay(5000,()=>  {
            if(a.correct){
                correctAnswer()
                delay(1000,()=>{
                    setQuestionNumber((prev)=>prev + 1)
                    setSelectAnswer(null)
                })
              
            }else {
                wrongAnswer()
                delay(1000,()=> {
                    setStop(true)
                })
          
            }
        }   
        )
    
    }

    useEffect(()=> {
        setQuestion(data[questionNumber - 1])
    },[data,questionNumber])
    return(
        <div className="QandA">
            <div className="question">{question?.question}</div>
            <div className="answers">
            {question?.answer.map((a)=> (
                <div className={selectAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
            ))}
         
            
            </div>
        </div>
    )
}