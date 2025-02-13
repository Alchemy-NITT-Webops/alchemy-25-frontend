import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bg_circle from '../../assets/gl_bg_circle.png';
import gldata from '../../data/gl.json';

const GuestLectures = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg_circle})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '33%',
                backgroundPositionX: 'center',
                backgroundAttachment: 'fixed',
                backgroundPositionY: 'center',
            }}
            className="w-full min-h-screen p-8"
        >
            {/* Title Section */}
            <div className="gl lg:text-9xl font-extrabold font-Azora flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-fit text-[#D68C45]"
                >
                    GUEST
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full lg:translate-x-14 lg:-translate-y-14 translate-x-8 -translate-y-5 flex justify-end items-center text-[#D68C45]"
                >
                    LECTURES
                </motion.div>
            </div>

            {/* Cards Container */}
            <div className="max-w-[1920px] mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center grid-auto-rows-auto">
                    {gldata.gldata.map((gl, i) => (
                        <Card key={i} gl={gl} index={i} />
                    ))}
                </div>
            </div>

        </div>
    );
};

interface GuestLecture {
    image: string;
    name: string;
    designation: string;
    address: string;
}

const Card = ({ gl, index }: { gl: GuestLecture; index: number }) => {
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
            <div className="bg-black rounded-lg p-1 h-full" style={{
                border: '2px solid #D4AF37',
                boxShadow: '0 0 15px rgba(212, 175, 55, 0.3)'
            }}>
                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg">
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
                    <p className="text-[#FFD700] font-medium mb-1 text-sm">{gl.designation}</p>
                    <p className="text-[#FFD700]/80 text-xs">{gl.address}</p>
                </div>
            </div>
        </motion.div>
    );
};

export default GuestLectures;