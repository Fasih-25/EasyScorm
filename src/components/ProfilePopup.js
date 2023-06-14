import React, { useState} from 'react'
import axios from 'axios';
import {useLocation,useNavigate} from 'react-router-dom';
import store from 'src/store';
import { useSelector, useDispatch } from 'react-redux' 
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
import Global from 'src/Global';

export default function ProfilePopup({trigger, onClose, user}) {
    
    const dispatch = useDispatch()
    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.full_name)
    const [country, setCountry] = useState(user.country )
    const [phone, setPhone] = useState(user.phone)
    const [id, setId] = useState(user.id)
    const [message, setMessage] = useState();
    const [picture, setPicture] = useState(user.profile_image);

    let item={id, email,name, country,phone,picture}

    let navigate = useNavigate();
    const handleOnClose = (e) => {
        if(e.target.id ==='myModal') onClose();
    };
    const Close = (e) => {
        onClose();
      }
      
      let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await Global.editProfile(item)
          if (response.message == "Your profile details have been updated") {
            alert("Profile Updated");
                onClose();
                navigate("/Student_Home",{state:item})
          } else {
            alert("something went wrong");
            console.log("something went wrong");
          }
        } catch (err) {
          console.log(err);
        }
      };

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
                                    <CForm onSubmit={handleSubmit}>
                                        {/* <h1>Login</h1> */}  
                                        <h6 className=" text-dark mb-2">I'd Num</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="idNum" type="text" value={user.id} disabled />
                                        </CInputGroup>

                                        <h6 className=" text-dark mb-2">Profile Picture</h6>  
                                        <CInputGroup className="mb-4">
                                          <CFormInput
                                            type="file"
                                            id="profilePicture"
                                            accept="image/jpg, image/jpeg, image/png"
                                            onChange={(e) => setPicture(e.target.files[0])}
                                          />
                                        </CInputGroup>

                                        <h6 className=" text-dark mb-2">Full Name</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="FullName" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                                        </CInputGroup>
                                        
                                        <h6 className=" text-dark mb-2">Email Address</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="EmailAddress" type="email" value={email} placeholder={email} disabled/>
                                        </CInputGroup>

                                        <h6 className="text-dark mb-2">Phone</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="idNum" value={phone} onChange={(e)=>setPhone(e.target.value)} type="phone"/>
                                        </CInputGroup>

                                        <h6 className=" text-dark mb-2">Country</h6>
                                        <CInputGroup className="mb-4">
                                            <CFormInput autoComplete="idNum" type="text"  value={country} onChange={(e)=>setCountry(e.target.value)}/>
                                        </CInputGroup>

                                            <div className='d-flex justify-content-end'>
                                                <CButton color="primary" className="px-4 mx-2" type='submit' >  Save
                                                </CButton>
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
