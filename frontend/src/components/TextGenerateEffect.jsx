import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export const TextGenerateEffect = ({ words, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  const wordsArray = (words || "").split(" ");

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          variants={{
            hidden: { opacity: 0, filter: "blur(10px)" },
            visible: { opacity: 1, filter: "blur(0px)" },
          }}
          initial="hidden"
          animate={controls}
          transition={{
            duration: 0.8,
            delay: idx * 0.18,
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

export default TextGenerateEffect;
