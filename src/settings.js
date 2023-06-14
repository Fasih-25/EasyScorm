import { React, useState, useEffect  } from "react";
import { Link, useLocation,  useNavigate } from "react-router-dom";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "./components/index";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCardTitle,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import store from "./store";
import Global from "./Global";
import { useSelector, useDispatch } from "react-redux";

const Settings = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const state = store.getState();
  const user = state.user;
  
  const newstate = store.getState();
  const portal = newstate.portal[0];
  
  // const location = useLocation();
  // const data = location.state;

  const [changes, setChanges] = useState("");
  const [portalInfo, setPortalInfo] = useState();
  const [newVariable, setNewVariable] = useState(user[0]);

  const [title, setTitle] = useState((portal) ? portal.title : "");
  const [logo, setLogo] = useState((portal) ? portal.logo : "");

  const [picture, setPicture] = useState((user[0]) ? user[0].profile_image : "");
  const [name, setName] = useState((user[0]) ? user[0].full_name : "");
  const [id, setId] = useState((user[0]) ? user[0].id : "");
  const [about, setAbout] = useState((user[0]) ? user[0].about : "");
  const [email, setEmail] = useState((user[0]) ? user[0].email : "");
  const [facebookLink, setFacebookLink] = useState((user[0]) ? user[0].social_links.links.facebook : "");
  const [instaLink, setinstaLink] = useState((user[0]) ? user[0].social_links.links.instagram : "");
  const [linkedInLink, setLinkedInLink] = useState((user[0]) ? user[0].social_links.links.LinkedIn : "");
  const [twitterLink, setTitterLink] = useState((user[0]) ? user[0].social_links.links.Twitter : "");
  
  let item = {id, title, logo, picture, name, about, email, facebookLink, instaLink, linkedInLink, twitterLink };
  
  useEffect(() => {
    const fetchData = async () => {
      // dispatch({ type: "removeFromPortal", item: portal[0] });
      const response = await Global.getPortalInfo()
      if(response){
            dispatch({ type: "removeFromPortal", item: portal });
            // dispatch({ type: "addToPortal", item: response[0] });
            // setPortalInfo(response[0]);
            setTimeout(() => {  
              dispatch({ type: "addToPortal", item: response[0] });
              setPortalInfo(response[0]);
            }, 50);
      }
    }
    fetchData();
  }, [changes]);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await Global.getUser(user[0].id);
        if (response) {
            dispatch({ type: "removeFromArray", item: user[0] });
            // setTimeout(() => {
              dispatch({ type: "addToArray", item: response });
              setNewVariable(response);
            // }, 50);
        
        } else {
          // setStudents(response);
          console.log("SOMETHING WENT WRONG");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [changes]);

  let handlePortalInfo = async (e) => {
    e.preventDefault();
    try {
      const response = await Global.portalDetails(item)
      console.log("THIS IS PORTAL INFO API RESPONSE ",response);
      console.log(response);
      if (response.message == "Data saved successfully") {
        alert("Data saved successfully");
        setChanges((variable) => variable + 1);
      } else {
        alert("something went wrong");
        console.log("something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <AppSidebar user={newVariable} portal={portalInfo} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader user={newVariable} />
        <div className="body flex-grow-1 px-4">
          <CCard className="p-4">
            <CCardBody>
              <CForm onSubmit={handlePortalInfo}>
                <CCardTitle className="h4 mb-3">Portal Info</CCardTitle>

                <p className=" text-dark mb-2">Portal Title</p>
                <CInputGroup className="mb-4">
                  <CFormInput
                    autoComplete="username"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </CInputGroup>

                <p className=" text-dark mb-2">Logo</p>
                <CInputGroup className="mb-4">
                  <CFormInput
                    type="file"
                    id="logo"
                    accept="image/jpg, image/jpeg, image/png, "
                    onChange={(e) => setLogo(e.target.files[0])}
                  />
                </CInputGroup>

                <CCardTitle className="h4 mt-5 mb-3">Your Info</CCardTitle>

                <p className=" text-dark mb-2">Profile Picture</p>
                <CInputGroup className="mb-4">
                  <CFormInput
                    type="file"
                    id="profilePicture"
                    accept="image/jpg, image/jpeg, image/png"
                    onChange={(e) => setPicture(e.target.files[0])}
                  />
                </CInputGroup>

                <p className=" text-dark mb-2">Full Name</p>
                <CInputGroup className="mb-4">
                  <CFormInput
                    autoComplete="username"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </CInputGroup>

                <p className=" text-dark mb-2">About</p>
                <CInputGroup className="mb-4">
                  <CFormTextarea
                    type="text"
                    style={{ height: "100px" }}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </CInputGroup>

                <p className=" text-dark mb-2">Email address</p>
                <CInputGroup className="mb-4">
                  <CFormInput
                    autoComplete="username"
                    type="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                  />
                </CInputGroup>

                <p className=" text-dark mb-2">Facebook</p>
                <CInputGroup className="mb-4">
                  <CFormInput autoComplete="username" type="text"  value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}/>
                </CInputGroup>

                <p className=" text-dark mb-2">Instagram</p>
                <CInputGroup className="mb-4">
                  <CFormInput autoComplete="username" type="text" value={instaLink}
                    onChange={(e) => setinstaLink(e.target.value)}/>
                </CInputGroup>

                <p className=" text-dark mb-2">LinkedIn</p>
                <CInputGroup className="mb-4">
                  <CFormInput autoComplete="username" type="text" value={linkedInLink}
                    onChange={(e) => setLinkedInLink(e.target.value)}/>
                </CInputGroup>

                <p className=" text-dark mb-2">Twitter</p>
                <CInputGroup className="mb-4">
                  <CFormInput autoComplete="username" type="text" value={twitterLink}
                    onChange={(e) => setTitterLink(e.target.value)}/>
                </CInputGroup>

                <div className="d-flex justify-content-end">
                  <CButton type="submit" color="primary" className="px-4 mx-2">
                    Save Changes
                  </CButton>
                  <Link to="/dashboard">
                    <CButton color="secondary" className="px-3 text-white">
                      Cancel
                    </CButton>
                  </Link>
                </div>
              </CForm>
            </CCardBody>
          </CCard>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default Settings;
