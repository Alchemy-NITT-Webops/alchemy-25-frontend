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

                {images.imageCarouselData.map((image) => (
                    <div
                        key={image.id}
                        className={`absolute w-full md:w-[80vw] h-full  mx-auto ${getCardStyle(image.id)}`}
                    >
                        <img
                            src={image.image}
                            alt={image.title}
                            className="w-full h-full rounded-lg object-contain shadow-lg"
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