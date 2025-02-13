import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: "question_1",
        question: "How can I participate?",
        answer: "You can register through our website. Make sure to complete your profile and submit all required information before the deadline.",
    },
    {
        id: "question_2",
        question: "What are the prizes?",
        answer: "Winners will receive exciting rewards including cash prizes, fashion merchandise, and opportunities to showcase their work at future events.",
    },
    {
        id: "question_3",
        question: " is entry free?",
        answer: "The event is open to participants of all ages, but participants under 18 will need parental consent to participate.",
    },
];

const AccordionItem: React.FC<{
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}> = ({ item, isOpen, onToggle }) => (
    <div className="mb-4 w-full">
        <button
            type="button"
            onClick={onToggle}
            className="w-full flex items-center justify-between text-left rounded-ss-full rounded-ee-full rounded-tr-full bg-black text-white hover:bg-gray-900 transition-all duration-700 ease-in-out p-4"
        >
            <span className="text-lg font-medium">{item.question}</span>
            <span className="rounded-full border-4 size-12 flex justify-center items-center bg-orange-400">
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
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-4xl mb-12 md:invisible visible font-Azora font-extrabold text-[#D68C45] opacity-95 text-center">Frequently Asked Questions</h2>
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
