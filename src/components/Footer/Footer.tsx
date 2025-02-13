import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { Facebook, Instagram, Sun, Linkedin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const socialMediaLinks = [
    { name: "Medium", link: "https://alchemy-nitt.medium.com/", icon: Sun },
    { name: "Instagram", link: "https://www.instagram.com/alchemy_nitt/", icon: Instagram },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/alchemy-nitt", icon: Linkedin },
    { name: "Facebook", link: "https://www.facebook.com/alchemy.nitt/", icon: Facebook }
];

const Footer = () => {
    useGSAP(() => {
        ["item1", "item2", "item3", "item4"].forEach((item, index) => {
            gsap.fromTo(
                `.${item}`,
                { y: "200", opacity: 0, scale: 1 },
                {
                    y: "0",
                    opacity: 1,
                    scale: 1,
                    scrollTrigger: {
                        trigger: `.${item}`,
                        start: "bottom bottom",
                        end: "center center",
                        toggleActions: "play none reverse none",
                        scrub: 1
                    }
                }
            );
        });
    });

    return (
        <div className="h-screen w-full px-5 mt-20 flex justify-start items-center bg-[rgb(189,174,174)]">
            <div className="relative w-full bottom-0 h-full p-10 flex flex-col items-center justify-end">
                {["item1", "item2", "item3", "item4"].map((item, index) => (
                    <div
                        key={index}
                        className={`absolute font-Azora text-3xl md:text-6xl lg:text-8xl rounded-[40px] font-extrabold text-white p-8 md:p-12 w-full h-[40vh] flex flex-col items-start justify-center shadow-lg ${item} ${index % 2 === 0 ? 'bg-[#D68C45]' : 'bg-[#A86C35]'}`}
                    >
                        <span>ALCHEMY</span>
                        <div className="flex flex-col md:flex-row md:items-center w-full justify-between">
                            <div className="text-white">'25</div>
                            <div className="flex flex-col md:flex-row md:gap-10">
                                <div className="text-sm md:text-lg text-white">
                                    <p>Contacts</p>
                                    <div className="flex flex-col gap-2">
                                        {[1, 2].map((_, i) => (
                                            <div key={i} className="flex gap-2">
                                                <span>Name</span>
                                                <span>9876543210</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm md:text-xl mt-1 md:mb-4 text-white">Follow us on</p>
                                    <div className="flex gap-4">
                                        {socialMediaLinks.map(({ link, icon: Icon }, i) => (
                                            <a key={i} href={link} target="_blank" rel="noreferrer" className="transition-all duration-500 hover:shadow-sm hover:-translate-y-2 text-white">
                                                <Icon size={35} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;
