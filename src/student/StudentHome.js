import {
  cibFacebook,
  cibInstagram,
  cibLinkedin,
  cibTwitter,
} from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer } from "@coreui/react";
import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "src/components/Navbar";
import avatar from "../assets/images/avatars/Ellipse5.png";
import StudentCourseCard from "../components/StudentCourseCard";
import store from "src/store";
import { useSelector, useDispatch } from "react-redux";
import {
  CButton
} from "@coreui/react";
import Global from "src/Global";

export default function StudentHome() {
  const [posts, setPosts] = useState([]);
  const [adminDetail, setAdminDetail] = useState([]);
  const [links, setLinks] = useState([]);
  let navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  const dispatch = useDispatch();

  const state = store.getState();
  const user = state.user;
  const newPortalState = store.getState();
  const portal = newPortalState.portal;

  var id;
  const [newVariable, setNewVariable] = useState(user[0]);
  id = newVariable.id;
 
  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await Global.getUser(user[0].user_reference_id);
        if (response) {
          setAdminDetail(response);
          setLinks(response.social_links.links)
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await Global.getUser(id);
        if (response) {
          dispatch({ type: "removeFromArray", item: user[0] });
          setTimeout(() => {
            dispatch({ type: "addToArray", item: response });
            setNewVariable(response);
          }, 50); 
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [data]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Global.getCourses(user[0].user_reference_id);
        if (response) {
          setPosts(response);
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, []);

  return (
    <>
      <Navbar user={newVariable} portal= {portal}/>
      <CContainer>
        <div className="bg-light p-5 my-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
          <div className="d-flex flex-column me-sm-5 justify-content-center align-items-center align-items-sm-start justify-content-sm-start">
            <div>
              <h1>{adminDetail.full_name}</h1>
            </div>
            <div className="text-center text-sm-start">{adminDetail.about}</div>
            <div className="d-flex">
            
            <div
               onClick={() => { window.open(links.facebook, "_blank", "noopener noreferrer"); }}
                className="iconsDiv"
              >
                <CIcon
                  icon={cibFacebook}
                  className=""
                  width={20}
                />
              </div>
              <div
               onClick={() => { window.open(links.instagram, "_blank", "noopener noreferrer"); }}
                className="iconsDiv"
              >
              <CIcon
                icon={cibInstagram}
                className=""
                width={20}
              />
              </div>
              <div
                onClick={() => { window.open(links.LinkedIn, "_blank", "noopener noreferrer"); }}
                className="iconsDiv"
              >
              <CIcon
                icon={cibLinkedin}
                className=""
                width={20}
              />
              </div>
              <div
               onClick={() => { window.open(links.Twitter, "_blank", "noopener noreferrer"); }}
                className="iconsDiv"
              >
              <CIcon
                icon={cibTwitter}
                className=""
                width={20}
              />
              </div>
            </div>
          </div>
          <div>
            <img
              src={adminDetail.profile_image}
              height={200}
              width={200}
              className="rounded-circle"
            />
          </div>
        </div>
        {posts.message === "owner have no course" ? (
          <>
            <div className="d-flex justify-content-center fs-4 text-black fw-bold">
              Data Not Found
            </div>
          </>
        ) : (
          <>
            {posts.map((item, index) => {
              return (
                <StudentCourseCard
                  key={index}
                  id={item.id}
                  coverImage={item.cover_image}
                  deleted={item.deleted}
                  courseName={item.name}
                  description={item.description}
                  status={item.status}
                  ban={item.ban}
                  user={newVariable}
                />
              );
            })}
          </>
        )}
      </CContainer>
    </>
  );
}
