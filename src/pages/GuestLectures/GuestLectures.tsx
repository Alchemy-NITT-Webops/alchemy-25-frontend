import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gldata, GLPerson } from '../../data/gl';
import AnimatedTextCharacter from '../../components/AnimatedTextCharacter';

const GuestLectures = () => {
    return (
        <div className="w-full min-h-screen p-8">
            {/* Title Section */}
            <div className="lg:text-8xl font-extrabold font-Azora flex h-fit flex-col w-fit justify-center text-6xl items-start">
                <div
                    className="w-fit text-[#D68C45]"
                >
                    <AnimatedTextCharacter text={"Guest"} />
                    <AnimatedTextCharacter text={"Lectures"} />
                </div>
            </div>

            {/* Cards Container */}
            <div className="max-w-[1920px] mx-auto">
                <div className="flex flex-row flex-wrap md:flex-nowrap justify-center items-center">
                    {gldata.map((gl, i) => (
                        <div key={i} className={`flex w-full  lg:w-1/4`}>
                            <Card gl={gl} index={i} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Card = ({ gl, index }: { gl: GLPerson; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: false,
        margin: "-50px 0px"
    });

    const cardVariants = {
        hidden: {
            y: 50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                delay: index % 4 * 0.1, // Slight delay based on position in row
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="w-full"
        >
            {/* Card Frame */}
            <div className="bg-black rounded-lg p-1 scale-[80%]" style={{
                border: '2px solid #D4AF37',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
            }}>
                {/* Image Container */}
                <div className="relative  overflow-hidden rounded-t-lg">
                    <img
                        src={gl.image}
                        alt={gl.name}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 shadow-inner"></div>
                </div>

                {/* Text Content */}
                <div className="p-4 text-center bg-black rounded-b-lg">
                    <h3 className="text-xl font-bold mb-2 text-[#D4AF37]">
                        {gl.name}
                    </h3>
                    <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-2"></div>
                    <p className="text-[#D4AF37] font-medium mb-1 text-sm">{gl.designation}</p>
                    <p className="text-[#D4AF37] text-sm">{gl.address}</p>
                    <span className={`${gl.topic == "" && "hidden"} text-white/50 mt-2 text-xs`}>on the topic
                    </span>
                    <p className="text-[#D4AF37] text-lg">{gl.topic}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default GuestLectures;