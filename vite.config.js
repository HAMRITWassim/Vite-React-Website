import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        drawings: resolve(__dirname, "drawings.html"),
        links: resolve(__dirname, "links.html"),
      },
    },
  },
  base: "/Vite-React-Website/",
});
