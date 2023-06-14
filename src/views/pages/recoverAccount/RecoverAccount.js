import { React, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardText,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormText,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAt } from "@coreui/icons";
import Global from "src/Global";

const RecoverAccount = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let item = { email };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await Global.recoverAccount(email);
        if (response.message === "Please check your inbox") {
            alert("Please check your email's inbox");
            setEmail("");
            setMessage("Please check your inbox");
          } else {
            alert("This email is not registered");
            setMessage("This email is not registered");
          }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <div className="bg-light">
        <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
          <CContainer>
            <CRow className="justify-content-center">
              <CCol lg={6}>
                <CCardGroup>
                  <CCard className="p-4 backgroundColor">
                    <CCardBody>
                      <CForm onSubmit={handleSubmit}>
                        <h3 className="text-center mb-3 ">
                          Recover your account
                        </h3>
                        <p className="text-center mb-4 ">
                          Enter your email id to recover your account
                        </p>

                        <CCardText className="h6 mb-3">Email</CCardText>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilAt} />
                          </CInputGroupText>
                          <CFormInput
                            type="email"
                            placeholder="Email Address"
                            autoComplete="Emailaddress"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="py-3"
                            required
                          />
                        </CInputGroup>
                        <div className="d-flex justify-center items-center text-black fw-bold pt-2">{message ? <p>{message}</p> : null}</div>
                        <CRow>
                          <CCol className="d-flex justify-content-end">
                            <CButton
                              type="submit"
                              color="primary"
                              className="px-4"
                            >
                              Submit
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCardGroup>
              </CCol>
            </CRow>
          </CContainer>
        </div>
      </div>
    </>
  );
};

export default RecoverAccount;
