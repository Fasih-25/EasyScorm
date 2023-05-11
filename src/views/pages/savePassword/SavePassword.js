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
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import LogoSvg from '../../../assets/images/scorm.svg';

const SavePassword = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div className='d-flex justify-content-center mb-5'><img src={LogoSvg}  height={35} /></div>
        <CRow className="justify-content-center">
          <CCol lg={5}>
            <CCardGroup>
              <CCard className="p-4 backgroundColor">
                <CCardBody>
                  <CForm>
                    <h5  className='text-center mb-4 '>Save Password</h5>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="New Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="ReTypePassword"
                        placeholder="Re-Type New Password"
                        autoComplete="ReTypePassword"
                      />
                    </CInputGroup>
                    <CRow  >
                      <CCol className='d-flex justify-content-end'>
                        <Link to="/signin">
                          <CButton color="primary" className="px-4">
                            Save
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
  )
}

export default SavePassword
