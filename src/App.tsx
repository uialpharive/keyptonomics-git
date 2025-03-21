

import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Stake from "./Pages/Stake";
import Wallet from "./Pages/Wallet";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Forgetpassword from "./Pages/Auth/Forgetpassword";
import Resetpassword from "./Pages/Auth/Resetpassword";
import Otpvalidation from "./Pages/Auth/Otpvalidation";
import Success from "./Pages/Auth/Success";
import Footer from "./components/Footer";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register","/reset_password","/otp_validation","/forget_password","/register_successfull"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
    {!hideHeaderFooter && <Header />}
    
    <div className={`flex-grow ${hideHeaderFooter ? "" : "mx-xl-mx"}`}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget_password" element={<Forgetpassword />} />
        <Route path="/otp_validation" element={<Otpvalidation />} />
        <Route path="/reset_password" element={<Resetpassword />} />
        <Route path="/register_successfull" element={<Success />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stake" element={<Stake/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
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
