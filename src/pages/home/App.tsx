import { motion } from "motion/react";
import AnimatedTextCharacter from "../../components/AnimatedTextCharacter";
import Loader from "../../components/loader/Loader";



function App() {

    type GridItem = {
        id: number;
        title: string;
        description: string;
    };

    const gridData: GridItem[] = [
        {
            id: 1,
            title: "Block 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 2,
            title: "Block 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 3,
            title: "Block 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
            
        },
        {
            id: 4,
            title: "Block 4",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 5,
            title: "Block 5",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 6,
            title: "Block 6",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },
        {
            id: 7,
            title: "Block 7",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eius obcaecati",
        },

    ];


    //@ts-ignore
    const AnimatedTextWord = ({ text }) => {
        const words = text.split(" ");

        // Variants for Container of words.
        const container = {
            hidden: { opacity: 0 },
            visible: (i = 1) => ({
                opacity: 1,
                transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
            }),
        };

        // Variants for each word.

        const child = {
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                },
            },
            hidden: {
                opacity: 0,
                x: 20,
                transition: {
                    type: "spring",
                    damping: 12,
                    stiffness: 100,
                },
            },
        };

        return (
            <motion.div
                style={{ overflow: "hidden", display: "flex"}}
                variants={container}
                initial="hidden"
                animate="visible"
            >
                {/* @ts-ignore */}
                {words.map((word, index) => (
                    <motion.span
                        variants={child}
                        style={{ marginRight: "5px" }}
                        key={index}
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.div>
        );
    };
    return (
        <div className="h-[300vh]">

            <div id="landing" className="h-screen w-full md:grid md:grid-cols-3 mt-20">
                <div className=" z-10 flex bg-white w-full justify-center flex-col gap-5    md:gap-10 items-start p-10 overflow-hidden font-IBMPlexSans">
                    <p className="w-max text-5xl md:text-7xl"><AnimatedTextCharacter text={"ALCHEMY '24"} /></p>
                    <p className="w-full md:text-2xl"><AnimatedTextWord text={'Automation of Chemical Engineering'}/></p>
                </div>
                <div className="md:grid md:grid-cols-4 md:col-span-2 p-5 md:grid-rows-3 gap-4 my-10">
                    {gridData.map((item, i) => {
                        return (
                            <>
                                <motion.div
                                    initial={{
                                        y:
                                            i === 0 || i === 1 ? '-100%' :
                                                i === 5 || i === 6 ? '100%' : '0%',
                                        x:
                                            i === 2 ? '100%' :
                                                i === 3 ? '-100%' : '0%',
                                        opacity: 0,
                                        scale: i === 4 ? 0 : 1
                                    }}
                                    animate={{
                                        y: '0%',
                                        x: '0%',
                                        scale: 1,
                                        opacity: 1
                                    }}
                                    transition={{
                                        duration: 1,
                                        ease: 'easeOut'
                                    }}
                                    key={i}
                                    className={`
                                        bg-neutral-100 rounded-sm shadow-sm border-2 p-2 flex flex-col items-center justify-center 
                                        ${i === 0 || i === 4 || i === 5 || i === 6 ? 'md:col-span-2' : ''} 
                                        ${i === 2 ? 'md:row-span-2' : ''} 
                                    `}
                                >
                                    <h2 className="text-xl text-gray-600">{item.title}</h2>
                                    <p className="text-2xl">{item.description}</p>
                                </motion.div>

                            </>
                        )
                    })}
                </div>


            </div>

            <div className="h-screen">
                
            <Loader/>
            </div>



        </div>
    );
};

export default App
