import React from 'react'

const AvailableBalance = () => {
  return (
    <div
    className="p-8 sx:!p-4 rounded-xl mb-10 flex justify-between flex-wrap sm:gap-5"
    style={{
      background:
        "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
      boxShadow: "0px 10.01px 20.03px 0px rgba(7, 7, 26, 0.15)",
      backdropFilter: "blur(13.82px)",
      border: "1px solid #2954A3",
    }}
  >
        <div className='xs:mb-3'>
        <p className="text-3xl font-semibold text-black">
         Available Balance :
        </p>
        <p className="text-xl font-bold text-black">$ 1,339.79</p>
        </div>
        <div className='xs:mb-3'>
        <p className="text-3xl font-semibold text-black">
         Staked Balance :
        </p>
        <p className="text-xl font-bold text-black">$ 0.00</p>
        </div>
        <div className='xs:mb-3'>
        <p className="text-3xl font-semibold text-black">
         Account Balance :
        </p>
        <p className="text-xl font-bold text-black">$ 1,339.79</p>
        </div>
        <div className='xs:mb-3'>
        <p className="text-3xl font-semibold text-black">
         Total P&L :
        </p>
        <p className="text-xl font-bold text-black">$ 339.93</p>
        </div>
        </div>
  )
}

export default AvailableBalance
