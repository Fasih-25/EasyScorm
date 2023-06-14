import { React, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import store from "../../../store";
import { useSelector, useDispatch } from "react-redux";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAt, cilLockLocked, cilUser } from "@coreui/icons";
import LogoSvg from "../../../assets/images/avatars/scormNewFigma.svg";
import Global from "src/Global";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const state = store.getState();
  const user = state.user;

  dispatch({ type: "removeFromArray", item: user[0] });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Global.recoverAccount(email);
        if (response.message === "Please check your inbox") {
            setEmail("");
            console.log(email);
            setMessage("Please check your inbox");
          } else {
            setMessage("This email is not registered");
          }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <div className="d-flex justify-content-center mb-5">
          <img src={LogoSvg} height={30} />
        </div>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h5 className="pb-2">Forget Password</h5>
                    {/* <p className="text-medium-emphasis">
                      Sign In to your 
                    </p> */}
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAt} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="hi@regex.global"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <div className="d-flex justify-center items-center text-black fw-bold pt-2">{message ? <p>{message}</p> : null}</div>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
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
  );
};

export default ForgetPassword;
