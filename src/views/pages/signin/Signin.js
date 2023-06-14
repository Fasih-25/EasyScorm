import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import store from "../../../store";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormCheck,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import LogoSvg from "../../../assets/images/scorm.svg";
import SideImage from "../../../assets/images/SinginSideImage.svg";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Global from "src/Global";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [portalInfo, setPortalInfo] = useState();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const state = store.getState();
  const user = state.user;

  dispatch({ type: "removeFromArray", item: user[0] });

  const token = searchParams.get("token");
  const type = searchParams.get("type");

  const newPortalState = store.getState();
  const portal = newPortalState.portal;

  let item = { email, password, token, type };

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
      const response = await Global.signin(item);

      if (response.message == "Signup successful!") {
        dispatch({ type: "addToArray", item: response.user });
        alert("signup successful");
        navigate("/signin");
      } else if (
        response.message ==
        "The email address you have entered is already associated with another account."
      ) {
        alert("Email address is already used.");
      }
      if (response.error === "Invalid email or password") {
        alert("Invalid email or password");
      } else if (response.user.status === 1) {
        if (response.user.user_role_id === 2) {
          dispatch({ type: "addToArray", item: response.user });
          navigate("/Student_Home");
        } else {
          alert("Not Authorized");
        }
      } else {
        alert("Your Are Blocked By the Admin");
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
          <CCol md={10}>
            <CCardGroup className="d-flex flex-column flex-sm-row">
              <CCard className="text-white py-5 order-2 order-sm-1">
                <CCardBody className="text-center">
                  <img src={SideImage} className="img-fluid" />
                </CCardBody>
              </CCard>
              <CCard className="p-4 align-items-center backgroundColor order-1 order-sm-2">
                <CCardBody className="d-flex align-items-center">
                  <CForm onSubmit={handleLogin}>
                    <h5 className="text-center mb-4 ">
                      {" "}
                      {type == "invitation"
                        ? "Please sign up"
                        : "Please sign in"}{" "}
                    </h5>
                    <CInputGroup className="mb-0">
                      <CFormInput
                        type="email"
                        placeholder="hi@regex.global"
                        autoComplete="username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-0">
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="py-3"
                        required
                      />
                    </CInputGroup>
                    <CRow className="align-items-center pb-2">
                      <CCol xs={5}>
                        <CFormCheck
                          id="checkboxNoLabel"
                          value=""
                          aria-label="Remember"
                          label="Remember"
                        />
                      </CCol>

                      <CCol xs={7} className="text-right">
                        <Link to="/recoverAccount" type="submit">
                          <CButton color="link" className="px-0 ">
                            Forgot password?
                          </CButton>
                        </Link>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CButton
                        type="submit"
                        color="primary"
                        className="px-4 w-100"
                        to="/"
                      >
                        {type == "invitation" ? "Sign up" : "Sign in"}
                      </CButton>
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

export default Signin;
