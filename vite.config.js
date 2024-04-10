import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import million from "million/compiler";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [million.vite({ auto: true }), react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTest.js'], // Cambiado a un array
    css: true
  }
});
