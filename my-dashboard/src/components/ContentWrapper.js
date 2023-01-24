import React from 'react'
import Footer from './contentComponents/Footer'
import NavBar from './contentComponents/NavBar'

import ContentDbComponets from './dataBaseComponents/ContentDbComponets'

const ContentWrapper = () => { 
return(
    <div>
    <NavBar/>
    <ContentDbComponets/>
    <Footer/>
    </div>
)
}

export default ContentWrapper