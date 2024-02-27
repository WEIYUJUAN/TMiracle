import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssPluginPx2rem from "postcss-plugin-px2rem";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        postcssPluginPx2rem({
          // rootValue: 19.2,
          rootValue: 80,
        }),
      ],
    },
  },
});
