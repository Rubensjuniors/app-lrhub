import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/common'
import { FormMenssage, Input, Label } from '@/components/common/Form'
import { Heading } from '@/components/common/Heading'
import { Text } from '@/components/common/Text'
import { useAuthContext } from '@/context/AuthContext'

const signInForm = z.object({
  email: z.string().email('invalid_email'),
  password: z.string().min(8, 'max_eight_characters'),
})

type SignInForm = z.infer<typeof signInForm>

export default function SignIn() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()[0]
  const email = searchParams.get('email') ?? ''

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
  const navigate = useNavigate()
  const { signIn } = useAuthContext()

  async function handleSignIn(data: SignInForm) {
    const { email, password } = data
    try {
      await signIn(email, password)

      navigate('/')
      reset()
    } catch (error: unknown) {
      console.error(error)
      toast.error('Credenciais inválidas.', {
        description: 'Verifique se o e-mail ou Senha estão corretos.',
      })
    }
  }

  return (
    <>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-up" className="cursor-pointer"> {t('login.sign_in.create_account')}</Link>
        </Button>

        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <Heading size="h5" weight="semibold" className="tracking-tight" align="center">
              {t('login.sign_in.title')}
            </Heading>
            <Text size="xs" align="center" color="muted">
              {t('login.sign_in.description')}
            </Text>
          </div>

          <form className="space-y-4 w-full" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">{t('login.sign_in.inputs.email.label')}</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder={t('login.sign_in.inputs.email.placeholder')}
                hasError={!!errors.email}
              />
              {errors.email && (
                <FormMenssage>
                  {t(`login.sign_in.inputs.email.errors.${errors.email?.message}`)}
                </FormMenssage>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('login.sign_in.inputs.password.label')}</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                placeholder={t('login.sign_in.inputs.password.placeholder')}
                hasError={!!errors.password}
              />
              {errors.password && (
                <FormMenssage>
                  {t(`login.sign_in.inputs.password.errors.${errors.password?.message}`)}
                </FormMenssage>
              )}
            </div>

            <Button disabled={isSubmitting || !isValid} className="w-full" type="submit">
              {t('general.sign_in')}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
