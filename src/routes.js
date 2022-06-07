import React from 'react'

const Dashboard = React.lazy(() => import('./views/Dashboard'))
const Graficos = React.lazy(() => import('./views/Graficos'))
const QuemSomos = React.lazy(() => import('./views/QuemSomos'))
const Ecopontos = React.lazy(() => import('./views/Ecopontos'))
const Troca = React.lazy(() => import('./views/Troca'))
const Doacao = React.lazy(() => import('./views/Doacao'))
const Venda = React.lazy(() => import('./views/Venda'))
const Chat = React.lazy(() => import('./views/Chat'))
const Perfil = React.lazy(() => import('./views/Perfil'))
const CadastrarAnuncio = React.lazy(() => import('./views/CadastrarAnuncio'))
const MeusAnuncios = React.lazy(() => import('./views/MeusAnuncios'))
const Anuncio = React.lazy(() => import('./views/Anuncio'))
const User = React.lazy(() => import('./views/User'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/graficos', name: 'Graficos', element: Graficos },
  { path: '/quem-somos', name: 'Quem Somos', element: QuemSomos },
  { path: '/ecopontos', name: 'Ecopontos', element: Ecopontos },
  { path: '/troca', name: 'Troca', element: Troca },
  { path: '/doacao', name: 'Doacao', element: Doacao },
  { path: '/venda', name: 'Venda', element: Venda },
  { path: '/chat', name: 'Chat', element: Chat },
  { path: '/perfil', name: 'Meu Perfil', element: Perfil },
  { path: '/cadastrar-anuncio', name: 'Cadastrar Anuncio', element: CadastrarAnuncio },
  { path: '/meus-anuncios', name: 'Meus Anuncios', element: MeusAnuncios },
  { path: "/anuncio/", name: 'Anuncio', element: Anuncio },
  { path: "/anuncio/:id", name: 'Visualizar', element: Anuncio },
  { path: "/usuarios/", name: 'Usuário', element: User },
  { path: "/usuarios/:id", name: 'Visualizar', element: User },
]

export default routes
