import React from 'react'
import { Outlet } from 'react-router-dom';

const Private = () => {
  const token=localStorage.getItem("token");
  return token?<Outlet/>:<Navigate to="/login" />
}

export default Private