import { Button } from '@/components/ui/Button'
import { useAuth } from '@/context/AuthContext'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  Card,
  // CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'

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
        <CardHeader>
          <CardTitle>Criar Conta</CardTitle>
        </CardHeader>
        <CardFooter className="flex items-center gap-3">
          <Button variant="link" onClick={handleSingIn}>Entrar</Button>
          <Button onClick={handleSingUp}>Criar Conta</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
