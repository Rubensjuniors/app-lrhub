// import { z } from 'zod'

// const envSchema = z.object({
//   NODE_ENV: z.enum(['development', 'production']).default('production'),
// })

// const _env = envSchema.safeParse(import.meta.env)

// if (_env.success === false) {
//   // eslint-disable-next-line no-console
//   console.error('Invalid environment variables!!', _env.error.format())

//   throw new Error('Invalid environment variables!!')
// }

// export const env = _env.data
