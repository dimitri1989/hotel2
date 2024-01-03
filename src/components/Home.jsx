import React from 'react'
import Header from './header/Header'
import Reservation from './Reservation'
import Rooms from './roomsFolder/Rooms'
import Oferrs from './offer/Oferrs'

const Home = ({HandlerReservation}) => {
  return (
    <>
    <Header />
    <Reservation  HandlerReservation={HandlerReservation}/>
    <Rooms />
    <Oferrs/>
    
    </>
  )
}

export default Home