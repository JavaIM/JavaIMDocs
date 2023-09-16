import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "zh/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "zh/guide/",
    children: [
      {
        text: "安装",
        icon: "",
        prefix: "install/",
        children: ["client.md","server.md"],
      },
      {
        text: "配置",
        icon: "",
        prefix: "config/",
        children: [{ text: "客户端配置", link: "clientc.md" },{ text: "服务端配置", link: "serverc.md" }],
      },
    ],
  },
  {
    text: "文档",
    icon: "book",
    prefix: "zh/docs/",
    children: [
      {
        text: "Bar",
        icon: "lightbulb",
        prefix: "bar/",
        children: ["baz", { text: "...", icon: "ellipsis", link: "#" }],
      },
      {
        text: "Foo",
        icon: "lightbulb",
        prefix: "foo/",
        children: ["ray", { text: "...", icon: "ellipsis", link: "#" }],
      },
    ],
  },
]);
