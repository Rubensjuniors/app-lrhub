import { DollarSign, LayoutDashboard, ListTodo } from 'lucide-react'

export const ItemsMenu = [
  {
    icon: <LayoutDashboard />,
    name: 'sidebar.hub',
    route: '/',
    isShow: true
  },
  {
    icon: <ListTodo />,
    name: 'sidebar.tasks',
    route: '/tasks',
    isShow: true
  },
  {
    icon: <DollarSign />,
    name: 'sidebar.financial',
    route: '/',
    isShow: false
  },
]
