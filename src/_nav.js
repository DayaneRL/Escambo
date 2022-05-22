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
  cilChart
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Ínicio',
    to: '/dashboard',
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
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
    name: 'Anúncio',
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
  },
  {
    component: CNavItem,
    name: 'Doação',
    to: '/doacao',
    icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vender',
    to: '/venda',
    icon: <CIcon icon={cilDollar} customClassName="nav-icon" />,
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
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavTitle,
    name: 'Configurações',
    role: 'User',
  },
  {
    component: CNavItem,
    name: 'Meu Perfil',
    to: '/perfil',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    role: 'User',
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    role: 'User',
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
