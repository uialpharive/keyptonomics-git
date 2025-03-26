import { useState, useEffect, useRef } from "react";
import { LogOut, User } from "lucide-react";
import IconCard from "../UIComponents/IconCard";
import { removeCookie } from "../lib/cookies";

const UserMenu = () => {
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const handleLogout = () => {

        removeCookie("userToken")
        removeCookie("loggedIn")
        window.location.href = "/";
        setIsUserMenuOpen(false); // Close menu when Logout is clicked
        console.log("Logged out!"); // Replace with actual logout function
        // setTimeout(() => {
        //     window.location.href = "/";
        // }, 1000);
    };
    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsUserMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            {/* User Icon - Opens the Menu on Hover */}
            <div
                onMouseEnter={() => setIsUserMenuOpen(true)}
            >
                <IconCard Icon={User} />
            </div>
            {isUserMenuOpen && (
                <div
                    ref={menuRef}
                    className="absolute right-0 p-[1px] rounded-lg bg-gradient-to-r from-[#01D3FF] to-[#2954A3]"
                >
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700 text-gray-700 dark:text-gray-200">
                            <li
                                onClick={() => console.log("Logout clicked")}
                                className="relative z-10 flex gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                            >
                                <User size={20} /> Profile
                            </li>
                            <li
                                onClick={() => handleLogout()}
                                className="relative z-10 flex gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                            >
                                <LogOut size={20} /> Logout
                            </li>
                        </ul>
                    </div>
                </div>
            )}


        </div>
    );
};

export default UserMenu;
