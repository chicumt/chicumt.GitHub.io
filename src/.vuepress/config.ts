import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "理塘丁真的博客",
  description: "世界最高城市理塘",
  head: [
      [
        'link',{ rel: 'icon', href: '/favicon.ico' }
      ]
    ],
  theme,
 


  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
