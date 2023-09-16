import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "指南",
      icon: "lightbulb",
      prefix: "./guide/",
      children: [
        {
          text: "安装",
          icon: "",
          prefix: "./install/",
          children: "structure"
        },
        {
          text: "配置",
          icon: "",
          prefix: "./config/",
          children: "structure"
        }
      ],
    },
    {
      text: "文档",
      icon: "book",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
