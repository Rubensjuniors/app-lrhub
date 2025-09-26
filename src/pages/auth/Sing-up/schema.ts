import z from 'zod'

export const schemaSignUp = z
  .object({
    name: z.string().min(3, 'auth.sign_up.inputs.name.error_min').max(115, 'auth.sign_up.inputs.name.error_max'),
    email: z.string().email('auth.sign_up.inputs.email.error'),
    createPassword: z.string().min(8, 'auth.sign_up.inputs.createPassword.error'),
    confirmPassword: z.string()
  })
  .refine((data) => data.createPassword === data.confirmPassword, {
    message: 'auth.sign_up.inputs.confirmPassword.error',
    path: ['confirmPassword'],
  })

export type TypeSchemaSignUp = z.infer<typeof schemaSignUp>
