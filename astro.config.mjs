import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.PUBLIC_SITE_URL || "https://wang-bohan-portfolio.bohan391.workers.dev";

export default defineConfig({
  site,
  output: "static",
  integrations: [sitemap()],
});
