import React from 'react'
import NavBar from './contentComponents/NavBar'
import Footer from './contentComponents/Footer'
import ProductsDashboard from './productsDashboard/ProductsDashboard'
import UsersDashboard from './UsersDashboard'
import CategorysInDb from './productsDashboard/CategorysInDb'
import LastProductInDb from './productsDashboard/LastProductInDb'


const contentWrapper = () => {
  return (
    <>
    <NavBar/>
    <UsersDashboard/>
    <ProductsDashboard/>
    <CategorysInDb/>
    <LastProductInDb/>
    
    
    
    <Footer/>
    </>
  )
}

export default contentWrapper