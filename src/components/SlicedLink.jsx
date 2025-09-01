import { forwardRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const SlicedLink = forwardRef((props, ref) => {
  const divVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 0.7 } },
  };

  function logoSlideOut(item) {
    gsap.fromTo(
      item,
      { x: 0, y: 0 },
      { x: -2, y: 2, duration: 0.3, ease: "back.in" }
    );
  }

  function logoSlideIn(item) {
    gsap.fromTo(
      item,
      { x: -2, y: 2 },
      { x: 0, y: 0, duration: 0.3, ease: "back.out" }
    );
  }

  return (
    <motion.div
      className="w-1/5 mx-8 max-lg:mx-4 max-md:w-1/5  max-md:mx-0 relative cursor-pointer"
      onMouseOver={() => {
        logoSlideOut(ref.current);
        props.onHover();
      }}
      onMouseOut={() => {
        logoSlideIn(ref.current);
        props.onLeave();
      }}
      variants={divVariants}
    >
      <a href={props.link} target="_blank">
        <img
          src={props.imgsrc}
          ref={ref}
          style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
          className="transition-all absolute duration-300 hover:animate-pulse"
        ></img>
        <img
          src={props.imgsrc}
          style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
          className="transition-all duration-300 hover:animate-pulse"
        ></img>
      </a>
    </motion.div>
  );
});

export default SlicedLink;
