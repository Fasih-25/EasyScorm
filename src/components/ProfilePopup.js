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

export default function ProfilePopup({trigger, onClose}) {
    let navigate = useNavigate();
    const handleOnClose = (e) => {
        if(e.target.id ==='myModal') onClose();
    };
    const Close = (e) => {
        onClose();
      }
  return (trigger) ? (
    <div>
        <div id="myModal" className="modal d-flex p-0 z-1 position-fixed pt-5 bg-light bg-opacity-75" onClick={handleOnClose}>

            {/* <!-- Modal content --> */}
            
            <div className="modal-content bg-transparent m-auto w-75 border-0 ">
                    <div className="modalbodySection">
                    <h4>Profile</h4>
                        <CCard className="p-4 backgroundColor">   
                                <div className='d-flex justify-content-end'>
                                    <CIcon icon={cilXCircle} onClick={Close} width={20} className='2xl'/>
                                </div>
                            <CCardBody>
                                <CRow  className='justify-content-center'>
                                    <CCol md={12} >
                                    <CForm>
                                        {/* <h1>Login</h1> */}  
                                        <h6 className=" text-dark mb-2">I'd Num</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="idNum" type="text" required/>
                                        </CInputGroup>

                                        <h6 className=" text-dark mb-2">Full Name</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="FullName" type="text" required/>
                                        </CInputGroup>
                                        
                                        <h6 className=" text-dark mb-2">Email Address</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="EmailAddress" type="email" placeholder='tennison54@gmail.com' required/>
                                        </CInputGroup>

                                        <h6 className="text-dark mb-2">Phone</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="idNum" type="phone" required/>
                                        </CInputGroup>

                                        <h6 className=" text-dark mb-2">Country</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="idNum" type="text"  required/>
                                        </CInputGroup>

                                            <div className='d-flex justify-content-end'>
                                                {/* <Link to="/Home"> */}
                                                <CButton color="primary" className="px-4 mx-2" type='submit' >
                                                   <Link to="/" className='text-decoration-none text-white'>  Save</Link>
                                                </CButton>
                                                {/* </Link> */}
                                                <CButton color="secondary" className="px-3 text-white" onClick={Close}>
                                                    Cancel
                                                </CButton>
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
