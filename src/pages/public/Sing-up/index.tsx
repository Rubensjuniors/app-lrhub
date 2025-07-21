import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/common'
import { FormMenssage, Input, Label } from '@/components/common/Form'
import { useRegister } from '@/modules/Login/Mutations'

const signUpForm = z
  .object({
    name: z.string().min(3, 'min_three_characters').max(115, 'max_115_characters'),
    phone: z.string().optional(),
    email: z.string().email('invalid_email'),
    createPassword: z.string().min(8, 'max_eight_characters'),
    confirmPassword: z.string().min(8, 'max_eight_characters'),
  })
  .refine((data) => data.createPassword === data.confirmPassword, {
    message: 'passwords_do_not_match',
    path: ['confirmPassword'],
  })

type SignUpForm = z.infer<typeof signUpForm>

export default function SignUp() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors, isValid },
    reset,
  } = useForm<SignUpForm>({
    resolver: zodResolver(signUpForm),
  })
  const { mutateAsync: registerUser } = useRegister()

  async function handleSignUp(data: SignUpForm) {
    if (!isValid) {
      return
    }

    try {
      const paramsData = {
        name: data.name,
        email: data.email,
        password: data.createPassword,
        phone: data.phone || '',
        urlCoverPhoto: '',
      }

      await registerUser(paramsData)

      navigate(`/sign-in?email=${data.email}`)
      reset()
    } catch (error: unknown) {
      console.error(error)
      toast.error('Erro ao cadastrar restaurante.')
    }
  }

  return (
    <>
      <div className="p-8">
        <Button variant="ghost" asChild className="absolute right-8 top-8">
          <Link to="/sign-in" className="cursor-pointer">{t('login.sign_in.title')}</Link>
        </Button>

        <div className="flex w-full max-w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">{t('login.sign_up.title')}</h1>
            <p className="text-sm text-muted-foreground">{t('login.sign_up.description')}</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="name">{t('login.sign_up.inputs.name.label')}</Label>
              <Input
                id="name"
                type="text"
                {...register('name')}
                placeholder={t('login.sign_up.inputs.name.placeholder')}
                hasError={!!errors.name}
              />
              {errors.name && (
                <FormMenssage>
                  {t(`login.sign_up.inputs.name.errors.${errors.name?.message}`)}
                </FormMenssage>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t('login.sign_up.inputs.email.label')}</Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                placeholder={t('login.sign_up.inputs.email.placeholder')}
                hasError={!!errors.email}
              />
              {errors.email && (
                <FormMenssage>
                  {t(`login.sign_up.inputs.email.errors.${errors.email?.message}`)}
                </FormMenssage>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t('login.sign_up.inputs.phone.label')}</Label>
              <Input
                id="phone"
                type="tel"
                {...register('phone')}
                placeholder={t('login.sign_up.inputs.phone.placeholder')}
                hasError={!!errors.phone}
              />
              {errors.phone && <FormMenssage>{errors.phone?.message}</FormMenssage>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="createPassword">
                {t('login.sign_up.inputs.create_password.label')}
              </Label>
              <Input
                id="createPassword"
                type="password"
                {...register('createPassword')}
                placeholder={t('login.sign_up.inputs.create_password.placeholder')}
                hasError={!!errors.createPassword}
              />
              {errors.createPassword && (
                <FormMenssage>
                  {t(
                    `login.sign_up.inputs.create_password.errors.${errors.createPassword?.message}`,
                  )}
                </FormMenssage>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                {t('login.sign_up.inputs.confirm_password.label')}
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...register('confirmPassword')}
                placeholder={t('login.sign_up.inputs.confirm_password.placeholder')}
                hasError={!!errors.confirmPassword}
              />
              {errors.confirmPassword && (
                <FormMenssage>
                  {t(
                    `login.sign_up.inputs.confirm_password.errors.${errors.confirmPassword?.message}`,
                  )}
                </FormMenssage>
              )}
            </div>

            <Button disabled={isSubmitting} className="w-full" type="submit">
              {t('login.sign_up.submit')}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
