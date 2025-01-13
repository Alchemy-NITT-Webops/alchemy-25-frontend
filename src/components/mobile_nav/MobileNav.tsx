import { useEffect, useState } from "react"
import { motion } from "framer-motion";
import useWindowDimensions from "../../utils/dimensionsContext";
import { useNavigate } from "react-router-dom";

//@ts-ignore
const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="hsl(0, 0%, 18%)"
        strokeLinecap="round"
        {...props}
    />
);
//@ts-ignore
const MenuToggle = ({ toggle }) => (
    <button onClick={toggle}>
        <svg width="23" height="23" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" },
                    hidden: {}
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
)

function MobileNav() {
    const [isOpen, toggleIsOpen] = useState(false)
    const { height } = useWindowDimensions()

    const navigate = useNavigate();
    var [active, setActive] = useState(1);

    useEffect(() => {
        const url = window.location.pathname;
        setActive(navItems.find(item => item.url == url)?.id || 1)
    })
    const handleClick = (url: string) => {
        navigate(url)
        setActive(navItems.find(item => item.url == url)?.id || 1)
    };

    const navItems = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Events", url: "/events" },
        { id: 3, name: "Workshops", url: "/workshops" },
        { id: 4, name: "Guest Lectures", url: "/guest-lectures" },
        { id: 5, name: "Accommodation", url: "/accommodation" },
        { id: 6, name: "Contact Us", url: "/contact" }
    ];


    return (
        <div className="md:hidden w-full fixed z-50 backdrop-blur-sm flex justify-between items-center border-b-[#03652d] border-b-[1.5px]">
            <motion.div
                animate={isOpen ? "open" : "closed"}
                initial={false}>
                <div
                    className="z-[300] md:hidden fixed top-0 left-0 m-5 flex justify-center items-center bg-[#03652d] rounded-full size-10 cursor-pointer "
                    onClick={() => toggleIsOpen(!isOpen)} >
                    <MenuToggle toggle={() => toggleIsOpen(!isOpen)} />
                </div>
                <motion.div
                    className={`z-50 fixed top-0 left-0  bg-[#03652d] transition-all flex flex-col justify-center border-2 items-start h-screen w-screen`}

                    variants={{
                        open: ({
                            clipPath: `circle(${height * 2 + 400}px at 40px 40px)`,
                            transition: {
                                type: "spring",
                                stiffness: 20,
                                restDelta: 2,
                                staggerChildren: 0.07,
                                delayChildren: 0.2
                            }
                        }),
                        closed: {
                            clipPath: "circle(25px at 40px 40px)",
                            transition: {
                                delay: 0.5,
                                type: "spring",
                                stiffness: 400,
                                damping: 40,
                                staggerChildren: 0.05,
                                staggerDirection: -1
                            }
                        }
                    }}
                >
                    <div className="h-[80vh]"></div>

                    {navItems.map((item, key) => {

                        return (
                            <>
                                <motion.li
                                    className="w-full justify-center h-full z-50 flex items-center"
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
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div
                                        className={`rounded-md w-full h-full flex items-center justify-center text-white font-semibold ${active == item.id ? "bg-blue-700" : "bg-blue-500"} transition-colors duration-300`}
                                        onClick={() => {
                                            toggleIsOpen(!isOpen)
                                            handleClick(item.url)
                                        }}
                                    >
                                        {item.name}
                                    </div>
                                </motion.li>
                            </>
                        )
                    })}
                </motion.div>
            </motion.div>
            <div className="z-50 flex-1 mt-2 justify-center flex items-center">
                <img src="/logo.png" className="size-20" />
            </div>
        </div>
    )
}


export default MobileNav
