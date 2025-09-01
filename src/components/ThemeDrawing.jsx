import { motion } from "framer-motion";
import { useRef, useState } from "react";

function ThemeDrawing(props) {
  const dl = useRef();

  const insideImgVariants = {
    hidden: { opacity: 0 },
    show: { opacity: [0, 0, 0, 0, 0, 1] },
  };

  function showButton() {
    dl.current.classList.remove("opacity-0");
    setIsShown(true);
  }

  function hideButton() {
    dl.current.classList.add("opacity-0");
    setIsShown(false);
  }

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div
        className="flex flex-col justify-center relative max-md:w-9/12  w-11/12 "
        onMouseOver={showButton}
        onMouseOut={hideButton}
      >
        <motion.img
          className=" z-10
      dark:hover:shadow-[0_0_100px_0_rgba(180,255,248,0.3)] hover:shadow-[0_0_100px_0_rgba(0,0,0,0.20)] transition-all duration-500 flex relative jusify-center items-end
                "
          src={props.source}
          variants={insideImgVariants}
          initial={"hide"}
          animate={"show"}
          transition={{ duration: 1.3, ease: "easeIn" }}
        ></motion.img>

        <a
          href={props.source}
          download
          className="cursor-default flex justify-center relative w-24 h-8 self-center mt-3"
        >
          <motion.button
            className="z-0 cursor-default rounded-2xl h-full w-full bg-cyan-500 dark:bg-cyan-600 active:bg-cyan-700 dark:active:bg-cyan-900 opacity-0 transition-all duration-300"
            ref={dl}
            initial={{ y: "-70px" }}
            animate={isShown ? { y: "0" } : { y: "-70px" }}
          >
            <i className="fa fa-download text-slate-100"></i>
          </motion.button>
        </a>
      </div>
    </>
  );
}

export default ThemeDrawing;
