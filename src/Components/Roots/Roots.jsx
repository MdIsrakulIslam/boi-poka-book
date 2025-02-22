import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Roots() {
  return (
    <div className='max-w-6xl mx-auto'>
        <h2> 
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </h2>
    </div>
  )
}
