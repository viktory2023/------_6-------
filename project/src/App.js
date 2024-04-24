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


function App() {
  return (
    <div>
      <AllOrg/>
    </div>
  );
}

export default App;
