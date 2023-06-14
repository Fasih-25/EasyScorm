import {React, useState} from 'react'
import {
    CButton,
    CCard,
    CCardBody,
    CCardImage,
    CCardTitle,
    CCardText,
  } from '@coreui/react'

import EditCourse from './EditCourse'
import Global from 'src/Global';

export default function CourseCard(props) { 
    const[buttonPopup, setButtonPopup] = useState(false);
    const handleOnClose = () => setButtonPopup(false)

    async function handleDeleteCourse(courseId) {
      try {
        const response = await Global.deleteCourse(courseId);
        if (response.message === "course has been deleted") {
          alert("Course has been deleted successfully");
  
          props.setBan((variable) => variable + 1);
        } else {
          alert("Course Not Deleted");
          console.log("Course Not Deleted");
        }
      } catch (err) {
        console.log(err);
      }
    }

    
  return (
    <div className={(props.status == 0) ? "d-none" : "mb-4 mx-4"}>
      <CCard style={{ width: "18rem" , height: "100%"}}>
        <CCardImage orientation="top" src={(props.coverImage) ? props.coverImage : ""} height={250} alt="Cover Image"/>
      
        <CCardBody className='d-flex flex-column justify-content-between'>
          <div className='d-flex flex-column mb-2'>
            <CCardTitle>{props.courseName}</CCardTitle>
            <CCardText>{props.description}</CCardText>
          </div>
          <div className="d-flex justify-content-end">
            <CButton  color="info" onClick={() => setButtonPopup(true)} style={{ width: "80px" , color: "white" , marginRight: "5px"}}>Edit</CButton>
            <CButton onClick={() => handleDeleteCourse(props.id)} color="danger" style={{ width: "80px", color: "white" }}>Delete</CButton>
          </div>
        </CCardBody>
      </CCard>
      <EditCourse trigger={buttonPopup} onClose={handleOnClose} details = {props}/>
    </div>
  );
}
