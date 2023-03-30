import React from "react";
import "./style.css";
import {Route, Routes} from "react-router-dom";
import NoMatch from "./Components/NoMatch/NoMatch";
import Home from "./Pages/Home";
import Message from "./Pages/Message";
import Notice from "./Pages/Notice";
import Profile from "./Pages/Profile";
import Friends from "./Pages/Friends";
import LoginPage from "./Pages/Login";
import {HomeLayout} from "./Auth/Component/HomeLayout";
import {ProtectedLayout} from "./Auth/Component/ProtectedLayout";
import SignUp from "./Pages/SignUp";
import Wall from "./Pages/Wall";
import {ErrorLayout} from "./Auth/Component/ErrorLayout";

function App() {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route element={<HomeLayout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                    </Route>

                    <Route path="/account" element={<ProtectedLayout/>}>
                        <Route path="wall" element={<Wall/>}/>
                        <Route path="message" element={<Message/>}/>
                        <Route path="notice" element={<Notice/>}/>
                        <Route path="friends" element={<Friends/>}/>
                        <Route path="profile" element={<Profile/>}/>
                    </Route>
                    <Route element={<ErrorLayout/>}>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>Er
                </Routes>
            </div>
        </>
    )
}

export default App;
