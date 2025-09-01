import Footer from "./components/Footer";
import gsap from "gsap";
import { useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
import useVideoStore from "./stores/videoStore";
import { videoList } from "./stores/videoStore";

function App() {
  const topText = useRef();
  const bottomText = useRef();
  const video = useRef();
  const videosize = useRef();
  const videocontainer = useRef();

  const videoPath = useVideoStore((state) => state.path);
  const videoName = useVideoStore((state) => state.name);
  const changeVideoPath = useVideoStore((state) => state.changePath);
  const changeVideoName = useVideoStore((state) => state.changeName);

  const randomizeVideo = () => {
    let max = videoList.length;
    let randint = Math.floor(Math.random() * max);
    changeVideoPath(videoList[randint]);
    changeVideoName();
  };

  const textSlideOut = () => {
    gsap.fromTo(
      topText.current,
      { x: 0, y: 0 },
      { x: -5, y: 2, duration: 0.5, ease: "back.out" }
    );
  };

  const textSlideIn = () => {
    gsap.fromTo(
      topText.current,
      { x: -5, y: 2 },
      { x: 0, y: 0, duration: 0.5, ease: "back.in" }
    );
  };

  const changeVideoSize = () => {
    if (video.current.videoWidth > video.current.videoHeight) {
      videosize.current.classList.remove("w-1/2");
      videosize.current.classList.add("w-full");

      videocontainer.current.classList.remove("w-1/3");
      videocontainer.current.classList.add("w-1/2");

      videocontainer.current.classList.remove("max-md:w-full");
      videocontainer.current.classList.add("max-md:w-7/12");
    } else {
      videosize.current.classList.add("w-1/2");
      videosize.current.classList.remove("w-full");

      videocontainer.current.classList.add("w-1/3");
      videocontainer.current.classList.remove("w-1/2");

      videocontainer.current.classList.add("max-md:w-full");
      videocontainer.current.classList.remove("max-md:w-7/12");
    }
  };

  return (
    <>
      <div>
        <Sidebar hasSearch={true} />

        <motion.span
          className="flex flex-col justify-center items-center w-1/3 max-2xl:w-[100vh-64px] mx-auto pt-6 relative"
          id="videocontainer"
          ref={videocontainer}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { duration: 1 } },
          }}
          initial="hidden"
          animate="show"
        >
          <div
            id="title-container"
            className="relative flex justify-center mb-8"
          >
            <h1
              id="title"
              ref={topText}
              style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
              className="text-zinc-800 absolute font-custom dark:text-zinc-50 max-md:text-4xl text-5xl mb-5 text-center hover:animate-pulse transition-colors duration-300 hover:dark:text-cyan-300"
              onMouseOver={textSlideOut}
              onMouseOut={textSlideIn}
            >
              {videoName}
            </h1>
            <h1
              id="titlebottom"
              ref={bottomText}
              style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
              className="text-zinc-800 absolute font-custom dark:text-zinc-50 max-md:text-4xl text-5xl mb-5 text-center hover:animate-pulse transition-colors duration-300 hover:dark:text-cyan-300"
              onMouseOver={textSlideOut}
              onMouseOut={textSlideIn}
            >
              {videoName}
            </h1>
          </div>

          <div
            id="videosize"
            ref={videosize}
            className="flex items-center justify-center w-1/2"
          >
            <video
              src={videoPath}
              autoPlay
              controls
              muted
              loop
              className="rounded-md mt-6"
              ref={video}
              onLoadedMetadata={() => {
                changeVideoSize();
              }}
            >
              <source src={videoPath} type="video/mp4" id="currentvideo" />
            </video>
          </div>

          <button
            className="h-12 w-36 text-lg bg-zinc-200 active:bg-zinc-300 dark:bg-gradient-to-t dark:from-slate-600 dark:to-slate-700 text-slate-950 dark:text-slate-50 hover:text-red-800 dark:hover:text-blue-400 dark:active:bg-slate-900 rounded-lg mt-8 transition-all duration-200 relative before:absolute before:inset-0 before:blur-lg before:rounded-md hover:before:bg-cyan-200/30 before:animate-pulse after:absolute after:inset-0 after:rounded-lg after:dark:bg-gradient-to-t after:dark:from-slate-600 after:dark:to-slate-700 after:z-10 after:font-button font-semibold after:content-['Randomize'] after:flex after:justify-center after:items-center active:after:dark:bg-gradient-to-tr active:after:dark:from-slate-950 active:after:dark:to-slate-950"
            id="randomize"
            onClick={randomizeVideo}
          ></button>
        </motion.span>
      </div>

      <Footer />
    </>
  );
}

export default App;
