import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { closeSearch, toggleSearch } from "../redux/slices/searchSlice";
import { Search, X } from "lucide-react";
import GradientButton from "../UIComponents/GradientButton";
const SearchPopup: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.search.isOpen);

    return (
        <>
            {/* Open Button */}
            <button
                onClick={() => dispatch(toggleSearch())}
                className="fixed bottom-5 right-5 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
            >
                <Search className="w-5 h-5" />
            </button>

            {/* Popup Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center"
                    onClick={() => dispatch(closeSearch())} // Close popup when clicking outside
                >
                    <div
                        className="bg-gradient-to-r from-[#01D3FF]/70 to-[#2954A3]/70 p-6 rounded-lg shadow-lg w-96"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the popup
                    >
                        <div className="flex justify-between items-center border-b pb-2">
                            <h2 className="text-lg font-semibold">Search</h2>
                            <button
                                onClick={() => dispatch(closeSearch())}
                                className="text-gray-500 hover:text-gray-800"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="mt-4 flex flex-col justify-center items-center space-y-5">
                            <input
                                type="text"
                                placeholder="Type to search..."
                                className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                            <GradientButton
                                text="Register Now!"
                                onClick={() => alert("Button Clicked")}
                                paddingX="px-6"
                                paddingY="py-[8px]"
                                width="w-[200px]"
                                fontSize="text-[14px]"
                                fontWeight="font-medium"
                                className="w-full shadow-[1px_3px_9px_#4fb2d1] shadow-themeBlue/80
                                                                 hover:shadow-[0px_0px_2px_#4fb2d1,0px_0px_5px_#4fb2d1] 
                                                                 will-change-transform transform-gpu"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default SearchPopup;

