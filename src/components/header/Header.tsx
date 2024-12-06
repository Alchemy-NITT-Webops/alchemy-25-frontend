import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";



function TopNavBar() {
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) setVisible(false)
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
                className="z-10 fixed top-0 w-full h-32 bg-slate-100 shadow-sm border grid grid-cols-3"
                style={{borderRadius: "0px 0px 25px 25px"}}
            >
                    <div className=" justify-center flex items-center h-full w-full"> ALCHEMY</div>
                    <div className=" justify-center flex items-center h-full w-full">
                        something
                    </div>
                    <div className="flex  items-center justify-around ">
                    {arr.map(() => {
                        return (
                            <>
                                <motion.div 
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                transition={{duration: 0.001, ease: 'easeInOut'}}
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
