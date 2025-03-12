import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: "#482B4B",
        secondary: "#E0AA3E",
      },
    },
  },
  plugins: [react(), tailwindcss()],
});
