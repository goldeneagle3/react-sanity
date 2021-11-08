import React , { useState} from 'react'

import Footer from './Footer/Footer'
import Backdrop from './Navbar/Backdrop'
import Navbar from './Navbar/Navbar'
import Sidebar from './Navbar/Sidebar'


const Layout = ({children}) => {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Navbar click={()=>setToggle(true)}/>
      <Backdrop show={toggle} click={()=>setToggle(false)} />
      <Sidebar show={toggle} click={()=>setToggle(false)} /> 
      {children}
      <Footer/>     
    
    </>

  )
}

export default Layout
