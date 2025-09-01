import { create } from "zustand";

//STORE
const useVideoStore = create((set) => ({
  path: `${import.meta.env.BASE_URL}media/animations/H0TLINEMIAMI.mp4`,
  name: "H0TLINEMIAMI.mp4",
  changePath: (newPath) => set({ path: newPath }),
  changeName: () =>
    set((state) => ({
      name: state.path.split("/").pop(),
    })),
}));

export const videoList = [
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

//importé dans sidebar
export function videoPathToName(videoNames) {
  let i = 0;

  for (i = 0; i < videoList.length; i++) {
    videoNames[i] = videoList[i].split("/").pop();
  }
}

export default useVideoStore;
