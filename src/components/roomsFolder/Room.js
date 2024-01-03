import { Carousel, RadioGroup, Radio, Divider } from 'rsuite';
import React from 'react'
import {useLocation, useParams,Link } from 'react-router-dom'


import data from './data'
const Room = () => {
  const RadioLabel = ({ children }) => <label style={{ padding: 7 }}>{children}</label>;
    const param = useParams()
    const location = useLocation()
    const [placement, setPlacement] = React.useState('bottom');
    const [shape, setShape] = React.useState('dot');
  return (
    <>
    <div className='rooms-way'>
      {<Link to={'/'}>Home</Link>} - {<Link to={'/rooms'}>Rooms</Link>}
    </div>
    <div className='room-details'>
    {data.map((rooms,index)=>{
      if(param.text===rooms.text){
       return <div key={index}><Carousel
       key={`${placement}.${shape}`}
       placement={placement}
       shape={shape}
       className="custom-slider">
         {rooms.sliderImg.map((img)=>{
           
          return <img key={img} src={img} height="25" />
         })}
       
     </Carousel>
     <div className='details'>
      <h1>Detailed information:</h1>
       <h2 className='details__title'>
         {rooms.text}
       </h2>
       <p className='details__text'>
        
         {rooms.description}
       </p>
       <h6 className='details__price'>
       Room Cost: {rooms.price}$
       </h6>
     </div></div>
      }
    })}
    
  </div>
  
  </>
  )
}

export default Room