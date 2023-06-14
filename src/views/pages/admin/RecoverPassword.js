import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
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
import { cilLockLocked } from "@coreui/icons";
import LogoSvg from "../../../assets/images/avatars/scormNewFigma.svg";
import { useSearchParams } from "react-router-dom";
import Global from "src/Global";

const RecoverPassword = () => {
  const [reTypePassword, setReTypePassword] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  let navigate = useNavigate();

  const token = searchParams.get("token");
  const type = searchParams.get("type");

  let item = { password, token, type };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password.length < 6) {
        setMessage("password needs atleast 6 charaters");
      } else {
        if (reTypePassword === password) {
          const response = await Global.recoverPassword(item);
          if (response.message === "Password has been changed") {
            setPassword("");
            setReTypePassword("");
            setMessage("Password updated");
            navigate("/");
          } else {
            setMessage("password not changed");
          }
        } else {
          setMessage("Password dosen't match");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

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
                    <h5 className="pb-2">Recover Password</h5>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-2">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="Password"
                        placeholder="Re-Type New Password"
                        onChange={(e) => setReTypePassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <div className="d-flex justify-center items-center text-black fw-bold pt-2">
                      {message ? <p>{message}</p> : null}
                    </div>
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

export default RecoverPassword;
