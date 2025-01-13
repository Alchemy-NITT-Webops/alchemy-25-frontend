import { useState, useRef } from 'react';



interface Event {
    id: number;
    image: string;
    title: string;
    dateTime: string;
    location: string;
    registerLink: string;
    ruleBookLink: string | null;
    description: string;
}

interface EventsData {
    eventsData: Event[];
}

const EventCarousel = ({ eventsData }: EventsData) => {
    const [activeId, setActiveId] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<ReturnType<typeof setTimeout>>();

    // useEffect(() => {
    //     startAutoPlay();
    //     // return () => stopAutoPlay();
    // }, [activeId]);


    // const startAutoPlay = () => {
    //     // stopAutoPlay();
    //     autoPlayRef.current = setInterval(() => {
    //         if (!isAnimating) {
    //             handleNext();
    //         }
    //     }, 5000);
    // };

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    const scrollToCard = (id: number, next: boolean) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const card = document.querySelector(`[data-id="${id}"]`);

        if (card && containerRef.current) {
            const scrollLeft = next ?
                (card as HTMLElement).offsetLeft - card.clientWidth * 2 :
                (card as HTMLElement).offsetLeft - card.clientWidth / 2;

            containerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });

            // Reset animation flag after scroll animation completes (300ms is typical for 'smooth' behavior)
            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        } else {
            setIsAnimating(false);
        }
    };

    const handlePrev = () => {
        if (isAnimating) return;
        const newId = activeId === 1 ? eventsData.length : activeId - 1;
        setActiveId(newId);
        scrollToCard(newId, false);
    };

    const handleNext = () => {
        if (isAnimating) return;
        const newId = activeId === eventsData.length ? 1 : activeId + 1;
        setActiveId(newId);
        scrollToCard(newId, true);
    };

    const handleCardClick = (id: number) => {
        if (isAnimating || id === activeId) return;
        const next = id > activeId;
        setActiveId(id);
        scrollToCard(id, next);
    };

    return (
        <section className="relative max-w-screen select-none overflow-hidden  ">
            <div className="relative">
                <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div
                    ref={containerRef}
                    className="flex gap-4 overflow-x-auto px-5 no-scrollbar mt-14 scroll-smooth"
                >
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            data-id={event.id}
                            className={`relative flex-shrink-0 h-[65vh] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out transform ${activeId === event.id ? 'md:w-[50vw] w-[60vw] scale-100' : 'md:w-[20vw] w-[28vw] scale-[95%]'
                                }`}
                            onClick={() => handleCardClick(event.id)}
                            style={{
                                backgroundImage: `url(${event.image})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black/50 to-transparent pointer-events-none z-10" />
                            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black/50 to-transparent pointer-events-none z-10" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
                            <div
                                className={`absolute inset-x-0 bottom-0 pl-7 pb-7 pr-7 text-white transition-transform duration-500 ease-in-out ${activeId === event.id ? 'translate-y-0' : 'translate-y-[calc(100%-54px)]'
                                    }`}
                            >
                                <h3 className="text-2xl font-semibold mb-2">{event.title}</h3>
                                <p
                                    className={`transition-all duration-500 delay-200 ${activeId === event.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                >
                                    <p className="text-sm">date: {event.dateTime}</p>
                                    <p className="text-sm">location: {event.location}</p>
                                    <p className="text-sm">
                                        <a href={event.registerLink} target="_blank" rel="noreferrer">
                                            Register
                                        </a>
                                    </p>
                                    <p className="text-sm">
                                        <a href={event.ruleBookLink!!} target="_blank" rel="noreferrer">
                                            Rule Book
                                        </a>
                                    </p>
                                    description: {event.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCarousel;