import { History, Home, Menu, Settings, User, User2Icon, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { GrTransaction } from "react-icons/gr";
import { IoIosNotifications } from "react-icons/io";
import { MdEventSeat } from "react-icons/md";
import { Link } from "react-router-dom";
import { Flag, LogoDark, LogoLight } from "../SVGComponents";
import HeaderBtn from "../UIComponents/HeaderBtn";
import IconCard from "../UIComponents/IconCard";
import BalanceSlider from "./BalanceSlider";
import ThemeToggle from "./ThemeToggle";
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
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const drawerRef = useRef<any>(null);

    // Toggle Drawer
    const toggleDrawer = () => {
        setIsDrawerOpen((prev) => !prev);
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
        { id: 4, Icon: User },
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
                    </div>

                </nav>
                {/* bg-gray-200 dark:bg-gray-700 */}
                <hr className="h-[1px]   border-0 xs:bg-white xs-sm:bg-gray-500 sm:bg-yellow-400 md:bg-red-500 lg:bg-green-500" />

                <nav
                    className=" flex hidden  md:flex  sm:px-4 md:px:16 md-lg:px-5 lg:px-12 lg-xl:px-14 xl:px-16 items-center gap-10 p-1 bg-gray-100 dark:bg-[#262d4d] border-b border-gray-200 dark:border-gray-800"
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
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "translate-x-full"
                        } transition-transform duration-300 ease-in-out z-50`}
                    ref={drawerRef}
                >
                     <hr className="h-[3px] bg-themeBlue  border-0" />
                    {/* Close Button */}
                    <div className="flex justify-between items-center px-5 py-4 border-b dark:border-gray-700">
                        <h2 className="text-lg font-bold dark:text-white">User Menu</h2>
                        <IconCard Icon={ThemeToggle}/>
                        <button onClick={toggleDrawer}>
                            <X className="w-6 h-6 text-gray-600 dark:text-white" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className="flex flex-col gap-5 px-1">
                        <div className="flex flex-col gap-1 p-4">
                            {availableBalance.map((item, index) => (
                                <div className="flex gap-4 items-center dark:bg-inputBg shadow-xl rounded-lg p-4" key={index}>
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
                        <div className="flex flex-col gap-5">
                            {menus.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    className="flex items-center gap-3 font-lato font-bold text-gray-700 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 px-3 rounded cursor-pointer"
                                >
                                    <item.icon className="w-5 h-5 text-gray-500 dark:text-gray-300" />
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-3 px-3">
                                <User2Icon className="w-5 h-5 text-gray-500 dark:text-gray-300" />

                                <Link to="/profile" className="py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Profile</Link>
                            </div>
                            <div className="flex items-center gap-3 px-3">
                                <Settings className="w-5 h-5 text-gray-500 dark:text-gray-300" />

                                <Link to="/settings" className="py-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 rounded">Settings</Link>
                            </div>
                        </div>

                        <button className="py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-3 rounded">Logout</button>
                    </div>
                </div>
                <BalanceSlider availableBalance={availableBalance} />
                {/* <ResponsiveColorBoxes /> */}
                {/* Background overlay when menu is open */}
                {isDrawerOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40"
                        onClick={toggleDrawer}
                    ></div>
                )}
            </header>
        </>
    );
};
export default Header;
