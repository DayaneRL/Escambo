import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilCog,
  cilDollar,
  cilSmile,
  cilChatBubble,
  cilHome,
  cilStar,
  cilLoopCircular,
  cilChart,
  cilPlus,
  cilUser,
  cilBadge
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Ínicio',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
    role: 'Normal'
  },
  {
    component: CNavItem,
    name: 'Gráficos',
    to: '/graficos',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
    role: 'Admin'
  },
  {
    component: CNavTitle,
    name: 'Anúncios',
    role: 'Normal'
  },
  {
    component: CNavItem,
    name: 'Troca',
    to: '/troca',
    icon: <CIcon icon={cilLoopCircular} customClassName="nav-icon" />,
    badge: {
      color: 'inf s-third',
      text: 'NOVO',
    },
    role: 'Normal'
  },
  {
    component: CNavItem,
    name: 'Doação',
    to: '/doacao',
    icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
    role: 'Normal'
  },
  {
    component: CNavItem,
    name: 'Vender',
    to: '/venda',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
    role: 'Normal'
  },
  {
    component: CNavItem,
    name: 'Cadastrar Anúncio',
    to: '/cadastrar-anuncio',
    icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
    role: 'User'
  },
  {
    component: CNavTitle,
    name: 'Conversas',
    role: 'User',
  },
  {
    component: CNavItem,
    name: 'Chat',
    to: '/chat',
    icon: <CIcon icon={cilChatBubble} customClassName="nav-icon" />,
    role: 'User',
  },
  {
    component: CNavTitle,
    name: 'Usuário',
    role: 'User',
  },
  {
    component: CNavItem,
    name: 'Meus Anúncios',
    to: '/meus-anuncios',
    icon: <CIcon icon={cilBadge} customClassName="nav-icon" />,
    role: 'User'
  },
  {
    component: CNavItem,
    name: 'Meu Perfil',
    to: '/perfil',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    role: 'User',
  },
  {
    component: CNavTitle,
    name: 'Convidado',
    role: 'Guest',
  },
      {
        component: CNavItem,
        name: 'Login',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        to: '/login',
        role: 'Guest',
      },
      {
        component: CNavItem,
        name: 'Cadastrar-se',
        icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
        to: '/register',
        role: 'Guest',
      },
]

export default _nav
