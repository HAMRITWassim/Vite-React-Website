import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import useVideoStore from "../stores/videoStore.js";
import { videoPathToName } from "../stores/videoStore.js";

gsap.registerPlugin(useGSAP);

function Sidebar(props) {
  const videoNames = [];
  const ul = useRef();
  const videoPath = useVideoStore((state) => state.path);
  const videoName = useVideoStore((state) => state.name);
  const changeVideoPath = useVideoStore((state) => state.changePath);
  const changeVideoName = useVideoStore((state) => state.changeName);

  const elementsVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1 } },
  };

  function ToggleDark() {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
      changeStatus("LIGHT");
    } else {
      changeStatus("DARK");
    }
  }

  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  function suggestion(e) {
    const currentStr = e.target.value.toLowerCase();

    const filteredResults = videoNames.filter((item) =>
      item.toLowerCase().includes(currentStr)
    );

    setFilteredSuggestions(filteredResults);
  }

  function ToggleSearch() {
    const sidebar = document.querySelector("#sidebar");
    const searchlogo = document.querySelector("#search");
    const searchbar = document.querySelector("#searchbar");
    const transf = document.querySelector("#transf");
    const valid = document.querySelector("#valid");
    const cancel = document.querySelector("#cancel");

    sidebar.classList.toggle("w-28");
    sidebar.classList.toggle("w-1/4");

    searchlogo.classList.toggle("hidden");

    searchbar.classList.toggle("hidden");

    transf.classList.toggle("w-11/12");
    transf.classList.toggle("pt-8");
    transf.classList.toggle("pb-8");

    valid.classList.toggle("hidden");
    cancel.classList.toggle("hidden");

    if (ul.current.classList.contains("hidden")) {
      ul.current.classList.add("hidden");
    }

    transf.classList.toggle("before:hidden");
    transf.classList.toggle("after:hidden");
  }

  function searchVideo() {
    const videoList = [
      `${import.meta.env.BASE_URL}media/animations/finisher.mp4`,
      `${import.meta.env.BASE_URL}media/animations/H0TLINEMIAMI.mp4`,
      `${import.meta.env.BASE_URL}media/animations/hirakoshinji.mp4`,
      `${
        import.meta.env.BASE_URL
      }media/animations/ronin's_revenge_intro_(clean).mp4`,
      `${import.meta.env.BASE_URL}media/animations/yoshi_cooked.mp4`,
      `${import.meta.env.BASE_URL}media/animations/zankanotachi.mp4`,
      `${import.meta.env.BASE_URL}media/animations/adolla.mp4`,
    ];
    const searchbar = document.querySelector("#searchbar");

    let path = `${import.meta.env.BASE_URL}media/animations/`;

    for (let i = 0; i < videoList.length; i++) {
      let current = path + searchbar.value;

      if (videoList.includes(current)) {
        changeVideoPath(current);
        changeVideoName();

        searchbar.value = "";

        ToggleSearch();
      }
    }
  }

  const pressEnter = (e) => {
    if (e.key === "Enter") {
      searchVideo();
    }
  };

  const onSearch = () => {
    if (ul.current.classList.contains("hidden")) {
      ul.current.classList.remove("hidden");
    }
  };

  const onBlur = () => {
    if ((!ul.current.classList.contains, "hidden")) {
      ul.current.classList.add("hidden");
    }
  };

  const statusText = useRef();

  useEffect(() => {
    gsap.set(statusText.current, { y: -50, autoAlpha: 0 });
  }, []);

  const batOver = () => {
    gsap.to(statusText.current, {
      y: 10,
      autoAlpha: 1,
      duration: 0.3,
      ease: "back.out",
    });
  };

  const batOut = () => {
    gsap.to(statusText.current, {
      y: -50,
      autoAlpha: 0,
      duration: 0.5,
      ease: "back.in",
    });
  };

  const [status, changeStatus] = useState("LIGHT");

  const searchContainer = useRef();

  videoPathToName(videoNames);

  return (
    <motion.div
      id="sidebar"
      className="flex flex-col bg-zinc-300 dark:bg-slate-800  w-28 h-screen p-3 pr-5 rounded-r-xl items-center shadow-2xl dark:shadow-cyan-950/50 z-20 fixed transition-all duration-300"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
      initial="hidden"
      animate="show"
    >
      <motion.img
        src={`${import.meta.env.BASE_URL}media/pngegg.png`}
        id="bat"
        alt="BillyBat"
        className="w-24 p-2 mt-2 mb-7 z-20 bg-gradient-to-br from-white to-zinc-300 dark:from-cyan-200 dark:to-cyan-500 shadow-lg dark:shadow-cyan-400/30 rounded-full cursor-pointer hover:-rotate-12 transition-all duration-500  "
        onClick={ToggleDark}
        onMouseOver={batOver}
        onMouseOut={batOut}
        variants={elementsVariants}
      ></motion.img>

      <motion.p
        className="font-custom text-3xl dark:text-cyan-400 text-zinc-600 absolute opacity-0 top-16 mt-1 transition-all duration-300"
        id="darkstatus"
        ref={statusText}
        style={{ y: -50 }}
        variants={{
          before: { opacity: 0 },
          after: { opacity: 1, transition: { delay: 1 } },
        }}
        initial="before"
        animate="after"
      >
        {status}
      </motion.p>

      <a href="./index.html">
        <motion.div
          className=" dark:after:bg-slate-700 dark:bg-slate-700 hover:after:dark:bg-slate-800 bg-zinc-400  after:hover:bg-zinc-500  after:transition-all after:duration-300  shadow-lg dark:shadow-slate-500/20 pr-3 pl-3 h-12 rounded-lg flex justify-center items-center mt-7 mb-7 cursor-pointer hover:h-13 transition-all duration-300 relative z-10 hover:before:absolute hover:before:inset-1 hover:before:bg-gradient-to-br  hover:before:from-cyan-400/70 hover:before:to-fuchsia-500/70 hover:before:rounded-lg hover:before:z-0 before:blur-lg before:transition-all before:duration-300 after:absolute after:inset-0 after:z-10 after:rounded-lg after:bg-zinc-400 before:animate-spin"
          variants={elementsVariants}
        >
          <img
            src={`${
              import.meta.env.BASE_URL
            }media/pngfind.com-white-house-logo-png-5898244.png`}
            alt="Home"
            className=" h-7 hover:animate-pulse transition-all duration-300 relative z-20"
          ></img>
        </motion.div>
      </a>

      <a href="../../links.html">
        <motion.div
          className="  dark:after:bg-slate-700 dark:bg-slate-700 hover:after:dark:bg-slate-800 bg-zinc-400  after:hover:bg-zinc-500 after:transition-all after:duration-300 shadow-lg dark:shadow-slate-500/20 pr-3 pl-3 h-12 rounded-lg flex justify-center items-center mb-7 cursor-pointer hover:h-13 transition-all duration-300 relative z-10 hover:before:absolute hover:before:inset-1 hover:before:bg-gradient-to-br  hover:before:from-cyan-400/70 hover:before:to-fuchsia-500/70 hover:before:rounded-lg hover:before:z-0 before:blur-lg before:transition-all before:duration-300 after:absolute after:inset-0 after:z-10 after:rounded-lg after:bg-zinc-400 before:animate-spin"
          variants={elementsVariants}
        >
          <img
            src={`${import.meta.env.BASE_URL}media/link-256.png`}
            alt="Links"
            className=" h-7 hover:animate-pulse transition-all duration-300 z-20"
          ></img>
        </motion.div>
      </a>

      {props.hasSearch && (
        <motion.div
          className="  dark:after:bg-slate-700 dark:bg-slate-700 hover:after:dark:bg-slate-800 bg-zinc-400   after:hover:bg-zinc-500 after:transition-all after:duration-300 shadow-lg dark:shadow-slate-500/20 pr-3 pl-3 h-12 mb-7 rounded-lg flex justify-center items-center cursor-pointer hover:h-13 transition-all duration-300 relative z-30 hover:before:absolute hover:before:inset-1 hover:before:bg-gradient-to-br  hover:before:from-cyan-400/70 hover:before:to-fuchsia-500/70 hover:before:rounded-lg hover:before:z-0 before:blur-lg before:transition-all before:duration-300 after:absolute after:inset-0 after:z-10 after:rounded-lg after:bg-zinc-400 before:animate-spin"
          id="transf"
          variants={elementsVariants}
        >
          <img
            src={`${import.meta.env.BASE_URL}media/search-13-128.png`}
            alt="search"
            className="h-7 hover:animate-pulse transition-all duration-300 z-20"
            onClick={ToggleSearch}
            id="search"
          ></img>

          <motion.div
            className="relative w-[80%]"
            variants={elementsVariants}
            ref={searchContainer}
          >
            <input
              type="search"
              id="searchbar"
              autoComplete="off"
              placeholder="Type something..."
              className="hidden transition-all  duration-400 bg-zinc-100 dark:bg-slate-800 border-2  dark:border-slate-400 border-gray-200  outline-none dark:focus:text-cyan-500 dark:text-slate-50 dark:focus:border-cyan-500 dark:focus:placeholder:text-cyan-500 p-1 rounded-tl-lg w-[100%]"
              onKeyUp={suggestion}
              onKeyDown={pressEnter}
              onFocus={onSearch}
              onBlur={onBlur}
            ></input>

            <ul
              id="suggestion"
              ref={ul}
              className=" hidden absolute bg-zinc-200 dark:bg-gray-900 dark:text-slate-300 text-zinc-600  w-[100%] rounded-b-md px-2 pb-1 transition-all duration-300 z-30"
              onMouseDown={(event) => {
                event.preventDefault();
              }}
            >
              {filteredSuggestions.map((name) => (
                <li
                  key={name}
                  className="hover:bg-slate-400 dark:hover:bg-slate-800 overflow-hidden hover:overflow-visible transition-all duration-300 z-30"
                  onClick={() => {
                    document.querySelector("#searchbar").value = name;
                    setFilteredSuggestions([]);
                  }}
                >
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>

          <button
            className="max-lg:w-[15%] max-lg:p-[2%] w-[12%] bg-zinc-500 dark:bg-slate-800 hover:text-blue-300 pb-1 pt-1 pl-2 pr-2 text-slate-100 hidden transition-all duration-300 active:bg-zinc-600 dark:active:bg-slate-900"
            id="valid"
            onClick={searchVideo}
          >
            ✓
          </button>
          <button
            className=" max-lg:w-[15%] max-lg:p-[2%] w-[12%] bg-red-600 dark:bg-red-950 hover:text-red-300 rounded-r-lg pb-1 pt-1 pr-2 pl-2 text-slate-100 hidden transition-all duration-300 active:bg-red-800 dark:active:bg-slate-950"
            id="cancel"
            onClick={ToggleSearch}
          >
            ✗
          </button>
        </motion.div>
      )}

      <a href="../../drawings.html">
        <motion.div
          className="bg-zinc-400 shadow-lg dark:shadow-slate-500/20 pr-3 pl-3 h-12 rounded-lg flex justify-center items-center mb-7 cursor-pointer hover:h-13 transition-all duration-300 relative z-10 hover:before:absolute hover:before:inset-1 hover:before:bg-gradient-to-br  hover:before:from-cyan-400/70 hover:before:to-fuchsia-500/70 hover:before:rounded-lg hover:before:z-0 before:blur-lg before:transition-all before:duration-300 after:absolute after:inset-0 after:z-10 after:rounded-lg after:bg-zinc-400 after:hover:bg-zinc-500 after:transition-all after:duration-300 dark:after:bg-slate-700 dark:bg-slate-700 hover:after:dark:bg-slate-800 before:animate-spin"
          variants={elementsVariants}
        >
          <img
            src={`${import.meta.env.BASE_URL}media/photo-256.png`}
            alt="Drawings"
            className=" h-7 hover:animate-pulse transition-all duration-300 z-20"
          ></img>
        </motion.div>
      </a>
    </motion.div>
  );
}

export default Sidebar;
