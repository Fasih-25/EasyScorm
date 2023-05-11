import {React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
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
  CCollapse,
  CNavbarToggler,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'
import  logo  from '../assets/images/scorm.svg'
import NavDropDown from './header/NavDropDown'

const Navbar = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [visible, setVisible] = useState(false)
  return (
    // <CHeader position="sticky" className=" bg-light border-bottom-3 border-dark">
    //   <CContainer fluid>
    //   <CNavbarToggler
    //       aria-label="Toggle navigation"
    //       aria-expanded={visible}
    //       onClick={() => setVisible(!visible)}
    //     />
    //     <CCollapse className="navbar-collapse" visible={visible}>
    //     <img src={logo} height={35} alt="Logo" />
    //     <CHeaderNav className="ms-3 align-items-center">
    //     <p className='fw-bold mb-0'>Daren Zack</p>  
    //       <AppHeaderDropdown />
    //     </CHeaderNav>
    //     </CCollapse>
    //   </CContainer>
    // </CHeader>
    <CNavbar expand="lg" colorScheme="transparent" className="bg-transparent pt-4 px-md-5 border border-bottom-2 border-top-0 border-end-0 border-start-0 border-dark">
      <CContainer fluid>
        <Link>
            <CNavbarBrand ><img src={logo} height={35} alt="Logo" /></CNavbarBrand>
        </Link>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
          <CNavbarNav className="mt-3 mt-lg-0 mb-2 mb-lg-0">
            <CHeaderNav className="ms-3 align-items-center">
                <p className='fw-bold mb-0 me-3'>Daren Zack</p>  
                <NavDropDown />
            </CHeaderNav>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default Navbar
