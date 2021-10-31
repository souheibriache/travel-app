import React from 'react'
import './FourthSection.css'
function FourthSection() {
    return (
        <div className="fourth__section" >



            <div className="fourth__section__left" >
                <h4>Easy and Fast</h4>
                <h2>Book your next trip in 3 easy steps</h2>
                <div className="steps" >
                    <div className="steps__item" >
                        <div className="steps__item__img" >
                            <img src="/images/book/1.svg" ></img>
                        </div>
                        <div className="book__info" >
                            <h4>Choose Destination</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                    <div className="steps__item" >
                        <div className="steps__item__img" >
                            <img src="/images/book/2.svg" ></img>
                        </div>
                        <div className="book__info" >
                            <h4>Choose Destination</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>

                    <div className="steps__item" >
                        <div className="steps__item__img" >
                            <img src="/images/book/3.svg" ></img>
                        </div>
                        <div className="book__info" >
                            <h4>Choose Destination</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fourth__section__right" >

               

                <div className="card__container" id="card__container" >
                <div id="float__div" >
                    <div className="float__div__left" >
                        <img src='/images/destinations/1.jpg' ></img>
                    </div>
                    <div className="float__div__right" >
                        <p className="trip__status" >Ongoing</p>
                        <p className="trip__destination" >Trip to rome</p>
                        <div className="trip__progress" >
                            <p><span>40%</span> completed</p>
                            <div className="progress__bar" >
                                <div className="progress" ></div>
                            </div>
                        </div>
                    </div>
                </div>

                    <img src="/images/tofla.jpg"></img>
                    <div className="card__info" >
                        <p className="card__title" >Trop Ro Greece</p>
                        <p className="card__content" >14-29 June| by Robbin joseph</p>
                        <div className="card__icons" >
                            <div className="card__icon" >
                                <i class="fa fa-leaf"></i>
                            </div>

                            <div className="card__icon" >
                                <i class="fa fa-map"></i>
                            </div>

                            <div className="card__icon" >
                                <i class="fa fa-paper-plane"></i>
                            </div>
                        </div>
                        <div className="card__bottom" >
                            <div className="card__people" >
                                <i class="fa fa-building"></i>
                                <p>24 people going</p>
                            </div>
                            <i class="fa fa-heart-o"></i>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthSection
