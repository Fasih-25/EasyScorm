import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import store from "../../../store";
import { useSelector, useDispatch } from "react-redux";
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
import { cilAt, cilLockLocked, cilUser } from "@coreui/icons";
import Global from "src/Global";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [portalInfo, setPortalInfo] = useState();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const state = store.getState();
  const user = state.user;

  const newPortalState = store.getState();
  const portal = newPortalState.portal;

  dispatch({ type: "removeFromArray", item: user[0] });
  dispatch({ type: "removeFromPortal", item: portal[0] });

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

  let handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await Global.login(email, password);
      if (response.error === "Invalid email or password") {
        alert("Invalid email or password");
      } else if (response.user.user_role_id === 1) {
        dispatch({ type: "addToArray", item: response.user });
        navigate("/dashboard");
      } else {
        alert("Not Authorized");
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
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">
                      Sign In to your account
                    </p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilAt} />
                      </CInputGroupText>
                      <CFormInput
                        type="email"
                        placeholder="hi@regex.global"
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <Link to="/forgetPassword">
                          <CButton color="link" className="px-0">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5">
                <CCardBody className="d-flex text-center align-items-center justify-content-center">
                  <div className="d-flex">
                    <h2 className="comicsans text-white">
                      {portalInfo ? portalInfo.title : ""}
                    </h2>
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

export default Login;
