import React from 'react'
import GradientButton from "../UIComponents/GradientButton";

const accounts = [
    {
      name: "Silver Account",
      amount: "£10,000",
      gradient:"linear-gradient(356.56deg, #7A96AC -0.04%, #EAEFF3 17.64%, #C2D4E1 30.91%, #FFFFFF 48.29%, #D4DEE5 60.38%, #ABBDC8 77.08%, #BCCAD7 93.78%)",
      line:"Minimum Deposit Includes up to 1:100 leverage for forex 1:1 leveragefor Stocks Cryptocurrencies Commodities Indices SavingAccount Dailynews Weekly marketreview Accountmanager Weekly portfolio progress report",
      button: "SELECT SILVER",
    },
    {
      name: "Gold Account",
      amount: "£50,000",
      line:"Minimum Deposit Includes upto 1:200 leverage for forex 1:2 leverage for Stocks Cryptocurrencies Commodities Indices Saving Account Upto 25% margin loan Invitation to special trading events Daily marketreview Daily portfolio progress report Work with a portfolio manager Monthly session with a certified accountant 24/7 account monitoring by top analyst group",
      gradient:"linear-gradient(136.58deg, #FBE67B 28.08%, #FCFBE7 46.22%, #F7D14E 66.46%, #D4A041 86.32%)",
      button: "SELECT GOLD",
    },
    {
      name: "Platinum Account",
      amount: "£100,000",
      line:"Minimum Deposit Includes upto 1:200 leverage for forex 1:2 leverage for Stocks Cryptocurrencies Commodities Indices Saving Account Upto 50% margin loan Access to all special trading events Daily marke treview Daily portfolio progress report Personal portfolio manager Weeklylivestream tradingwebinar Weekly 1 on 1 with market Analyst Monthly session with a certified accountant 24/7 account monitoring by top analyst group",
      gradient: "linear-gradient(218.51deg, #FDFFFE 11%, #B1FFEF 44.99%, #CFFEF4 75.93%, #6CA196 90.75%)",
      button: "SELECT PLATINUM",
    },
    {
      name: "Diamond Account",
      amount: "£250,000",
      line:"Minimum Deposit Includes up to 1:300 leverage for forex 1:4 leverage for Stocks Cryptocurrencies Commodities Indices Saving Account Up to 75% margin loan Access to all special trading events Daily market review Daily portfolio progress report Personal portfolio manager Weekly live stream trading webinar Daily one on one with top Analyst Customized Education Daily market signals In-Depth Research Invites to VIP events.",
      gradient: "linear-gradient(138.8deg, #CCE8FE 5.7%, #CDA0FF 27.03%, #CDF1FF 68.68%, #B591E9 94%)",
      button: "SELECT DIAMOND",
    },
    {
      name: "Corporate Account",
      amount: "£1,000,000",
      line:"Minimum Deposit Includes up to 1:400 leverage for forex 1:5 leverage for Stocks Cryptocurrencies Commodities Indices Saving Account Up to 100% margin loan Access to all special trading events Daily market review & signals Unlimited access to brokers Personal chief portfolio manager Customized Education Daily one on one live stream trading webinar with top Analyst Wealth Manager Invites to VIP events.",
      gradient: "linear-gradient(0deg, #000000, #000000),linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
      button: "SELECT CORPORATE",
    },
  ];
  
const AccountType = () => {
  return (
<div className="flex justify-center gap-6 p-6 flex-wrap lg:flex-nowrap">
  {accounts.map((account, index) => (
    <div
      key={index}
      style={{ background: account.gradient }}
      className={`w-64 p-6 flex flex-col justify-between rounded-xl  shadow-lg lg:flex-nowrap flex-wrap last:text-white`}
    >

      <div>
        <h2 className="text-lg font-semibold text-center">{account.name}</h2>
        <p className="text-2xl font-bold mt-2 text-center text-darkText">{account.amount}</p>
      </div>

      <div className="mt-4 space-y-2 text-md flex-grow">
        <p className="leading-loose text-center">{account.line}</p>
      </div>
      <GradientButton 
        text={account.button} 
        className="mt-16 w-full py-2 bg-white text-gray-800 rounded-md hover:bg-gray-300 transition text-sm"
      />
    </div>
  ))}
</div>
  )
}

export default AccountType
