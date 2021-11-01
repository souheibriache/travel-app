import React from 'react'
import './Newsletter.css'
function Newsletter() {
    return (
        <div className="newsletter" >
            <img className="rainbow" src="/images/rainbow.svg"></img>
            <div className="newsleter__container" >
                <div className="newsletter__icon__container" >
                    <i class="fa fa-paper-plane"></i>
                </div>
                <div className="form__container" >


                    <img className="circles circle_1" src="/images/circles.svg"></img>
                    <img className="circles circle_2" src="/images/circles.svg"></img>

                    <p>Subscribe to get information, latest news and other interesting offers about Cobham</p>
                    <form>
                        <input placeholder="Your email" ></input>
                        <button type="submit" >Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
