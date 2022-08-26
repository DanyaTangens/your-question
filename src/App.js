import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import {Routes, Route} from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Home from "./Pages/Home";

function App() {
    return (
        <>
            <Navbar/>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>} exact={true}/>
                    <Route path="/message" element={<Home/>}/>
                    <Route path="/notice" element={<Home/>}/>
                    <Route path="/friends" element={<Home/>}/>
                    <Route path="/profile" element={<Home/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
