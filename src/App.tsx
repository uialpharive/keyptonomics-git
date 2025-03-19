

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Stake from "./Pages/Stake";

export default function App() {
  return (
    <Router>
      <div className="">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registart" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/stake" element={<Stake/>} />
        </Routes>
      </div>
    </Router>
  );
}
