import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.jsx"),
      name: "kova-render",

      fileName: "index",
    },
    rollupOptions: {
      external: ["react"],
    },
  },
});
