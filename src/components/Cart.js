import React, { useState } from 'react'
import { MdOutlineDone } from "react-icons/md";
import adultImg from './header/icons/Vector.svg'
import childrenImg from './header/icons/child.svg'
import { BsCartDash } from "react-icons/bs";
import { BsCartCheckFill } from "react-icons/bs";
import Button2 from '../UI/Button';
import './Cart.css'

const Cart = ({rezervInfo}) => {
  const [infoBook,setInfoBook] = useState("d-none")
  function addCart (){
    return rezervInfo ? setInfoBook("resertvation-cart") : ""
    
  }
  function hideCart (){
    setInfoBook("d-none")
  }
  return (
      <><button type='button' className='icon-card' onClick={addCart}>
        {rezervInfo ? <BsCartCheckFill/> : <BsCartDash/> }
        
      </button>
      
    <div className={infoBook}>
        <button type='button' className='delete-icon' onClick={hideCart}>x</button>
        <div className='icon-done-background'>
            <div className='icon-done-background-circle'>
                <MdOutlineDone className='circle-icon' />
            </div>
        </div>
        <h2 className='cart-date-title'>Your reservation information</h2>
        <div className='cart-date mb-2'>
            <p className='cart-date-text-date'>{rezervInfo.date}</p>
        </div>
        <div className='box-3'><Button2 adultImg={adultImg}></Button2>
        <p className='cart-adult'>{rezervInfo.Adult}</p></div>
        <div className='box-3 '>
        <Button2 adultImg={childrenImg}></Button2>
          <p>{rezervInfo.Children}</p>
        </div>
    </div></>
  )
}

export default Cart