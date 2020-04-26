
import React, { Component } from 'react';

import axios from 'axios'
 import store from '../redux/store'
  import { connect } from "react-redux";

import { getFurnitures,cartItems} from "../redux/actions/furnitureActions";
import Basket from '../Products/Basket'
import util from '../Products/util'
import './Products.css'

class Products extends Component {
  
  state = {
    furnitures: [],
    Update: false,
      align:null,
      setSearchTerms:'',
      searchTerms:'',
      cartItems:[],
        query: null,
              furnitures: [],
              dimension: "",
              sort: "",
  }

  
  refilter = (event) => {
    this.setState({ Update: true, align: event.target.value })
  }
  onchangeSearch=(event)=>{
    this.setState({searchTerms:event.target.value})
}
handleAddToCart = (e, furnitures) => {
  this.setState(state => {
    const cartItems = state.cartItems;
    let productAlreadyInCart = false;

    cartItems.forEach(cp => {
      if (cp._id === furnitures._id) {
        cp.count += 1;
        productAlreadyInCart = true;
      }
      
    });

    if (!productAlreadyInCart) {
      cartItems.push({ ...furnitures, count: 1 });
    }
  //   localStorage.setItem("jwt", JSON.stringify(cartItems));
    return { cartItems: cartItems };
  });
};
handleRemoveFromCart = (e, furnitures) => {
  this.setState(state => {
    const cartItems = state.cartItems.filter(a => a._id !== furnitures._id);
  //   localStorage.setItem("cartItems", JSON.stringify(cartItems));
    return { cartItems: cartItems };
  });
};
componentDidMount() {
  axios.get("http://localhost:8081/api/v1/furnitures",
   { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
   .then(blob => {
     
      store.dispatch(cartItems(blob.data))


   })
.catch(err => {
   console.log(err)
  })
}

  // componentDidMount() {
  //          axios.get("http://localhost:8081/api/v1/furnitures",
  //            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
  //            .then(blob => {
               
  //              store.dispatch(getFurnitures(blob.data))
          
    
  //           })
  //         .catch(err => {
  //           console.log(err)
  //          })
  //      }
       componentDidUpdate() {
        if (this.state.Update && this.state.align === null) {
          axios.get('http://localhost:8081/api/v1/furnitures?name',
            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
              store.dispatch(getFurnitures(res.data))
             
            })
            .catch(err => {
              console.log(err)
            })
          this.setState({ Update: false })
        } else if (this.state.align != null) {
          axios.get(`http://localhost:8081/api/v1/furnitures?name=${this.state.align}`,
            { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
              store.dispatch(getFurnitures(res.data))
            
            
            })
            .catch(err => {
              console.log(err)
            })
           this.setState({
             Update: false,
            align: null
           })
        } else {
          console.log('Error ')
        }
      }
  render() {

       let furnitureList = null;
     if (this.props.furnitures) {
              furnitureList = this.props.furnitures.map(furniture => {

         return (

          <div className='block-product'>
            <p key={furniture._id}>
          
            <h2 className="product-name">Product name: {furniture.name}</h2>
            <img className='product-image' src ={furniture.filename}/>
           <p>Product code: {furniture.code}</p>
             <p>Product dimension: {furniture.dimension}</p>
             <p>Product description: {furniture.description}</p>
             <p>Product price: {util.formatCurrency(furniture.price)}</p>
             {/* <p>Product price: {furniture.price}</p> */}
             <p>Sold: {furniture.sold}</p>
            
           
              <p>
              <div>
                  
                    <button className="btn-btn" onClick={(e)=>{this.handleAddToCart(e, furniture)}}>Add to cart</button> 
                     </div> 
                     
                   <a href={`#${furniture._id}`}onClick={(e)=>this.props.handleAddToCart(e, furniture)}/> 
                        </p>
                      </p >
                      </div>
        );        });
     }
   return (
        <React.Fragment>
      {/* <div>
    <input  onChange={this.onchangeSearch} placeholder="Search by typing..."></input>
    </div> */}
          <div className="dropdown">
                  
                   
               
               <div class="dropdown-content">
               <label className='drop'> Filter 
               <select className="dropbtn" onChange={this.refilter}>
                            <option value="-">----</option>
                            <option value="Oskar">Living room</option>
                            <option value="Kristi">Bedroom</option>
                            <option value="Table">Table</option>
                            <option value="Chair">Chair</option>
                            <option value="Kitchen">Kitchen</option>
                            <option value="Office">Office furniture</option>
                            {/* <option value="xxl">XXL</option> */}
                            
                              </select>
                              </label>
                            </div>
                      
                      
                    
                </div>
            
          <div className="main-div5">

           <h3 className='products'>Products</h3>
     
         </div>

         {/* <div className="table table-dark">
            {this.state.showModal}
            <div>
             <div>
                <h3>Product name</h3>
                <>Product type</th>
                <th>Product description</th>
                <th>Purchase date</th>
               <th>Product price </th>
               <th>Purchase date</th>
               <th>Product price </th>
               <th></th>
               <th></th>
              

            </tr>
           </thead> */}
           <div className="product-list">{furnitureList}</div>
        
        {/* </React.Fragment> */}
         <Basket
                        cartItems={this.state.cartItems}
                       handleRemoveFromCart={this.handleRemoveFromCart}
                     />
       </React.Fragment >
            );
   }
  }
  
  function mapStateToProps(state) {
    return {
      furnitures: state.furnitureReducers.furnitures,
      //  furnitures:state.furnitureReducers.filterProducts

    };
  } 
  function mapDispatchToProps(dispatch) {   
   return {
      getFurnitures: data => dispatch(getFurnitures(data)),
      cartItems:data=>dispatch(cartItems(data))
      // filterProducts:furnitures=>dispatch(filterProducts(furnitures.name))
   
    }
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products);

// export default FileUpload;