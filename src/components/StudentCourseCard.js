import React from 'react'
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCardTitle,
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
import SideImage from '../assets/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg';

const StudentCourseCard = () => {
  const progressBarRef = useRef(null);
  var progressVal = '0'
  useEffect(() => {
    progressBarRef.current.style.setProperty('--progress-value', progressVal);
  }, []);
  return (
        <CRow className="justify-content-center mb-4 courseCard">
            <CCol md={6} className='h-100'>
              <CCard className="text-white border border-0 h-100" >
                <CCardBody className="p-0">
                        <img src={SideImage} className=' w-100  courseThumnail'/>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md={6}>
              <CCard className="p-4 h-100  backgroundColor">
                <CCardBody className=" ">
                  <CCardTitle className='h3 fw-bold mb-4'>
                      Ui/Ux Design
                  </CCardTitle>
                  <CCardText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque cum molestiae voluptate tenetur! Recusandae ut iste porro nesciunt provident. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima consequuntur assumenda est dolores in, incidunt adipisci error quis animi perspiciatis.
                  </CCardText>
                  <CCardGroup className='d-flex align-items-center mt-3'>
                    <CButton color='transparent ' className=' border border-2 border-dark  px-5  fs-5 fw-semibold '>
                      Start
                    </CButton> 
                    <div class="progress-bar js mx-4" ref={progressBarRef}>
                        {/* <progress id="js" min="0" max="100" value="73"></progress> */}
                        {progressVal}%
                    </div>
                  </CCardGroup> 
                </CCardBody>
              </CCard>
            </CCol>
        </CRow>
  )
}

export default StudentCourseCard
