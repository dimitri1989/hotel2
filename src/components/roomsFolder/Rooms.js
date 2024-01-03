import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgbed from './img/bed8.jpg'
import data from './data';
import './rooms.css';
const Rooms = () => {
  const location = useLocation();
  return (
    <div className="room-container" id='width'>
      <div className="rooms d-flex flex-lg-row flex-column">
        {data.map((item) => {
          if (item.text === 'Bedroom') {
            return (
              <div key={item.text} className="col-lg-4 col-12">
                <Link
                  to={
                    location.pathname == '/' ? `rooms/${item.text}` : item.text
                  }>
                  
                  <div className="rooms-bigImg">
                    <img className='d-lg-block d-none' src={item.img} />
                    <img className='d-lg-none d-block w-100 h-10' src={imgbed} />
        
                    <h3 className="rooms-title">{item.text}</h3>
                  </div>
                </Link>
              </div>
            );
          }
        })}
        <div className="col-lg-8 col-12">
          <div className="row row2">
            {data.map((item) => {
              if (item.text !== 'Bedroom') {
                return (
                  <div key={item.text} className="col-6 ">
                   
                    <Link
                      to={
                        location.pathname == '/'
                          ? `rooms/${item.text}`
                          : item.text
                      }>
                      <div className="room-item">
                        <img src={item.img} />
                        <h3 className="rooms-title2">{item.text}</h3>
                      </div>
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
