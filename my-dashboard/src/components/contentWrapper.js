import React from 'react'
import NavBar from './contentComponents/NavBar'
import Footer from './contentComponents/Footer'
import ProductsDashboard from './productsDashboard/ProductsDashboard'
import UsersDashboard from './UsersDashboard'
import CategorysInDb from './productsDashboard/CategorysInDb'


const contentWrapper = () => {
  return (
    <>
    <NavBar/>
    <ProductsDashboard/>
    <UsersDashboard/>
    <CategorysInDb/>
    
    <Footer/>
    </>
  )
}

export default contentWrapper