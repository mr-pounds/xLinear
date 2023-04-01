/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
<<<<<<< HEAD
 * @LastEditTime : 2023-03-30 21:50:24
=======
 * @LastEditTime : 2023-03-30 17:51:57
>>>>>>> 4c8e3d925654ce75ba825177cdb5b0a2130978df
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [
    vitePluginForArco({
      // theme: "Gray",
      // iconBox: "",
      modifyVars: {
        "primary-6": "#1DA57A",
      },
      style: true,
      // varsInjectScope: []
    }),
    react(),
  ],
>>>>>>> 4c8e3d925654ce75ba825177cdb5b0a2130978df
});
