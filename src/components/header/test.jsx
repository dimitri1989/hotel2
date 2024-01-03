import React from 'react'
import slideData from './data/sliderItems'
const HeaderBg = () => {
  console.log(slideData.map((item)=> item.img))
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  {slideData.map((data,index)=>{
   return <div className="carousel-inner">
      <div className={index === 0 ? "carousel-item active" : "carousel-item" } data-bs-interval="10000">
    <img src={data.img} className="d-block w-100 caruselimg" alt="..."/>
    <div className="carousel-caption d-none d-md-block">
      <h5>{data.title}</h5>
      <p>Some representative placeholder content for the first slide.</p>
    </div>
  </div>
    </div>
    
  })}

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  )
}

export default HeaderBg