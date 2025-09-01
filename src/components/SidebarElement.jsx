import motion from "framer-motion";

function SidebarElement(props) {
  <a href={props.link}>
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
  </a>;
}

export default SidebarElement;
