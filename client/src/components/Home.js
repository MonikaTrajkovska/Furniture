import React from '.react'
import { Link } from 'react-router-dom'
import './Home.css'
import Logo from './assets/images/furniture-logo.png'
const Home = () => {
  
    return (
        <React.Fragment>
            <Link to="/Firstpage">
       <div>
           <div className="header"> 
        
           <img src={Logo} alt="Logo"/>
          <h1 className='title'>MM</h1> 
          <h2 className='title1'>Furniture</h2>
           
           </div>
              
           
       </div>
       </Link>
        </React.Fragment>


    )
}

export default Home