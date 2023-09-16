import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Guide",
      icon: "lightbulb",
      prefix: "guide/",
      children: [
        {
          text: "Install",
          icon: "",
          prefix: "install/",
          children: "structure"
        },
        {
          text: "Config",
          icon: "",
          prefix: "config/",
          children: "structure"
        }
      ],
    },
    {
      text: "Docs",
      icon: "book",
      prefix: "docs/",
      children: "structure",
    },
  ],
});
