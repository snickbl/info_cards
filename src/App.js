import './App.css';
import React from "react";
import { Nav } from "./Navigation/Nav";
import { Users } from "./pages/Users";
import Photos from "./pages/Photos";
import { Home } from "./pages/Home";
import { Notfound } from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <div className="container">
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/photos" element={<Photos/>}/>
            <Route path="*" element={<Notfound/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
