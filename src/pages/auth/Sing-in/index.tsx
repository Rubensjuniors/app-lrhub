import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/shared/components/Atoms'
import { FormMenssage, Input, Label } from '@/shared/components/Atoms/Form'
import { useAuthContext } from '@/shared/contexts/AuthContext'
import { Link, useNavigate } from '@tanstack/react-router'

// "larissa@exempla.com"
// "LariRub3011#"

const signInForm = z.object({
  email: z.string().email('E-mail inválido.'),
  password: z.string().min(8, 'Precisa ter no mínimo 8 caracteres.'),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {


  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const navigate = useNavigate()
  const { signIn } = useAuthContext()

  async function handleSignIn(data: SignInForm) {
    const { email, password } = data
    try {
      await signIn(email, password)

      navigate({ to: '/' })
      reset()
    } catch (error: unknown) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up">Criar conta</Link>
        </Button>

        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Faça login na sua conta</h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe seus gastos no seu hub de controle!
            </p>
          </div>

          <form className="space-y-4 w-full" onSubmit={handleSubmit(handleSignIn)}>
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
              <Label htmlFor="password">Senha</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                placeholder="Digite sua senha"
              />
              {errors.password && <FormMenssage>{errors.password?.message}</FormMenssage>}
            </div>

            <Button disabled={isSubmitting || !isValid} className="w-full" type="submit">
              Entrar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
