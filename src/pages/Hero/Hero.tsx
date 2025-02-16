import { GradualSpacing } from '../../components/GradualSpacing'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './style.css'
import clsx from 'clsx'
import AnimatedTextCharacter from '../../components/AnimatedTextCharacter'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const floaterRef = useRef(null)
    const spinningRef = useRef(null)
    const heroSlider = useRef(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        // Clear any existing ScrollTriggers
        ScrollTrigger.getAll().forEach(t => t.kill())

        const floaterAnimation = gsap.to(floaterRef.current, {
            x: isMobile ? "-25%" : "-50%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: floaterRef.current,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 1,
            },
        })

        const sliderAnimation = gsap.to(heroSlider.current, {
            x: isMobile ? "50%" : "100%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: floaterRef.current,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 1,
            },
        })

        const spinningAnimation = gsap.to(spinningRef.current, {
            rotateZ: isMobile ? 30 : 45,
            opacity: 1,
            transformPerspective: 0,
            ease: "power2.out",
            scrollTrigger: {
                trigger: floaterRef.current,
                start: "bottom bottom",
                end: "bottom top",
                scrub: 1,
            },
        })

        return () => {
            floaterAnimation.kill()
            sliderAnimation.kill()
            spinningAnimation.kill()
        }
    }, [isMobile])

    return (
        <div className="min-h-screen page relative bg-inherit overflow-x-hidden w-full flex flex-col md:flex-row items-center overflow-y-auto justify-center md:justify-end">
            <div
                ref={spinningRef}
                className={clsx(
                    " md:flex -rotate-45 flex-col absolute h-[90vh]",
                    "w-[80%] -translate-x-[40%] -translate-y-[25%] xs:w-[70%] xs:-translate-x-[35%] sm:w-[60%] sm:-translate-x-[30%]",
                    "md:w-[45%] md:-translate-x-[30%] md:-translate-y-[15%]",
                    "lg:w-[35%] lg:-translate-x-[30%] left-0 items-center justify-center"
                )}
            >
                <div className="w-full h-1/2 flex justify-end">
                    <div className="w-[70%] flex flex-row justify-start h-full">
                        <div className="-rotate-0 h-[90%] rounded-[30px] w-full box1"></div>
                    </div>
                </div>
                <div className="w-full flex flex-row justify-end h-1/2">
                    <div className="-rotate-0 rounded-[40px] box w-3/4"></div>
                    <div className="w-[30%] flex flex-row justify-end items-start h-full">
                        <div className="-rotate-0 h-[45%] w-[80%] rounded-[20px] box1"></div>
                    </div>
                </div>
            </div>

            <div className='flex backdrop-blur z-50 flex-col w-full md:w-3/5 items-center justify-center gap-3 mt-20 md:mt-0'>
                <div className='flex items-center justify-center gap-2 sm:gap-5'>
                    <div className='text-5xl md:text-8xl font-bold'>
                        <AnimatedTextCharacter text={"ALCHEMY '25"} />
                    </div>
                </div>
                <GradualSpacing
                    text={"Digitalization of Chemical Engineering"}
                    className='font-Lato text-xs'
                />
            </div>

            <div
                ref={floaterRef}
                className={clsx(
                    "floater font-semibold opacity-50 absolute bottom-5 mb-2 flex items-center gap-6 font-Azora",
                    "text-2xl translate-x-1/4 xs:text-3xl sm:text-4xl",
                    "md:text-5xl md:translate-x-1/3"
                )}
            >
                <div className='w-12 md:w-24 h-2 md:h-4 smallbox'></div>
                <div className="text-[#EC9E52]">
                    <span>Digitalization of Chemical Engineering</span>
                </div>
            </div>
        </div>
    )
}

export default Hero