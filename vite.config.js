import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  mode: "production",
  build: {
    outDir: "build",
  },
  server: {
    port: 80,
  },
});
