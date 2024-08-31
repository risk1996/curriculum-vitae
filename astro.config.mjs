import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon()],
  site: "https://risk1996.github.io",
  base: "curriculum-vitae",
});
