import React, { useState, useEffect, useRef } from 'react';

interface Song {
    id: number;
    image: string;
    title: string;
    artist: string;
    duration: string;
}

const songs: Song[] = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=882&q=80',
        title: 'Bunker',
        artist: 'Balthazar',
        duration: '4:05'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80',
        title: 'Words Remain',
        artist: 'Moderator',
        duration: '4:05'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Falling Out',
        artist: 'Otzeki',
        duration: '4:05'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Dreaming',
        artist: 'Luna',
        duration: '3:45'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1519138130-85a949fdcb4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Sunlight',
        artist: 'The Waves',
        duration: '4:20'
    },
    {
        id: 6,
        image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Midnight',
        artist: 'Starlight',
        duration: '3:55'
    },
    {
        id: 7,
        image: 'https://images.unsplash.com/photo-1535992165812-68d1861aa71e?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Ocean',
        artist: 'Deep Blue',
        duration: '4:15'
    },
    {
        id: 8,
        image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Forest',
        artist: 'Nature',
        duration: '4:30'
    },
    {
        id: 9,
        image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Mountain',
        artist: 'Heights',
        duration: '4:10'
    },
    {
        id: 10,
        image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60',
        title: 'Desert',
        artist: 'Sands',
        duration: '4:25'
    }
];




const ImageCarousel = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [isBlueTheme, setIsBlueTheme] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const getVisibleSongs = () => {
        const currentIndex = selectedItem - 1;
        const totalSongs = songs.length;
        const prevIndex = (currentIndex - 1 + totalSongs) % totalSongs;
        const nextIndex = (currentIndex + 1) % totalSongs;
        return [songs[prevIndex], songs[currentIndex], songs[nextIndex]];
    };

    const getCardStyle = (songId: number) => {
        const visibleSongs = getVisibleSongs();
        const song = songs.find(s => s.id === songId);

        if (!song || !visibleSongs.includes(song)) {
            return 'hidden';
        }

        if (songId === selectedItem) {
            return 'transform scale-100 opacity-100 z-10 transition-all duration-700 ease-in-out';
        }

        const currentIndex = songs.findIndex(s => s.id === selectedItem);
        const songIndex = songs.findIndex(s => s.id === songId);

        if ((currentIndex === 0 && songIndex === songs.length - 1) ||
            (songIndex === currentIndex - 1)) {
            return 'transform -translate-x-1/3 scale-[85%] opacity-40 z-0 transition-all duration-700 ease-in-out';
        }

        return 'transform translate-x-1/3 scale-[85%] opacity-40 z-0 transition-all duration-700 ease-in-out';
    };

    const handleNext = () => {
        setSelectedItem(current => current === songs.length ? 1 : current + 1);
        setIsBlueTheme(current => !current);
    };

    const handlePrev = () => {
        setSelectedItem(current => current === 1 ? songs.length : current - 1);
        setIsBlueTheme(current => !current);
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isPaused) {
            autoPlayRef.current = setInterval(() => {
                handleNext();
            }, 3000);
        }

        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [isPaused]);

    // Mouse and Touch event handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
        setIsPaused(true);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0));
        setScrollLeft(carouselRef.current?.scrollLeft || 0);
        setIsPaused(true);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (Math.abs(walk) > 50) {
            if (walk > 0) {
                handlePrev();
            } else {
                handleNext();
            }
            setIsDragging(false);
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX - (carouselRef.current?.offsetLeft || 0);
        const walk = (x - startX) * 2;
        if (Math.abs(walk) > 50) {
            if (walk > 0) {
                handlePrev();
            } else {
                handleNext();
            }
            setIsDragging(false);
        }
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setTimeout(() => setIsPaused(false), 1000);
    };

    return (
        <div className={`min-h-screen w-full flex items-center justify-center p-8 transition-colors duration-1000 ${isBlueTheme ? 'bg-[#03652E]' : 'bg-[#EC9E52]'}`}>
            <div
                className="w-[80vw] h-[80vh] flex flex-col items-center justify-center"
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleDragEnd}
            >
                {/* Navigation Buttons */}
                <div className="relative w-full h-full mb-5">
                    <button
                        onClick={() => {
                            handlePrev();
                            setIsPaused(true);
                            setTimeout(() => setIsPaused(false), 1000);
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => {
                            handleNext();
                            setIsPaused(true);
                            setTimeout(() => setIsPaused(false), 1000);
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-colors duration-300"
                    >
                        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Cards */}
                    {songs.map(song => (
                        <div
                            key={song.id}
                            className={`absolute w-3/5 h-full left-0 right-0 mx-auto ${getCardStyle(song.id)}`}
                        >
                            <img
                                src={song.image}
                                alt={song.title}
                                className="w-full h-full rounded-lg object-cover shadow-lg"
                                draggable="false"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};


export default ImageCarousel;