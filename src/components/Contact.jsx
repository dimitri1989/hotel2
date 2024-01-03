import React from 'react'
import { useState } from 'react'
import './contact.css'

const Contact = () => {
  const [text,settext] = useState("d-none")
  const [value, setValue] = React.useState({email:"",text:""});
  function onSubmit(event){
    event.preventDefault()
    //HandlerReservation(value)
    settext('sms')
 
    
    
  }
  function check (e,name){
    setValue({...value,[name]:e.target.value})
  }
  return (
    <div className='contact'>
      <p>Contact us</p>
      <div className='container'>
        <div className='row'>
          <form className='email-form ' onSubmit={(event)=>onSubmit(event)}>
            <input type="email" className='email-input' value={value.email} required  onChange={(e)=>check(e,"email")} placeholder='Enter your email here'/>
            <input type="text" className='text-input' value={value.text} required  onChange={(e)=>check(e,"text")} placeholder='Enter your sms here'/>
            <input type="submit" value="Subscribe"  className='mt-2 mb-3'/>
          </form>
          <div className={text}>Your message is received</div>
        </div>
      </div>
    </div>
  )
}

export default Contact