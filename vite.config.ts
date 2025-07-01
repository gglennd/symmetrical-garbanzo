import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import path from "node:path";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000,
  },
  plugins: [tsConfigPaths(), tanstackStart()],
});
