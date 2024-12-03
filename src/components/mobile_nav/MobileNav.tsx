import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.35,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};


function MobileNav()  {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  return (
    <motion.nav
    className=" absolute top-0 left-0 bottom-0 w-screen h-screen overflow-auto flex justify-center items-center"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
    >
      <motion.div className="absolute top-0 left-0 bottom-0 w-full bg-[#00aeff]" variants={sidebar} />
      <Navigation />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default MobileNav
