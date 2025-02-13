import { Facebook, Instagram, Sun, Linkedin } from "lucide-react";


const socialMediaLinks = [
    { name: "Medium", link: "https://alchemy-nitt.medium.com/", icon: Sun },
    { name: "Instagram", link: "https://www.instagram.com/alchemy_nitt/", icon: Instagram },
    { name: "LinkedIn", link: "https://www.linkedin.com/company/alchemy-nitt", icon: Linkedin },
    { name: "Facebook", link: "https://www.facebook.com/alchemy.nitt/", icon: Facebook }
];

const Footer = () => {

    return (
        <div className=" w-full h-full px-5 flex justify-center items-center">
            <div
                className={` font-Azora text-3xl md:text-6xl lg:text-8xl rounded-[40px]  font-extrabold text-white md:p-12 w-full h-[40vh] flex flex-col items-start justify-center shadow-lg`}
            >
                <span>ALCHEMY</span>
                <div className="flex flex-col md:flex-row md:items-center w-full justify-between">
                    <div className="text-white mb-4">'25</div>
                    <div className="flex flex-col md:flex-row md:gap-10 gap-4">
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
                            <p className="text-sm md:text-xl mt-1 md:mb-4 mb-2 text-white">Follow us on</p>
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
        </div>
    );
};

export default Footer;
