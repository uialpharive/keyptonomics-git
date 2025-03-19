import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Wallet from "./Pages/Wallet";

export default function App() {
  return (
    <Router>
      <div className="p-5">
        <Routes>
          <Route path="/wallet" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}
