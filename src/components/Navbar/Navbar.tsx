import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import useWindowDimensions from "../../utils/dimensionsContext";


const getNavItems = () => [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Events", url: "/events" },
    { id: 3, name: "Workshops", url: "/workshops" },
    { id: 4, name: "Guest Lectures", url: "/guest-lectures" },
    { id: 5, name: "Accommodation", url: "/accommodation" },
    { id: 6, name: "Contact Us", url: "/contact" },
];

const Header: FC = () => {
    const navItems = getNavItems();
    const navigate = useNavigate();
    const { scrollY } = useScroll();

    const [active, setActive] = useState(1);
    const [visible, setVisible] = useState(true);
    const [mouseAtTop, setMouseAtTop] = useState(false);

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMouseAtTop(event.clientY <= 50);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 10 && !mouseAtTop) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    });

    const handleClick = (url: string) => {
        navigate(url);
        setActive(navItems.find((item) => item.url === url)?.id || 1);
    };

    return (
        <motion.nav
            variants={{
                visible: { backgroundColor: "rgb(28,28,28,0.9)", border: "none" },
                hidden: {
                    backdropFilter: "blur(15px)",
                    backgroundColor: "rgba(28,28,28,0.75)",
                    y: "-100%",
                },
            }}
            initial={false}
            animate={visible || mouseAtTop ? "visible" : "hidden"}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="select-none z-50 fixed top-0 w-full h-28 shadow-sm border justify-between md:flex hidden"
            style={{ borderRadius: "0px 0px 5px 5px" }}
        >
            <div className="left-0 justify-start ml-5 flex flex-[0.2] items-center">
                <img alt="logo" src="/logo.png" className="size-20 aspect-auto" />
            </div>
            <nav className="flex items-center flex-[0.8] right-0 gap-3 mr-8 justify-around">
                {navItems.map((item) => (
                    <button
                        type="button"
                        key={item.name}
                        onClick={() => handleClick(item.url)}
                        className="min-w-fit relative text-xl text-white transition-all hover:scale-105 size-8"
                    >
                        <motion.span
                            variants={{ isInactive: { opacity: "0.85" } }}
                            animate={active === item.id ? "isActive" : "isInactive"}
                        >
                            {item.name}
                        </motion.span>
                        <motion.div
                            variants={{ isActive: { width: "100%" }, isInactive: { width: "0%" } }}
                            initial={false}
                            animate={active === item.id ? "isActive" : "isInactive"}
                            className="bg-white rounded-md h-0.5"
                        />
                    </button>
                ))}
            </nav>
        </motion.nav>
    );
};


const Path = ({ ...props }) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button type="button" onClick={toggle} className="text-white">
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

const MobileNav = () => {
    const [isOpen, toggleIsOpen] = useState(false);
    const { height } = useWindowDimensions();
    const navigate = useNavigate();
    const [active, setActive] = useState(1);

    useEffect(() => {
        const url = window.location.pathname;
        setActive(navItems.find(item => item.url === url)?.id || 1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = (url: string) => {
        navigate(url);
        setActive(navItems.find(item => item.url === url)?.id || 1);
    };

    const navItems = getNavItems();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="md:hidden w-full fixed z-50 backdrop-blur-sm flex justify-between items-center border-b-[#1C1C1C] border-b-[1.5px]">
            <motion.div
                animate={isOpen ? "open" : "closed"}
                initial="closed"
            >
                <div
                    className="z-[300] md:hidden fixed top-0 left-0 m-5 flex justify-center items-center cursor-pointer"
                    onClick={() => toggleIsOpen(!isOpen)}
                >
                    <MenuToggle toggle={() => toggleIsOpen(!isOpen)} />
                </div>
                <motion.div
                    className="z-50 fixed top-0 left-0 bg-[#1C1C1C] flex flex-col h-screen w-full"
                    variants={{
                        open: {
                            clipPath: `circle(${height * 2}px at 40px 40px)`,
                            transition: {
                                type: "spring",
                                stiffness: 20,
                                restDelta: 2,
                                staggerChildren: 0.05,
                                delayChildren: 0.1
                            }
                        },
                        closed: {
                            clipPath: "circle(0px at 48px 40px)",
                            transition: {
                                delay: 0.1,
                                type: "spring",
                                stiffness: 400,
                                damping: 40,
                                staggerChildren: 0.05,
                                staggerDirection: -1
                            }
                        }
                    }}
                >
                    <motion.div
                        className="flex flex-col justify-center items-center h-full pb-20"
                        variants={{
                            open: {
                                opacity: 1,
                                transition: { delay: 0.2 }
                            },
                            closed: {
                                opacity: 0
                            }
                        }}
                    >
                        {navItems.map((item, key) => (
                            <motion.div
                                className="w-full flex justify-center"
                                key={key}
                                variants={{
                                    open: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            y: { stiffness: 1000, velocity: -100 }
                                        }
                                    },
                                    closed: {
                                        y: 50,
                                        opacity: 0,
                                        transition: {
                                            y: { stiffness: 1000 }
                                        }
                                    }
                                }}
                            >
                                <div
                                    className={`py-4 px-6 w-full text-center text-lg font-semibold 
                                        ${active === item.id ? "text-white" : "text-white/60"} 
                                        transition-all duration-300 hover:text-white`}
                                    onClick={() => {
                                        toggleIsOpen(!isOpen);
                                        handleClick(item.url);
                                    }}
                                >
                                    {item.name}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
            <div className="z-50 flex-1 py-4 justify-center flex items-center">
                <span className="text-white font-bold text-xl">Alchemy '25</span>
            </div>
        </div>
    );
}

const Navbar = ({ isMobile = false }: { isMobile: boolean }) => {
    return !isMobile ? <Header /> : <MobileNav />;
};

export default Navbar;
