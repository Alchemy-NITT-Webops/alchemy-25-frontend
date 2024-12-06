import { useState } from "react"
import { motion } from "framer-motion";
import useWindowDimensions from "../../utils/dimensionsContext";

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
    const navItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    
    return (
        <motion.div
        animate={isOpen ? "open" : "closed"}
        initial={false}>
            <div
                className="z-50 fixed top-0 left-0 m-5 flex justify-center items-center bg-blue-500 rounded-full size-10 cursor-pointer "
                onClick={() => toggleIsOpen(!isOpen)} >
                <MenuToggle toggle={() => toggleIsOpen(!isOpen)} />
            </div>
            <motion.div
                className={`z-40 fixed top-0 left-0  bg-blue-500 transition-all flex flex-col justify-center items-start h-screen w-screen`}
                
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
        
                {navItems.map((key) => {
                        const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF", "#4400FF", "#4400FF", "#4400FF", "#4400FF", "#4400FF", "#4400FF", "#4400FF"];
                      const style = { border: `2px solid ${colors[key]}` };

                    return (
                        <>
                            <motion.li
                                className="ml-10 justify-center z-50 cursor-pointer flex items-center mb-5"
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
                                <div className="size-10 rounded-full  flex flex-grow-[40px] mr-5" style={style} />
                                <div className="rounded-md w-48 h-5 flex  " style={style} />
                            </motion.li>
                        </>
                    )
                })}


            </motion.div>
        </motion.div>
    )
}


export default MobileNav