import React from 'react'
import './Home.css'
import Topbar from '../../components/topbar/Topbar'
import FirstSetion from '../../components/topbar/firstSection/FirstSetion'
import SecondSection from '../../components/topbar/secondSection/SecondSection'
import ThirdSection from '../../components/topbar/thirdSection/ThirdSection'
import FourthSection from '../../components/topbar/fourthSection/FourthSection'
function Home() {
    return (
        <div className="home" >
            <Topbar/>
            <FirstSetion/>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
        </div>
    )
}

export default Home
