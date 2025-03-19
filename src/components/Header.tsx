import { LogoLight } from "../../SVGComponents"

const Header = () => {
    return (
        <>
            <header className="bg-white">
                <nav className=" flex lg:mx-10 max-w-7xl items-center justify-between p-6" aria-label="Global">
                    <div className="">
                        <a href="#" className="flex items-center gap-2">
                            <LogoLight/>
                            <span>KEYTONOMICS</span>
                        </a>
                    </div>
                    <div>

                    </div>
                    
                </nav>
              
            </header>

        </>
    )
}
export default Header