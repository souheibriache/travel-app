import React from 'react'
import './ThirdSection.css'
function ThirdSection() {
    return (
        <div className="third__section" >
            <h4>Top Selling</h4>
            <h2>Top Destinations</h2>

            <div className="third__section__destinations" >
                <div className="third__section__destination" >
                    <div className="destination__image" >
                        <img src="/images/destinations/1.jpg" ></img>
                    </div>
                    <div className="destination__info" >
                        <div className="destination__price" >
                            <span>Rome,Italy</span>
                            <span>$5,42k</span>
                        </div>

                        <div className="destination__duration" >
                            <i class="fa fa-location-arrow"></i>
                            <span>10 Days Trip</span>
                        </div>
                    </div>


                </div>

                <div className="third__section__destination" >
                    <div className="destination__image" >
                        <img src="/images/destinations/2.jpg" ></img>
                    </div>
                    <div className="destination__info" >
                        <div className="destination__price" >
                            <span>Rome,Italy</span>
                            <span>$5,42k</span>
                        </div>

                        <div className="destination__duration" >
                            <i class="fa fa-location-arrow"></i>
                            <span>10 Days Trip</span>
                        </div>
                    </div>


                </div>

                <div className="third__section__destination" >
                    <div className="destination__image" >
                        <img src="/images/destinations/3.jpg" ></img>
                    </div>
                    <div className="destination__info" >
                        <div className="destination__price" >
                            <span>Rome,Italy</span>
                            <span>$5,42k</span>
                        </div>

                        <div className="destination__duration" >
                            <i class="fa fa-location-arrow"></i>
                            <span>10 Days Trip</span>
                        </div>
                    </div>


                </div>



            </div>
        </div>
    )
}

export default ThirdSection
