

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
import Changepassword from "./Pages/Auth/Changepassword";
import Otpvalidation from "./Pages/Auth/Otpvalidation";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<Forgetpassword />} />
        <Route path="/otp-validation" element={<Otpvalidation />} />
        <Route path="/change-password" element={<Changepassword />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stake" element={<Stake/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
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
