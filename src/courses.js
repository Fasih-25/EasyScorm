import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "./components/index";
import { CButton } from "@coreui/react";
import CourseCard from "./components/CourseCard";
import AddCourse from "./components/AddCourse";
import store from "src/store";
import Global from "./Global";

const Courses = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const handleOnClose = () => setButtonPopup(false);
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState("");
  const [ban, setBan] = useState("");
  const state = store.getState();
  const user = state.user;
  const location = useLocation();
  const data = location.state;
  const newstate = store.getState();
  const portal = newstate.portal[0];
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Global.getCourses(user[0].id);
        if (response) {
          setPosts(response);
          setMessage(response.message);
        } else {
          console.log("SOMETHING WENT WRONG");
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData();
  }, [data, ban]);

  return (
    <div>
      <AppSidebar user={user[0]} portal={portal} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader user={user[0]} />
        <div className="body flex-grow-1 px-4">
          <div className="d-flex justify-content-between ">
            <h4>Courses</h4>
            <CButton color="primary" onClick={() => setButtonPopup(true)}>
              Add Course{" "}
            </CButton>
          </div>
          <div className="d-flex justify-content-around flex-wrap bg-white pt-4 my-3">
            {message == "owner have no course" ? (
              <>
                <div className="d-flex justify-content-center align-items-center pb-3">
                  <h3>No Courses Found</h3>
                </div>
              </>
            ) : (
              <>
                {posts.map((item, index) => {
                  return (
                    <CourseCard
                      key={index}
                      ownerId={item.owner_id}
                      id={item.id}
                      coverImage={item.cover_image}
                      deleted={item.deleted}
                      courseName={item.name}
                      description={item.description}
                      zipPath={item.zip_path}
                      status={item.status}
                      ban={ban}
                      setBan={setBan}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
        <AppFooter />
      </div>
      <AddCourse trigger={buttonPopup} onClose={handleOnClose}>
        <h3>modal</h3>
        <p>this is popup</p>
      </AddCourse>
    </div>
  );
};

export default Courses;
