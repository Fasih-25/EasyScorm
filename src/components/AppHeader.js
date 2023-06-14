import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import store from 'src/store'
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
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import  logo  from '../assets/images/avatars/scormNewFigma.svg'

const AppHeader = (props) => {
    const state = store.getState();
  const user = state.user;
  const dispatch = useDispatch()
  // console.log(props.user);
  const sidebarShow = useSelector((state) => state.sidebarShow)
  
  return (
    <CHeader position="sticky" className="mb-3">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/dashboard">
          <img src={logo} height={35} alt="Logo" />
          {/* <img src={logo} /> */}
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/students" component={NavLink}>Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink to="/settings" component={NavLink}>Settings</CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3 align-items-center">
          <p className='fw-bold mb-0'>{(props.user) ? props.user.full_name : ""}</p>
          <AppHeaderDropdown  user = {(props.user) ? props.user : ""}/>
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
