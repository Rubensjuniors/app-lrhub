import { Button, Card } from '@/components/Atoms'
import { useAuth } from '@/context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'

export default function SingIn() {
  const { login, isAuthenticated } = useAuth()
  const navigate = useNavigate()

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const handleSingUp = () => {
    login()
    navigate('/')
  }
  const handleSingIn = () => {
    navigate('/login/singin')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-svh">
      <Card className="w-[350px]">
        <Card.Header>
          <Card.Title>Criar Conta</Card.Title>
        </Card.Header>
        <Card.Footer className="flex items-center gap-3">
          <Button variant="link" onClick={handleSingIn}>
            Entrar
          </Button>
          <Button onClick={handleSingUp}>Criar Conta</Button>
        </Card.Footer>
      </Card>
    </div>
  )
}
