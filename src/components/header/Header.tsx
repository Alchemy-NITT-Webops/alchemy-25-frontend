import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";



function TopNavBar() {
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 100) setVisible(false)
        else setVisible(true)
    })

    const [visible, setVisible] = useState(true);
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" }
                }}
                animate={visible ? "visible" : "hidden"}
                initial={false}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="z-50 fixed top-0 w-full h-24 bg-[#03652d] shadow-sm border grid grid-cols-5"
                style={{ borderRadius: "0px 0px 7px 7px" }}
            >
                <div className=" justify-center flex col-span-1  items-center h-full"> <img src="/logo.png" className="size-20" /></div>
                <div className=" justify-center flex col-span-1 items-center h-full"/>
                <div className="flex items-center col-span-3  justify-center gap-5 ">
                    {arr.map(() => {
                        return (
                            <>
                                <motion.div
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ duration: 0.001, ease: 'easeInOut' }}
                                    className=" transition-all hover:scale-105 rounded-full hover:invert border-red-500 border size-10">

                                </motion.div>
                            </>
                        )
                    })}
                </div>


            </motion.nav>

        </>
    );
};

export default TopNavBar
