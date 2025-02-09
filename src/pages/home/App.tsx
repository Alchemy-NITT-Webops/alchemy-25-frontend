import AnimatedTextCharacter from "../../components/AnimatedTextCharacter";
import AnimatedTextWord from "../../components/AnimatedTextWords";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/src";
import ImageCarousel from "../../components/landingCarousel/PlaylistCarousel";
import Footer from "../../components/footer/footer";
import aboutUsData from "../../data/aboutsUsData.json"
import Events from "../events/Events";
import GuestLectures from "../guestLectures/GuestLectures";
import gldata from "../../data/gl.json";
import Accomodation from "../accomodation/Accomodation";
import FAQAccordion from "../../components/accordion/Accordion";
import Workshops from "../workshops/Workshops";
import { HeroParallax } from "../../components/landingComponent/LandingComponent";
import { title } from "motion/react-client";

function App() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            '.events',
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.events',
                    start: 'top 80%', // Start the animation when .event is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );

        gsap.fromTo(
            '.aboutus',
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.aboutus',
                    start: 'top 80%', // Start the animation when .event is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );


        gsap.fromTo(
            '.contactus',
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.contactus',
                    start: 'top 80%', // Start the animation when .event is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );




        gsap.fromTo(
            '.about',
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 80%', // Start the animation when .about is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );
        gsap.fromTo(
            '.aboutcontent',
            { x: 100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.about',
                    start: 'top 35%', // Start the animation when .about is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport
                },
            }
        );


        gsap.fromTo(
            '.gl',
            { x: -100, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: '.gl',
                    start: 'top 80%', // Start the animation when .about is in the viewport
                    end: 'bottom 80%', // Define the end of the animation trigger zone
                    toggleActions: 'play none none none', // Play the animation when it enters the viewport

                },
            }
        );

        gldata.gldata.forEach((_, i) => {
            var l_or_r = i % 2 == 0 ? -100 : 100;
            var ilorir = i % 2 == 0 ? 20 : -20;
            gsap.fromTo(
                `.gl${i + 1}`,
                { x: l_or_r, opacity: 0 },
                {
                    x: ilorir,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: `.gl${i + 1}`,
                        scrub: 1,
                        start: 'top bottom', // Start the animation when .about is in the viewport
                        end: 'bottom bottom', // Define the end of the animation trigger zone
                        toggleActions: 'play none reverse none', // Play the animation when it enters the viewport
                    },
                }
            );
        })

    });

    //products data:
    // title
    // link
    // thubnail
    const products = [
        {
            title: "Product 1",
            link: "https://example.com/product1",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 2",
            link: "https://example.com/product2",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 2",
            link: "https://example.com/product2",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 2",
            link: "https://example.com/product2",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 1",
            link: "https://example.com/product1",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 2",
            link: "https://example.com/product2",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 2",
            link: "https://example.com/product2",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 2",
            link: "https://example.com/product2",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
        {
            title: "Product 3",
            link: "https://example.com/product3",
            thumbnail: "https://www.yudiz.com/codepen/expandable-animated-card-slider/fortnite.jpg"
        },
    ];
    return (
        <div>

            <div id="landing" className="min-h-screen w-full">

                <HeroParallax products={products}/>
                {/* <div className=" flex w-full bg-transparent backdrop-blur-sm h-full justify-center flex-col gap-4 items-center overflow-hidden font-IBMPlexSans">
                    <p className="text-5xl md:text-7xl"><AnimatedTextCharacter text={"ALCHEMY '25"} /></p>
                    <p className="md:text-2xl"><AnimatedTextWord text={'Automation of Chemical Engineering'} /></p>
                </div> */}


            </div>

            <div className=" min-h-screen rounded-md overflow-hidden w-full flex-col flex items-center justify-center bg-[#03652E]">

                <div className=" flex justify-center lg:-mb-24 sm:-mb-20 -mb-16 h-fit w-full items-center">
                    <div className="about lg:text-9xl font-extrabold font-Azora  flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start">
                        <div className="  w-fit text-[#EC9E52]">
                            <AnimatedTextCharacter text={"ABOUT"} />
                        </div>
                        <div className=" w-full lg:translate-x-14 lg:-translate-y-14 translate-x-8 -translate-y-5 flex justify-end items-center  text-[#00B951]">
                            <AnimatedTextCharacter text={"US"} />
                        </div>
                    </div>
                    <div className=" aboutcontent w-full bg-white h-[2px] ml-4 sm:ml-10 mr-5 rounded-sm shadow-sm" />
                </div>

                <div className="aboutcontent font-sans text-lg overflow-hidden text-white p-5 sm:p-10 flex items-start text-whi justify-start h-full w-full">
                    {aboutUsData.aboutUsData}
                </div>

            </div>

            <ImageCarousel/>
            <Events />
            <GuestLectures />
            <Workshops/>
            <Accomodation />
            <FAQAccordion/>
            <Footer />

        </div>
    );
};

export default App


