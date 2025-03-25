
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
import HedgeFund from "./Pages/HedgeFund";
import Otpvalidation from "./Pages/Auth/Otpvalidation";
import Success from "./Pages/Auth/Success";
import Footer from "./components/Footer";
import Transaction from "./Pages/Transaction";
import Forex from "./Pages/Forex";
import Crypto from "./Pages/Crypto";
import Platform from "./Pages/Platform";
import Commodities from "./Pages/Commodities";
import Indices from "./Pages/Indices";
import Stock from "./Pages/Stock";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import SearchPopup from "./components/SearchPopup";
import ScrollToTop from "./components/ScrollToTop";
const Layout = () => {
  const location = useLocation();
  const hideHeaderFooter = ["/login", "/register", "/reset_password", "/otp_validation", "/forget_password", "/register_successfull"].includes(location.pathname);
  // const isHome = location.pathname === "/home";
  const isHome =
    location.pathname === "/home" || location.pathname === "/" || location.pathname === "" || location.pathname === "/login" || location.pathname === "/register" || location.pathname === "/forget_password" || location.pathname === "/otp_validation" || location.pathname === "/reset_password" || location.pathname === "/register_successfull"
  return (
    <div className="flex flex-col min-h-screen">
      <Provider store={store}>
        {!hideHeaderFooter && <Header />}

        {/* Main Content Wrapper with flex-grow to push the footer down */}
        <div className={`flex-grow ${hideHeaderFooter ? "" : "bg-white dark:bg-rootBgColor"}`}>
          {/* <div 
      className="px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px xs:py-xs-py xs-sm:py-xs-sm-py sm:py-sm-py md:py-md-py lg:py-lg-py"
      > */}
          {/* <div
      className={`${
        isHome
          ? ""
          : "px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-xl-px 2xl:px-[350px] 3xl:px-[450px] 4xl:px-[600px] xs:py-xs-py xs-sm:py-xs-sm-py sm:py-sm-py md:py-md-py lg:py-lg-py"
      }`}
    > */}
          <div
            className={`${isHome
                ? ""
                : "px-4 xs:px-xs-px sm:px-sm-px md:px-md-px md-lg:px-md-lg-px lg:px-lg-px lg-xl:px-lg-xl-px xl:px-[150px] 2xl:px-[250px] 3xl:px-[350px] 4xl:px-[550px] 5xl:px-[800px] 6xl:px-[950px] 7xl:px-[1000px] 8xl:px-[1250px] 9xl:px-[1400px] 10xl:px-[1600px] 11xl:px-[2100px] 12xl:px-[3000px] xs:py-xs-py xs-sm:py-xs-sm-py sm:py-sm-py md:py-md-py lg:py-lg-py"
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
        <Route path="/forex" element={<Forex />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/commodities" element={<Commodities />} />
        <Route path="/indices" element={<Indices />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/stake" element={<Stake/>} />
        <Route path="/deposit" element={<Deposit/>} />
        <Route path="/withdraw" element={<Withdraw/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/notification" element={<Notification/>} />
        <Route path="/support" element={<Support/>} />
        <Route path="/transaction" element={<Transaction/>} />
        <Route path="/hedge-fund" element={<HedgeFund/>} />
            </Routes>
          </div>
        </div>
        <SearchPopup />
       <ScrollToTop/>
        {/* Footer stays at the bottom */}
        {!hideHeaderFooter && <Footer />}
      </Provider>
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
