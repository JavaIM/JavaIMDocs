import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guide",
      icon: "lightbulb",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
