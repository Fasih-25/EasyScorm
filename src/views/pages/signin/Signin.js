import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import LogoSvg from '../../../assets/images/scorm.svg';
import SideImage from '../../../assets/images/SinginSideImage.svg';

const Signin = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div className='d-flex justify-content-center mb-5 mt-5 mt-sm-0'><img src={LogoSvg}  height={35} /></div>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className='d-flex flex-column flex-sm-row'>
            <CCard className="text-white py-5 order-2 order-sm-1" >
                <CCardBody className="text-center">
                        <img src={SideImage} className='img-fluid'/>
                </CCardBody>
              </CCard>
              <CCard className="p-4 align-items-center backgroundColor order-1 order-sm-2">
                <CCardBody className="d-flex align-items-center">
                  <CForm>
                    <h5 className='text-center mb-4 '>Please sign in</h5>
                    {/* <p className="text-medium-emphasis">Sign In to your account</p> */}
                    <CInputGroup className="mb-0">
                      {/* <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText> */}
                      <CFormInput type='email' placeholder="Email Address" autoComplete="Emailaddress" className='py-3' required/>
                    </CInputGroup>
                    <CInputGroup className="mb-0">
                      {/* <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText> */}
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        className='py-3'
                        required
                      />
                    </CInputGroup>
                    <CRow className='align-items-center pb-2'>
                      <CCol xs={5}>
                        <CFormCheck id="checkboxNoLabel" value="" aria-label="Remember" label="Remember"/>
                      </CCol>

                      <CCol xs={7} className="text-right">
                        <Link to="/recoverAccount" type="submit" >
                          <CButton color="link" className="px-0 ">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                    <CRow>
                        <Link to="/Student_Home" type="submit" >
                            <CButton type="submit"  color="primary" className="px-4 w-100" to='/'>
                                Signin
                            </CButton>
                        </Link>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Signin
