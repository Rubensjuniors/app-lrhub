import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'

export default function SingIn() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

   if (isAuthenticated) {
      return <Navigate to="/" replace />
    }

  const handleSingIn = () => {
    login()
    navigate('/financial')
  }
  const handleSingUp = () => {
    navigate('/login/singup')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Entrar na sua conta</CardTitle>
        </CardHeader>
        <CardContent>
          <form action="">
            <div className="space-y-2 mb-4">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" placeholder="E-mail" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Senha</Label>
              <Input id="password" placeholder="Senha" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex items-center gap-3">
          <Button onClick={handleSingIn}>Entrar</Button>
          <Button variant="link" onClick={handleSingUp}>Cadastra-se</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
