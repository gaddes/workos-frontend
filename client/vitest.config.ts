import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";
// @ts-expect-error - required for path resolution
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, "src/api"),
      utils: path.resolve(__dirname, "src/utils"),
      components: path.resolve(__dirname, "src/components"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
});
