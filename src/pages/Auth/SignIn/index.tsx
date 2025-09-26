import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import z from 'zod'

import { Button, FormMenssage, Input, Label } from '@/shared/components/Atoms'
import { useAuthContext } from '@/shared/contexts/AuthContext'

const signInForm = z.object({
  email: z.email('EMAIL_01'),
  password: z.string().min(8, 'PASSWORD_01'),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const { t } = useTranslation()
  const { signIn } = useAuthContext()
  const navigate = useNavigate()
  const { email } = useSearch({
    strict: false,
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<SignInForm>({
    resolver: zodResolver(signInForm),
    defaultValues: {
      email,
      password: '',
    },
  })

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
    <div>
      <form className="space-y-4 w-full" onSubmit={handleSubmit(handleSignIn)}>
        <div className="space-y-2">
          <Label htmlFor="email">{t('auth.sign.email.label')}</Label>
          <Input
            className="py-6"
            id="email"
            type="email"
            {...register('email')}
            placeholder={t('auth.sign.email.placeholder')}
          />
          {errors.email && <FormMenssage>{t(`errors.${errors.email?.message}`)}</FormMenssage>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="password">{t('auth.sign.password.label')}</Label>
          <Input
            className="py-6"
            id="password"
            type="password"
            {...register('password')}
            placeholder={t('auth.sign.password.placeholder')}
          />
          {errors.password && <FormMenssage>{t(`errors.${errors.email?.message}`)}</FormMenssage>}
        </div>

        <Button
          variant="default"
          disabled={isSubmitting || !isValid}
          className="w-full rounded-full"
          type="submit"
        >
          {t('auth.sign.in')}
        </Button>
      </form>
    </div>
  )
}
