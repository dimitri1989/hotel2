import React, { useState } from 'react' 
import { IoIosArrowDown } from "react-icons/io";
import { Button, ButtonToolbar } from 'rsuite';
import 'rsuite/dist/rsuite.min.css'
import adultImg from './header/icons/Vector.svg'
import childrenImg from './header/icons/child.svg'
import Button2 from '../UI/Button';
import Cart from './Cart'

<IoIosArrowDown />
const Reservation = ({HandlerReservation}) => {
    const [rezervInfo,setRezervInfo] = useState(false)
    const [border,setBorder] = useState("box-3")
    const [value, setValue] = React.useState({date:0,Adult:0,Children:0});
    function onSubmit(event){
      event.preventDefault()
      HandlerReservation(value)
      if(value.Adult == 0){
        setBorder("box-3 border border-danger")
        return false
      }else{
        setRezervInfo(value)
        setBorder("box-3 ")
      }
      
      
    }
    function datehandler(event,name){
      
        setValue({...value,[name]:event.target.value})  
    }
  return (
    <div className='reservation'>
        <Cart rezervInfo={rezervInfo} />
        <div className='reservation__text'>
            <h2>Book a Room</h2>
            <p>Discover the perfect space for you!</p>
        </div>
        <form onSubmit={(event)=>onSubmit(event)}>
        <div className='reservation-input-box'>
          <h4 className='mb-4'>Date</h4>
        <input type="date"  name="birthday" value={value.date} onChange={(e)=>datehandler(e,"date")} placeholder={value} required/>
        </div>
        <div className='reservation-input-box2'>
        <h4 className='mb-4'>Person</h4>
          <div className='box-5'>
          <div className={border}>
          <Button2 adultImg={adultImg}></Button2>
          <p>Adult</p>
        <select  onChange={(e)=>datehandler(e,"Adult")} required>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        
        </div>
        <div className='box-3 '>
          <Button2 adultImg={childrenImg}></Button2>
          <p>Children</p>
        <select  onChange={(e)=>datehandler(e,"Children")}>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        </div></div>
        
        </div>
        <Button type='submit' color="blue" appearance="primary">
        <div className='btn-reserv'>BOOK NOW</div>
      </Button>
       
        </form> 
    </div>
  )
}

export default Reservation