import { MediumFooterBall, SmallFooterBall } from "../SVGComponents";
import CrystalSemiCircles from "./CrystalSemiCircles";

export default function Footer() {
    return (
        <footer className="bg-footerColor dark:bg-black relative">
            <div className="pt-10 space-y-3 xs:px-5 xs-sm:mx-5 sm:mx-5  md:mx-10 md-lg:mx-16 xs:block xs-sm:hidden sm:block md:block lg:hidden xl:hidden">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md"></div>
                    <h2 className="text-lg font-semibold dark:text-themeBlue">KEYPTONOMICS</h2>
                </div>
                <p className="text-gray-600 dark:text-themeBlue text-sm">
                    High level experience in web design and development knowledge, producing quality work.
                </p>
            </div>
            <footer className="bg-footerColor dark:bg-black py-10 px-6 md:px-10 flex relative pb-16">
                {/* <div className="flex flex-col justify-end lg:space-y-4 lg:space-x-7 xs:hidden xs-sm:hidden sm:hidden sm-md:hidden md:hidden md-lg:hidden lg:flex lg-xl:flex xl:flex">
                    <div className="dark:shadow-sm ">
                        <SmallFooterBall />
                    </div>
                    <div>
                        <MediumFooterBall />
                    </div>
                </div> */}
                <div className="flex flex-col justify-end lg:space-y-4 lg:space-x-7 xs:hidden xs-sm:hidden sm:hidden sm-md:hidden md:hidden md-lg:hidden lg:flex lg-xl:flex xl:flex">
                    {/* <div className="shadow-lg shadow-blue-500/50 rounded-full"> */}
                    <div className="relative">
                        <div className="absolute inset-0 left-[-20px] w-full h-full rounded-full bg-purple-500/90 blur-md opacity-50"></div>

                        <SmallFooterBall />
                    </div>
                    {/* </div> */}
                    <div className="shadow-xl shadow-purple-500/50 rounded-full">
                        <MediumFooterBall />
                    </div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1  xs:pb-10 xs:gap-10 xs-sm:gap-16 sm:gap-10 xs:grid-cols-2 xs-sm:grid-cols-2 sm:grid-cols-4 md:grid-cols-5">
                    {/* Logo and Description */}
                    <div className="space-y-3 xs-sm:hidden xs:hidden sm:hidden md:hidden lg:block xl:block">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md"></div>
                            <h2 className="text-lg font-semibold dark:text-white">KEYPTONOMICS</h2>
                        </div>
                        <p className="text-gray-600 text-sm dark:text-white">
                            High level experience in web design and development knowledge, producing quality work.
                        </p>
                    </div>

                    {/* Instruments */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-themeBlue">Instruments</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 text-sm dark:text-themeBlue">
                            <li>Crypto</li>
                            <li>Forex</li>
                            <li>Stocks</li>
                            <li>Indices</li>
                            <li>Commodities</li>
                        </ul>
                    </div>

                    {/* Trading */}
                    <div>
                        <h3 className="font-semibold text-gray-800 dark:text-themeBlue">Trading</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 text-sm dark:text-themeBlue">
                            <li>Platform</li>
                            <li>Deposit</li>
                            <li>Open Account</li>
                            <li>Sign In</li>
                        </ul>
                    </div>

                    {/* Platforms & Payments */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-themeBlue">Instruments</h3>
                            <ul className="mt-3 space-y-2 text-gray-600 text-sm dark:text-themeBlue">
                                <li>MT5 Platform</li>
                                <li>Webtrader Platform</li>
                                <li>Mobile Platform</li>
                            </ul>
                        </div>

                    </div>
                    <div className="space-y-6">
                        <h3 className="font-semibold text-gray-800 dark:text-themeBlue">FX Payments</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 text-sm dark:text-themeBlue">
                            <li>Account Types</li>
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 xs:hidden md:hidden lg:block xl:block">
                    <CrystalSemiCircles />
                </div>
            </footer>
        </footer>
    );
}
