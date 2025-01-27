import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "http://44.221.236.237:3000/",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
