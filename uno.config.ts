// uno.config.ts
import { defineConfig, presetUno } from "unocss";

export default defineConfig({
  content: {
    filesystem: ["**/*.{html,js,ts,jsx,tsx}"],
  },
  presets: [
    presetUno({
      dark: "media",
    }),
  ],

  shortcuts: {
    "icon": "inline-block",
    "container-c": "container mx-auto",
    "container-l": "container mr-auto",
    "container-r": "container ml-auto",

    "bg-default": "bg-gray-500/10",
    "border-default": "border rounded-md border-gray-500/20",
    "form-base": "block px-2 py-1.5 bg-default border-default color-current",
    "input-base": "form-base",
    "btn-base": "form-base",
  },
});
