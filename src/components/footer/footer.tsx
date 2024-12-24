import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/src";

gsap.registerPlugin(ScrollTrigger);

function Footer() {




    useGSAP(() => {

        gsap.fromTo(
            '.item1',
            { y: "-300" },
            {
                y: "-300",
                scale: 0.7,
                scrollTrigger: {
                    trigger: '.item1',
                    start: 'top center', // when the top of the trigger hits the top of the viewport
                    end: 'top top',
                    toggleActions: 'play none reverse none', // Reverses on scroll back up
                    scrub: 1
                },

                // duration: 2
            }
        );
        gsap.fromTo(
            '.item2',
            { y: "-300" },
            {
                y: "-200",
                scale: 0.8,
                scrollTrigger: {
                    trigger: '.item2',
                    start: 'top center', // when the top of the trigger hits the top of the viewport
                    end: 'top top',
                    toggleActions: 'play none reverse none', // Reverses on scroll back up
                    scrub: 1
                },
                // duration: 2
            }
        );
        gsap.fromTo(
            '.item3',
            { y: "-300" },
            {
                y: "-100",
                scale: 0.9,
                scrollTrigger: {
                    trigger: '.item3',
                    start: 'top center', // when the top of the trigger hits the top of the viewport
                    // markers: true,
                    end: 'top top',
                    toggleActions: 'play none reverse none', // Reverses on scroll back up
                    scrub: 2
                },
                // duration: 2
            }
        );
        gsap.fromTo(
            '.item4',
            { y: "-300" },
            {
                y: "0",
                scrollTrigger: {
                    trigger: '.item4',
                    start: 'top center', // when the top of the trigger hits the top of the viewport
                    end: 'top top',
                    toggleActions: 'play none reverse none', // Reverses on scroll back up
                    scrub: 2
                },
                // duration: 2
            }
        );
    });



    return (
        <div className="h-screen w-full px-5 mt-20 lg:md-auto flex justify-start items-center">

            <div className={`relative w-full bottom-0 h-full p-10 flex flex-col items-center justify-end`}>
                {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
                    <div
                        key={index}
                        className={` absolute font-Azora text-5xl lg:text-8xl rounded-[60px] font-extrabold flex text-[#EC9E52] bg-[#03652E] p-3 w-full h-[40vh] flex-col items-start justify-center shadow-lg ${item} ${index == 0 || index == 2 ? 'bg-blue-600' : ''}`}
                    >
                        <span>ALCHEMY</span>

                        <div className="flex items-center w-full gap-2 justify-between">
                            <div>'25</div>
                            <div className="flex items-center justify-around">
                                {[1, 2, 3, 4, 5].map(() => {
                                    return (
                                        <>
                                            <div className="mr-5 transition-all duration-500 hover:shadow-sm hover:-translate-y-4 rounded-full size-7 lg:size-20 bg-white"></div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Footer;