import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import unocss from "unocss/vite";
import autoImport from "unplugin-auto-import/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    unocss(),
    react(),
    autoImport({
      imports: ["react"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/hooks", "src/stores", "src/components/**"]
    })
  ],
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // React 核心
          "vendor-react": ["react", "react-dom"],
          // Markdown 相关
          "vendor-markdown": ["react-markdown", "react-syntax-highlighter"],
          // Milkdown 编辑器
          "vendor-milkdown": [
            "@milkdown/core",
            "@milkdown/react",
            "@milkdown/preset-commonmark",
            "@milkdown/preset-gfm",
            "@milkdown/plugin-history",
            "@milkdown/plugin-listener"
          ],
          // 动画
          "vendor-motion": ["framer-motion"],
          // 其他工具
          "vendor-utils": ["zustand", "date-fns", "react-rnd"]
        }
      }
    }
  }
});
