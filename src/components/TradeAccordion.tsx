import { useState } from "react";
import { ChevronDown } from "lucide-react";

const accordionData = [
  {
    title: "Crypto",
    items: [
      { name: "BTC", icon: "\ud83d\udcbf" },
      { name: "ETH", icon: "\ud83d\udee0\ufe0f" },
      { name: "BNB", icon: "\ud83d\udc8e" },
      { name: "BCH", icon: "\ud83d\udcb8" },
      { name: "LTC", icon: "\ud83c\udfc5" },
      { name: "XRP", icon: "❌" },
    ],
  },
  { title: "Currencies", items: [] },
  { title: "Stocks", items: [] },
  { title: "Indices", items: [] },
  { title: "Commodities", items: [] },
];

export default function TradeAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-50 bg-darkBlue p-2 rounded-md dark:text-white space-y-2">
      {accordionData.map((section, index) => (
        <div key={index} className="bg-inputLight dark:bg-[#0a304d] rounded-md">
          <button
            className="flex justify-between items-center text-black w-full px-4 py-3 text-left"
            onClick={() => toggleAccordion(index)}
          >
            <span>{section.title}</span>
            <ChevronDown
              className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
            />
          </button>
          {openIndex === index && section.items.length > 0 && (
            <div className="dark:bg-[#102a42] max-h-60 overflow-y-auto px-4 py-2">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-2">
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}