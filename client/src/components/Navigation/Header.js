import React from 'react'
import './Header.css'
import Logo from '../assets/images/furniture-logo.png'
import Profile from '../assets/images/Profile.png'
import { Link} from 'react-router-dom'

import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
class Head extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          
            name: this.props.userName,
          
        }
      
        
    }

    componentDidMount() {
        const user = localStorage.getItem('name') + ' ' + localStorage.getItem('lastName');
        this.setState({name: user})
    }

     logout(){
        localStorage.clear()
     }
    render() {
        return (
            <React.Fragment>
                {!localStorage.getItem('jwt') ? <Redirect to='/' /> : null}
             
               <div className="mainHeader">
               <div className="firstHeader">                   
                <div className="wrap">
                          
           <p id='name-p'>{this.state.name}</p>
             <img id="profile-image" src={Profile} alt="profile" />
             <p id="myaccount"><Link to='/user-info'><i className="fas fa-user-alt"></i> My account</Link></p>
             <Link to='/' className="logOutButton3"  onClick={this.logout}><i class="fas fa-sign-out-alt"></i>Log out</Link>
         
             </div> 
             </div>
             </div>
                        
             
            <div className="search-container">
            <img src={Logo} alt="Logo" id="logo"/> 
     {/* <form action="/action_page.php">
       <input type="text" placeholder="Search.." name="search" id="search"></input>
       <button type="submit"><i className="fa fa-search"></i></button>
    </form> */}

   </div>

  <div className="secondHeader">
       
             <div className="wrap1">
                      
             <Link to ="FirstPage">
             <button id="wishlist1" >HOME</button>
             </Link>
  
       <Link to='/Products'>
   <button id="wishlist1">PRODUCTS</button></Link>
 
     <Link to="/About">
             <button id="wishlist1">ABOUT US</button></Link>
             <Link to="/Contact">
             <button id="wishlist1">CONTACT</button>
             </Link>
             </div>
                          </div>
           
                  
          
             
            </React.Fragment>
        )
    }
}
function mapStateToProps(state) {
    return {
        userName: state.furnitureReducers.userName
    }
}

export default connect(mapStateToProps)(Head)

// const Header =()=>{
//     function logout(){
//         localStorage.clear()
//     }
//     return(
//         <React.Fragment>
//             <div className="mainHeader">
//                 <div className="firstHeader">
//                     <div className="wrap">
                          

//             <p id="wishlist"><i className="fas fa-heart"></i>Wish List</p>
            
//             <p id="myaccount"><i className="fas fa-user-alt"></i>
//             My account</p>
//             <Link to='/' className="logOutButton3"  onClick={logout}><i class="fas fa-sign-out-alt"></i>Log out</Link>
//             {/* <p><i className="fas fa-shopping-cart"></i>Shopping Cart</p> */}
//             </div> 
            
//             </div>
//             <img src={Logo} alt="Logo" id="logo"/>
//             <div className="search-container">
//     <form action="/action_page.php">
//       <input type="text" placeholder="Search.." name="search" id="search"></input>
//       <button type="submit"><i className="fa fa-search"></i></button>
//     </form>

//   </div>

//  <div className="secondHeader">
//             <div className="wrap1">
                          
//             <Link to ="FirstPage">
//             <button id="wishlist1" >HOME</button>
//             </Link>
  
//       <Link to='/Products'>
//   <button id="wishlist1">PRODUCTS</button></Link>
 
//     <Link to="/About">
//             <button id="wishlist1">ABOUT US</button></Link>
//             <Link to="/Contact">
//             <button id="wishlist1">CONTACT</button>
//             </Link>
//             </div>
//             </div>
//             </div>

 
//         </React.Fragment>
//     )
// }

// export default Header