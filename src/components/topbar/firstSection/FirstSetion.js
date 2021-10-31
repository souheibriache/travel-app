import React from 'react'
import './FirstSection.css'
function FirstSetion() {
    return (
        <div className="first__section">
            <img className="decore"  src='/images/Decore.svg' ></img>
            <div className="firstsection__left" >
                <h4>BEST DESTINATIONS AROUND THE WORLD</h4>
                <h2>Travel, <span>enjoy <img src='/images/splash.svg'></img></span> and live a new and full life</h2>
                <p>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>

                <div className="firstsection__buttons" >
                    <buton className="find__out__more" >Find Out More</buton>
                    <div className='play__demo' >
                        <div className="playDemo__circle" >
                            <img src='/images/play.svg' ></img>
                        </div>
                        <button className='playDemo__buton' >Play Demo</button>
                    </div>
                </div>
            </div>
            <div className='firstsection__right'  >
                <img src="/images/Traveller 1.svg" ></img>
            </div>
        </div>
    )
}

export default FirstSetion
