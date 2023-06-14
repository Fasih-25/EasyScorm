import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import store from "../store";
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
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import LogoSvg from "../assets/images/avatars/scormNewFigma.svg";
import { cilCut, cilLockLocked, cilUser, cilXCircle } from "@coreui/icons";
import Global from "src/Global";

export default function ResetPassword({ trigger, onClose }) {
  const [reTypePassword, setReTypePassword] = useState("");
  const [password, setPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [message, setMessage] = useState("");

  const state = store.getState();
  const user = state.user;

  const id = user[0].id;
  let item = {id, currentPassword, password, reTypePassword}
  let navigate = useNavigate();
  const handleOnClose = (e) => {
    if (e.target.id === "myModal") onClose();
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
          alert("Your password has been changed");
          setMessage("Password has been changed");
          navigate("/");
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
  return trigger ? (
    <div>
      <div
        id="myModal"
        className="modal d-flex p-0 z-10 position-fixed pt-5 bg-light bg-opacity-75 popupModal"
        onClick={handleOnClose}
      >
        {/* <!-- Modal content --> */}

        <div className="modal-content bg-transparent m-auto z w-75 border-0 ">
          <div className="modalbodySection">
            <CContainer className="p-4 backgroundColor">
              <div className="d-flex justify-content-end">
                <CIcon
                  icon={cilXCircle}
                  onClick={Close}
                  width={20}
                  className="2xl"
                />
              </div>
              <CRow className="justify-content-center">
                <div className="d-flex justify-content-center mb-4 mt-4">
                  <img src={LogoSvg} height={30} />
                </div>
                <CCol md={10} className="mb-3">
                  <CCardGroup>
                    <CCard className="p-4">
                      <CCardBody>
                        <CForm onSubmit={handleChangePassword}>
                          <h5 className="pb-2">Recover Password</h5>
                          <CInputGroup className="mb-3">
                            <CInputGroupText>
                              <CIcon icon={cilLockLocked} />
                            </CInputGroupText>
                            <CFormInput
                              type="password"
                              value={currentPassword}
                              onChange={(e) =>
                                setCurrentPassword(e.target.value)
                              }
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
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="New Password"
                              autoComplete="current-password"
                              required
                            />
                          </CInputGroup>
                          <CInputGroup className="mb-2">
                            <CInputGroupText>
                              <CIcon icon={cilLockLocked} />
                            </CInputGroupText>
                            <CFormInput
                              type="Password"
                              onChange={(e) =>
                                setReTypePassword(e.target.value)
                              }
                              placeholder="Re-Type New Password"
                              autoComplete="ReTypePassword"
                              required
                            />
                          </CInputGroup>
                          <div className="d-flex justify-center items-center text-black fw-bold pt-2">
                            {message ? <p>{message}</p> : null}
                          </div>
                          <CRow>
                            <CCol xs={6}>
                              <CButton
                                type="submit"
                                color="primary"
                                className="px-4"
                              >
                                Send
                              </CButton>
                            </CCol>
                          </CRow>
                        </CForm>
                      </CCardBody>
                    </CCard>
                    <CCard className="text-white bg-primary py-5">
                      <CCardBody className="d-flex text-center align-items-center justify-content-center">
                        <div className="d-flex">
                          <h2 className="comicsans text-white">EASYSCORM</h2>
                        </div>
                      </CCardBody>
                    </CCard>
                  </CCardGroup>
                </CCol>
              </CRow>
            </CContainer>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
