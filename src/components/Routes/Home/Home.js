import React from "react"
import './components/style.css'
import Header from "./components/Header/Header"
import Slider from "./components/Slider/Slider"

const Home = () => {
    return(
        <div id='main'>
            <Header />
            <Slider />
        </div>
    )
}

export default Home