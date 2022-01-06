import React from 'react'
import { Carousel } from '3d-react-carousal'


function LandingPage(){
  const slides = [
    <img  src="../assets/breakfast.jpeg" alt="1" height="600px" width="700px" />,
    <img  src="../assets/lunch.jpeg" alt="2" height="600px" width="700px"/>,
    <img src="../assets/dinner.jpeg" alt="3" height="600px" width="700px"/>   ]

  return (
    <><Carousel slides={slides} autoplay={false} interval={3000} /><div>
      {/* <h1>KetoKitchen</h1> */}
    </div></>
    

  )
}
  
export default LandingPage