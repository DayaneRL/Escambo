import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilMenu } from '@coreui/icons'
import { AuthContext } from "../contexts/auth";
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
// import { logo } from '../../src/assets/brand/logo'
import  logo  from '../assets/images/logo2.png'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const {signed} = useContext(AuthContext);

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
          <img src={logo} height={40} className="m-4"/>
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Ínicio
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/quem-somos" component={NavLink}>Quem Somos</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/ecopontos" component={NavLink}>Ecopontos</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            {signed && (
              <CNavLink href="#">
                <CIcon icon={cilBell} size="lg" />
              </CNavLink>
            )}
          </CNavItem>
          <CNavItem>
            {signed && (
              <CNavLink href="#">
                <CIcon icon={cilEnvelopeOpen} size="lg" />
              </CNavLink>
            )}
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          {signed && (
          <AppHeaderDropdown />
          )}
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      <CContainer fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
