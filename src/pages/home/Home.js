import React from 'react'
import './Home.css'
import Topbar from '../../components/topbar/Topbar'
import FirstSetion from '../../components/firstSection/FirstSetion'
import SecondSection from '../../components/secondSection/SecondSection'
import ThirdSection from '../../components/thirdSection/ThirdSection'
import FourthSection from '../../components/fourthSection/FourthSection'
import FifthSection from '../../components/fifthSection/FifthSection'
import SixthSection from '../../components/sixthSection/SixthSection'
import Newsletter from '../../components/newsletter/Newsletter'
import Footer from '../../components/footer/Footer'
function Home() {
    return (
        <div className="home" >
            <Topbar/>
            <FirstSetion/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}

export default Home
