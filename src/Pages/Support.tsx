import React from "react";
import { FaExclamationCircle } from "react-icons/fa";
import GradientButton from "../UIComponents/GradientButton";
import { useState, useRef } from "react";
import { Copy } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Support = () => {
  const items = [
    "Send only USDT To This Wallet Address.",
    "Sending Coins Or Tokens Other Than USDT To This Wallet May Result In The Total Loss Of Your Deposit",
    "Please Upload A Screenshot Or A Hash Of Your Transaction In Order For Us To Approve Your Transaction",
  ];
  const qrValue =
    "file:///C:/office project/react/keyptonomics/keyptonomics-git";

  const [value, setValue] = useState("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopy = () => {
    if (inputRef.current) {
      inputRef.current.select();
      navigator.clipboard.writeText(inputRef.current.value);
      toast.success("Copied !");
    }
  };

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  return (
    <div>
      <div className="">
        <div
          className="grid lg:grid-cols-2 grid-cols-1 gap-4 p-4 relative rounded-3xl"
          style={{
            background:
              "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
            border: "1px solid #2954A3",
            boxShadow: "0px 10.01px 20.03px 0px #07071A26",
          }}
        >
          <div
            className="p-4 rounded-lg"
            style={{
              background: "#FFFFFF33",
            }}
          >
            <p className="text-themeBlue text-lg font-bold">Submit a Request</p>
            <div className="mt-5">
              <div className="deposit-detail mb-4">
                <label>Ticket For</label>
                <select className="border border-gray-300 rounded-lg p-2 text-gray-700 w-full mt-2 h-11">
                  <option value="">Select Category</option>
                  <option>Login Issue</option>
                  <option>
                    Deposit Issue
                  </option>
                  <option>
                    Withdraw Issue
                  </option>
                  <option>2fa</option>
                  <option>
                    Register Issue
                  </option>
                  <option>
                    Credit Application
                  </option>
                </select>
                <div className="mt-3">
                  <label>Description</label>
                  <textarea className="border border-gray-300 rounded-lg p-4 mt-2 text-gray-700 w-full"></textarea>
                 <p className="text-sm text-gray-500">Please enter the details of your request. A member of our support staff will respond as soon as possible.</p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col items-start space-y-2">
                    <label className="font-semibold">
                      Upload Document (Optional)
                    </label>
                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                      className="hidden"
                      id="fileInput"
                    />
                    <label
                      htmlFor="fileInput"
                      className="relative px-4 py-2 w-40 text-center cursor-pointer rounded-lg bg-white text-white font-semibold bg-gradient-to-r from-[#01D3FF] to-[#2954A3] transition-all duration-300 ease-in-out"
                    >
                      Upload
                    </label>

                    {fileName && (
                      <p className="text-sm text-themeBlue mt-1">
                        Selected file: {fileName}
                      </p>
                    )}
                    <p className="text-xs text-gray-500">
                      Max. upload file size 2MB (Jpg, Jpeg, Png, Pdf only).
                    </p>
                  </div>
                  <div className="mt-7">
                    <GradientButton
                      text="Submit"
                      className="w-full p-3 hover:!bg-white"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-themeBlue text-lg font-bold">
              Support Ticket Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
