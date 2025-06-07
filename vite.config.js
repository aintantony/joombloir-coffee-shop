import { defineConfig } from "vite";

export default defineConfig({
  // base: "/joombloir-coffee-shop/",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "dist",
    target: "esnext",
  },
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
});