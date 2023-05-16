import {React, useState} from 'react'
import { Link } from 'react-router-dom'
import {
    CButton,
    CCard,
    CCardBody,
    CCardGroup,
    CCardImage,
    CCardTitle,
    CCardText,
    CCol,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CRow,
  } from '@coreui/react'

import ReactImg from "../assets/images/danial-igdery-FCHlYvR5gJI-unsplash.jpg"
import EditCourse from './EditCourse'
export default function CourseCard() {
    const[buttonPopup, setButtonPopup] = useState(false);
    const handleOnClose = () => setButtonPopup(false)
  return (
    <div className="mb-4">
      <CCard style={{ width: "18rem" }}>
        <CCardImage orientation="top" src={ReactImg} />
        <CCardBody>
          <CCardTitle>Java Programming</CCardTitle>
          <CCardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CCardText>
          <div className="d-flex justify-content-end">
            <CButton  color="info" onClick={() => setButtonPopup(true)} style={{ width: "80px" , color: "white" , marginRight: "5px"}}>Edit</CButton>
            <Link to="/"><CButton  color="danger" style={{ width: "80px", color: "white" }}>Delete</CButton></Link>
          </div>
        </CCardBody>
      </CCard>
      <EditCourse trigger={buttonPopup} onClose={handleOnClose} />
    </div>
  );
}
