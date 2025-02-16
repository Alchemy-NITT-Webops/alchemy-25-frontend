import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import faqData, { FAQItem } from "../../data/faqData";

const AccordionItem: React.FC<{
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => (
    <div className="mb-4 w-full">
        <button
            type="button"
            onClick={onToggle}
            className="w-full flex  items-center justify-between gap-3 text-left rounded-ss-full rounded-ee-full rounded-tr-full bg-black text-white hover:bg-gray-900 transition-all duration-700 ease-in-out p-4"
        >
            <span className=" font-medium w-[85%]">{item.question}</span>
            <span className=" rounded-full border-4 size-12 flex justify-center items-center bg-orange-400">
                {isOpen ? (
                    <Minus className="h-6 w-6 text-black" />
                ) : (
                    <Plus className="h-6 w-6 text-black" />
                )}
            </span>
        </button>
        <div
            className={`overflow-hidden w-[90%] transition-all duration-700 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
        >
            <div className="p-4 bg-gray-100 rounded-b-lg">
                <p className="text-gray-700">{item.answer}</p>
            </div>
        </div>
    </div>
);

const FAQAccordion: React.FC = () => {
    const [openItem, setOpenItem] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenItem((prev) => (prev === id ? null : id));
    };

    return (
        <div className="w-full px-5 h-full flex flex-col items-center justify-center">
            <h2 className=" xl:flex hidden text-7xl mb-12 font-Azora font-extrabold text-[#D68C45] opacity-95 "><AnimatedTextCharacter text={`Frequently Asked Questions`} /></h2>
            <h2 className="xl:hidden flex text-7xl mb-12 font-Azora font-extrabold text-[#D68C45] opacity-95 text-center"><AnimatedTextCharacter text={`FAQ`} /></h2>
            <div className="md:w-[80%] w-full flex flex-col items-center justify-center">
                {faqData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        item={item}
                        isOpen={openItem === item.id}
                        onToggle={() => toggleItem(item.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
