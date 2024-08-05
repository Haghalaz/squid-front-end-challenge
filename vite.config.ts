import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/squid-front-end-challenge/",

  resolve: {
    alias: {
      "@src": "/src",
      "@assets": "/src/assets",
      "@atoms": "/src/components/atoms",
      "@molecules": "/src/components/molecules",
      "@organisms": "/src/components/organisms",
      "@hooks": "/src/hooks",
      "@utils": "/src/utils",
    },
  },
});
