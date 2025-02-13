import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import bg_circle from '../../assets/gl_bg_circle.png';
import gldata from '../../data/gl.json';
import glimg from "../../assets/logo.png";

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
      className="w-full overflow-y-auto overflow-x-hidden flex flex-col justify-center items-center"
    >
      <div className="gl lg:text-9xl font-extrabold font-Azora flex h-fit flex-col w-fit justify-center text-6xl p-5 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-fit text-[#EC9E52]"
        >
          GUEST
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:translate-x-14 lg:-translate-y-14 translate-x-8 -translate-y-5 flex justify-end items-center text-[#00B951]"
        >
          LECTURES
        </motion.div>
      </div>

      <div className="grid grid-cols-11 auto-rows-auto relative">
        {gldata.gldata.map((gl, i) => {
          return (
            <CardWrapper key={i} index={i} gl={gl} />
          );
        })}
      </div>
    </div>
  );
};

const CardWrapper = ({ index, gl }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false,
    margin: "-100px 0px"  // This creates a margin of 100px before the element comes into view
  });

  const cardVariants = {
    hidden: { 
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0 
    },
    visible: { 
      x: index % 2 === 0 ? 20 : -20,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  if (index === 0) {
    return (
      <>
        <motion.div
          ref={ref}
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`rounded-lg bg-blue-600 border-2 backdrop-blur-md border-orange-400 col-span-5 row-span-3 flex flex-col m-5 p-5`}
        >
          <img alt='img' src={glimg} className="rounded-xl size-fit" />
          <div className="w-full text-lg md:text-2xl font-bold mt-5">{gl.name}</div>
          <div className="w-full mt-4 text-[#EC9E52]">{gl.designation}</div>
          <div className="w-full">{gl.address}</div>
        </motion.div>
        <div className="col-span-6 row-span-2" />
        <div />
      </>
    );
  }

  return (
    <>
      {index % 2 === 0 ? <div className="col-span-6" /> : null}
      {index % 2 === 1 && index > 1 ? <div /> : null}
      {index % 2 === 1 && index > 1 ? <div className="col-span-6" /> : null}
      {index % 2 === 1 && index > 2 ? <div /> : null}

      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className={`rounded-lg ${index % 2 === 0 ? "bg-blue-600" : "bg-green-600"} border-2 border-orange-400 col-span-5 row-span-3 flex flex-col m-5 p-5 h-fit`}
      >
        <img src={glimg} alt='img' className="rounded-xl size-fit" />
        <div className="w-full text-lg md:text-2xl font-bold mt-5">{gl.name}</div>
        <div className="w-full mt-4 text-[#EC9E52]">{gl.designation}</div>
        <div className="w-full">{gl.address}</div>
      </motion.div>
    </>
  );
};

export default GuestLectures;