import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  /*
  This matches the GitHub repository/project name.

  Final GitHub Pages URL:

  https://avmannino.github.io/gsc_stateline_webpage/
  */

  base: "/gsc_stateline_webpage/",
});