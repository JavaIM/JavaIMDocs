import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "指南",
    icon: "lightbulb",
    prefix: "/guide/",
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
        children: [{ text: "Client configuration", link: "clientc.md" },{ text: "Server configuration", link: "serverc.md" }],
      },
    ],
  },
  {
    text: "文档",
    icon: "book",
    prefix: "/docs/",
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
