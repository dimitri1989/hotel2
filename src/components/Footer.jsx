import React, { useState } from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'
const Footer = () => {
    const [emailSuccess,setemailSuccess] = useState("d-none")
    
    function sendEmail(event){
        event.preventDefault()
        console.log(event.target.email.value)
        setemailSuccess("text-sub")
        setTimeout(() => {
            setemailSuccess("d-none")
          }, "3000");
        
    }
    
  return (
    <div className='footer '>
        <div className='container position-relative'>
            <div className={emailSuccess}>
                <p className='text-sub-p'>Your subscribe to our website!</p></div>
            <div className='row p-5'>
                <div className='col-lg-6 col-md-6 col-12'>
                    <div className='email'>
                        <h3 className='email-text'>Newsletter & Special Promo</h3>
                        <form className='email-form' onSubmit={(event)=>sendEmail(event)}>
                            <input type="email" className='email-input' required  name="email" placeholder='Enter your email here'/>
                            <input type="submit" value="Subscribe" />
                        </form>
                        
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 col-12'>
                    <h4 className="nav-link">Hotel <br/> Logo</h4>
                    <div className='footer-links mt-4 ms-2'>
                    <nav className='d-flex'>
                        <NavLink className="footer-links-li" to="/">home</NavLink>
                        <NavLink className="footer-links-li" to="about">about</NavLink>
                        <NavLink className="footer-links-li" to="oferrs">oferrs</NavLink>
                    </nav>
                    <nav className='d-flex'>
    
                        <NavLink className="footer-links-li" to="rooms">rooms</NavLink>
                        <NavLink className="footer-links-li" to="contact">contact</NavLink>
                    </nav>
                    </div>
                </div>
            </div>
            <div className='Copyright-container'>
                <div className='Copyright-line'></div>
                <div className='Copyright-text'>© Copyright Booking Hotels. All right reserved.</div>
            </div>
        </div>
    </div>
  )
}

export default Footer