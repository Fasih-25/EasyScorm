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
import { cilLockLocked, cilUser } from '@coreui/icons'

export default function AddCourse({trigger, onClose}) {
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
        <div id="myModal" className="modal d-flex p-0 z-1 position-fixed pt-5 bg-white bg-opacity-75" onClick={handleOnClose}>

            {/* <!-- Modal content --> */}
            
            <div className="modal-content bg-transparent m-auto w-75 border-0 ">
                    <div className="modalbodySection">  
                        <h5>Add Course</h5>
                        <CCard className="p-4">
                            <CCardBody>
                            <CForm>
                                {/* <h1>Login</h1> */}
                                <p className=" text-dark mb-2">Course Title</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput autoComplete="username" type="text" />
                                </CInputGroup>

                                <p className="text-dark mb-2">Course Description</p>
                                <CInputGroup className="mb-4">
                                    <CFormTextarea
                                        type="text"
                                        style={{height:"100px"}}
                                    />
                                </CInputGroup>
                                
                                <p className=" text-dark mb-2">Course Photo</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput type="file" id='coursephoto'/>
                                </CInputGroup>

                                <p className="text-dark mb-2">Upload Scorm Package (zip file) </p>
                                <CInputGroup className="mb-4">
                                    <CFormInput type="file" id='courseZipFile'/>
                                </CInputGroup>
                                    <div className='d-flex justify-content-end'>
                                        <Link to="/Home">
                                        <CButton color="primary" className="px-4 mx-2">
                                            Save Changes
                                        </CButton>
                                        </Link>
                                        <CButton color="secondary" className="px-3 text-white" onClick={Close}>
                                            Cancel
                                        </CButton>
                                    </div>    
                            </CForm>
                            </CCardBody>
                        </CCard>
                    </div>
            </div>
        </div>
    </div>
  ) : "";
}
