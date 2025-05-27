import { Navigate, useNavigate } from 'react-router-dom'

import { Button, Card } from '@/components/Atoms'

export default function SingIn() {
  const navigate = useNavigate()
  const isAuthenticated = false

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  const handleSingUp = () => {
    navigate('/')
  }
  const handleSingIn = () => {
    navigate('/sign-in')
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
