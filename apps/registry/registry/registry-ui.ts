import { Registry } from "@/registry/schema"

export const ui: Registry = [
  {
    name: "button",
    type: "registry:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/button.tsx"],
  },
]
