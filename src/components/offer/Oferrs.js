import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import priceRooms from './oferData';
import './oferr.css';
import { Link, useLocation } from 'react-router-dom';
const Oferrs = () => {
  const location = useLocation()
  return (
    <div className="offer">
      <div className="offer-container">
        <div className="offers-texts">
          <div className="texts">
            <h5 className="Special-Offers">Special Offers</h5>
            <h5 className={location.pathname !="/Oferrs" ? "Best-offer" : "d-none"}>Best offer of the month</h5>
            <p className={location.pathname !="/Oferrs" ? "Experience" : "d-none"}>
              Experience Fantastic Benefits and Obtain Better Rates When You{' '}
              <br /> Make a Direct Booking on Our Official Website
            </p>
          </div>
          <button className= {location.pathname !="/Oferrs" ? "View-all" : "d-none"}><Link to={'Oferrs'}>View all</Link></button>
        </div>

        <div className="row gap-8  m-0 justify-content-md-center align-items-md-center">
          {priceRooms.map((oferr) => {
            if (location.pathname =="/Oferrs" ? oferr.id : oferr.id < 4) {
              return (
                <div className="col-lg-4 col-md-6 col-12 " key={oferr.id}>
                  <div className="items">
                    <div className="items__img">
                      <img src={oferr.img} alt='oferrs' />
                    </div>
                    <div className="items-text-container">
                      <div className="items-titles">
                        <h6 className="rooms">{oferr.roomName}</h6>
                        <div className="Honeymoon-count d-flex justify-content-between">
                          <h5 className="Honeymoon">{oferr.title}</h5>
                          <h5 className="count-people d-flex align-items-center">
                            <BsFillPersonFill />
                            <span className="text">{oferr.countPeople}</span>
                          </h5>
                        </div>
                        <p className="items-text">{oferr.text}</p>
                        <div className="price d-flex justify-content-center">
                          <p className="price-text">${oferr.price}</p>
                          <p className="night">/night</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Oferrs;
