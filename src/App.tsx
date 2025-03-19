import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import Home from "./Pages/Home";

export default function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}
