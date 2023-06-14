import React from 'react';
import { Route, Navigate, Routes, Outlet } from 'react-router-dom';
import store from './store';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const state = store.getState();
    const user = state.user; 
    let isLoggedIn = false;
    console.log(isLoggedIn);
    if(user[0]){
        isLoggedIn = true; 
    } else {
        isLoggedIn = false;
    }

    return (isLoggedIn) ? <Outlet /> : <Navigate to="/" />;
  
};

export default PrivateRoute;