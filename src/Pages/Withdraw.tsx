import React from "react";
import GradientButton from "../UIComponents/GradientButton";
import "react-toastify/dist/ReactToastify.css";
const Withdraw = () => {
  const items = ["Maximum Withdraw : 1000000000", "Withdraw Fee : 2%"];


  return (
    <div>
      <div className="flex items-center justify-center min-h-[80vh]">
  <div className="">
    <div
      className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 relative rounded-3xl"
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
        <p className="text-themeBlue text-lg font-bold">Withdraw Terms</p>
        <div className="mt-16">
          <p className="mb-4">The Minimum Withdrawal amount is: 0.000002 USDT</p>
          <ul className="list-disc pl-5 space-y-2 text-lg space-y-4">
            {items.map((item, index) => (
              <li key={index} className="text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <p className="text-themeBlue text-lg font-bold">USDT Withdraw</p>
        <div className="mt-5">
          <div className="deposit-detail mb-4">
            <label>Receiver Address</label>
            <div className="flex flex-col items-center mt-3">
              <div className="relative w-full">
                <input
                  className="w-full p-2 border rounded-md shadow-sm mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                  placeholder="Please enter withdrawal address here"
                  type="text"
                />
              </div>
            </div>
            <div className="mt-5">
              <div className="flex justify-between">
                <label>Withdrawal Amount</label>
                <label>Max</label>
              </div>

              <input
                className="w-full p-2 border rounded-md shadow-sm mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                defaultValue="0"
                type="number"
              />
            </div>
            <div className="mt-5">
              <GradientButton text="Withdraw" className="w-full p-2 hover:!bg-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Withdraw;
