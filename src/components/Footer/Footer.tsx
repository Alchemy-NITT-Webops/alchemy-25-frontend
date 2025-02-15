import { Facebook, Instagram, Sun, Linkedin } from "lucide-react";
import alchemy from "../../assets/alchemy.png"


const socialMediaLinks = [
    { name: "Medium", link: "https://alchemy-nitt.medium.com/", icon: Sun },
    { name: "Instagram", link: "https://www.instagram.com/alchemy_nitt/", icon: Instagram },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/alchemy-nitt", icon: Linkedin },
    { name: "Facebook", link: "https://www.facebook.com/alchemy.nitt/", icon: Facebook }
];

const contactDetails = [
    { name: "Dakshesh S K", number: "8610973425" },
    { name: "Nantha Balan", number: "8489751515" },
]

const Footer = () => {

    return (
        <>
            <div className="w-full flex-col flex justify-around bg-gradient-to-b p-5 select-none from-[#EC9E52] to-[#462200] rounded-[50px] border-8 border-[#1C1C1C] h-fit ">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                    <img
                        src={alchemy}
                        className="w-[60%] lg:w-[33%] select-none p-[3%]"
                    />
                    <div className="flex flex-col ">
                        <p className="font-Azora text-white text-2xl px-5">contact us</p>
                        {contactDetails.map((contact, index) => (
                            <div className="flex flex-col " key={index}>
                                <span className="font-Lato text-white px-5">{contact.name}: <a href={`tel:${contact.number}`}>+91 {contact.number}</a></span>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col my-5 gap-5">
                        <p className="font-Azora text-white text-2xl px-5">follow us on</p>
                        <div className="flex select-none justify-start lg:justify-center px-5 space-x-8">
                            {socialMediaLinks.map((link, index) => (
                                <a
                                    key={index}
                                    href={link.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-white hover:invert"
                                >
                                    <link.icon size={32} />
                                </a>
                            ))}
                        </div>

                    </div>

                </div>
                <div className="flex flex-col gap-5">
                    <div className="flex  gap-5 justify-end items-center">
                        <div className="w-[90%] h-[1px] bg-white rounded-full"></div>
                    </div>
                    <div className="flex  gap-5 justify-start items-center">
                        <div className="w-[90%] h-[0.5px] bg-white rounded-full"></div>
                    </div>
                </div>


                <p className="text-xl mt-5 text-center font-bold text-white font-Azora ">
                    Made With ♥️ by Alchemy Design and <a href="https://delta.nitt.edu/members/28" target="blank" className="hover:invert transition-all duration-1000 hover:cursor-pointer">  Webops team</a>
                </p>

            </div>
        </>
    );
};

export default Footer;
