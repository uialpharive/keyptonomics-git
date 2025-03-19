import { LogoLight } from "../../SVGComponents"
import { IoIosNotifications } from "react-icons/io"
import GradientButton from "../UIComponents/GradientButton"
import GradientCard from "../UIComponents/GradientCard"
import { Users } from "lucide-react";

const menus = ["Home", "Trade", "Stake", "Transactions", " Hedge FlaskRound", "Staking History", "Live Events"]
const Header = () => {
    return (
        <>
            <header className="bg-white pt-1 shadow-md">
                <hr className="h-[5px] bg-themeBlue  border-0" />
                <nav className=" flex lg:mx-10 items-center gap-10 p-3" aria-label="Global">
                    <div className="">
                        <a href="#" className="flex items-center gap-2">
                            <LogoLight />
                            <span className="font-walsheim text-xl font-[500]">KEYTONOMICS</span>
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col">
                            <h1 className="text-sm font-medium">Available Balance:
                            </h1>
                            <p className="text-sm font-bold">  $ 1,339.79</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-medium">Available Balance:
                            </h1>
                            <p className="text-sm font-bold">  $ 1,339.79</p>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-sm font-medium">Available Balance:
                            </h1>
                            <p className="text-sm font-bold">  $ 1,339.79</p>
                        </div>
                    </div>
                    <div className="w-[5px] h-[32px] bg-themeBlue rounded-full"></div>


                    <div className="flex gap-5">
                        {menus.map(item => (
                            <h1 className="text-xs font-medium">{item}</h1>
                        ))}

                    </div>

                    <div className="w-[5px] h-[32px] bg-themeBlue rounded-full"></div>
                    <div>
                        <div className="border-1 border-">
                            <IoIosNotifications />
                        </div>
                    </div>
                    <div>
                        <GradientButton
                            text="Wallet"
                            onClick={() => alert("Button Clicked")}
                            paddingX="px-0"
                            paddingY="py-2"
                            width="w-[120px]"
                            fontSize="text-base"
                            fontWeight="font-medium"
                            className="shadow-[5px_3px_9px_#4fb2d1] shadow-themeBlue/80"
                        />
                    </div>
                    <div>
                        {/* <GradientCard
                            width="w-72"
                            height="h-48"
                            text="Active Users"
                            count="9876+"
                            Icon={Users}
                        /> */}
                    </div>
                </nav>
            </header>
        </>
    )
}
export default Header