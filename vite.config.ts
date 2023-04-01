/*
 * @Name         :
 * @Version      : 1.0.1
 * @Author       : zzz
 * @Date         : 2023-03-29 16:12:16
 * @LastEditors  : zzz
 * @LastEditTime : 2023-04-01 16:42:05
 */
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { vitePluginForArco } from "@arco-plugins/vite-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginForArco({
      // theme: "Gray",
      // iconBox: "",
      modifyVars: {
        // 常规
        // "primary-6": "#ffffff",
        // 悬浮（hover）
        // "primary-5": "rgb(244, 245, 248)",
        // 点击（click）
        // "primary-7": "rgb(244, 245, 248)",
        // 下拉弹出框、Tooltip 背景颜色
        "color-bg-5": "#ffffff",
        // 正文-常规
        "font-size-body-3": "13px",
        // 正文-常规-小
        "font-size-body-2": "12px",
        // 辅助文案/次要文案
        "font-size-body-1": "10px",
        // 水印文本
        "font-size-caption": "10px",
        // 强调/正文标题
        "color-text-1": "rgba(0, 0, 0, 0.816)",
        // 次强调/正文标题
        "color-text-2": "rgba(0, 0, 0, 0.816)",
        // 次要信息
        "color-text-3": "rgba(0, 0, 0, 0.44)",
        // 置灰信息
        // "color-text-4": "",
      },
      style: true,
      // varsInjectScope: []
    }),
    react(),
  ],
});
