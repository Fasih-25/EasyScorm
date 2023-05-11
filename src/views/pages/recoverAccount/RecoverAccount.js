import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormText,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAt, cilLockLocked, cilUser } from '@coreui/icons'
import LogoSvg from '../../../assets/images/scorm.svg';
import Navbar from '../../../components/Navbar'

const RecoverAccount = () => {
  return (
    <>
    <div className='bg-light'>
    <Navbar />
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        {/* <div className='d-flex justify-content-center mb-5'><img src={LogoSvg}  height={35} /></div> */}
        <CRow className="justify-content-center">
          <CCol lg={5}>
            <CCardGroup>
              <CCard className="p-4 backgroundColor">
                <CCardBody>
                  <CForm>
                    <h3  className='text-center mb-3 '>Recover your account</h3>
                    <p className='text-center mb-4 '>Enter your email id to recover your account</p>

                    <CCardText className='h6 mb-3'>Email</CCardText>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAt} />
                      </CInputGroupText>
                      <CFormInput  type='email' placeholder="Email Address" autoComplete="Emailaddress" className='py-3' required/>
                    </CInputGroup>
                    <CRow  >
                      <CCol className='d-flex justify-content-end'>
                        <Link to="/">
                          <CButton color="primary" className="px-4">
                            Submit
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </div>
    </>
  )
}

export default RecoverAccount
