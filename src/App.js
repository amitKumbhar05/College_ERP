import './App.css'
import Home from "./components/Home"
import Login from "./components/Login"
import Signup from "./components/SignUp"
import Dashboard from "./components/Dashboard"
import Admin from "./components/Admin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import About from './components/About'
import Leave from './components/Leave'
import Atendence from './components/Atendence'
import Marks from './components/Marks'
import Inputdata_attendence from './Extras/Inputdata_attendence'
import UserMessages from './components/UserMessages'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/addstud" element={<Signup/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/dash" element={<Dashboard/>}/>
          <Route path="/Adm" element={<Admin/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/leave" element={<Leave/>}/>
          <Route path="/atendence" element={<Atendence/>}/>
          <Route path="/marks" element={<Marks/>}/>
          <Route path="/addmar" element={<Inputdata_attendence/>}/>
          <Route path="/lmsg" element={<UserMessages/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;