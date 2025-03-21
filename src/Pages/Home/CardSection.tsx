import { Bell } from "lucide-react"
import GradientCard from "../../UIComponents/GradientCard"

const cardData = [
    { width: "w-[250px]", height: "h-[200px]", text: "All Practicipants", count: "3254+", Icon: Bell },
    { width: "w-[250px]", height: "h-[200px]", text: "Total Earned", count: "4564466.21+", Icon: Bell },
    { width: "w-[250px]", height: "h-[200px]", text: "BTC 24H Change", count: "-0.29%", Icon: Bell },
];
const CardSection = () => {
    return (
        <>
            <div className="w-full text-black dark:text-white flex items-start justify-center lg:pt-[80px]  lg:pb-[100px]">
                <div className="flex gap-4">
                    {cardData.map((card, index) => {
                        let textColor = "text-themeBlue"; // Default: Blue for 1st and 2nd card

                        // Apply red/green only for the 3rd card
                        if (index === 2) {
                            const numericValue = parseFloat(card.count.replace(/[^0-9.-]/g, ""));
                            textColor = numericValue < 0 ? "text-red-500" : "text-green-500";
                        }

                        return (
                            <GradientCard
                                key={index}
                                width={card.width}
                                height={card.height}
                                text={card.text}
                                count={card.count}
                                Icon={card.Icon}
                                textColor={textColor} // Dynamic color assignment
                                contentAlignment="gap-5 shadow-md shadow-themeBlue/60"
                            />
                        );
                    })}
                </div>
            </div>
        </>
    )
}
export default CardSection