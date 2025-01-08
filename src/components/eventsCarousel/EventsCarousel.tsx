import  { useState, useEffect, useRef } from 'react';


interface Event {
    id: number;
    title: string;
    description: string;
    image: string;
    dateTime: string;
    location: string;
    registerLink: string;
    ruleBookLink: string;
}

const events: Event[] = [
    {
        id: 1,
        title: "Dota 2",
        description: "Dota 2 is a multiplayer online battle arena by Valve. The event is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/dota-2.jpg",
        dateTime: "2023-11-01T18:00:00Z",
        location: "Seattle, WA",
        registerLink: "https://example.com/register/dota2",
        ruleBookLink: "https://example.com/rules/dota2"
    },
    {
        id: 2,
        title: "The Witcher 3",
        description: "The Witcher 3 is a multiplayer online battle arena by Valve. The event is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/winter-3.jpg",
        dateTime: "2023-11-02T18:00:00Z",
        location: "Warsaw, Poland",
        registerLink: "https://example.com/register/witcher3",
        ruleBookLink: "https://example.com/rules/witcher3"
    },
    {
        id: 3,
        title: "RDR 2",
        description: "RDR 2 is a multiplayer online battle arena by Valve. The event is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/rdr-2.jpg",
        dateTime: "2023-11-03T18:00:00Z",
        location: "New York, NY",
        registerLink: "https://example.com/register/rdr2",
        ruleBookLink: "https://example.com/rules/rdr2"
    },
    {
        id: 4,
        title: "PUBG Mobile",
        description: "PUBG 2 is a multiplayer online battle arena by Valve. The event is a sequel to Defense of the Ancients, which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/pubg.jpg",
        dateTime: "2023-11-04T18:00:00Z",
        location: "Seoul, South Korea",
        registerLink: "https://example.com/register/pubg",
        ruleBookLink: "https://example.com/rules/pubg"
    },
    {
        id: 5,
        title: "Fortnite",
        description: "Battle royale where 100 players fight to be the last person standing. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg",
        dateTime: "2023-11-05T18:00:00Z",
        location: "Los Angeles, CA",
        registerLink: "https://example.com/register/fortnite",
        ruleBookLink: "https://example.com/rules/fortnite"
    },
    {
        id: 6,
        title: "Far Cry 5",
        description: "Far Cry 5 is a 2018 first-person shooter event developed by Ubisoft. which was a community-created mod for Blizzard Entertainment's Warcraft III.",
        image: "https://www.yudiz.com/codepen/expandable-animated-card-slider/far-cry-5.jpg",
        dateTime: "2023-11-06T18:00:00Z",
        location: "Montreal, Canada",
        registerLink: "https://example.com/register/farcry5",
        ruleBookLink: "https://example.com/rules/farcry5"
    }
];

const EventCarousel = () => {
    const [activeId, setActiveId] = useState(1);
    const [isDragging, _] = useState(false);
    // const [startX, setStartX] = useState(0);
    // const [scrollLeft, setScrollLeft] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [activeId]);

    const scrollToCard = (id: number) => {
        const card = document.querySelector(`[data-id="${id}"]`);
        if (card && containerRef.current) {
            containerRef.current.scrollTo({
                left: (card as HTMLElement).offsetLeft - card.clientWidth * 2,
                behavior: 'smooth'
            });
        }
    };

    const handlePrev = () => {
        const newId = activeId === 1 ? events.length : activeId - 1;
        setActiveId(newId);
        scrollToCard(newId);
    };

    const handleNext = () => {
        const newId = activeId === events.length ? 1 : activeId + 1;
        setActiveId(newId);
        scrollToCard(newId);
    };

    // const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    //     setIsDragging(true);
    //     setStartX(e.pageX - e.currentTarget.offsetLeft);
    //     setScrollLeft(e.currentTarget.scrollLeft);
    // };

    // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    //     if (!isDragging) return;
    //     e.preventDefault();
    //     const x = e.pageX - e.currentTarget.offsetLeft;
    //     const walk = (x - startX) * 2;
    //     e.currentTarget.scrollLeft = scrollLeft - walk;
    // };

    // const handleMouseUp = () => {
    //     setIsDragging(false);
    // };

    const handleCardClick = (id: number) => {
        if (!isDragging) {
            setActiveId(id);
            scrollToCard(id);
        }
    };

    return (
        <section className="relative max-w-screen-2xl select-none mx-auto overflow-hidden">

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
                    className="flex gap-4 overflow-x-auto px-5 cursor-grab active:cursor-grabbing no-scrollbar scroll-smooth"
                    // onMouseDown={handleMouseDown}
                    // onMouseMove={handleMouseMove}
                    // onMouseUp={handleMouseUp}
                    // onMouseLeave={handleMouseUp}
                >

                    {events.map((event) => (

                        <div
                            key={event.id}
                            data-id={event.id}
                            className={`relative flex-shrink-0 h-[80vh] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ease-in-out transform ${activeId === event.id ? 'md:w-[50vw] w-[70vw] scale-100' : 'md:w-[20vw] w-[28vw] scale-[95%]'
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
                                        <a href={event.ruleBookLink} target="_blank" rel="noreferrer">
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