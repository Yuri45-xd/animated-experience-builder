import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  blur?: boolean;
}

const ScrollReveal = ({ children, className = "", delay = 0, blur = true }: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{
        opacity: 0,
        y: 40,
        filter: blur ? "blur(10px)" : "blur(0px)",
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
