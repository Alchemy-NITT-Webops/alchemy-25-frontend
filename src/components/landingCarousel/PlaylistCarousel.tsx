import React, { useState, useEffect, useRef } from 'react';

import images from "../../data/imageCarousel.json";

const ImageCarousel = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [isBlueTheme, setIsBlueTheme] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [, setScrollLeft] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const autoPlayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const getVisibleimages = () => {
        const currentIndex = selectedItem - 1;
        const totalimages = images.imageCarouselData.length;
        const prevIndex = (currentIndex - 1 + totalimages) % totalimages;
        const nextIndex = (currentIndex + 1) % totalimages;
        return [images.imageCarouselData[prevIndex], images.imageCarouselData[currentIndex], images.imageCarouselData[nextIndex]];
    };

    const getCardStyle = (imageId: number) => {
        const visibleimages = getVisibleimages();
        const image = images.imageCarouselData.find(s => s.id === imageId);

        if (!image || !visibleimages.includes(image)) {
            return 'hidden';
        }

        if (imageId === selectedItem) {
            return 'transform scale-100 opacity-100 z-10 transition-all duration-700 ease-in-out';
        }

        const currentIndex = images.imageCarouselData.findIndex(s => s.id === selectedItem);
        const imageIndex = images.imageCarouselData.findIndex(s => s.id === imageId);

        if ((currentIndex === 0 && imageIndex === images.imageCarouselData.length - 1) ||
            (imageIndex === currentIndex - 1)) {
            return 'transform -translate-x-1/3 scale-[85%] opacity-40 z-0 transition-all duration-700 ease-in-out';
        }

        return 'transform translate-x-1/3 scale-[85%] opacity-40 z-0 transition-all duration-700 ease-in-out';
    };

    const [isAnimating, setIsAnimating] = useState(false);

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSelectedItem(current => current === images.imageCarouselData.length ? 1 : current + 1);
        setIsBlueTheme(current => !current);
        setTimeout(() => setIsAnimating(false), 700); // Match the duration of the transition
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSelectedItem(current => current === 1 ? images.imageCarouselData.length : current - 1);
        setIsBlueTheme(current => !current);
        setTimeout(() => setIsAnimating(false), 700); // Match the duration of the transition
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
        <div className={`min-h-screen overflow-hidden w-full flex items-center justify-center p-8 transition-colors duration-1000 ${isBlueTheme ? 'bg-[#03652E]' : 'bg-[#EC9E52]'}`}>
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
                    {images.imageCarouselData.map(image => (
                        <div
                            key={image.id}
                            className={`absolute w-[80vw] h-full left-0 right-0 mx-auto md:w-[80vw] ${getCardStyle(image.id)}`}
                        >
                            <img
                                src={image.image}
                                alt={image.title}
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