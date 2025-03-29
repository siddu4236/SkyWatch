import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SkyWatch/",  // Add your repo name here
  plugins: [react()],
});
