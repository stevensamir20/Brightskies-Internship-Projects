import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/Button",
        "./Utils": "./src/Utils",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
    modulePreload: false,
  },
});
