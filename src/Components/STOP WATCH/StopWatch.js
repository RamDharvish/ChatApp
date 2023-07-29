
import React, { useEffect, useState, useRef } from 'react'
import './style.css'

function StopWatch() {
  const [hour,setHour]=useState(0)
  const [min,setMin]=useState(0)
  const [sec,setSec]=useState(0)
  const [msec,setMsec]=useState(0)
  const [running,setRunning]=useState(false)

  const intervalRef = useRef(null)

  useEffect (()=>{
    if(running){
      intervalRef.current =setInterval(updateTime)
    } else {
      clearInterval(intervalRef.current)
    }
    return ()=>clearInterval(intervalRef.current)
  }, [running])


  const updateTime = () => {
    setMsec((prevMsec) => {
      const newMsec = prevMsec + 1;
      if (newMsec >= 99) {
        setSec((prevSec) => {
          const newSec = prevSec + 1;
          if (newSec >= 59) {
            setMin((prevMin) => {
              const newMin = prevMin + 1;
              if (newMin >= 59) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              }
              return newMin;
            });
            return 0;
          }
          return newSec;
        });
        return 0;
      }
      return newMsec;
    });
  };


  const start=()=> {
    setRunning(true)
  }
  const stop=()=> {
    setRunning(false)
  }

  const reset =()=> {
    setHour(0)
    setMin(0)
    setSec(0)
    setMsec(0)
    setRunning(false)
  }


  return (
    <div>
   
    <div className='stopWatch'>
    <h1 className='title'>Stop Watch</h1>
    <div className='watch'>
    <h1>{hour} : {min} : {sec} : {msec}</h1>
    <button onClick={start}>Start</button>
    <button onClick={stop}>Stop</button>
    <button onClick={reset}>Reset</button>
    </div>
    </div>
    </div>
  )
}

export default StopWatch

