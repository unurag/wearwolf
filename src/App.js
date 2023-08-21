import React from "react"
import {Route, Routes, BrowserRouter as Router} from "react-router-dom"
import Home from "./components/Routes/Home/Home"

const App = () => {
    return(
        <>
           <Router>
                <Routes>
                    <Route exact path="/" Component={Home} />
                </Routes>
            </Router> 
        </>
    )
}

export default App