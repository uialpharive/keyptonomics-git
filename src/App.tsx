
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Register";
import Stake from "./Pages/Stake";
import Wallet from "./Pages/Wallet";
import Header from "./components/Header";
import Deposit from "./Pages/Deposit";
import Withdraw from "./Pages/Withdraw";
import Forgetpassword from "./Pages/Auth/Forgetpassword";
import Changepassword from "./Pages/Auth/Changepassword";
import Otpvalidation from "./Pages/Auth/Otpvalidation";
import Footer from "./components/Footer";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
    {!hideHeaderFooter && <Header />}
    
    {/* Main Content Wrapper with flex-grow to push the footer down */}
    <div className={`flex-grow ${hideHeaderFooter ? "" : "bg-white dark:bg-rootBgColor"}`}>
      <div className="px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px xs:py-xs-py xss:mt-5 xs-sm:px-xs-sm-py sm:py-sm-py md:py-md-py lg:py-lg-py">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forget-password" element={<Forgetpassword />} />
          <Route path="/otp-validation" element={<Otpvalidation />} />
          <Route path="/change-password" element={<Changepassword />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/home" element={<Home />} />
          <Route path="/stake" element={<Stake />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
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
