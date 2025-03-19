

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

export default function App() {
  return (
    <Router>
      {/* <div className="p-5"> */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registart" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}
