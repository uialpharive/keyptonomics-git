

import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Wallet from "./Pages/Wallet";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Header from "./components/Header";
import Stake from "./Pages/Stake";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/registart"].includes(location.pathname);

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registart" element={<Register />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stake" element={<Stake/>} />
      </Routes>
      {/* {!hideHeaderFooter && <Footer />} */}
    </div>
  );
};
export default function App() {
  
  return (
    <Router>
    <Layout />
  </Router>
  );
}
