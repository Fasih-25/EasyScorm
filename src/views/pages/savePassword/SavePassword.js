import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
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
import { cilLockLocked, cilUser } from "@coreui/icons";
import LogoSvg from "../../../assets/images/scorm.svg";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import store from "src/store";
import Global from "src/Global";


const SavePassword = () => {
  const [reTypePassword, setReTypePassword] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const token = searchParams.get("token");

  const type = searchParams.get("type");
  const reference_id = searchParams.get("reference_id");
  
  const [portalInfo, setPortalInfo] = useState();
  
  const newState = store.getState();
  const portal = newState.portal;

  let item = { reTypePassword, password, token, type,reference_id };

  useEffect(() => {
    const fetchData = async () => {
      const response = await Global.getPortalInfo();
      if (response) {
        dispatch({ type: "removeFromPortal", item: portal[0] });
        dispatch({ type: "addToPortal", item: response[0] });
        setPortalInfo(response[0]);
      }
    };
    fetchData();
  }, []);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if (password.length < 6) {
          setMessage("password needs atleast 6 charaters");
        }
       else {
        if (reTypePassword === password) {
          const response = await Global.savePassword(item);
          console.log(response);
          if (response.message === "Password has been changed") {
                setPassword("");
                setReTypePassword("");
                setMessage("");
                setMessage("Password updated ");
                alert("Password updated ");
                navigate("/signin");
              } 
           else if (response.message === "You have signup successfully!") {
                setPassword("");
                setReTypePassword("");
                setMessage("You have signup successfully! ");
                alert("You have signup successfully!");
                navigate("/signin");
              } 
              else if(response.message === "The email address you have entered is already associated with another account."){
                alert("The email address you have entered is already associated with another account.")
              }
              else {
                setMessage(
                  "Something went wrong"
                );
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
      <div className="d-flex justify-content-center align-items-center mb-5">
          <img src={portalInfo ? portalInfo.logo : ""} height={30} />
          <h2 className="comicsans text-black mx-2 mb-0">
            {portalInfo ? portalInfo.title : ""}
          </h2>
        </div>
        <CRow className="justify-content-center">
          <CCol lg={6}>
            <CCardGroup>
              <CCard className="p-4 backgroundColor">
                <CCardBody>
                  <CForm onSubmit={handleSubmit}>
                    <h5 className="text-center mb-4 ">Save Password</h5>
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
                    <CInputGroup className="mb-4">
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
                      <CCol className="d-flex justify-content-end">
                        <CButton type="submit" color="primary" className="px-4">
                          Save
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
  );
};

export default SavePassword;
