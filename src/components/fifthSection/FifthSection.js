import React, { useState } from 'react'
import './FifthSection.css'
function FifthSection() {

    const [activeCard, setactiveCard] = useState(1)


    return (
        <div className="fifth__section" >
            <div className="fifthSection__container" >
                <div className="fifth__section__left" >
                    <div className="fifthSection__title" >
                        <h4>TESTIMONIALS</h4>
                        <h2>What People Say About Us.</h2>
                    </div>
                    <div className="fifthSection__circles" >
                        <div onClick={() => setactiveCard(1)} className={activeCard === 1 ? "fifthSection__circle active__dot" : "fifthSection__circle"} ></div>
                        <div onClick={() => setactiveCard(2)} className={activeCard === 2 ? "fifthSection__circle active__dot" : "fifthSection__circle"}></div>
                        <div onClick={() => setactiveCard(3)} className={activeCard === 3 ? "fifthSection__circle active__dot" : "fifthSection__circle"}></div>
                    </div>

                </div>

                <div className="fifthSection__right" >
                    <div className="fifthSection__cards" >

                        <div className={activeCard === 1 ? "fifthSection__card active " : "fifthSection__card"} >
                            <div className="card__image" >

                                <img src="/images/destinations/1.jpg" ></img>
                            </div>
                            <p className="card__quote" >“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            <div className="card__temoin" >
                                <h4>Mike Tylor</h4>
                                <p>Lahore, Pakistan</p>
                            </div>
                        </div>

                        <div className={activeCard === 2 ? "fifthSection__card active " : "fifthSection__card"} >
                            <div className="card__image" >

                                <img src="/images/destinations/2.jpg" ></img>
                            </div>
                            <p className="card__quote" >“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            <div className="card__temoin" >
                                <h4>Chris Thomas</h4>
                                <p>Ceo of Red Button</p>
                            </div>
                        </div>

                        <div className={activeCard === 3 ? "fifthSection__card active " : "fifthSection__card"} >
                            <div className="card__image" >

                                <img src="/images/destinations/3.jpg" ></img>
                            </div>
                            <p className="card__quote" >“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            <div className="card__temoin" >
                                <h4>Lyes Douag</h4>
                                <p>Ceo of Red Button</p>
                            </div>
                        </div>
                    </div>

                    <div className="switching__buttons" >
                        <button disabled={activeCard === 3} onClick={()=> setactiveCard(activeCard+1)} > <i class="fa fa-chevron-up" ></i></button>
                        <button disabled={activeCard === 1} onClick={()=> setactiveCard(activeCard-1)}><i class="fa fa-chevron-down" ></i></button>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FifthSection
