import React, { useRef } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'
function Start({setName,setTimeout}) {
const inputRef=useRef()

const handleClick=()=> {
    setTimeout(false)
    inputRef.current.value && setName( inputRef.current.value )

}
  return (
    <div style={{
        margin:"auto",
        padding:"15px",
        maxWidth:"400px",
        alignContent:"center",
        marginTop:"300px"
    }}>
        <input type='text' placeholder='enter your name' ref={inputRef} className='form-control'/>
        <MDBBtn style={{width:"100%"}} className='mt-2' onClick={handleClick}>
            Lets  Go!
        </MDBBtn>
    </div>
  )
}

export default Start