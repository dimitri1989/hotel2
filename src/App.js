import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Animation, Button } from 'rsuite';
import { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Rooms from './components/roomsFolder/Rooms';
import Contact from './components/Contact';
import Room from './components/roomsFolder/Room';
import Oferrs from './components/offer/Oferrs';
import Footer from './components/Footer'
import './normalize.css';
import './App.css';
import './media.css';
import MainLayouts from './layouts/MainLayouts';

function App() {
  var [reservation, setReservation] = useState({});
  var [reReservation, setreReservation] = useState(false);
  function reReservatinHandler(reReservation) {
    if (!reReservation) {
    }
  }
  function HandlerReservation(reservationInfo) {
    setReservation({ ...reservationInfo });
    setreReservation(true);
    reReservatinHandler(reReservation);
  }

  return (
    <div className="App container-fluid">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayouts />}>
            <Route
              index
              element={<Home HandlerReservation={HandlerReservation} />}
            />
            <Route path="about" element={<About />} />
            <Route path="oferrs" element={<Oferrs />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="contact" element={<Contact />} />
            <Route path="rooms/:text" element={<Room />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
