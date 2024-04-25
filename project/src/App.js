import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Load from "./pages/load";
import NewPerson from "./pages/newpercon";
import Received from "./pages/received";
import Sent from "./pages/Sent";
import LoginPage from "./components/LoginForm";
import Profile from "./pages/profile";
import AllOrg from "./pages/allorg";
import ProfileNoti from "./pages/profile_notification";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Profile/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/load" element={<Load/>}/>
        <Route path="/sent" element={<Sent/>}/>
        <Route path="/received" element={<Received/>}/>
        <Route path="/add" element={<NewPerson/>}/>
        <Route path="/organizations" element={<AllOrg/>}/>
        <Route path="/notifications" element={<ProfileNoti/>}/>
      </Routes>
    </Router>);
}

export default App;
