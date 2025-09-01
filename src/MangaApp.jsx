import { useEffect, useRef, useState } from "react";
import Sidebar from "./components/Sidebar";
import gsap from "gsap";
import { motion } from "framer-motion";
import SlicedText from "./components/SlicedText";
import SlicedCover from "./components/SlicedCover";
import ThemeDrawing from "./components/ThemeDrawing";

function MangaApp() {
  const [bleach, setBleach] = useState(
    `${import.meta.env.BASE_URL}media/covers/bleach.jpg`
  );
  const [deathnote, setDeathnote] = useState(
    `${import.meta.env.BASE_URL}media/covers/deathnote.jpg`
  );
  const [dmc, setDmc] = useState(
    `${import.meta.env.BASE_URL}media/covers/dmc.jpg`
  );
  const [jjk, setJjk] = useState(
    `${import.meta.env.BASE_URL}media/covers/jjk.jpg`
  );
  const [souleater, setSouleater] = useState(
    `${import.meta.env.BASE_URL}media/covers/souleater.jpg`
  );
  const [tokyoghoul, setTokyoghoul] = useState(
    `${import.meta.env.BASE_URL}media/covers/tokyoghoul.jpg`
  );

  const insideImgVariants = {
    hidden: { opacity: 0 },
    show: { opacity: [0, 0, 0, 0, 0, 1] },
  };

  const Title = useRef();
  const [titre, setTitre] = useState("THEME");

  const arrow = useRef();
  const [color, setColor] = useState("white");

  const changeImg = () => {
    if (!document.documentElement.classList.contains("dark")) {
      setBleach(`${import.meta.env.BASE_URL}media/covers/bleachdark.jpg`);
      setDeathnote(`${import.meta.env.BASE_URL}media/covers/deathnotedark.jpg`);
      setDmc(`${import.meta.env.BASE_URL}media/covers/dmcdark.jpg`);
      setJjk(`${import.meta.env.BASE_URL}media/covers/jjkdark.jpg`);
      setSouleater(`${import.meta.env.BASE_URL}media/covers/souleaterdark.jpg`);
      setTokyoghoul(
        `${import.meta.env.BASE_URL}media/covers/tokyoghouldark.jpg`
      );
      setColor("rgb(70, 69, 74)");
    } else {
      setBleach(`${import.meta.env.BASE_URL}media/covers/bleach.jpg`);
      setDeathnote(`${import.meta.env.BASE_URL}media/covers/deathnote.jpg`);
      setDmc(`${import.meta.env.BASE_URL}media/covers/dmc.jpg`);
      setJjk(`${import.meta.env.BASE_URL}media/covers/jjk.jpg`);
      setSouleater(`${import.meta.env.BASE_URL}media/covers/souleater.jpg`);
      setTokyoghoul(`${import.meta.env.BASE_URL}media/covers/tokyoghoul.jpg`);
      setColor("white");
    }
  };
  useEffect(() => {
    changeImg();
    const observer = new MutationObserver(changeImg);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const container = useRef();

  const divBleach = useRef();
  const bleachImg0 = useRef();
  const slicedBleach = useRef();

  const divNote = useRef();
  const deathnoteImg0 = useRef();
  const slicedDeathnote = useRef();

  const divEater = useRef();
  const souleaterImg0 = useRef();
  const slicedSouleater = useRef();

  const divJjk = useRef();
  const jjkImg0 = useRef();
  const slicedJJK = useRef();

  const divGhoul = useRef();
  const tokyoghoulImg0 = useRef();
  const slicedTokyoghoul = useRef();

  const divDmc = useRef();
  const dmcImg0 = useRef();
  const slicedDMC = useRef();

  const [isBleachClicked, setIsBleachClicked] = useState(false);
  const [isDeathnoteClicked, setIsDeathnoteClicked] = useState(false);
  const [isSouleaterClicked, setIsSouleaterClicked] = useState(false);
  const [isJJKClicked, setIsJJKClicked] = useState(false);
  const [isTokyoghoulClicked, setIsTokyoghoulClicked] = useState(false);
  const [isDMCClicked, setIsDMCClicked] = useState(false);

  const isSomeoneClicked =
    isBleachClicked ||
    isDeathnoteClicked ||
    isSouleaterClicked ||
    isJJKClicked ||
    isTokyoghoulClicked ||
    isDMCClicked;

  const BleachOnClick = () => {
    //deathnoteImg0.current.classList.add("opacity-0");
    divNote.current.style.display = "none";
    divEater.current.style.display = "none";
    divJjk.current.style.display = "none";
    divGhoul.current.style.display = "none";
    divDmc.current.style.display = "none";

    setTitre("BLEACH");
  };

  const BleachRevert = () => {
    divNote.current.style.display = "flex";
    divEater.current.style.display = "flex";
    divJjk.current.style.display = "flex";
    divGhoul.current.style.display = "flex";
    divDmc.current.style.display = "flex";

    bleachImg0.current.classList.remove("hidden");
    slicedBleach.current.classList.remove("hidden");

    setTitre("THEME");
    setIsBleachClicked(false);
  };

  const DeathnoteOnClick = () => {
    divBleach.current.style.display = "none";
    divEater.current.style.display = "none";
    divJjk.current.style.display = "none";
    divGhoul.current.style.display = "none";
    divDmc.current.style.display = "none";

    setTitre("DEATH NOTE");
  };

  const DeathnoteRevert = () => {
    divBleach.current.style.display = "flex";
    divEater.current.style.display = "flex";
    divJjk.current.style.display = "flex";
    divGhoul.current.style.display = "flex";
    divDmc.current.style.display = "flex";

    deathnoteImg0.current.classList.remove("hidden");

    setTitre("THEME");
    setIsDeathnoteClicked(false);
  };

  const SouleaterOnClick = () => {
    divBleach.current.style.display = "none";
    divNote.current.style.display = "none";
    divJjk.current.style.display = "none";
    divGhoul.current.style.display = "none";
    divDmc.current.style.display = "none";

    setTitre("SOUL EATER");
  };

  const SouleaterRevert = () => {
    divBleach.current.style.display = "flex";
    divNote.current.style.display = "flex";
    divJjk.current.style.display = "flex";
    divGhoul.current.style.display = "flex";
    divDmc.current.style.display = "flex";

    souleaterImg0.current.classList.remove("hidden");
    slicedSouleater.current.classList.remove("hidden");

    setTitre("THEME");
    setIsSouleaterClicked(false);
  };

  const JJKOnClick = () => {
    divBleach.current.style.display = "none";
    divNote.current.style.display = "none";
    divEater.current.style.display = "none";
    divGhoul.current.style.display = "none";
    divDmc.current.style.display = "none";

    setTitre("JUJUTSU KAISEN");
  };

  const JJKRevert = () => {
    divBleach.current.style.display = "flex";
    divNote.current.style.display = "flex";
    divEater.current.style.display = "flex";
    divGhoul.current.style.display = "flex";
    divDmc.current.style.display = "flex";

    jjkImg0.current.classList.remove("hidden");
    slicedJJK.current.classList.remove("hidden");

    setTitre("THEME");
    setIsJJKClicked(false);
  };

  const TokyoghoulOnClick = () => {
    divBleach.current.style.display = "none";
    divNote.current.style.display = "none";
    divEater.current.style.display = "none";
    divJjk.current.style.display = "none";
    divDmc.current.style.display = "none";

    setTitre("TOKYO GHOUL");
  };

  const TokyoghoulRevert = () => {
    divBleach.current.style.display = "flex";
    divNote.current.style.display = "flex";
    divEater.current.style.display = "flex";
    divJjk.current.style.display = "flex";
    divDmc.current.style.display = "flex";

    tokyoghoulImg0.current.classList.remove("hidden");
    slicedTokyoghoul.current.classList.remove("hidden");

    setTitre("THEME");
    setIsTokyoghoulClicked(false);
  };

  const DMCOnClick = () => {
    divBleach.current.style.display = "none";
    divNote.current.style.display = "none";
    divEater.current.style.display = "none";
    divJjk.current.style.display = "none";
    divGhoul.current.style.display = "none";

    setTitre("Devil May Cry");
  };

  const DMCRevert = () => {
    divBleach.current.style.display = "flex";
    divNote.current.style.display = "flex";
    divEater.current.style.display = "flex";
    divJjk.current.style.display = "flex";
    divGhoul.current.style.display = "flex";

    dmcImg0.current.classList.remove("hidden");
    slicedDMC.current.classList.remove("hidden");
    setTitre("THEME");
    setIsDMCClicked(false);
  };

  return (
    <>
      <style>
        {`
          @keyframes appear {
          from{
            opacity: 0;
            scale:0.5;
          }
          to {
            opacity: 1;
            scale: 1;
          }  
        }


        img {
          animation: appear linear;
          animation-timeline: view();
          animation-range: entry 0 cover 40%;
          transition: all 0.3s ease;

        }

        img:hover{
          transition: all 0.3s ease;


        }

      `}
      </style>

      <Sidebar hasSearch={false} />

      <motion.div
        className="flex justify-center items-center relative dark:text-slate-50 pt-9 pb-12 font-custom text-6xl "
        ref={Title}
        key={titre}
        initial={
          isSomeoneClicked ? { opacity: 0, y: -200 } : { opacity: 0, y: -200 }
        }
        animate={isSomeoneClicked ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 20 }}
      >
        <h2 className="transition-all duration-300 text-zinc-700 dark:text-white">
          {titre}
        </h2>

        {isSomeoneClicked && (
          <svg
            ref={arrow}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style={{ color: color }}
            xmlSpace="preserve"
            className="w-12 ml-50 absolute right-10 hover:cursor-pointer hover:animate-pulse transition-all duration-300"
            onClick={() => {
              switch (true) {
                case isBleachClicked:
                  BleachRevert();
                  break;
                case isDeathnoteClicked:
                  DeathnoteRevert();
                  break;
                case isSouleaterClicked:
                  SouleaterRevert();
                  break;
                case isJJKClicked:
                  JJKRevert();
                  break;
                case isTokyoghoulClicked:
                  TokyoghoulRevert();
                  break;
                case isDMCClicked:
                  DMCRevert();
                  break;
              }
            }}
          >
            <g>
              <path d="M129.3,174.5L8.8,294.9C3.2,300.5,0,308.3,0,316.2c0,7.9,3.2,15.7,8.8,21.3L129.3,458c11.8,11.8,30.8,11.8,42.6,0   c11.8-11.8,11.8-30.8,0-42.6l-99.2-99.2l99.2-99.2c11.8-11.8,11.8-30.8,0-42.6C160.1,162.7,141.1,162.7,129.3,174.5L129.3,174.5z    M30.1,346.4h331.3c83.2,0,150.6-67.4,150.6-150.6c0-83.2-67.4-150.6-150.6-150.6h-30.1c-16.6,0-30.1,13.5-30.1,30.1   c0,16.6,13.5,30.1,30.1,30.1h30.1c49.9,0.1,90.3,40.5,90.4,90.4c-0.1,49.9-40.5,90.3-90.4,90.4H30.1C13.5,286.1,0,299.6,0,316.2   C0,332.9,13.5,346.4,30.1,346.4L30.1,346.4z" />
            </g>
          </svg>
        )}
      </motion.div>

      <div
        id="container"
        className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-y-20 ml-[150px]"
        ref={container}
      >
        <div
          className="flex flex-col justify-center relative  items-center w-9/12 "
          ref={divBleach}
        >
          <img
            className="will-change-transform will-change-opacity rounded-md mb-6 z-30 dark:hover:shadow-[0_0_89px_0_rgba(180,255,248,0.4)] hover:shadow-[0_0_89px_0_rgba(0,0,0,0.40)] "
            src={bleach}
            ref={bleachImg0}
            onClick={() => {
              setIsBleachClicked(true);
              bleachImg0.current.classList.add("hidden");

              BleachOnClick();

              setTimeout(() => {}, 1300);

              setTimeout(() => {
                if (slicedBleach) {
                  slicedBleach.current.classList.add("hidden");
                }
              }, 1900);
            }}
            alt="bleach"
          />
          <SlicedCover
            isClicked={isBleachClicked}
            source={bleach}
            ref={slicedBleach}
          />

          <SlicedText title={"Bleach"} isClicked={isBleachClicked} />
        </div>

        <div
          className="flex flex-col justify-center relative  items-center w-9/12"
          ref={divNote}
        >
          <img
            className="will-change-transform will-change-opacity rounded-md mb-3  dark:hover:shadow-[0_0_89px_0_rgba(180,255,248,0.4)] hover:shadow-[0_0_89px_0_rgba(0,0,0,0.40)]"
            src={deathnote}
            alt="deathnote"
            ref={deathnoteImg0}
            onClick={() => {
              setIsDeathnoteClicked(true);
              deathnoteImg0.current.classList.add("hidden");

              DeathnoteOnClick();

              setTimeout(() => {}, 1300);

              setTimeout(() => {
                if (slicedDeathnote) {
                  slicedDeathnote.current.classList.add("hidden");
                }
              }, 1900);
            }}
          />

          <SlicedCover
            isClicked={isDeathnoteClicked}
            source={deathnote}
            ref={slicedDeathnote}
          />

          <SlicedText title={"Death Note"} isClicked={isDeathnoteClicked} />
        </div>
        <div
          className="flex flex-col justify-center   items-center w-9/12 relative"
          ref={divEater}
        >
          <img
            className="will-change-transform will-change-opacity rounded-md mb-3  dark:hover:shadow-[0_0_89px_0_rgba(180,255,248,0.4)] hover:shadow-[0_0_89px_0_rgba(0,0,0,0.40)]"
            src={souleater}
            alt="souleater"
            ref={souleaterImg0}
            onClick={() => {
              setIsSouleaterClicked(true);
              souleaterImg0.current.classList.add("hidden");

              SouleaterOnClick();

              setTimeout(() => {}, 1300);

              setTimeout(() => {
                if (slicedSouleater) {
                  slicedSouleater.current.classList.add("hidden");
                }
              }, 1900);
            }}
          />

          <SlicedCover
            isClicked={isSouleaterClicked}
            source={souleater}
            ref={slicedSouleater}
          />

          <SlicedText title={"Soul Eater"} isClicked={isSouleaterClicked} />
        </div>
        <div
          className="flex flex-col justify-center relative  items-center w-9/12"
          ref={divJjk}
        >
          <img
            src={jjk}
            className="will-change-transform will-change-opacity rounded-md mb-3  dark:hover:shadow-[0_0_89px_0_rgba(180,255,248,0.4)] hover:shadow-[0_0_89px_0_rgba(0,0,0,0.40)]"
            alt="jjk"
            ref={jjkImg0}
            onClick={() => {
              setIsJJKClicked(true);
              jjkImg0.current.classList.add("hidden");

              JJKOnClick();

              setTimeout(() => {}, 1300);

              setTimeout(() => {
                if (slicedJJK) {
                  slicedJJK.current.classList.add("hidden");
                }
              }, 1900);
            }}
          />

          <SlicedCover isClicked={isJJKClicked} source={jjk} ref={slicedJJK} />

          <SlicedText title={"Jujutsu Kaisen"} isClicked={isJJKClicked} />
        </div>
        <div
          className="flex flex-col justify-center  relative items-center w-9/12"
          ref={divGhoul}
        >
          <img
            src={tokyoghoul}
            className="will-change-transform will-change-opacity rounded-md mb-3  dark:hover:shadow-[0_0_89px_0_rgba(180,255,248,0.4)] hover:shadow-[0_0_89px_0_rgba(0,0,0,0.40)]"
            alt="tokyoghoul"
            ref={tokyoghoulImg0}
            onClick={() => {
              setIsTokyoghoulClicked(true);
              tokyoghoulImg0.current.classList.add("hidden");

              TokyoghoulOnClick();

              setTimeout(() => {}, 1300);

              setTimeout(() => {
                if (slicedTokyoghoul) {
                  slicedTokyoghoul.current.classList.add("hidden");
                }
              }, 1900);
            }}
          />

          <SlicedCover
            isClicked={isTokyoghoulClicked}
            source={tokyoghoul}
            ref={slicedTokyoghoul}
          />

          <SlicedText title={"Tokyo Ghoul"} isClicked={isTokyoghoulClicked} />
        </div>
        <div
          className="flex flex-col justify-center relative   items-center w-9/12 "
          ref={divDmc}
        >
          <img
            src={dmc}
            className="will-change-transform will-change-opacity rounded-md mb-3  dark:hover:shadow-[0_0_89px_0_rgba(180,255,248,0.4)] hover:shadow-[0_0_89px_0_rgba(0,0,0,0.40)]"
            alt="dmc"
            ref={dmcImg0}
            onClick={() => {
              setIsDMCClicked(true);
              dmcImg0.current.classList.add("hidden");

              DMCOnClick();
              document.body.classList.add("bg-[rgba(231,26,26,1)]");
              document.body.classList.add("dark:bg-[rgba(231,26,26,1)]");

              setTimeout(() => {
                document.body.classList.add("bg-zinc-50");
                document.body.classList.add("dark:bg-slate-900");
                document.body.classList.remove("bg-[rgba(231,26,26,1)]");
                document.body.classList.remove("dark:bg-[rgba(231,26,26,1)]");
              }, 1300);

              setTimeout(() => {
                if (slicedDMC) {
                  slicedDMC.current.classList.add("hidden");
                }
              }, 1900);
            }}
          />

          <SlicedCover isClicked={isDMCClicked} source={dmc} ref={slicedDMC} />

          <SlicedText title={"Devil May Cry"} isClicked={isDMCClicked} />
        </div>
      </div>

      <div>
        {/* tous les dessins bleach */}
        {isBleachClicked && (
          <div className="grid grid-cols-3 max-md:grid-cols-1 max-lg:grid-cols-2 gap-y-6 ml-[130px]">
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/bleach/ICHIKITTY GIN.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/bleach/SOULPACT YHWACH.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/bleach/TURKISH YHWACH.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/bleach/YOKOSO WATASHI NO HAMSTER SOCIETY.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/bleach/THE FIRE.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/bleach/HYOSUBE ICHIBEI.avif`}
            />
          </div>
        )}

        {/* tous les dessins DeathNote */}
        {isDeathnoteClicked && (
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-6 ml-[130px]">
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/deathnote/Freakyra and Ryuk.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/deathnote/RYUK SO MAD.avif`}
            />
          </div>
        )}

        {/* tous les dessins SoulEater */}
        {isSouleaterClicked && (
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-6 ml-[130px]">
            <div className="col-start-2 max-lg:col-start-1">
              <ThemeDrawing
                source={`${
                  import.meta.env.BASE_URL
                }media/dessins/souleater/blackstar.avif`}
              />
            </div>
          </div>
        )}

        {/* tous les dessins JJK */}
        {isJJKClicked && (
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-y-6 ml-[130px]">
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/Yuji's 1000 Yard Stare.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/KENJAKUUU.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/Gojover.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/choso thousand yard stare.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/DEAD STARE.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/JOGOOO orangi.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/JOGOATTTTTT.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/english or spanish sukuna edition.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/Nobara Sosuke.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/BABY GOJO.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/GOJO PURUPURU.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/BABYGUMI.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/KENJANYA.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/GOMEN AMANAI.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/KING SUKUNA.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/MAHITO EVIL.avif`}
            />
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/jjk/YUJI ENGLISH.avif`}
            />

            <div className="col-span-3 max-lg:col-span-2 max-md:col-span-1">
              <ThemeDrawing
                source={`${
                  import.meta.env.BASE_URL
                }media/dessins/jjk/JOGOAT.avif`}
              />
            </div>

            <div className="col-span-3 max-lg:col-span-2  max-md:col-span-1">
              <ThemeDrawing
                source={`${
                  import.meta.env.BASE_URL
                }media/dessins/jjk/YUTA.avif`}
              />
            </div>
          </div>
        )}

        {/* tous les dessins Tokyo Ghoul */}
        {isTokyoghoulClicked && (
          <div className="grid grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 gap-y-6 ml-[130px]">
            <div className="col-span-3  max-lg:col-span-2 max-md:col-span-1">
              <ThemeDrawing
                source={`${
                  import.meta.env.BASE_URL
                }media/dessins/tokyoghoul/Kaneki (oxfrz).avif`}
              />
            </div>
          </div>
        )}

        {/* tous les dessins DMC */}
        {isDMCClicked && (
          <div className="grid grid-cols-3 max-lg:grid-cols-2  max-md:grid-cols-1 gap-y-6 ml-[130px]">
            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/dmc/dante dmc 2test sketch.avif`}
            />

            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/dmc/I AM THE STORM.avif`}
            />

            <ThemeDrawing
              source={`${
                import.meta.env.BASE_URL
              }media/dessins/dmc/Sons of Sparda.avif`}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default MangaApp;
