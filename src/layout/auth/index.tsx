import { Outlet } from 'react-router-dom'

import Logo from '@/assets/images/logo.svg'
import Savings from '@/assets/images/Savings.svg'

// added copy

export default function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 antialiased">
      <div className="hidden
      lg:flex h-full flex-col justify-between border-r bg-muted border-foreground/ p-10 text-muted-foreground">
        <div className="flex items-center gap-1 text-lg font-medium text-foreground">
          <img src={Logo} alt="Logo" />
          <span className="font-semibold text-1xl">Hub</span>
        </div>
        <div className="w-lg self-center">
          <img src={Savings} alt="Savings" />
        </div>
        <footer className="text-sm">
          Todos os direitos reservados &copy; LR Hub - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center ">
        <Outlet />
      </div>
    </div>
  )
}
