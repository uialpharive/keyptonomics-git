import { Flag, LogoDark, LogoLight } from "../SVGComponents"
import { IoIosNotifications } from "react-icons/io"
import GradientButton from "../UIComponents/GradientButton"
import IconCard from "../UIComponents/IconCard"
import { User } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import BalanceSlider from "./BalanceSlider"
// import CountryFlag from "./CountryFlag"


const menus = ["Home", "Trade", "Stake", "Transactions", " Hedge FlaskRound", "Staking History", "Live Events"]
const iconData = [
    { id: 1, Icon: IoIosNotifications },
    { id: 2, Icon: Flag },
    { id: 3, Icon: ThemeToggle },
    { id: 4, Icon: User },
];
const availableBalance = [
    { id: 1, text: "Available Balance", value: "$ 1,339.79" },
    { id: 2, text: "Available Balance", value: "$ 1,339.79" },
    { id: 3, text: "Available Balance", value: "$ 1,339.79" },

];
const Header = () => {

    return (

        <>
            <header className=" w-full 
    bg-[linear-gradient(to_bottom,_#ffffff_20%,_#e9ebf4_50%,_#e9ebf4_90%,_#e9ebf4_100%)]
    dark:bg-[linear-gradient(40deg,_#2d4e94_5%,_#232135_15%,_#232135_75%,_#286a93_100%)]">
                <hr className="h-[3px] bg-themeBlue  border-0" />
                <nav className="flex flex-col xs-sm:flex-row sm:flex-row md:flex-row justify-between items-center w-full px-5 md:px-5 lg:px-10 xl:px-14 py-3" aria-label="Global">
                    {/* Logo and company name */}
                    <div className="">
                        <a href="#" className="flex items-center gap-2">
                            <div className="block dark:hidden">
                                <LogoLight />
                            </div>
                            <div className="hidden dark:block">
                                <LogoDark />
                            </div>
                            <span className="font-walsheim text-xl font-[500] dark:text-themeWhite xs:hidden  xs-sm:hidden sm:hidden">KEYTONOMICS</span>
                        </a>
                    </div>
                    {/* line */}
                    <div className="w-[3px] h-[32px] bg-themeBlue rounded-full xs:hidden  xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex"></div>
                    {/* Menus */}
                    <div className="flex gap-5 xs:hidden xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex">
                        {menus.map(item => (
                            <h1 className="text-[12px] font-medium dark:text-themeWhite">{item}</h1>
                        ))}

                    </div>
                    {/* line */}

                    <div className="w-[3px] h-[32px] bg-themeBlue rounded-full xs:hidden xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex"></div>
                    <div className="flex gap-5 items-center">
                        <GradientButton
                            text="Wallet"
                            onClick={() => alert("Button Clicked")}
                            paddingX="px-0"
                            paddingY="py-[8px]"
                            width="w-[100px]"
                            fontSize="text-[14px]"
                            fontWeight="font-medium"
                            // className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80 "
                            className="shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80
                            hover:shadow-[0px_0px_2px_#4fb2d1,0px_0px_5px_#4fb2d1] 
                            hover:scale-110 transition-transform duration-300 ease-out 
                            will-change-transform transform-gpu"

                        />
                        <div className="xs:flex xs-sm:flex sm:flex md:flex lg:flex lg-xl:hidden xl:hidden">
                            <IconCard Icon={User} />
                        </div>
                    </div>
                    <div className="flex gap-4 xs:hidden xs-sm:hidden sm:hidden md:hidden lg:hidden lg-xl:flex xl:flex">
                        {iconData.map((item) => (
                            <IconCard
                                Icon={item.Icon}
                            />
                        ))}

                    </div>


                </nav>
                <hr className="h-[1px] bg-gray-200 dark:bg-gray-700  border-0" />

                <nav className=" flex xs:hidden xs-sm:hidden sm:px-4 md:px:16 md-lg:px-5 lg:px-12 lg-xl:px-14 xl:px-16 items-center gap-10 p-1 bg-gray-100 dark:bg-[#262d4d] border-b border-gray-200 dark:boarder-gray-100" aria-label="Global">

                    <div className="flex gap-8">
                        {availableBalance.map((item, index) => (
                            <div className="flex gap-4 items-center" key={index}>
                                <div className="flex flex-col justify-end">
                                    <h1 className="text-[11px] font-medium dark:text-white">{item.text}</h1>
                                </div>

                                <p className="text-[11px] font-extrabold text-themeBlue flex items-center">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </nav>
                <BalanceSlider availableBalance={availableBalance} />
            </header>
        </>
    )
}
export default Header