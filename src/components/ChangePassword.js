import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCut, cilLockLocked, cilUser, cilXCircle } from '@coreui/icons'

export default function ChangePassword({trigger, onClose}) {
    let navigate = useNavigate();
    const handleOnClose = (e) => {
        if(e.target.id ==='myModal') onClose();
    };
    const Close = (e) => {
        onClose();
      };
      function handleAddCourse()
      {
        navigate("/campaign");
      }
  return (trigger) ? (
    <div>
        <div id="myModal" className="modal d-flex p-0 z-1 position-fixed pt-5 bg-light bg-opacity-75" onClick={handleOnClose}>

            {/* <!-- Modal content --> */}
            
            <div className="modal-content bg-transparent m-auto w-75 border-0 ">
                    <div className="modalbodySection">
                        <CCard className="p-4 backgroundColor">   
                                <div className='d-flex justify-content-end'>
                                    <CIcon icon={cilXCircle} onClick={Close} width={20} className='2xl'/>
                                </div>
                            <CCardBody>
                                <CRow  className='justify-content-center'>
                                    <CCol md={6} >
                                        <CForm >
                                            <h5  className='text-center mb-5 '>Change Password</h5>
                                                <CInputGroup className="mb-4">
                                                    <CInputGroupText>
                                                        <CIcon icon={cilLockLocked} />
                                                    </CInputGroupText>
                                                    <CFormInput
                                                        type="Password"
                                                        placeholder="Current Password"
                                                        autoComplete="CurrentPassword"
                                                    />
                                                </CInputGroup>
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
                                                        type="Password"
                                                        placeholder="Re-Type New Password"
                                                        autoComplete="ReTypePassword"
                                                    />
                                                </CInputGroup>
                                                
                                                <div className='d-flex justify-content-end'>
                                                    <Link to="/Home">
                                                    <CButton color="primary" className="px-4 mx-2">
                                                        Save
                                                    </CButton>
                                                    </Link>
                                                </div>    
                                        </CForm>
                                    </CCol>
                                </CRow>
                            </CCardBody>
                        </CCard>
                    </div>
            </div>
        </div>
    </div>
  ) : "";
}
