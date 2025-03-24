import {  Minus, Plus } from "lucide-react";
import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    { title: "Accordion Item 1", content: "Content for item 1." },
    { title: "Accordion Item 2", content: "Content for item 2." },
    { title: "Accordion Item 3", content: "Content for item 3." },
    { title: "Accordion Item 4", content: "Content for item 4." },
    { title: "Accordion Item 5", content: "Content for item 5." },
  ];

  return (
    <div className="sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl 3xl:max-w-8xl mx-auto space-y-2">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className={`border rounded-lg transition-all duration-300 ${
            openIndex === index ? "mb-4" : "mb-2"
          }`}
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 dark:bg-inputDark rounded-t-lg"
          >
            <span className="text-lg font-medium">{item.title}</span>
            <span className="text-xl">
              {openIndex === index ? <Minus/> : <Plus/>}
            </span>
          </button>
          {openIndex === index && (
            <div className="p-4 bg-white border-t">{item.content}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
