import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Button } from '@/shared/components/Atoms'
import { FormMenssage, Input, Label } from '@/shared/components/Atoms/Form'
import { useAuthContext } from '@/shared/contexts/AuthContext'
import { Link, useNavigate } from '@tanstack/react-router'
import { schemaSignIn, type TypeSchemaSignIn } from './schema'
import { useTranslation } from 'react-i18next'

export default function SignIn() {
  const { t } = useTranslation()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<TypeSchemaSignIn>({
    resolver: zodResolver(schemaSignIn),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const navigate = useNavigate()
  const { signIn } = useAuthContext()

  async function handleSignIn(data: TypeSchemaSignIn) {
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
          <Link to="/sign-up">{t('auth.create_account')}</Link>
        </Button>

        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{t('auth.sign_in.title')}</h1>
            <p className="text-sm text-muted-foreground">{t('auth.sign_in.description')}</p>
          </div>

          <form className="space-y-4 w-full" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.sign_in.inputs.email.label')}</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder={t('auth.sign_in.inputs.email.placeholder')}
              />
              {errors.email && <FormMenssage>{errors.email?.message}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('auth.sign_in.inputs.password.label')}</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                placeholder={t('auth.sign_in.inputs.password.placeholder')}
              />
              {errors.password && <FormMenssage>{errors.password?.message}</FormMenssage>}
            </div>

            <Button disabled={isSubmitting || !isValid} className="w-full" type="submit">
              {t('auth.sign_in.button')}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
