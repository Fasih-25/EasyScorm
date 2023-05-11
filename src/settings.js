import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import { AppContent, AppSidebar, AppFooter, AppHeader } from './components/index'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCardTitle,
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
import CourseCard from './components/CourseCard'
import AddCourse from './components/AddCourse'
const Settings = () => {
    const[buttonPopup, setButtonPopup] = useState(false);
    const handleOnClose = () => setButtonPopup(false)
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-4">
        <CCard className="p-4">
                            <CCardBody>
                            <CForm>
                                <CCardTitle className='h4 mb-3'>Portal Info</CCardTitle>

                                <p className=" text-dark mb-2">Portal Title</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput autoComplete="username" type="text" />
                                </CInputGroup>

                                <p className=" text-dark mb-2">Logo</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput type="file" id='logoPhoto'/>
                                </CInputGroup>
                                
                                <CCardTitle className='h4 mt-5 mb-3'>Your Info</CCardTitle>
                                
                                <p className=" text-dark mb-2">Profile Picture</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput type="file" id='profilePicture'/>
                                </CInputGroup>

                                <p className=" text-dark mb-2">Full Name</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput autoComplete="username" type="text" />
                                </CInputGroup>

                                <p className=" text-dark mb-2">About</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput autoComplete="username" type="text" />
                                </CInputGroup>

                                <p className=" text-dark mb-2">Email address</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput autoComplete="username" type="Email" />
                                </CInputGroup>

                                <div className='d-flex justify-content-end'>
                                    <Link to="/Home">
                                    <CButton color="primary" className="px-4 mx-2">
                                        Save Changes
                                    </CButton>
                                    </Link>
                                    <Link to="/">
                                    <CButton color="secondary" className="px-3 text-white">
                                        Cancel
                                    </CButton>
                                    </Link>
                                </div>    
                            </CForm>
                            </CCardBody>
                        </CCard>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default Settings

