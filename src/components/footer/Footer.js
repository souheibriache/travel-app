import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className="footer">
            <div className="footer__container" >
                <div className="footer__menu" >
                    <div className='footer__section overflex' >
                        <h2>Jadoo.</h2>
                        <p className="description">Book your trip in minute, get full Control for much longer.</p>
                    </div>

                    <div className='footer__section' >
                        <p className="footer__section__title" >Company</p>
                        <ul className='footer__section__menu' >
                            <li className='footer__menu__item' >About</li>
                            <li className='footer__menu__item' >Careers</li>
                            <li className='footer__menu__item' >Mobile</li>
                        </ul>
                    </div>

                    <div className='footer__section' >
                        <p className="footer__section__title" >Contact</p>
                        <ul className='footer__section__menu' >
                            <li className='footer__menu__item' >Help/FAQ</li>
                            <li className='footer__menu__item' >Press</li>
                            <li className='footer__menu__item' >Affilates</li>
                        </ul>
                    </div>

                    <div className='footer__section' >
                        <p className="footer__section__title" >More</p>
                        <ul className='footer__section__menu' >
                            <li className='footer__menu__item' >Airlinefees</li>
                            <li className='footer__menu__item' >Airline</li>
                            <li className='footer__menu__item' >Low fare tips</li>
                        </ul>
                    </div>

                    <div className='footer__section overflex' >
                        <div className="footer__social" >
                             <div className="social__icon" ><i class="fa fa-facebook-f"></i></div>
                             <div className="social__icon" ><i class="fa fa-instagram"></i></div>
                             <div className="social__icon" ><i class="fa fa-twitter"></i></div>
                        </div>

                        <p className="footer__discover" >Discover our app</p>
                        <div className="download__container" >
                            <img className="download__item" src='/images/Google_Play.svg' ></img>
                            <img className="download__item" src='/images/Play_Store.svg' ></img>
                        </div>
                    </div>
                </div>
                <p className="footer__copyright" >All rights reserved@jadoo.co</p>
            </div>
        </div>
    )
}

export default Footer
