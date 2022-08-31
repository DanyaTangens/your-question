import React from "react";
import Navbar from "./Navbar";
import "./style.css";
import {Routes, Route} from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Notice from "./Pages/Notice";
import Profile from "./Pages/Profile";
import Friends from "./Pages/Friends";

function App() {
    return (
        <>
            <Navbar/>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home/>} exact={true}/>
                    <Route path="/message" element={<Message/>}/>
                    <Route path="/notice" element={<Notice/>}/>
                    <Route path="/friends" element={<Friends/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<NoMatch/>}/>
                </Routes>
            </div>
        </>
    )
}

export default App;
