import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import store from "src/store";
import Global from "src/Global";
const DefaultLayout = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const data = location.state;

  const state = store.getState();
  const user = state.user;

  const [newVariable, setNewVariable] = useState(user[0]);
  const [portalInfo, setPortalInfo] = useState();
  const dispatch = useDispatch();

  const newPortalState = store.getState();
  const portal = newPortalState.portal;

  useEffect(() => {
    const fetchData = async () => {
      const response = await Global.getPortalInfo()
      // console.log(response)
      if(response){
        dispatch({ type: "removeFromPortal", item: portal[0] });
        dispatch({ type: "addToPortal", item: response[0] });
        setPortalInfo(response[0]);
      }
    }
    fetchData();
  }, [data]);


  useEffect(() => {
    const fetchData = async () => {
      try {
      const response = await Global.getUser(user[0].id);
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


  return (
    <div>
      <AppSidebar portal={portalInfo} />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader user={newVariable} />
        <div className="body flex-grow-1 px-3">
          <AppContent user={newVariable} />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
