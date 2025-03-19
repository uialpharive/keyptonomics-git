import { useState } from "react";
import { Search ,X} from "lucide-react";
import Header from '../components/Header';
import GradientButton from '../UIComponents/GradientButton';
import ada from '../assets/images/ada.svg';
import atom from '../assets/images/atom.svg';
import btc from '../assets/images/btc.svg';
import bnb from '../assets/images/bnb.svg';
import dash from '../assets/images/dash.svg';
import doge from '../assets/images/doge.svg';
import etc from '../assets/images/etc.svg';
import eth from '../assets/images/eth.svg';
import bch from '../assets/images/bch.svg';
import floki from '../assets/images/floki.svg';
import icp from '../assets/images/icp.svg';
import link from '../assets/images/link.svg';
import itc from '../assets/images/itc.svg';
import matic from '../assets/images/matic.svg';
import neo from '../assets/images/neo.svg';
import pepe from '../assets/images/pepe.svg';
import usdt from '../assets/images/usdt.svg';
import vet from '../assets/images/vet.svg';
import xlm from '../assets/images/xlm.svg';
import xmr from '../assets/images/xmr.svg';
import xrp from '../assets/images/xrp.svg';
import yfi from '../assets/images/yfi.svg';
import InputField from "../UIComponents/GrayInputButton";
import ThemeToggle from "../components/ThemeToggle";

const stakingData = [
    {
      id: 1,
      icon: btc,
      name: "BTC",
      balance: 564.69,
      availableBalance: 0.0,
      availableBalanceUSDT: 0,
      apy: "4.5%",
    },
    {
      id: 2,
      icon: bch,
      name: "BCH",
      balance: 120.15,
      availableBalance: 10.2,
      availableBalanceUSDT: 200,
      apy: "5.2%",
    },
    {
      id: 3,
      icon: eth,
      name: "ETH",
      balance: 1000.0,
      availableBalance: 500.5,
      availableBalanceUSDT: 500.5,
      apy: "3.8%",
    },
    {
      id: 3,
      icon: bnb,
      name: "BNB",
      balance: 1000.0,
      availableBalance: 500.5,
      availableBalanceUSDT: 500.5,
      apy: "3.8%",
    },
  ];

const Stake = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const [selectedStake, setSelectedStake] = useState<number | null>(null);
    const [searchTerm,setSearchTerm] = useState('');

    const filtercoin = stakingData.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
    <Header/>
    
    <div className="max-w-7xl mx-auto p-4 mt-3 mb-6">
    <div className="relative p-4 rounded-lg border-2 border-sky-400" style={{boxShadow: "0px 10px 20px 0px #07071A26"}}>
    <div className="w-full flex">
      {/* Tab Buttons */}
      <div className="flex gap-3">
      <button
          onClick={() => setActiveTab("tab1")}
          className={`px-8 py-2 text-sm font-medium transition rounded-lg ${
            activeTab === "tab1"
              ? "text-white bg-gradient-to-r from-[#01D3FF] to-[#2954A3] hover:opacity-80"
              : "text-gray-500 border-solid border border-[#2954A3"
          }`}
        >
          Flexible
        </button>

        <button
          onClick={() => setActiveTab("tab2")}
          className={`px-8 py-2 text-sm font-normal transition rounded-lg ${
            activeTab === "tab2"
              ? "text-white bg-gradient-to-r from-[#01D3FF] to-[#2954A3] hover:opacity-80"
              : "text-gray-500 border-solid border border-[#2954A3"
          }`}
        >
          Fixed
        </button>
      </div>
      <div className='flex ga43 ml-auto relative'>
    <InputField placeholder="search" onChange={(e)=>setSearchTerm(e.target.value)}/>
    <Search size={24} className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5"/>
    {/* <input type='text' className='px-4 py-2 text-sm font-medium transition text-gray-500 hover:text-blue-500' placeholder='Search'></input> */}
        </div>
      </div>
      <div className="py-5">
      {activeTab === "tab1" && 
      <>
       <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-3">
      {stakingData.map((item) => (
        <div
          key={item.id}
          className="w-full p-5 mx-auto hover:bg-activeCardBg rounded-2xl border border-blue-500 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-3">
            <img src={item.icon} alt={item.name} className="w-8 h-8" />
            <h2 className="text-lg font-medium">{item.name}</h2>
            <span className="ml-auto">{item.balance}</span>
          </div>
          <hr className="border-gray-700 mb-3" />
          <p className="text-sm mb-2 mt-1">
            Available Balance <span className="float-right">{item.availableBalance} {item.name}</span>
          </p>
          <p className="text-sm mb-2">
            Available Balance USDT <span className="float-right">${item.availableBalanceUSDT}</span>
          </p>
          <p className="text-sm mb-2">
            APY <span className="float-right text-themeBlue">{item.apy}</span>
          </p>
         <GradientButton onClick={() => setSelectedStake(item.id)} text="Stake Now" paddingX='px-8' paddingY='py-1' fontSize='text-sx' className='hover:from-[#fff] hover:to-[#FFFFFF]  mt-6 mx-auto w-fit text-center flex justify-center rounded-lg hover:!text-black border-2 hover:!border-[#2954A3]'/>
       
        </div>
      ))}
      </div>
      </>   
      }
        {activeTab === "tab2" &&  
         <>
         </>}
      </div>
  
    </div>
    </div>
    {selectedStake !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-96 p-4 bg-white text-black rounded-xl shadow-lg">
            <div className="flex justify-between">
            <h2 className="text-xl font-semibold mb-4">Staking </h2>
            {/* {stakingData[selectedStake - 1].name} */}
            <X className="text-[#2B2B2B]" onClick={() => setSelectedStake(null)}/>
            </div>
          <div className="relative">
          <input
          type="number"
          placeholder="0.000000"
          className="w-full py-2 pl-4 pr-14 text-lg border border-black rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700  appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />

        {/* BTC Label */}
        <span className="absolute right-4 pl-2 h-11 content-center top-1/2 transform -translate-y-1/2  border-black border-l-2">
    {stakingData[selectedStake - 1].name}
        </span>
        
      </div>
      <p className="text-gray-500 text-sm mt-2 ml-4">≈ $0</p>
     
            <div className="mt-4 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-600 rounded-lg hover:bg-gray-700"
                onClick={() => setSelectedStake(null)}
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                Confirm Stake
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Stake
