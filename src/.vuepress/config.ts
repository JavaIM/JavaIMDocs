import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/zh/",

  locales: {
    "/": {
      lang: "en-US",
      title: "JavaIM",
      description: "The docs for JavaIM",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "JavaIM",
      description: "JavaIM的文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
