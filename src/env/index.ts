import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production']).default('production'),
  VITE_API_LRHUB: z.string().url(),
})

const _env = envSchema.safeParse(import.meta.env)

if (_env.success === false) {
  console.error('Invalid environment variables!!', _env.error.format())

  throw new Error('Invalid environment variables!!')
}

export const env = _env.data