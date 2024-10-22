import { z } from "zod"

export const initOptionsSchema = z.object({
  cwd: z.string(),
  components: z.array(z.string()).optional(),
  yes: z.boolean(),
  defaults: z.boolean(),
  force: z.boolean(),
  silent: z.boolean(),
  isNewProject: z.boolean(),
  srcDir: z.boolean().optional(),
})

const NEXT_VERSION = "^14"
const DEFAULT_APP_NAME = "kvikpage"

const KVIKPAGE_REGISTRY_URL = process.env.VERCEL
  ? "https://ui.kvikpage.com/r"
  : "http://localhost:4444/r"

const initOverrideOptions: Partial<z.infer<typeof initOptionsSchema>> = {
  defaults: true,
  yes: true,
}
const REGISTRY_BASE_COLORS = [
  {
    name: "neutral",
    label: "Neutral",
  },
]
export {
  initOverrideOptions,
  NEXT_VERSION,
  DEFAULT_APP_NAME,
  KVIKPAGE_REGISTRY_URL,
  REGISTRY_BASE_COLORS,
}
