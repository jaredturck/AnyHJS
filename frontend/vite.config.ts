import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import prerender from "vite-plugin-prerender";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      staticDir: path.join(__dirname, "build"),
      routes: [
        "/",
        "/about-us",
        "/gift-card",
        "/support-centre",
        "/shipping",
        "/refunds",
        "/track-orders",
        "/payment-methods",
        "/exclusive-offers",
        "/checkout",
        "/vr-wardrobe",
        "/ai-stylist",
        "/vr-changing-room",
        "/engage-with-followers",
        "/terms-and-conditions",
        "/privacy-policy",
        "/cookie-policy",
        "/mens-clothing",
        "/womens-clothing",
        "/create",
        "/login",
        "/register",
        "/forgot-password",
        "/change-password",
        "/reset-email",
        "/contact",
        "/account",
        "/product",
        "/search"
      ]
    })
  ],
  server: {
    port: 3000,
    strictPort: true
  },
  build: {
    outDir: "build"
  }
});
