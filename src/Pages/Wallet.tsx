import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Wallet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("5864852");

  const data = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div
        className="p-8 rounded-xl"
        style={{
          background:
            "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
          boxShadow: "0px 10.01px 20.03px 0px rgba(7, 7, 26, 0.15)",
          backdropFilter: "blur(13.82px)",
          border: "1px solid #2954A3",
        }}
      >
        <div className="flex justify-between">
          <div className="total-assets flex gap-2 items-center">
            <p className="text-3xl font-semibold text-black font-bold">
              Total Balance:
            </p>
            <div className="relative flex gap-2 items-center">
              <p className="text-3xl font-semibold text-black font-bold">$</p>
              <input
                type="text"
                value={showPassword ? password : "*".repeat(password.length)}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full font-bold text-3xl rounded-lg focus:outline-none w-64 bg-transparent"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3  text-gray-800"
              >
                {showPassword ? <EyeOff size={30} /> : <Eye size={30} />}
              </button>
            </div>
          </div>
          <div className="flex gap-5"></div>
        </div>

      </div>
      
      <div className="overflow-x-auto mt-10">
          <table className="min-w-full  bg-white shadow-md rounded-lg">
            <thead className="">
              <tr>
                <th className="px-6 py-3 text-left">Asset</th>
                <th className="px-6 py-3 text-left">Balance</th>
                <th className="px-6 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((person) => (
                <tr
                  key={person.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-6 py-4">
                    <div className="coin-img flex gap-6">
                        <div className="icon"></div>
                    </div>
                    {person.id}</td>
                  <td className="px-6 py-4">{person.name}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-row gap-5">
                      <div className="">
                        Item 1
                      </div>
                      <div className="">
                        Item 2
                      </div>
                      <div className="">
                        Item 3
                      </div>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default Wallet;
