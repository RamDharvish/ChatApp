import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Success() {
    const navigate=useNavigate()
    const [count,setCount] =useState(10)
    useEffect(()=>{
         setInterval(()=> {
             setCount((count)=>count - 1)
         },1000)
         setTimeout(()=>{
         navigate('/')
    },10000)
    },[navigate])
  return (
    <div>Your Order Have Been Placed Successfully . You Will be Redirected To Home Page {count} seconds</div>
  )
}

export default Success