import React from './node_modules/react'
import './Firstpage.css'
import FurniturePicture from './assets/images/FurniturePicture.JPEG'
import Furniture from './assets/images/furniture.JPEG'
import Chair from './assets/images/chair.JPEG'
// import { Link } from 'react-router-dom'
const Firstpage =()=>{
    return(
        <React.Fragment>
             <div id="cf">
  <img className="bottom" src={FurniturePicture} alt='FurniturePicture' />
  <img className="top" src={Furniture} alt='Furniture'/>
</div>

<div className="aboutus"> 
  
    <p id='about'>
    <h1>About us</h1>
The company for production and sale of furniture “MM Furniture” based in Skopje started with work in 2020,
 first with the sale of products from domestic and foreign companies, and then with its own production.
 <br/>

 Later,  it launched its additional brand of exclusive furniture, MM Furniture, on the Macedonian market.
Under the motto of “luxury lifestyle”, the brand’s goal is to offer furniture and complete interior design solutions with a modern and refined design,
 made with the latest technology and high quality materials.
 <br/>
Guided by the idea that there is no more luxury than your own home,
 MM Furniture with its products offers functionality, flexibility, aesthetics and elegance – a new value in everyday life.


    </p>
  <div className="about1">
      <p>
          <h3>Proffesional team</h3>
     We are proud of our imaginative, valuable and professional team!</p>
  </div>
  <div className="about2">
      <p>
          <h3>Exclusive design </h3>
          A mix of imagination, experience and professionalism is the secret ingredient of our design.</p>
  </div>
  <div className="about3">
      <p>
          <h3>High quality materials</h3>
          We guarantee the quality, the durability and shine of the products, even after years of use.</p>
  </div>
</div>
<div className="about4">
      
          <img className='chair' src={Chair} alt="chair"/>
       
  
</div>
<div class="footer">
  <p>© 2020 MM Furniture. All Rights Reserved. </p>
</div>    


        </React.Fragment>
    )
}
export default Firstpage