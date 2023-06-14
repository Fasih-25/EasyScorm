import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import store from '../store';
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

export default function ChangePassword({trigger, onClose, user}) {
    const [reTypePassword, setReTypePassword] = useState("")
    const [password, setPassword] = useState("")
    const [currentPassword, setCurrentPassword] = useState("")
    const [message, setMessage] = useState("");

    const id = user.id;
    // console.log(id)
    let item = {id, currentPassword, password, reTypePassword}

    let navigate = useNavigate();

    const handleOnClose = (e) => {
        if(e.target.id ==='myModal') onClose();
    };
    const Close = (e) => {
        onClose();
      };

    let handleChangePassword = async (e) => {
        try {
          if (password.length < 6) {
            setMessage("password needs atleast 6 charaters");
          } else {
            if (reTypePassword === password) {
            
            const response = await Global.changePassword(item);
            if (response.message == "Your password has been changed") {
            //   console.log(response);
              alert("Your password has been changed");
              setMessage("Password has been changed");
              navigate("/#/signin");
            } else {
              console.log("ERROR");
            }
            } else {
              setMessage("Password dosen't match");
            }
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
                        <CCard className="p-4 backgroundColor">   
                                <div className='d-flex justify-content-end'>
                                    <CIcon icon={cilXCircle} onClick={Close} width={20} className='2xl'/>
                                </div>
                            <CCardBody>
                                <CRow  className='justify-content-center'>
                                    <CCol md={6} >
                                        <CForm onSubmit={handleChangePassword}>
                                            <h5  className='text-center mb-5 '>Change Password</h5>
                                                <CInputGroup className="mb-4">
                                                    <CInputGroupText>
                                                        <CIcon icon={cilLockLocked} />
                                                    </CInputGroupText>
                                                    <CFormInput
                                                        type="Password"
                                                        value={currentPassword}
                                                        onChange={(e)=>setCurrentPassword(e.target.value)}
                                                        placeholder="Current Password"
                                                        autoComplete="CurrentPassword"
                                                        required
                                                    />
                                                </CInputGroup>
                                                <CInputGroup className="mb-3">
                                                    <CInputGroupText>
                                                        <CIcon icon={cilLockLocked} />
                                                    </CInputGroupText>
                                                    <CFormInput
                                                        type="password"
                                                        value={password}
                                                        onChange={(e)=>setPassword(e.target.value)}
                                                        placeholder="New Password"
                                                        autoComplete="current-password"
                                                        required
                                                    />
                                                </CInputGroup>
                                                <CInputGroup className="mb-4">
                                                    <CInputGroupText>
                                                        <CIcon icon={cilLockLocked} />
                                                    </CInputGroupText>
                                                    <CFormInput
                                                        type="Password"
                                                        onChange={(e)=>setReTypePassword(e.target.value)}
                                                        placeholder="Re-Type New Password"
                                                        autoComplete="ReTypePassword"
                                                        required
                                                    />
                                                </CInputGroup>
                                                <div className="d-flex justify-center items-center text-black fw-bold pt-2">{message ? <p>{message}</p> : null}</div>
                                                <div className='d-flex justify-content-end'>
                                                    <CButton type='submit' color="primary" className="px-4 mx-2">
                                                        Save
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
