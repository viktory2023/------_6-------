import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Load from "./pages/load";
import NewPerson from "./pages/newpercon";
import Received from "./pages/received";
import Sent from "./pages/Sent";
import LoginPage from "./components/LoginForm";
import Profile from "./pages/profile";


function App() {
  return (
    <div>
      <Load/>
    </div>
  );
}

export default App;
