import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import gsap from "gsap";
import { useRef, useState } from "react";
import { motion, stagger } from "framer-motion";
import SlicedLink from "./components/SlicedLink.jsx";

function LinksApp() {
  const [currentApp, changeApp] = useState("‎");
  const [logoHovered, setLogoHovered] = useState(false);
  const appName = useRef();

  const COLLEClogo = useRef();
  const SPOTIFYlogo = useRef();
  const IGlogo = useRef();
  const TTlogo = useRef();

  const container = useRef();
  const pageWidth = window.innerWidth;

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const appVariants = {
    hidden: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
    show: {
      transition: {
        staggerChildren: 0.04,
      },
    },
  };

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

  const hiddenBat = useRef();

  function batAnimationIn() {
    gsap.from(hiddenBat.current, {
      y: 450,
      autoAlpha: 0,
      duration: 0.5,
    });

    gsap.to(hiddenBat.current, {
      y: 0,
      autoAlpha: 0.6,
      duration: 0.5,
    });
  }

  function batAnimationInMobile() {
    gsap.from(hiddenBat.current, {
      y: 450,
      autoAlpha: 0,
      duration: 0.5,
    });

    gsap.to(hiddenBat.current, {
      y: 150,
      autoAlpha: 0.6,
      duration: 0.5,
    });
  }

  function batAnimationOut() {
    gsap.from(hiddenBat.current, {
      y: 0,
      autoAlpha: 0.6,
      duration: 0.3,
    });

    gsap.to(hiddenBat.current, {
      y: 200,
      autoAlpha: 0,
      duration: 0.5,
    });
  }

  const Application = ({ children }) => {
    return (
      <motion.div
        className="font-custom text-8xl max-lg:text-5xl text-center dark:text-amber-50 text-zinc-500 mt-16 z-0"
        id="text"
        ref={appName}
        variants={appVariants}
        initial="hidden"
        animate={logoHovered ? "show" : "hidden"}
      >
        <motion.div>
          {children.split("").map((l, i) => {
            return (
              <motion.span
                style={{ display: "inline-block" }}
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: -50,
                    transition: { duration: 1 },
                  },
                  show: { opacity: 1, y: 0 },
                }}
              >
                {l}
              </motion.span>
            );
          })}
        </motion.div>
      </motion.div>
    );
  };

  const cardGlow = (event) => {
    const rect = container.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (document.documentElement.classList.contains("dark")) {
      container.current.style.background = `radial-gradient(960px circle at ${x}px ${y}px, rgba(43,255,255,0.8), transparent 40%)`;
    } else {
      container.current.style.background = `radial-gradient(960px circle at ${x}px ${y}px, rgba(129,40,45,0.8), transparent 40%)`;
    }
  };

  return (
    <>
      <Sidebar hasSearch={false} />

      <div className="flex  justify-center">
        <img
          src={`${import.meta.env.BASE_URL}media/pngegg.png`}
          alt="billy"
          id="hiddenbat"
          ref={hiddenBat}
          className="w-5/12 fixed opacity-0 transition-all duration-500"
        ></img>
      </div>

      <div
        id="content"
        className="w-full h-[calc(100vh-64px)] relative flex flex-col justify-center"
        onMouseMove={cardGlow}
      >
        <div
          id="container"
          ref={container}
          style={{ background: "none" }}
          className=" hover:before:opacity-100 flex top-16 items-center justify-between relative self-center w-5/12 h-1/2 p-1 rounded-3xl z-10 before:z-10 before:h-full before:w-full before:absolute before:top-0 before:left-0 before:rounded-3xl before:opacity-0 before:transition-all before:duration-150"
          onMouseOver={() => {
            if (pageWidth <= 768) {
              batAnimationInMobile();
            } else {
              batAnimationIn();
            }
          }}
          onMouseOut={() => {
            batAnimationOut();
            container.current.style.background = "none";
          }}
        >
          <motion.div
            id="container-content"
            className="bg-zinc-600 max-md:py-3  dark:bg-slate-950 flex max-md:flex-col max-md:justify-around max-md:items-center items-center justify-between relative self-center w-full h-full rounded-3xl z-10"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <SlicedLink
              link="https://www.mangacollec.com/user/oxfrz/collection"
              imgsrc={`${import.meta.env.BASE_URL}media/book-stack-256.png`}
              appname="mangacollec"
              ref={COLLEClogo}
              onHover={() => {
                changeApp("mangacollec");
                setLogoHovered(true);
              }}
              onLeave={() => {
                setLogoHovered(false);
              }}
            />
            <SlicedLink
              link="https://open.spotify.com/user/31w6wuijlbszpb642s3y6ouhpqvy?si=iMm8CNT3RLaFLkrmH3M3Ww"
              imgsrc={`${import.meta.env.BASE_URL}media/spotify-256.png`}
              appname="spotify"
              ref={SPOTIFYlogo}
              onHover={() => {
                changeApp("spotify");
                setLogoHovered(true);
              }}
              onLeave={() => {
                setLogoHovered(false);
              }}
            />

            <SlicedLink
              link="https://www.instagram.com/oxfrz"
              imgsrc={`${
                import.meta.env.BASE_URL
              }media/instagram-white-icon.png`}
              appname="instagram"
              ref={IGlogo}
              onHover={() => {
                changeApp("instagram");
                setLogoHovered(true);
              }}
              onLeave={() => {
                setLogoHovered(false);
              }}
            />

            <SlicedLink
              link="https://www.tiktok.com/@oxfrz"
              imgsrc={`${import.meta.env.BASE_URL}media/tiktok-white-icon.png`}
              appname="tiktok"
              ref={TTlogo}
              onHover={() => {
                changeApp("tiktok");
                setLogoHovered(true);
              }}
              onLeave={() => {
                setLogoHovered(false);
              }}
            />
          </motion.div>
        </div>

        <Application>{currentApp}</Application>
      </div>

      <Footer />
    </>
  );
}

export default LinksApp;
