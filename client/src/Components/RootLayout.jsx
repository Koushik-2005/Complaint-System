import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Footer'
import Header  from '../Pages/Header'
function RootLayout() {
  return (
    <div>
        <Header /> 
        <div style={{minHeight:"90vh"}}>
            <Outlet />
        </div>
        <Footer /> 
    </div>
  )
}

export default RootLayout