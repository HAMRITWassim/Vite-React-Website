import { motion } from "framer-motion";
import { forwardRef } from "react";

const SlicedCover = forwardRef((props, ref) => {
  return (
    <>
      {/* SI LA FENETRE N'EST PAS EN FORMAT MOBILE */}
      {props.isClicked && window.innerWidth > 1023 && (
        <div ref={ref}>
          {/* Partie gauche diagonale */}
          <motion.img
            src={props.source}
            className="rounded-md mb-6 z-20  absolute"
            style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
            initial={{ x: "20vw", y: "0", scale: 1 }}
            animate={{
              x: [
                "20vw",
                "calc(20vw - 10px)",
                "calc(20vw - 30px)",
                "calc(20vw - 70px)",

                "calc(20vw - 200px)",
                "calc(20vw - 350px)",
                "calc(20vw - 2000px)",
              ], // va vers la gauche
              y: [
                "0px",
                "calc(0px + 10px)",
                "calc(0px + 30px)",
                "calc(0px + 70px)",
                "calc(0px + 35px)",
                "calc(0px - 140px)",
                "calc(0px - 260px)",
              ], // descend un peu
              scale: [1, 1, 1, 1, 1, 2.5, 7],
              opacity: 1,
            }}
            transition={{ duration: 1.3, ease: "easeIn" }}
          />

          {/* PARTIE DIAGONALE DROITE */}
          <motion.img
            src={props.source}
            ref={ref}
            className="will-change-transform will-change-opacity rounded-md mb-6 z-20 absolute"
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
            initial={{ x: "20vw", y: "0", scale: 1 }}
            animate={{
              x: [
                "20vw",
                "20vw",
                "20vw",
                "20vw",
                "20vw",
                "calc(20vw + 250px)",
                "calc(20vw + 2000px)",
              ], // va vers la gauche
              y: [
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "calc(0px + 140px)",
                "calc(0px + 260px)",
              ], // descend un peu
              scale: [1, 1, 1, 1, 1, 2.5, 7],
              opacity: 1,
            }}
            transition={{ duration: 1.3, ease: "easeIn" }}
          />
        </div>
      )}

      {/* SI ON EST ENTRE 16/9 ET MOBILE */}
      {props.isClicked &&
        window.innerWidth < 1024 &&
        window.innerWidth > 768 && (
          <div ref={ref}>
            {/* Partie gauche diagonale */}
            <motion.img
              src={props.source}
              className="rounded-md mb-6 z-20  absolute"
              style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
              initial={{ x: "5vw", y: "0", scale: 1 }}
              animate={{
                x: [
                  "5vw",
                  "calc(5vw - 10px)",
                  "calc(5vw - 30px)",
                  "calc(5vw - 70px)",

                  "calc(5vw - 200px)",
                  "calc(5vw - 350px)",
                  "calc(5vw - 2000px)",
                ], // va vers la gauche
                y: [
                  "0px",
                  "calc(0px + 10px)",
                  "calc(0px + 30px)",
                  "calc(0px + 70px)",
                  "calc(0px + 35px)",
                  "calc(0px - 140px)",
                  "calc(0px - 260px)",
                ], // descend un peu
                scale: [1, 1, 1, 1, 1, 2.5, 7],
                opacity: 1,
              }}
              transition={{ duration: 1.3, ease: "easeIn" }}
            />

            {/* PARTIE DIAGONALE DROITE */}
            <motion.img
              src={props.source}
              ref={ref}
              className="will-change-transform will-change-opacity rounded-md mb-6 z-20 absolute"
              style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
              initial={{ x: "5vw", y: "0", scale: 1 }}
              animate={{
                x: [
                  "5vw",
                  "5vw",
                  "5vw",
                  "5vw",
                  "5vw",
                  "calc(5vw + 250px)",
                  "calc(5vw + 2000px)",
                ], // va vers la gauche
                y: [
                  "0px",
                  "0px",
                  "0px",
                  "0px",
                  "0px",
                  "calc(0px + 140px)",
                  "calc(0px + 260px)",
                ], // descend un peu
                scale: [1, 1, 1, 1, 1, 2.5, 7],
                opacity: 1,
              }}
              transition={{ duration: 1.3, ease: "easeIn" }}
            />
          </div>
        )}

      {/* SI LA FENETRE EST EN FORMAT MOBILE */}

      {props.isClicked && window.innerWidth < 768 && (
        <div ref={ref}>
          {/* Partie gauche diagonale */}
          <motion.img
            src={props.source}
            className="rounded-md mb-6 z-20  absolute"
            style={{ clipPath: "polygon(100% 0, 0 0, 0 100%)" }}
            initial={{ x: "-25vw", y: "0", scale: 1 }}
            animate={{
              x: [
                "-25vw",
                "calc(-25vw - 10px)",
                "calc(-25vw - 30px)",
                "calc(-25vw - 70px)",

                "calc(-25vw - 200px)",
                "calc(-25vw - 350px)",
                "calc(-25vw - 2000px)",
              ], // va vers la gauche
              y: [
                "0px",
                "calc(0px + 10px)",
                "calc(0px + 30px)",
                "calc(0px + 70px)",
                "calc(0px + 35px)",
                "calc(0px - 140px)",
                "calc(0px - 260px)",
              ], // descend un peu
              scale: [1, 1, 1, 1, 1, 2.5, 7],
              opacity: 1,
            }}
            transition={{ duration: 1.3, ease: "easeIn" }}
          />

          {/* PARTIE DIAGONALE DROITE */}
          <motion.img
            src={props.source}
            ref={ref}
            className="will-change-transform will-change-opacity rounded-md mb-6 z-20 absolute"
            style={{ clipPath: "polygon(100% 0, 0% 100%, 100% 100%)" }}
            initial={{ x: "-25vw", y: "0", scale: 1 }}
            animate={{
              x: [
                "-25vw",
                "-25vw",
                "-25vw",
                "-25vw",
                "-25vw",
                "calc(-25vw + 250px)",
                "calc(-25vw + 2000px)",
              ], // va vers la gauche
              y: [
                "0px",
                "0px",
                "0px",
                "0px",
                "0px",
                "calc(0px + 140px)",
                "calc(0px + 260px)",
              ], // descend un peu
              scale: [1, 1, 1, 1, 1, 2.5, 7],
              opacity: 1,
            }}
            transition={{ duration: 1.3, ease: "easeIn" }}
          />
        </div>
      )}
    </>
  );
});

export default SlicedCover;
