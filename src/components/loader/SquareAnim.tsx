import { motion } from "motion/react"




function SquareAnim() {
    return (
        <motion.div
            className='size-24 absolute bg-blue-500 '
            style={{
                margin: 0,
                padding: 0,
                paddingBottom: "100px",
                overflow: "hidden",
            }}
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["100%", "10%", "50%", "10%", "100%"]
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
    )

}



export default SquareAnim