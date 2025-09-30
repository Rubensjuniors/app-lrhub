import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from '@tanstack/react-router'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { Button } from '@/shared/components/Atoms'
import { FormMenssage, Input, Label } from '@/shared/components/Atoms/Form'

import { schemaSignUp, type TypeSchemaSignUp } from './schema'

export default function SignUp() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset
  } = useForm<TypeSchemaSignUp>({
    resolver: zodResolver(schemaSignUp)
  })

  async function handleSignUp(data: TypeSchemaSignUp) {
    try {
      const paramsData = {
        name: data.name,
        email: data.email,
        password: data.createPassword,
        urlCoverPhoto: ''
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
          <Link to="/sign-in">{t('auth.login')}</Link>
        </Button>

        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{t('auth.sign_up.title')}</h1>
            <p className="text-sm text-muted-foreground">{t('auth.sign_up.description')}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="name">{t('auth.sign_up.inputs.name.label')}</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                placeholder={t('auth.sign_up.inputs.name.placeholder')}
              />
              {errors.name && <FormMenssage>{t(errors.name?.message ?? '')}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('auth.sign_up.inputs.email.label')}</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder={t('auth.sign_up.inputs.email.placeholder')}
              />
              {errors.email && <FormMenssage>{t(errors.email?.message ?? '')}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="createPassword">{t('auth.sign_up.inputs.createPassword.label')}</Label>
              <Input
                id="createPassword"
                type="password"
                {...register('createPassword')}
                placeholder={t('auth.sign_up.inputs.createPassword.placeholder')}
              />
              {errors.createPassword && (
                <FormMenssage>{t(errors.createPassword?.message ?? '')}</FormMenssage>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">{t('auth.sign_up.inputs.confirmPassword.label')}</Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                placeholder={t('auth.sign_up.inputs.confirmPassword.placeholder')}
              />
              {errors.confirmPassword && (
                <FormMenssage>{t(errors.confirmPassword?.message ?? '')}</FormMenssage>
              )}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              {t('auth.sign_up.button')}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
