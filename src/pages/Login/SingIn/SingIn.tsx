import { Button, Card, Input, Label } from '@/components/Atoms'
import { useAuth } from '@/context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

export default function SingIn() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const handleSingIn = () => {
    login()
    navigate('/')
  }
  const handleSingUp = () => {
    navigate('/login/singup')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card className="w-[350px]">
        <Card.Header>
          <Card.Title>Entrar na sua conta</Card.Title>
        </Card.Header>
        <Card.Content>
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
        </Card.Content>
        <Card.Footer className="flex items-center gap-3">
          <Button onClick={handleSingIn}>Entrar</Button>
          <Button variant="link" onClick={handleSingUp}>
            Cadastra-se
          </Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
