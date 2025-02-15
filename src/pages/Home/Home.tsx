import Lenis from '@studio-freight/lenis';
import { useEffect, useRef, useState } from "react";
import { AboutUs, Hero, FAQ, Workshops, Events, GuestLectures } from "..";
import { Footer, ImageCarousel } from "../../components";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
    const whoAreWeRef = useRef<HTMLDivElement | null>(null);
    const aboutUsRef = useRef<HTMLDivElement | null>(null);
    const scrollSectionRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) {
            if (aboutUsRef.current) {
                gsap.set(aboutUsRef.current, {
                    clearProps: "all"
                });
            }
            if (whoAreWeRef.current) {
                gsap.set(whoAreWeRef.current, {
                    clearProps: "all"
                });
            }
            return;
        }

        if (!whoAreWeRef.current || !scrollSectionRef.current || !containerRef.current || !aboutUsRef.current) return;

        // Set initial states for desktop
        gsap.set(aboutUsRef.current, {
            opacity: 0,
            x: "100%"
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=200%",
                pin: true,
                scrub: 2,
                anticipatePin: 1,
            }
        });

        // Desktop animation
        tl.to(whoAreWeRef.current, {
            x: "-100%",
            opacity: 0,
            duration: 1.5,
            ease: "power2.inOut"
        });

        tl.to(aboutUsRef.current, {
            x: "0%",
            opacity: 1,
            duration: 2,
            ease: "power2.inOut"
        }, "-=1");

        return () => {
            tl.scrollTrigger?.kill();
        };
    }, [isMobile]);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 2.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 0.8
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    return (
        <>
            <div className="snap-mandatory w-full bg-[#1C1C1C]">
                <div className="h-screen w-full">
                    <Hero />
                </div>
                {isMobile ? (
                    <div className="min-h-screen w-full">
                        <AboutUs />
                    </div>
                ) : (
                    <div ref={containerRef} className="overflow-x-hidden relative h-screen">
                        <div
                            ref={scrollSectionRef}
                            className="h-full relative"
                        >
                            {/* "Who are we?" Section */}
                            <div className="h-screen w-full flex items-center justify-center bg-[#1C1C1C] absolute">
                                <div
                                    ref={whoAreWeRef}
                                    className="lg:text-9xl floater font-extrabold opacity-80 flex items-center gap-6 font-Azora"
                                >
                                    <div className="w-24 h-4 smallbox"></div>
                                    <div className="text-[#EC9E52]">
                                        <span>Who are we?</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                ref={aboutUsRef}
                                className="h-screen w-full absolute top-0 left-0"
                            >
                                <AboutUs />
                            </div>
                        </div>
                    </div>
                )}

                <div className="h-screen w-full md:mt-10">
                    <ImageCarousel />
                </div>
                <div className='md:mt-10'>
                    <Events />
                </div>
                <div className='md:mt-10'>
                    <GuestLectures />
                </div>
                <div className='md:mt-10'>
                    <Workshops />
                </div>
                <div className="md:mt-10 min-h-screen flex justify-center items-center h-full w-full">
                    <FAQ />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Home;