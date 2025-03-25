import React from 'react'

const AvailableBalance = () => {
  return (
    <div
    className="p-8 sx:!p-4 rounded-xl mb-10 flex justify-between sm:gap-5 overflow-scroll  whitespace-nowrap gap-12 lg:overflow-hidden"
    style={{
      background:
        "linear-gradient(105.95deg, rgba(102, 177, 230, 0.2) 24.79%, rgba(41, 84, 163, 0.2) 71.87%)",
      boxShadow: "0px 10.01px 20.03px 0px rgba(7, 7, 26, 0.15)",
      backdropFilter: "blur(13.82px)",
      border: "1px solid #2954A3",
    }}
  >
        <div className='xs:mb-3'>
        <p className="text-2xl font-semibold dark:text-white">
         Available Balance :
        </p>
        <p className="text-3xl font-bold dark:text-white">$ 1,339.79</p>
        </div>
        <div className='xs:mb-3'>
        <p className="text-2xl font-semibold dark:text-white">
         Staked Balance :
        </p>
        <p className="text-3xl font-bold dark:text-white">$ 0.00</p>
        </div>
        <div className='xs:mb-3'>
        <p className="text-2xl font-semibold dark:text-white">
         Account Balance :
        </p>
        <p className="text-3xl font-bold dark:text-white">$ 1,339.79</p>
        </div>
        <div className='xs:mb-3'>
        <p className="text-2xl font-semibold dark:text-white">
         Total P&L :
        </p>
        <p className="text-3xl font-bold dark:text-white">$ 339.93</p>
        </div>
        </div>
  )
}

export default AvailableBalance
