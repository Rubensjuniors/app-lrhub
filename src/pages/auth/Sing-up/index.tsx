import { Button } from '@/shared/components/Atoms'
import { FormMenssage, Input, Label } from '@/shared/components/Atoms/Form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const signUpForm = z
  .object({
    name: z
      .string()
      .min(3, 'Precisa ter no mínimo 3 caracteres.')
      .max(115, 'Máximo de 115 caracteres.'),
    phone: z.string().optional(),
    email: z.string().email('E-mail inválido.'),
    createPassword: z.string().min(8, 'Precisa ter no mínimo 8 caracteres.'),
    confirmPassword: z.string().min(8, 'Precisa ter no mínimo 8 caracteres.'),
  })
  .refine((data) => data.createPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  })

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  })
  // const { mutateAsync: registerUser } = useRegister()

  async function handleSignUp(data: SignUpForm) {
    try {
      const paramsData = {
        name: data.name,
        email: data.email,
        password: data.createPassword,
        phone: data.phone || '',
        urlCoverPhoto: '',
      }

      console.log(paramsData)

      navigate({ to: '/sign-in', search: { email: data.email } })
      reset()
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in">Fazer login</Link>
        </Button>

        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátis</h1>
            <p className="text-sm text-muted-foreground">
              Organize suas finanças como nosso hub de controle!
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" type="text" {...register('name')} placeholder="Digite seu nome" />
              {errors.name && <FormMenssage>{errors.name?.message}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder="Digite seu e-mail"
              />
              {errors.email && <FormMenssage>{errors.email?.message}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Seu celular</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder="Digite seu celular"
              />
              {errors.phone && <FormMenssage>{errors.phone?.message}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="createPassword">Crie uma senha</Label>
              <Input
                id="createPassword"
                type="password"
                {...register('createPassword')}
                placeholder="Crie uma senha"
              />
              {errors.createPassword && (
                <FormMenssage>{errors.createPassword?.message}</FormMenssage>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirme sua senha</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                placeholder="Confirme sua senha"
              />
              {errors.confirmPassword && (
                <FormMenssage>{errors.confirmPassword?.message}</FormMenssage>
              )}
            </div>

            <Button disabled={isSubmitting || !isValid} className="w-full" type="submit">
              Finalizar cadastro
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
