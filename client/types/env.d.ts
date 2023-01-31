type Env = Partial<Readonly<typeof import("./env.local.json")>>;

declare namespace NodeJS {
  interface ProcessEnv extends Env {
    readonly API_BASE_URL?: string;
    readonly AUTH_PASSWORD?: string;
  }
}