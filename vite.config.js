import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.svg"],
  server: {
    port: 3000,
  },
});
