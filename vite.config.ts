/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
 * @LastEditTime : 2023-03-30 14:16:52
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePluginForArco } from "@arco-plugins/vite-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginForArco({
      // theme: "arco",
      // iconBox: "",
      modifyVars: {
        "primary-6": "#1DA57A",
      },
      style: true,
      // varsInjectScope: []
    }),
    react(),
  ],
});
