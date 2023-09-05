import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});

// cloudinary.config({
//   cloud_name: "dnmiscoap",
//   api_key: "793792458564739",
//   api_secret: "***************************",
// });
