// EventCarousel.tsx
import { useState, useRef, useEffect } from 'react';

interface Event {
    id: number;
    image: string;
    title: string;
    dateTime: string;
    registerLink: string;
}

interface EventsData {
    eventsData: Event[];
}

const EventCarousel = ({ eventsData }: EventsData) => {
    const [activeId, setActiveId] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoplayRef = useRef<ReturnType<typeof setTimeout>>();

    const scrollToCard = (id: number) => {
        if (isAnimating) return;

        setIsAnimating(true);
        const card = document.querySelector(`[data-id="${id}"]`);

        if (card && containerRef.current) {
            const scrollLeft = (card as HTMLElement).offsetLeft - (window.innerWidth - (card as HTMLElement).offsetWidth) / 2;

            containerRef.current.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });

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
        scrollToCard(newId);
    };

    const handleNext = () => {
        if (isAnimating) return;
        const newId = activeId === eventsData.length ? 1 : activeId + 1;
        setActiveId(newId);
        scrollToCard(newId);
    };

    const handleCardClick = (id: number) => {
        if (isAnimating || id === activeId) return;
        setActiveId(id);
        scrollToCard(id);
    };

    useEffect(() => {
        if (!isPaused) {
            autoplayRef.current = setInterval(() => {
                handleNext();
            }, 2000);
        }

        return () => {
            if (autoplayRef.current) {
                clearInterval(autoplayRef.current);
            }
        };
    }, [activeId, isPaused]);

    const handleMouseEnter = () => setIsPaused(true);
    const handleMouseLeave = () => setIsPaused(false);
    const handleTouchStart = () => setIsPaused(true);
    const handleTouchEnd = () => setIsPaused(false);

    // Initial centering of active card
    useEffect(() => {
        scrollToCard(activeId);
    }, []);

    return (
        <section className="relative w-full select-none overflow-hidden">
            <div
                className="relative"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <button
                    onClick={handlePrev}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 md:p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 md:p-3 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <div
                    ref={containerRef}
                    className="flex gap-4 md:gap-6 overflow-x-hidden px-4 md:px-8 no-scrollbar scroll-smooth py-4 touch-pan-x"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {eventsData.map((event) => (
                        <div
                            key={event.id}
                            data-id={event.id}
                            className={`relative flex-shrink-0 aspect-square rounded-xl overflow-hidden cursor-pointer 
                                transition-all duration-500 ease-in-out transform 
                                ${activeId === event.id
                                    ? 'w-[85vw] md:w-[35vw] scale-100 shadow-2xl brightness-150'
                                    : 'w-[85vw] md:w-[20vw] scale-95 brightness-10 opacity-70 blur-[4px] hover:brightness-110'
                                }`}
                            onClick={() => handleCardClick(event.id)}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                                style={{ backgroundImage: `url(${event.image})` }}
                            />

                            <div className={`absolute inset-0 transition-opacity duration-500
                                ${activeId === event.id
                                    ? 'bg-gradient-to-b from-black/10 to-black/80'
                                    : 'bg-gradient-to-b from-black/20 to-black/60'
                                }`}
                            />

                            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 text-white transition-all duration-500 ease-in-out bg-[#00000080] ">
                                <h3 className={`font-bold font-Lato mb-2 transition-all duration-500
                                    ${activeId === event.id ? 'text-lg md:text-4xl' : 'text-base md:text-lg'}`}
                                >
                                    {event.title}
                                </h3>

                                {activeId === event.id && (
                                    <div className="space-y-3 transition-all duration-500 ease-in-out opacity-100">
                                        <p className="text-xs md:text-lg font-IBMPlexSans opacity-85 text-white/90">{event.dateTime}</p>
                                        <a
                                            href={event.registerLink}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block px-4 md:px-6 py-1.5 md:py-2 bg-white font-IBMPlexSans text-black rounded-md
                                                text-xs md:text-sm font-bold transition-all duration-300 
                                                hover:bg-white/90 hover:scale-105"
                                        >
                                            Register Now
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventCarousel;