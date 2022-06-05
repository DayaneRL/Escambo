import React,{useContext} from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilAccountLogout,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { AuthContext } from "../../contexts/auth";
import avatar8 from './../../assets/images/avatars/8.jpg'
import avatar from '../../assets/avatar.png';

const AppHeaderDropdown = () => {
  const {user, sair} = useContext(AuthContext);

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        {user.avatarUrl === null ? 
          <CAvatar src={avatar} size="md" />
          :    
          <CAvatar src={user.avatarUrl} size="md" />
        }
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Conta</CDropdownHeader>
        
        <CDropdownItem href="#/chat">
          <CIcon icon={cilEnvelopeOpen} className="me-2" />
          Mensagens
          <CBadge color="success" className="ms-2">
            42
          </CBadge>
        </CDropdownItem>
        
        <CDropdownHeader className="bg-light fw-semibold py-2">Configurações</CDropdownHeader>
        <CDropdownItem href="#/perfil">
          <CIcon icon={cilUser} className="me-2" />
          Perfil
        </CDropdownItem>
        <CDropdownItem href="#/perfil">
          <CIcon icon={cilSettings} className="me-2" />
          Configurações
        </CDropdownItem>
        
        <CDropdownDivider />
        <CDropdownItem href="#" onClick={()=>sair()}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          Sair
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
