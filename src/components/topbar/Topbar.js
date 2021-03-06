import React, { useEffect, useState } from 'react'
import './Topbar.css'
function Topbar() {

  const [colorChange, setColorchange] = useState(false);
  const [topbar, settopbbar] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 50){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  window.addEventListener('scroll', changeNavbarColor);
    return (
        <div className={colorChange ? 'topbar colorChange' : 'topbar'}>
          <div className="topbar__container" >

          
            <div className="topbar__left">
                <img src="/images/Logo.svg" alt="" />
            </div>
            <div className="topbar__right">
                <div className="topbar__toggle  " onClick={() => settopbbar(!topbar)} >
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <ul className={ topbar ?  "topbar__menu active__menu" : "topbar__menu"} >
                    <li className="topbar__menu__item" >Destinations</li>
                    <li className="topbar__menu__item" >Hotels</li>
                    <li className="topbar__menu__item" >Flights</li>
                    <li className="topbar__menu__item" >Bookings</li>
                    <li className="topbar__menu__item" >Login</li>
                    <li className="topbar__menu__item sign__up" >Sign up</li>
                    <li className="topbar__menu__item" >En</li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default Topbar
