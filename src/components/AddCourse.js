import {React, useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
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
import store from 'src/store';
import Global from 'src/Global';

export default function AddCourse({trigger, onClose}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [picture, setPicture] = useState()
    const [filezip, setFilezip] = useState()
    const [photoMessage, setPhotoMessage] = useState("");
    const [message, setMessage] = useState("");
    let navigate = useNavigate();
    const state = store.getState();
    const user = state.user;
    const id =  user[0].id
    let item={id, title,description, picture,filezip}


    const handleOnClose = (e) => {
        if(e.target.id ==='myModal') onClose();
    };
    const Close = (e) => {
        onClose();
      };
      
      let handleAddCourse = async (e) =>
      {
        e.preventDefault();
        // console.log(item);
        const response = await Global.addCourse(item)
        // console.log(response);
        if(response.message == "Course added successfully"){
          alert("Course added successfully")
          navigate("/courses",{state:item})
          onClose();
        }
        else{
          alert("something went wrong")
          console.log("something went wrong",response)
        }
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
                            <CForm onSubmit={handleAddCourse}>
                                {/* <h1>Login</h1> */}
                                <p className=" text-dark mb-2">Course Title</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput 
                                    autoComplete="username" 
                                    type="text" 
                                    required 
                                    value={title}
                                    onChange={(e)=>setTitle(e.target.value)}
                                    />
                                </CInputGroup>

                                <p className="text-dark mb-2">Course Description</p>
                                <CInputGroup className="mb-4">
                                    <CFormTextarea
                                        required
                                        type="text"
                                        value={description}
                                        onChange={(e)=>setDescription(e.target.value)}
                                        style={{height:"100px"}}
                                    />
                                </CInputGroup>
                                
                                <p className=" text-dark mb-2">Course Photo</p>
                                <CInputGroup className="mb-4">
                                    <CFormInput 
                                    type="file" 
                                    id='coursephoto' 
                                    required
                                    accept="image/jpg, image/jpeg, image/png"
                                    onChange={(e) => setPicture(e.target.files[0])}
                                    />
                                </CInputGroup>

                                <p className="text-dark mb-2">Upload Scorm Package (zip file) </p>
                                <CInputGroup className="mb-4">
                                    <CFormInput 
                                    type="file" 
                                    id='courseZipFile'
                                    required
                                    accept=".zip"
                                    onChange={(e)=>setFilezip(e.target.files[0])}
                                    // onChange={handleFileReader}
                                    />
                                </CInputGroup>
                                    <div className='d-flex justify-content-end'>
                                        <CButton type='submit' color="primary" className="px-4 mx-2">
                                            Save Changes
                                        </CButton>
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
