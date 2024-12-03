import { motion } from "framer-motion";

const variants = {
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
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

//@ts-ignore
export const MenuItem = ({ i }) => {
    const style = { border: `2px solid ${colors[i]}` };
    return (
        <motion.li
            className="flex w-full gap-6 items-center cursor-pointer mb-5"
            variants={variants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="size-10 rounded-[50%] " style={style} />
            <div className="rounded-md h-5 w-48" style={style} />
        </motion.li>
    );
};
