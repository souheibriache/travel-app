import React from 'react'
import './SecondSection.css'
function SecondSection() {
    return (
        <div className="second__section" >
            <img className="second__section__rainbow" src='/images/rainbow.svg' ></img>
            <img className="second__section__rectangle" src='/images/1.svg' ></img>
            <h4>CATEGORY</h4>
            <h2>We Offer Best Services</h2>

            <div className="second__section__services" >
                <div className="second__section__service" >
                    <div>
                    <img src='/images/cat/1.svg' ></img>
                    </div>
                    <h4>Calculated Weather</h4>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>

                <div className="second__section__service" >
                <div>
                    <img src='/images/cat/2.svg' ></img>
                    </div>
                    <h4>Best Flights</h4>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>

                <div className="second__section__service" >
                <div>
                    <img src='/images/cat/3.svg' ></img>
                    </div>
                    <h4>Local Events</h4>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>

                <div className="second__section__service" >
                <div>
                    <img src='/images/cat/4.svg' ></img>
                    </div>
                    <h4>Customization</h4>
                    <p>We deliver outsourced aviation services for military customers</p>
                </div>
            </div>
        </div>
    )
}

export default SecondSection
