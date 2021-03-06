import React,{useContext} from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { AuthContext } from "../contexts/auth";
import { CBadge } from '@coreui/react'

export const AppSidebarNav = ({ items }) => {
  const location = useLocation()
  const {signed, user} = useContext(AuthContext);

  const navLink = (name, icon, badge) => {
    return (
      <>
        {icon && icon}
        {name && name}
        {badge && (
          <CBadge color={badge.color} className="ms-auto">
            {badge.text}
          </CBadge>
        )}
      </>
    )
  }

  const navItem = (item, index) => {
    const { component, name, badge, icon, role, ...rest } = item
    const Component = component
    return (
      <div key={index}>
        {((role==='User' && signed) || (role==='Guest' && !signed) || role==='Normal' ||
          (user && role==='Admin' && user.email==="admin@admin.com") ) && (
          <Component
          {...(rest.to &&
            !rest.items && {
              component: NavLink,
            })}
            key={index}
            {...rest}
            >
          {navLink(name, icon, badge)}
        </Component>
        )}
      </div>
      )
  }
  const navGroup = (item, index) => {
    const { component, name, icon, to, role, ...rest } = item
    const Component = component
    return (
      <div key={index}>
      {(role==='Guest' && !signed) && (
      <Component
        idx={String(index)}
        key={index}
        toggler={navLink(name, icon)}
        visible={location.pathname.startsWith(to)}
        {...rest}
      >
        {item.items?.map((item, index) =>
          item.items ? navGroup(item, index) : navItem(item, index),
        )}
      </Component>
      )}
      </div>
    )
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => (item.items ? navGroup(item, index) : navItem(item, index)))}
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
