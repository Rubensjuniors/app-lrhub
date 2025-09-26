import z from 'zod'

export const schemaSignIn = z.object({
  email: z.string().email('auth.sign_in.inputs.email.error'),
  password: z.string().min(8, 'auth.sign_in.inputs.password.error'),
})

export type TypeSchemaSignIn = z.infer<typeof schemaSignIn>
