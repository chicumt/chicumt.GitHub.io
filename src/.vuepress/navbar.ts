import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/demo/",
  {
    text: "博文",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "苹果",
        icon: "pen-to-square",
        link: "apple/",
      },
      {
        text: "dz",
        icon: "pen-to-square",
        link: "ltdz/",
        
      },
      {
        text: "香蕉",
        icon: "pen-to-square",
        link: "banana/",
        
      },
      
    ],
  },
  // {
  //   text: "V2 文档",
  //   icon: "book",
  //   link: "https://theme-hope.vuejs.press/zh/",
  // },
]);
