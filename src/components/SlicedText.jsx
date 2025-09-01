import { motion } from "framer-motion";
import gsap from "gsap";
import { useRef } from "react";

function SlicedText(props) {
  const currentTopText = useRef();

  const textSlideOut = (item) => {
    gsap.fromTo(
      item.current,
      { x: 0, y: 0 },
      { x: -5, y: 2, duration: 0.5, ease: "back.out" }
    );
  };

  const textSlideIn = (item) => {
    gsap.fromTo(
      item.current,
      { x: -5, y: 2 },
      { x: 0, y: 0, duration: 0.5, ease: "back.in" }
    );
  };

  return (
    <>
      <motion.h1
        className="dark:text-slate-100 text-zinc-700 font-custom text-4xl absolute -bottom-8  hover:animate-pulse hover:dark:text-cyan-300"
        style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
        ref={currentTopText}
        onMouseOver={() => {
          textSlideOut(currentTopText);
        }}
        onMouseOut={() => {
          textSlideIn(currentTopText);
        }}
        initial={{ x: "0vw", y: 0, scale: 1, opacity: 1 }}
        animate={
          props.isClicked
            ? { opacity: 0 }
            : { x: "0vw", y: 0, scale: 1, opacity: 1 }
        }
      >
        {props.title}
      </motion.h1>
      <motion.h1
        className="dark:text-slate-100 text-zinc-700 font-custom text-4xl absolute -bottom-8  hover:animate-pulse hover:dark:text-teal-300"
        style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
        onMouseOver={() => {
          textSlideOut(currentTopText);
        }}
        onMouseOut={() => {
          textSlideIn(currentTopText);
        }}
        initial={{ x: "0vw", y: 0, scale: 1, opacity: 1 }}
        animate={
          props.isClicked
            ? { opacity: 0 }
            : { x: "0vw", y: 0, scale: 1, opacity: 1 }
        }
      >
        {props.title}
      </motion.h1>
    </>
  );
}

export default SlicedText;
