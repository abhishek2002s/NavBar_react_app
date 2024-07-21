import "./App.css";
import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {
 
  const[isloggedIn, setIsLoggedIn] = useState(false);


  return <div className="w-screen h-screen bg-richblack-900 flex flex-col">
    <Navbar isloggedIn={isloggedIn} setIsLoggedIn={setIsLoggedIn}/>

  <Routes>
    <Route path="/" element={<Home isloggedIn={isloggedIn}></Home>}> </Route>
    <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}> </Route>
    <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}> </Route>
    <Route path="/dashboard" element={
      <PrivateRoute isloggedIn={isloggedIn}>
        <Dashboard/>
      </PrivateRoute>

  }> </Route>
  </Routes>

  </div>;
}

export default App;
