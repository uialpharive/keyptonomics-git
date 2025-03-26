import { Facebook, History, Home, Instagram, Linkedin, Menu, Settings, Twitter, User, User2Icon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { Flag, LogoDark, LogoLight } from "../SVGComponents";
import HeaderBtn from "../UIComponents/HeaderBtn";
import IconCard from "../UIComponents/IconCard";
import BalanceSlider from "./BalanceSlider";
import ThemeToggle from "./ThemeToggle";
import UserMenu from "./UserMenu";
import { removeCookie } from "../lib/cookies";
// import ResponsiveColorBoxes from "./ResponsiveColorBoxes";
// import CountryFlag from "./CountryFlag"

const menus = [
    { name: "Home", path: "/", icon: Home },
    { name: "Trade", path: "/trade", icon: Home },
    { name: "Stake", path: "/stake", icon: Home },
    { name: "Transactions", path: "/transactions", icon: GrTransaction },
    { name: "Hedge FlaskRound", path: "/hedge-flaskround", icon: Home },
    { name: "Staking History", path: "/staking-history", icon: History },
    { name: "Live Events", path: "/live-events", icon: MdEventSeat },
];


const availableBalance = [
    { id: 1, text: "Available Balance", value: "$ 1,339.79" },
    { id: 2, text: "Available Balance", value: "$ 1,339.79" },
    { id: 3, text: "Available Balance", value: "$ 1,339.79" },
];
const Header = () => {
    const location = useLocation();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef<any>(null);
    // Toggle Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
    };
    const handleLogout = () => {

        removeCookie("userToken")
        removeCookie("loggedIn")
        window.location.href = "/";
        // setTimeout(() => {
        //     window.location.href = "/";
        // }, 1000);
    };
    // Close drawer when clicking outside
    useEffect(() => {
        // const handleClickOutside = (event: any) => {
        //     if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        //         setIsDrawerOpen(false);
        //     }
        // };
        const handleClickOutside = (event: MouseEvent) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target as Node)) {
                setIsDrawerOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    // const dispatch = useDispatch()
    const iconData = [
        // { id: 1, Icon: Search, onClick: () => dispatch(openSearch()) },
        { id: 1, Icon: IoIosNotifications },
        { id: 2, Icon: Flag },
        { id: 3, Icon: ThemeToggle },
        // { id: 4, Icon: User },
    ];
    return (
        <>
            <header
                className=" w-full 
    bg-[linear-gradient(to_bottom,_#ffffff_20%,_#e9ebf4_50%,_#e9ebf4_90%,_#e9ebf4_100%)]
    dark:bg-[linear-gradient(40deg,_#232135_5%,_#232135_15%,_#232135_75%,_#286a93_100%)]"
            >
                {/* #2d4e94 */}
                <hr className="h-[3px] bg-themeBlue  border-0" />
                <nav
                    className="flex flex-row xs:flex-row xs-sm:flex-row sm:flex-row md:flex-row justify-between items-center w-full px-5 md:px-5 lg:px-10 xl:px-14 py-3 "
                    aria-label="Global"
                >
                    {/* Logo and company name */}
                    <div className="">
                        <a href="#" className="flex items-center gap-2">
                            <div className="block dark:hidden">
                                <LogoLight />
                            </div>
                            <div className="hidden dark:block">
                                <LogoDark />
                            </div>
                            <span className="font-walsheim text-xl font-medium dark:text-themeWhite hidden xs:hidden md:block lg:hidden xl:block">
                                KEYTONOMICS
                            </span>

                            {/* <span className="font-walsheim text-xl font-[500] dark:text-themeWhite xs:hidden xs-sm:hidden sm:hidden sm-md:hidden md:block md-lg:block lg:block">KEYTONOMICS</span> */}
                        </a>
                    </div>
                    {/* line */}
                    {/* <div className="w-[3px] h-[32px] bg-themeBlue rounded-full xs:hidden  xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex"></div> */}
                    {/* Menus */}
                    {/* <div className="flex gap-5 xs:hidden xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex">
                        {menus.map(item => (
                            <h1 className="text-[13px] font-lato font-bold dark:text-themeWhite">{item}</h1>
                        ))}

                    </div> */}
                    <div className="hidden lg:flex gap-5">
                        {menus.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className="text-[13px] font-lato font-bold dark:text-themeWhite  cursor-pointer"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    {/* line */}

                    {/* <div className="w-[3px] h-[32px] bg-themeBlue rounded-full xs:hidden xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex"></div> */}
                    <div className="flex gap-5">
                        <HeaderBtn
                            text="Wallet"
                            onClick={() => alert("Button Clicked")}
                            paddingX="px-0"
                            paddingY="py-[8px]"
                            width="w-[100px]"
                            fontSize="text-[15px]"
                            fontWeight="font-medium"
                            // className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80 "
                            className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80
                            hover:shadow-[0px_0px_2px_#4fb2d1,0px_0px_5px_#4fb2d1] 
                            will-change-transform transform-gpu"
                        />
                        <div className="flex gap-4 lg:hidden">
                            <IconCard Icon={User} />
                            <IconCard Icon={Menu} onClick={toggleDrawer} />

                        </div>
                    </div>
                    <div className="hidden lg:flex gap-4">
                        {iconData.map(({ id, Icon, }) => (
                            <IconCard key={id} Icon={Icon} />
                        ))}
                        <UserMenu />
                    </div>

                </nav>
                {/* bg-gray-200 dark:bg-gray-700 */}
                <hr className="h-[1px]   border-0 xs:bg-white xs-sm:bg-gray-500 sm:bg-yellow-400 md:bg-red-500 lg:bg-green-500" />

                <nav
                    className=" flex hidden lg:block  sm:px-4 md:px:16 md-lg:px-5 lg:px-12 lg-xl:px-14 xl:px-16 items-center gap-10 p-1 bg-gray-100 dark:bg-[#262d4d] border-b border-gray-200 dark:border-gray-800"
                    aria-label="Global"
                >
                    <div className="flex gap-8">
                        {availableBalance.map((item, index) => (
                            <div className="flex gap-4 items-center" key={index}>
                                <div className="flex flex-col justify-end">
                                    <h1 className="text-[12px] font-lato font-medium dark:text-white">
                                        {item.text}
                                    </h1>
                                </div>

                                <p className="text-[11px] font-extrabold text-themeBlue flex items-center">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </nav>
                {/* Side Drawer */}
                {/* <div
                    className={`block lg:hidden fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out z-50`}
                    ref={drawerRef}
                > */}
                <div
                    className={`block lg:hidden fixed top-0 right-0 h-full  ${isDrawerOpen ? "w-full sm:w-[70%]" : "w-64"}  bg-white dark:bg-gray-800 shadow-lg transform 
    ${isDrawerOpen ? "translate-x-0" : "translate-x-full"}
    transition-transform duration-300 ease-in-out z-50`}
                    ref={drawerRef}
                >
                    <hr className="h-[3px] bg-themeBlue  border-0" />
                    {/* Close Button */}
                    <div className="flex justify-between items-center px-5 py-4 border-b dark:border-gray-700">
                        <h2 className="text-lg font-bold dark:text-white">User Menu</h2>
                        <IconCard Icon={ThemeToggle} />
                        <button onClick={toggleDrawer}>
                            <X className="w-6 h-6 text-gray-600 dark:text-white" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className=" flex flex-col  gap-5 pt-5">
                        <div className={`flex ${isDrawerOpen ? "flex-col md:flex-row " : "hidden"} items-center justify-center bg-gray-100 dark:bg-inputBg shadow-xl rounded-md  px-5 `}>
                            {availableBalance.map((item, index) => (
                                <div className="flex gap-4 items-center  p-4" key={index}>
                                    <div className="flex flex-col justify-end">
                                        <h1 className="text-[14px] font-lato font-bold dark:text-white">
                                            {item.text}
                                        </h1>
                                    </div>

                                    <p className="text-[11px] font-extrabold text-themeBlue flex items-center">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <hr className="h-[1px] border-0 bg-gray-200 dark:bg-gray-700" />

                        <div className="flex flex-col gap-3 px-5">
                            {menus.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className={`flex items-center gap-3 text-[12px] font-bold py-2 px-3 rounded cursor-pointer
            ${location.pathname === item.path
                                            ? "bg-themeBlue dark:bg-themeBlue text-white dark:text-white"
                                            : "text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}`}
                                >
                                    <item.icon className={` ${location.pathname === item.path ? "" : "w-5 h-5 text-black dark:text-gray-300"}`} />
                                    {item.name}
                                </Link>
                            ))}

                            <div className={`flex items-center gap-3 px-3 rounded ${location.pathname === "/profile" ? "bg-gray-200 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}>
                                <User2Icon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                <Link to="/profile" className="text-[11px] font-bold py-2 text-gray-700 dark:text-white">Profile</Link>
                            </div>

                            <div className={`flex items-center gap-3 px-3 rounded ${location.pathname === "/settings" ? "bg-gray-200 dark:bg-gray-800" : "hover:bg-gray-100 dark:hover:bg-gray-700"
                                }`}>
                                <Settings className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                <Link to="/settings" className="text-[11px] font-bold py-2 text-gray-700 dark:text-white">Settings</Link>
                            </div>
                        </div>
                        <div className="px-5">
                            <button onClick={() => handleLogout()} className="py-2 w-full bg-gray-300 dark:bg-inputBg text-white dark:text-white hover:bg-gray-400  dark:hover:bg-gray-700 px-3 rounded">Logout</button>
                        </div>
                    </div>
                    <div className="flex flex-row justify-center items-center gap-5 pt-5">
                        <Twitter className="text-gray-400 dark:text-white" />
                        <Facebook className="text-gray-400 dark:text-white" />
                        <Instagram className="text-gray-400 dark:text-white" />
                        <Linkedin className="text-gray-400 dark:text-white" />

                    </div>
                </div>
                {/* <BalanceSlider availableBalance={availableBalance} /> */}
                {/* <ResponsiveColorBoxes /> */}
                {/* Background overlay when menu is open */}
                {isDrawerOpen && (
                    <div
                        className="block lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleDrawer}
                    ></div>
                )}
            </header>
        </>
    );
};
export default Header;
