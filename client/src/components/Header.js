import React from './node_modules/react'
import './Header.css'
import Logo from './assets/images/furniture-logo.png'

import { Link } from './node_modules/react-router-dom'

const Header =()=>{
    return(
        <React.Fragment>
            <div className="mainHeader">
                <div className="firstHeader">
                    <div className="wrap">
                          

            <p id="wishlist"><i className="fas fa-heart"></i>Wish List</p>
            
            <p id="myaccount"><i className="fas fa-user-alt"></i>
            My account</p>
           
            <p><i className="fas fa-shopping-cart"></i>Shopping Cart</p>
            </div>
            <p id="welcome">Welcome,
            <Link to ='/Register'>
             <span>Register</span> </Link>
              or if you have account please
              <Link to="Login">
               <span>Log in</span></Link> 
                </p>
            </div>
            <img src={Logo} alt="Logo" id="logo"/>
            <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search" id="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>

  </div>

 <div className="secondHeader">
            <div className="wrap1">
                          
            <Link to ="FirstPage">
            <button id="wishlist1" >HOME</button>
            </Link>
    <div class="dropdown" >
  <button class="dropbtn">PRODUCTS</button>
  <div class="dropdown-content">
    <a href="#">Living room</a>
    <a href="#">Bedroom</a>
    <a href="#">Table</a>
    <a href="#">Chair</a>
    <a href="#">Kitchen</a>
    <a href="#">Office furniture</a>
  </div>
</div>
           <Link to="/About">
            <button id="wishlist1">ABOUT US</button></Link>
            <Link to="Contact">
            <button id="wishlist1">CONTACT</button>
            </Link>
            </div>
            </div>
            </div>

 
        </React.Fragment>
    )
}

export default Header