import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap/src";
import { Plus, Minus } from 'lucide-react';

//import facebook, instagram, medium and linkedin icons from lucide-react
import { Facebook, Instagram, SunMediumIcon, Linkedin } from 'lucide-react';

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

            }
        );
    });

    var socialMedia = [
        {
            name: 'Medium',
            link: 'https://alchemy-nitt.medium.com/',
            image: SunMediumIcon
        },
        {
            name: 'Instagram',
            link: 'https://www.instagram.com/alchemy_nitt/',
            image: Instagram
        },
        {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/alchemy-nitt',
            image: Linkedin
        },
        {
            name: 'Facebook',
            link: 'https://www.facebook.com/alchemy.nitt/',
            image: Facebook
        }
    ]


    return (
        <div className="h-screen w-full px-5 mt-20 lg:md-auto flex justify-start items-center">

            <div className={`relative w-full bottom-0 h-full p-10 my-3 flex flex-col items-center justify-end`}>
                {['item1', 'item2', 'item3', 'item4'].map((item, index) => (
                    <div
                        key={index}
                        className={` absolute font-Azora text-3xl lg:text-8xl rounded-[60px] font-extrabold flex text-[#EC9E52] bg-[#03652E] p-10 w-full h-[40vh] flex-col items-start justify-center shadow-lg ${item} ${index == 0 || index == 2 ? 'bg-blue-600' : ''}`}
                    >
                        <span className="">ALCHEMY</span>

                        <div className="md:flex-row flex flex-col md:items-center w-full justify-between">
                            <div>'25</div>
                            
                            <div className="flex md:flex-row flex-col items-center  md:gap-10">
                            <div className=" w-full text-base md:text-xl">
                                <div> Contacts
                                    </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <div>name</div>
                                        <div>9876543210</div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div>name</div>
                                        <div>9876543210</div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full">
                                <div className="text-base md:text-2xl mt-1 w-full md:mb-4">Follow us On</div>

                                <div className="flex w-full justify-between">
                                    {socialMedia.map((socialMedia) => {
                                        return (
                                            <>
                                                <div className="mr-5 transition-all duration-500 md:hover:shadow-sm md:hover:-translate-y-4  size-10 ">
                                                    <a href={socialMedia.link} target="_blank" rel="noreferrer">
                                                        <socialMedia.image size={35} />
                                                    </a>
                                                </div>
                                            </>
                                        )
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Footer;