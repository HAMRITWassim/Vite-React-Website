import gsap from "gsap";
import { useRef } from "react";

function Footer() {
  const topIG = useRef();
  const bottomIG = useRef();
  const topTT = useRef();
  const bottomTT = useRef();

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
    <footer className="bg-zinc-500 dark:bg-slate-950 fixed bottom-0 w-screen h-16 z-10 flex justify-center items-center rounded-t-full transition-colors duration-300">
      <div className="mr-2 ml-2">
        <a href="https://www.instagram.com/oxfrz" target="_blank">
          <img
            src={`${import.meta.env.BASE_URL}media/IGwhite.png`}
            alt="IG"
            id="IGfooter"
            ref={topIG}
            style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
            className="h-10 hover:animate-pulse absolute transition-all duration-300"
            onMouseOver={() => {
              logoSlideOut(topIG.current);
            }}
            onMouseOut={() => {
              logoSlideIn(topIG.current);
            }}
          />
          <img
            src={`${import.meta.env.BASE_URL}media/IGwhite.png`}
            alt="IG"
            id="IGfooterb"
            ref={bottomIG}
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
            className="h-10 hover:animate-pulse transition-all duration-300"
            onMouseOver={() => {
              logoSlideOut(topIG.current);
            }}
            onMouseOut={() => {
              logoSlideIn(topIG.current);
            }}
          ></img>
        </a>
      </div>

      <div className="mr-2 ml-2">
        <a href="https://www.tiktok.com/@oxfrz" target="_blank">
          <img
            src={`${import.meta.env.BASE_URL}media/TIKTOKwhite.png`}
            alt="TIKTOK"
            id="TTfooter"
            ref={topTT}
            style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
            className="h-10 hover:animate-pulse absolute transition-all duration-300"
            onMouseOver={() => {
              logoSlideOut(topTT.current);
            }}
            onMouseOut={() => {
              logoSlideIn(topTT.current);
            }}
          ></img>
          <img
            src={`${import.meta.env.BASE_URL}media/TIKTOKwhite.png`}
            alt="TIKTOK"
            id="TTfooterb"
            ref={bottomTT}
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
            className="h-10 hover:animate-pulse transition-all duration-300"
            onMouseOver={() => {
              logoSlideOut(topTT.current);
            }}
            onMouseOut={() => {
              logoSlideIn(topTT.current);
            }}
          ></img>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
