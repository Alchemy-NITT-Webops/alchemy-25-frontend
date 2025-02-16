import { useState, useEffect, useRef, useCallback } from "react";
import {imageCarouselData} from "../../data/imageCarousel";
import AnimatedTextCharacter from "../AnimatedTextCharacter";

const ImageCarousel = () => {
    const [selectedItem, setSelectedItem] = useState(1);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);

    const autoPlayRef = useRef<number | null>(null);
    const carouselRef = useRef(null);

    const getVisibleImages = useCallback(() => {
        const total = imageCarouselData.length;
        const currentIndex = selectedItem - 1;
        const prevIndex = (currentIndex - 1 + total) % total;
        const nextIndex = (currentIndex + 1) % total;

        // if (isMobile) {
        //     return [imageCarouselData[currentIndex]];
        // }

        return [
            imageCarouselData[prevIndex],
            imageCarouselData[currentIndex],
            imageCarouselData[nextIndex],
        ];
    }, [selectedItem]);

    const getCardStyle = useCallback((imageId: number) => {
        const visibleImages = getVisibleImages();
        const image = imageCarouselData.find((img) => img.id === imageId);
        if (!image || !visibleImages.includes(image)) return "hidden";

        // if (isMobile) {
        //     return imageId === selectedItem
        //         ? "scale-100 opacity-100 z-10 transition-all duration-700 ease-in-out"
        //         : "hidden";
        // }

        return imageId === selectedItem
            ? "scale-100 opacity-100 z-10 transition-all duration-700 ease-in-out"
            : "scale-[85%] opacity-40 z-0 transition-all duration-700 ease-in-out";
    }, [getVisibleImages, selectedItem]);

    const handleNext = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSelectedItem((current) => (current === imageCarouselData.length ? 1 : current + 1));
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating]);

    const handlePrev = useCallback(() => {
        if (isAnimating) return;
        setIsAnimating(true);
        setSelectedItem((current) => (current === 1 ? imageCarouselData.length : current - 1));
        setTimeout(() => setIsAnimating(false), 700);
    }, [isAnimating]);

    useEffect(() => {
        if (!isPaused) {
            autoPlayRef.current = setInterval(handleNext, 3000); // Increased interval for better UX
        }
        return () => {
            if (autoPlayRef.current) {
                clearInterval(autoPlayRef.current);
            }
        };
    }, [handleNext, isPaused]);

    const handleGestureStart = (e: any) => {
        setIsDragging(true);
        setStartX("touches" in e ? e.touches[0].pageX : e.pageX);
        setIsPaused(true);
    };

    const handleGestureMove = (e: any) => {
        if (!isDragging) return;
        const x = "touches" in e ? e.touches[0].pageX : e.pageX;
        const deltaX = x - startX;
        if (Math.abs(deltaX) > 50) {
            deltaX > 0 ? handlePrev() : handleNext();
            setIsDragging(false);
        }
    };

    const handleGestureEnd = () => {
        setIsDragging(false);
        setTimeout(() => setIsPaused(false), 1000);
    };
    return (
        <div className={`min-h-screen w-full flex gap-10 flex-col-reverse md:flex-row items-center justify-center transition-colors duration-1000`}>

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

                {imageCarouselData.map((image) => (
                    <div
                        key={image.id}
                        className={`absolute w-full md:w-[80vw] h-full  mx-auto ${getCardStyle(image.id)}`}
                    >
                        <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full flex-1 rounded-lg object-contain shadow-lg "
                            draggable="false"
                        />
                    </div>
                ))}

                <button
                    onClick={handlePrev}
                    className="absolute z-50 left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800 z-50">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute z-50 right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-gray-800 z-50">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <div className="w-min flex  items-center justify-center text-center md:text-left">
                <div className="text-6xl  lg:text-7xl font-extrabold font-Azora">
                    <AnimatedTextCharacter text="Highlights" />
                </div>
            </div>
        </div>
    );
};

export default ImageCarousel;