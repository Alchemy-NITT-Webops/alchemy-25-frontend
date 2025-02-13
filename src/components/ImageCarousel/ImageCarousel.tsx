import { useState, useEffect, useRef, useCallback } from "react";
import images from "../../data/imageCarousel.json";
import AnimatedTextCharacter from "../AnimatedTextCharacter";

const ImageCarousel = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const autoPlayRef = useRef<number | null>(null);
    const carouselRef = useRef(null);

    // Check for mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const getVisibleImages = useCallback(() => {
        const total = images.imageCarouselData.length;
        const currentIndex = selectedItem - 1;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        if (isMobile) {
            return [images.imageCarouselData[currentIndex]];
        }

        return [
            images.imageCarouselData[prevIndex],
            images.imageCarouselData[currentIndex],
            images.imageCarouselData[nextIndex],
        ];
    }, [selectedItem, isMobile]);

    const getCardStyle = useCallback((imageId: number) => {
        const visibleImages = getVisibleImages();
        const image = images.imageCarouselData.find((img) => img.id === imageId);
        if (!image || !visibleImages.includes(image)) return "hidden";

        if (isMobile) {
            return imageId === selectedItem
                ? "scale-100 opacity-100 z-10 transition-all duration-700 ease-in-out"
                : "hidden";
        }

        return imageId === selectedItem
            ? "scale-100 opacity-100 z-10 transition-all duration-700 ease-in-out"
            : "scale-[85%] opacity-40 z-0 transition-all duration-700 ease-in-out";
    }, [getVisibleImages, isMobile, selectedItem]);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSelectedItem((current) => (current === images.imageCarouselData.length ? 1 : current + 1));
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSelectedItem((current) => (current === 1 ? images.imageCarouselData.length : current - 1));
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating]);

    // Added pause/play functionality
    const togglePause = useCallback(() => {
        setIsPaused(prev => !prev);
    }, []);

    useEffect(() => {
        if (!isPaused) {
            autoPlayRef.current = setInterval(handleNext, 1000); // Increased interval for better UX
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [handleNext, isPaused]);

    const handleGestureStart = (e) => {
        setIsDragging(true);
        setStartX("touches" in e ? e.touches[0].pageX : e.pageX);
        setIsPaused(true);
    };

    const handleGestureMove = (e) => {
        if (!isDragging) return;
        const x = "touches" in e ? e.touches[0].pageX : e.pageX;
        const deltaX = x - startX;
        if (Math.abs(deltaX) > 50) {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            deltaX > 0 ? handlePrev() : handleNext();
            setIsDragging(false);
        }
    };

    const handleGestureEnd = () => {
        setIsDragging(false);
        setTimeout(() => setIsPaused(false), 1000);
    };

    const NavigationButton = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) => (
        <button
            type="button"
            onClick={(e) => {
                e.stopPropagation(); // Prevent gesture handling
                onClick();
            }}
            className={`absolute top-1/2 -translate-y-1/2 z-20 bg-white/80 p-2 rounded-full 
                hover:bg-white transition-all duration-300 hover:scale-110
                ${direction === 'prev' ? 'left-4' : 'right-4'}
                ${isMobile ? 'w-10 h-10' : 'w-12 h-12'}`}
        >
            {direction === 'prev' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-800 w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-800 w-full h-full">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            )}
        </button>
    );

    return (
        <div className={`min-h-screen w-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between transition-colors duration-1000 
            ${isMobile ? 'px-4 gap-8' : 'pl-4'}`}>

            <div className="relative w-full md:w-[60%] h-[50vh] md:h-[80vh] flex items-center justify-center overflow-hidden"
                ref={carouselRef}
                onMouseDown={handleGestureStart}
                onMouseMove={handleGestureMove}
                onMouseUp={handleGestureEnd}
                onMouseLeave={handleGestureEnd}
                onTouchStart={handleGestureStart}
                onTouchMove={handleGestureMove}
                onTouchEnd={handleGestureEnd}
            >
                <NavigationButton direction="prev" onClick={handlePrev} />
                <NavigationButton direction="next" onClick={handleNext} />

                {/* Added pause/play button */}
                <button
                    onClick={togglePause}
                    className="absolute bottom-4 right-4 z-20 bg-white/80 p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
                >
                    {isPaused ? (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                        </svg>
                    )}
                </button>

                {images.imageCarouselData.map((image) => (
                    <div
                        key={image.id}
                        className={`absolute w-full md:w-[80vw] h-full left-0 right-0 mx-auto ${getCardStyle(image.id)}`}
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

            <div className="w-full md:w-[40%] flex items-center justify-center text-center md:text-left">
                <div className="text-4xl md:text-6xl lg:text-8xl font-extrabold font-Azora">
                    <AnimatedTextCharacter text="Highlights" />
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;