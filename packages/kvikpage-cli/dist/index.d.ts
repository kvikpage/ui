import { z } from 'zod';

declare const initOptionsSchema: z.ZodObject<{
    cwd: z.ZodString;
    components: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    yes: z.ZodBoolean;
    defaults: z.ZodBoolean;
    force: z.ZodBoolean;
    silent: z.ZodBoolean;
    isNewProject: z.ZodBoolean;
    srcDir: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    cwd: string;
    yes: boolean;
    defaults: boolean;
    force: boolean;
    silent: boolean;
    isNewProject: boolean;
    components?: string[] | undefined;
    srcDir?: boolean | undefined;
}, {
    cwd: string;
    yes: boolean;
    defaults: boolean;
    force: boolean;
    silent: boolean;
    isNewProject: boolean;
    components?: string[] | undefined;
    srcDir?: boolean | undefined;
}>;
declare const NEXT_VERSION = "^14";
declare const DEFAULT_APP_NAME = "kvikpage";
declare const KVIKPAGE_REGISTRY_URL: string;
declare const initOverrideOptions: Partial<z.infer<typeof initOptionsSchema>>;
declare const REGISTRY_BASE_COLORS: {
    name: string;
    label: string;
}[];

export { DEFAULT_APP_NAME, KVIKPAGE_REGISTRY_URL, NEXT_VERSION, REGISTRY_BASE_COLORS, initOptionsSchema, initOverrideOptions };
