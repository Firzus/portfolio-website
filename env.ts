import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.url(),
  CONTACT_EMAIL: z.string().email(),
})

type Env = z.infer<typeof envSchema>

let _env: Env | undefined

export const env: Env = new Proxy({} as Env, {
  get(_, key: string) {
    if (!_env) {
      _env = envSchema.parse({
        NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
        CONTACT_EMAIL: process.env.CONTACT_EMAIL,
      })
    }
    return _env[key as keyof Env]
  },
})
