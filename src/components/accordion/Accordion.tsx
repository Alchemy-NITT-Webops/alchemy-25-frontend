import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import faq from '../../assets/image.png';
interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

interface AccordionItemProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div className="mb-4">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between text-left rounded-ss-full rounded-ee-full rounded-tr-full bg-black text-white hover:bg-gray-900 transition-all duration-1000 ease-in-out"
            >
                <span className="text-lg font-medium p-4">{item.question}</span>
                <span className=" right-0 rounded-full border-4 size-12 scale-125 flex justify-center items-center bg-orange-400">
                    {isOpen ? (
                        <Minus className="h-6 w-6 text-black" />
                    ) : (
                        <Plus className="h-6 w-6 text-black" />
                    )}
                </span>
            </button>
            <div
                className={`overflow-hidden transition-all ease-in-out duration-1000 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0  opacity-0'
                    }`}
            >
                <div className="p-4 bg-gray-100 rounded-b-lg">
                    <p className="text-gray-700">{item.answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQAccordion: React.FC = () => {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());

    const faqData: FAQItem[] = [
        {
            id: 'question_1',
            question: 'What is Fashionitas?',
            answer: 'Set for both fashion aficionados and passionate novices with a natural flair for style, Fashionitas is Festember\'s stage to unravel your stylistic aptness and win exciting rewards! Set for both fashion aficionados and passionate novices with a natural flair for style.',
        },
        {
            id: 'question_2',
            question: 'How can I participate?',
            answer: 'You can register through our website or mobile app. Make sure to complete your profile and submit all required information before the deadline.',
        },
        {
            id: 'question_3',
            question: 'What are the prizes?',
            answer: 'Winners will receive exciting rewards including cash prizes, fashion merchandise, and opportunities to showcase their work at future events.',
        },
        {
            id: 'question_4',
            question: 'Is there an age limit?',
            answer: 'The event is open to participants of all ages, but participants under 18 will need parental consent to participate.',
        }
    ];

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    return (
        <div className=" w-full flex flex-col md:flex-row justify-between gap-10">

            <img src={faq} alt="faq" className="w-[50vw] md:hidden block rotate-90 " />

            <div className="w-fit max-w-2xl p-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqData.map((item) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            onToggle={() => toggleItem(item.id)}
                        />
                    ))}
                </div>
            </div>    <img src={faq} alt="faq" className="hidden md:block md:h-[50vh] " />

        </div>
    );
};

export default FAQAccordion;