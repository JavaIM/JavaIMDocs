import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/",
  {
    text: "Guide",
    icon: "lightbulb",
    prefix: "/guide/",
    children: [
      {
        text: "Install",
        icon: "",
        prefix: "install/",
        children: ["client.md","server.md"],
      },
      {
        text: "Config",
        icon: "",
        prefix: "config/",
        children: [{ text: "Client configuration", link: "clientc.md" },{ text: "Server configuration", link: "serverc.md" }],
      },
    ],
  },
  {
    text: "Docs",
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
