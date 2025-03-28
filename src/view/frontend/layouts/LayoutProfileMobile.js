import React from 'react'
import Header from '../partials/Header'
import Footer from '../partials/Footer'
import { Outlet } from "react-router-dom";
const LayoutProfileMobile = () => {
  return (
    <div>
        <Header></Header>

<Outlet /> 
        <Footer></Footer>
    </div>
  )
}

export default LayoutProfileMobile