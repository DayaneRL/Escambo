import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Graficos = React.lazy(() => import('./views/Graficos'))
const QuemSomos = React.lazy(() => import('./views/QuemSomos'))
const Troca = React.lazy(() => import('./views/Troca'))
const Doacao = React.lazy(() => import('./views/Doacao'))
const Venda = React.lazy(() => import('./views/Venda'))
const Chat = React.lazy(() => import('./views/Chat'))
const MeuPerfil = React.lazy(() => import('./views/MeuPerfil'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/graficos', name: 'Graficos', element: Graficos },
  { path: '/quem-somos', name: 'QuemSomos', element: QuemSomos },
  { path: '/troca', name: 'Troca', element: Troca },
  { path: '/doacao', name: 'Doacao', element: Doacao },
  { path: '/venda', name: 'Venda', element: Venda },
  { path: '/chat', name: 'Chat', element: Chat },
  { path: '/perfil', name: 'MeuPerfil', element: MeuPerfil },
]

export default routes