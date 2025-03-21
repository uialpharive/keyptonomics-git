

import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Stake from "./Pages/Stake";
import Wallet from "./Pages/Wallet";
import Footer from "./components/Footer";
import Header from "./components/Header";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/registart"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
    {!hideHeaderFooter && <Header />}
    
    <div className={`flex-grow ${hideHeaderFooter ? "" : "mx-xl-mx"}`}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registart" element={<Register />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stake" element={<Stake />} />
      </Routes>
    </div>
    
    {!hideHeaderFooter && <Footer />}
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
