import { MediumFooterBall, SmallFooterBall } from "../SVGComponents";
import CrystalSemiCircles from "./CrystalSemiCircles";

export default function Footer() {
    return (
        <footer className="bg-footerColor py-10 px-6 md:px-10 relative pb-16">
            <div className="space-y-3 sm:px-6 md:px-9 md-lg:px-10 lg:px-16 sm:block md:block lg:hidden xl:hidden">
                <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md"></div>
                    <h2 className="text-lg font-semibold">KEYPTONOMICS</h2>
                </div>
                <p className="text-gray-600 text-sm">
                    High level experience in web design and development knowledge, producing quality work.
                </p>
            </div>
            <footer className="bg-footerColor py-10 px-6 md:px-10 flex relative pb-16">
                <div className="flex flex-col justify-end space-y-4 space-x-7 xs:hidden xs-sm:hidden sm:hidden sm-md:hidden md:hidden md-lg:hidden lg:flex lg-xl:flex xl:flex">
                    <SmallFooterBall />
                    <MediumFooterBall />
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 sm:gap-5 md:gap-5 lg:gap-10 xl:gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-3 xs:hidden sm:hidden md:hidden lg:block xl:block">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md"></div>
                            <h2 className="text-lg font-semibold">KEYPTONOMICS</h2>
                        </div>
                        <p className="text-gray-600 text-sm">
                            High level experience in web design and development knowledge, producing quality work.
                        </p>
                    </div>

                    {/* Instruments */}
                    <div>
                        <h3 className="font-semibold text-gray-800">Instruments</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                            <li>Crypto</li>
                            <li>Forex</li>
                            <li>Stocks</li>
                            <li>Indices</li>
                            <li>Commodities</li>
                        </ul>
                    </div>

                    {/* Trading */}
                    <div>
                        <h3 className="font-semibold text-gray-800">Trading</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                            <li>Platform</li>
                            <li>Deposit</li>
                            <li>Open Account</li>
                            <li>Sign In</li>
                        </ul>
                    </div>

                    {/* Platforms & Payments */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-semibold text-gray-800">Instruments</h3>
                            <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                                <li>MT5 Platform</li>
                                <li>Webtrader Platform</li>
                                <li>Mobile Platform</li>
                            </ul>
                        </div>

                    </div>
                    <div className="space-y-6">
                        <h3 className="font-semibold text-gray-800">FX Payments</h3>
                        <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                            <li>Account Types</li>
                        </ul>
                    </div>
                </div>
                <div className="absolute bottom-0 right-0">
                    <CrystalSemiCircles />
                </div>
            </footer>
        </footer>
    );
}
