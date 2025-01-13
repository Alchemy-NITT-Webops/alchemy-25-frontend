import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



function TopNavBar() {
    const { scrollY } = useScroll()
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


    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 100) setVisible(false)
        else setVisible(true)
    })

    const [visible, setVisible] = useState(true);

    const navItems = [
        { id: 1, name: "Home", url: "/" },
        { id: 2, name: "Events", url: "/events" },
        { id: 3, name: "Workshops", url: "/workshops" },
        { id: 4, name: "Guest Lectures", url: "/guest-lectures" },
        { id: 5, name: "Accommodation", url: "/accommodation" },
        { id: 6, name: "Contact Us", url: "/contact" }
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { backgroundColor: "#03652d" },
                    hidden: { backdropFilter: "blur(5px)", backgroundColor: "#03652d99" }
                }}
                animate={visible ? "visible" : "hidden"}
                initial={false}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className=" select-none z-50 fixed top-0 w-full h-24 shadow-sm border justify-between md:flex hidden"
                style={{ borderRadius: "0px 0px 7px 7px" }}
            >
                <div className=" left-0 justify-center flex ml-5 items-center h-full"> <img src="/logo.png" className="size-20" /></div>
                <nav className="flex items-center flex-[0.7] right-0 mr-24 gap-3 justify-around ">
                    {navItems.map((item) => {
                        return (
                            <>
                                <button
                                    key={item.name}
                                    onClick={() => handleClick(item.url)}
                                    className="min-w-fit relative text-xl text-white transition-all hover:scale-105 size-10"
                                >
                                    {item.name}
                                    <motion.div
                                        variants={{
                                            isActive: { width: "100%" },
                                            isInactive: { width: "0%" }
                                        }}
                                        initial={false}
                                        animate={active == item.id ? "isActive" : "isInactive"}
                                        className=" bg-white rounded-md h-0.5" />
                                </button>
                            </>
                        )
                    })}
                </nav>

            </motion.nav>

        </>
    );
};

export default TopNavBar
