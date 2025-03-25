import { useState, useEffect, useRef } from "react";
import { User } from "lucide-react";
import IconCard from "../UIComponents/IconCard";

const UserMenu = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
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
          // Remove onMouseLeave to avoid menu closing when moving to Logout
        >
          <div className="bg-white dark:bg-gray-800 p-4 rounded-md">
            <ul className="space-y-2 text-gray-700 dark:text-gray-200">
              <li className="flex gap-3 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                <User size={20} /> Profile
              </li>
              <li className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer">
                Settings
              </li>
              <li 
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md cursor-pointer"
                onClick={() => {
                  setIsUserMenuOpen(false); // Close menu when Logout is clicked
                  console.log("Logged out!"); // Replace with actual logout function
                }}
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
