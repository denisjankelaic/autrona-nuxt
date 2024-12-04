// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetUno,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  shortcuts: [
    {
      "flex-center": "flex justify-center items-center",
    },
  ],
  theme: {
    colors: {
      lightGreen: "#489b5f",
      green: "#28662d",
      darkGreen: "#1D4920",
      red: "#EA0000",
      text1: "#212121",
      text2: "#454545",
      pastelWhite: "#fafafa",
    },
  },
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives()],
});
