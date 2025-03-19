import { Bitcoin, DollarSign, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import StakeCard from "../UIComponents/StakeCard";


const Home=()=>{
    const stakeData = [
        {
          icon: Bitcoin,
          title: "LTC",
          value: "96.330000",
          text1: "Available Balance",
          text1Value: "0.00 LTC",
          text2: "Available Balance USDT",
          text2Value: "$ 0",
          text3: "APY",
          text3Value: "3.5%",
        },
        {
          icon: DollarSign,
          title: "USDT",
          value: "1500.00",
          text1: "Available Balance",
          text1Value: "1000 USDT",
          text2: "Staked Amount",
          text2Value: "$ 500",
          text3: "APY",
          text3Value: "4.2%",
        },
        {
          icon: TrendingUp,
          title: "ETH",
          value: "2.345678",
          text1: "Available Balance",
          text1Value: "0.50 ETH",
          text2: "Available Balance USDT",
          text2Value: "$ 200",
          text3: "APY",
          text3Value: "5.0%",
        },
        {
            icon: TrendingUp,
            title: "ETH",
            value: "2.345678",
            text1: "Available Balance",
            text1Value: "0.50 ETH",
            text2: "Available Balance USDT",
            text2Value: "$ 200",
            text3: "APY",
            text3Value: "5.0%",
          },
      ];
    return(<>
    <Header/>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  {stakeData.map((data, index) => (
    <StakeCard key={index} {...data} />
  ))}
</div>

    </>)
}
export default Home;