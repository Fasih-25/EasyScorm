import React from "react";
import {useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CForm,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CRow,
} from "@coreui/react";
import { useState } from "react";
import Global from "src/Global";

export default function EditCourse({ trigger, onClose, details }) {
  let navigate = useNavigate();
  const [courseName, setCourseName] = useState(details.courseName);
  const [courseId, setCourseID] = useState(details.id);
  const [courseDescription, setCourseDescription] = useState( details.description);
  const [picture, setPicture] = useState(details.coverImage);
  const [filezip, setFilezip] = useState(details.zipPath);
  const id = details.ownerId
  let item = {id, courseId, courseName, courseDescription, picture, filezip}
 
  const handleOnClose = (e) => {
    if (e.target.id === "myModal") onClose();
  };
  
  const Close = (e) => {
    onClose();
  };

  let handleEditCourse = async (e) => {
    e.preventDefault();  
    try {
      const response = await Global.editCourse(item)
      if(response.message == "Course edited successfully"){
        alert("Course edited successfully")
        navigate("/courses",{state:item})
        onClose();
      }
      else{
        alert("something went wrong")
        console.log("something went wrong",response)
      }
      } catch (err) {
        console.log(err);
      }
  };

  return trigger ? (
    <div>
      <div
        id="myModal"
        className="modal d-flex p-0 z-1 position-fixed pt-5 bg-white bg-opacity-75"
        onClick={handleOnClose}
      >
        {/* <!-- Modal content --> */}

        <div className="modal-content bg-transparent m-auto w-75 border-0 ">
          <div className="modalbodySection">
            <h5>Edit Course</h5>
            <CCard className="p-4">
              <CCardBody>
                <CForm onSubmit={handleEditCourse}>
                  {/* <h1>Login</h1> */}
                  <p className=" text-dark mb-2">Course Title</p>
                  <CInputGroup className="mb-4">
                    <CFormInput value={courseName} onChange={(e)=>setCourseName(e.target.value)} autoComplete="username" type="text" />
                  </CInputGroup>

                  <p className="text-dark mb-2">Course Description</p>
                  <CInputGroup className="mb-4">
                    <CFormTextarea value={courseDescription} onChange={(e)=>setCourseDescription(e.target.value)} type="text" style={{ height: "100px" }} />
                  </CInputGroup>

                  <p className=" text-dark mb-2">Course Photo</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput 
                                    type="file" 
                                    id='coursephoto' 
                                    accept="image/jpg, image/jpeg, image/png"
                                    onChange={(e) => setPicture(e.target.files[0])}
                                    />
                                </CInputGroup>

                                <p className="text-dark mb-2">Upload Scorm Package (zip file) </p>
                                <CInputGroup className="mb-4">
                                    <CFormInput 
                                    type="file" 
                                    id='courseZipFile'
                                    accept=".zip"
                                    onChange={(e)=>setFilezip(e.target.files[0])}
                                    // onChange={handleFileReader}
                                    />
                                </CInputGroup>
                  <div className="d-flex justify-content-end">
                    <CButton
                      type = 'submit'
                      color="primary"
                      className="px-4 mx-2"
                    >
                      Save Changes
                    </CButton>
                    <CButton
                      color="secondary"
                      className="px-3 text-white"
                      onClick={Close}
                    >
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
  ) : (
    ""
  );
}
