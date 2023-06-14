import {React, useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import store from '../store';
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
import NavDropDown from './header/NavDropDown'

const Navbar = (props) => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const [visible, setVisible] = useState(false)

  return (
    <CNavbar expand="lg" className="bg-transparent py-3 px-md-5 border border-bottom-2 border-top-0 border-end-0 border-start-0 border-dark">
      <CContainer fluid>
        <Link className='text-decoration-none'>
        <div className="d-flex justify-content-center align-items-center ">
          <img src={props.portal[0] ? props.portal[0].logo : ""} height={30} />
          <h2 className="comicsans text-black mx-2 mb-0">
            {props.portal[0] ? props.portal[0].title : ""}
          </h2>
        </div>
        </Link>
        <CNavbarToggler
          aria-label="Toggle navigation"
          aria-expanded={visible}
          onClick={() => setVisible(!visible)}
        />
        <CCollapse className="navbar-collapse justify-content-end" visible={visible}>
          <CNavbarNav className="mt-3 mt-lg-0 mb-2 mb-lg-0">
            <CHeaderNav className="ms-3 align-items-center">
                <p className='fw-bold mb-0 me-3'>{props.user.full_name}</p>  
                <NavDropDown user={props.user}/>
            </CHeaderNav>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  )
}

export default Navbar
