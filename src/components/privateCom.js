import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateCom=()=>{
    const authorize=localStorage.getItem('user');
    return authorize ? <Outlet/> : <Navigate to='/signup'/>
}

export default PrivateCom;