
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Register";
import Stake from "./Pages/Stake";
import Wallet from "./Pages/Wallet";
import Header from "./components/Header";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Profile from "./Pages/Profile";
import Notification from "./Pages/Notification";
import Support from "./Pages/Support";
import Forgetpassword from "./Pages/Auth/Forgetpassword";
import Resetpassword from "./Pages/Auth/Resetpassword";
import Otpvalidation from "./Pages/Auth/Otpvalidation";
import Success from "./Pages/Auth/Success";
import Footer from "./components/Footer";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register","/reset_password","/otp_validation","/forget_password","/register_successfull"].includes(location.pathname);
  // const isHome = location.pathname === "/home";
  const isHome =
  location.pathname === "/home" || location.pathname === "/" ||location.pathname ===""
  return (
    <div className="flex flex-col min-h-screen">
    {!hideHeaderFooter && <Header />}
    
    {/* Main Content Wrapper with flex-grow to push the footer down */}
    <div className={`flex-grow ${hideHeaderFooter ? "" : "bg-white dark:bg-rootBgColor"}`}>
      {/* <div 
      className="px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px xs:py-xs-py xs-sm:py-xs-sm-py sm:py-sm-py md:py-md-py lg:py-lg-py"
      > */}
        <div
      className={`${
        isHome
          ? ""
          : "px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[350px] 3xl:px-[450px] 4xl:px-[600px] xs:py-xs-py xs-sm:py-xs-sm-py sm:py-sm-py md:py-md-py lg:py-lg-py"
      }`}
    >
      <Routes>
      <Route path="/" element={<Home />} />

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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/support" element={<Support/>} />
      </Routes>
      </div>
    </div>
  
    {/* Footer stays at the bottom */}
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
