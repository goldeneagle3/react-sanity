import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'

import './Hero.css'
import Video from '../assets/videos/video.mp4'
import Takimlar from '../assets/images/takimlar.jpg'
import Oyuncular from '../assets/images/oyuncular.jpg'
import Musabakalar from '../assets/images/musabakalar.jpg'
import Kulup from '../assets/images/kulup.jpg'
import Loading from '../components/Loading/Loading.js'


const Hero = () => {
  
  return (
    <div className="hero">
      <div className="hero__bg">
        <video src={Video} type="video/mp4" autoPlay loop muted playsInline className="video" />
      </div>
      <div className="hero__content">
        <div className="hero__items">
          <img src={Takimlar} alt="" className="hero__image"/>
          <h1 className="hero_title">Takımlar</h1>
          <Link to="/takimlar" className="hero__btn">Devam Et</Link>
        </div>
        <div className="hero__items">
          <img src={Oyuncular} alt="" className="hero__image"/>
          <h1 className="hero_title">Oyuncular</h1>
          
          <Link to="/oyuncular" className="hero__btn">Devam Et</Link>
        </div>
        <div className="hero__items">
          <img src={Musabakalar} alt="" className="hero__image"/>
          <h1 className="hero_title">Müsabakalar</h1>
          
          <Link to="/musabakalar"  className="hero__btn">Devam Et</Link>
        </div>
        <div className="hero__items">
          <img src={Kulup} alt="" className="hero__image"/>
          <h1 className="hero_title">Kulüp</h1>
          
          <Link to="/kulup" className="hero__btn">Devam Et</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
