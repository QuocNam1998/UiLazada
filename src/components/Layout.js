import React from 'react'
import Navbar from './HomePages/Navbar'
import Message from './HomePages/Message'
import Footer from './HomePages/Footer'
import Menu from './HomePages/Menu'
import Banner from './HomePages/Banner'
import Main from './HomePages/Main'

// Structure of the web app
const Layout = () => {
  return (
    <div>
      {/* Banner */}
      <Banner />

      {/* Navbar */}
      <Navbar />

      {/* Content of webapp */}
      <Main />

      {/* Message */}
      <Message />

      {/* footer */}
      <Footer />

      {/* Menu */}
      <Menu />
    </div>
  )
}

export default Layout