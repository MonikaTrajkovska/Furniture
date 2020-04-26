
import React, { Component } from 'react';

import axios from 'axios'
 import store from '../redux/store'
  import { connect } from "react-redux";

import { getFurnitures,cartItems } from "../redux/actions/furnitureActions";
import Basket from '../Products/Basket'
import util from '../Products/util'

class BasketCart extends Component {
  
  state = {
    furnitures: [],
    cartItems:[]
   
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

//   componentDidMount() {
//     if (localStorage.getItem("jwt")) {
//       this.setState({
//         cartItems: JSON.parse(localStorage.getItem("jwt"))
//       });
//     }

//     axios.get("http://localhost:8081/api/v1/furnitures",
//     { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
//       .then(res => res.json())
//       .catch(err =>
//         fetch("http://localhost:8081/api/v1/furnitures")
//           .then(res => res.json())
//           .then(data => data.furnitures)
//       )
//       .then(data => {
//         this.setState({ furnitures: data });
//         this.listProducts();
//         console.log(data)
//       });
//   }

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
       
        render() {

            let furnitureList = null;
          if (this.props.furnitures) {
                   furnitureList = this.props.furnitures.map(furniture => {
     
              return (
     
               <tr key={furniture._id}>
                 <td>{furniture.name}</td>
                <td>{furniture.code}</td>
                  <td>{furniture.dimension}</td>
                  <td>{furniture.description}</td>
               
                  <td>{furniture.price}</td>
                  <td>{furniture.sold}</td>
                  {/* <img  src ={furniture.filename}/> */}
                 
                   <td>
                 
                   <div>
                   <b>{util.formatCurrency(furniture.price)}</b>
                    <button className="btn btn-primary" onClick={(e)=>{this.handleAddToCart(e, furniture)}}>Add to cart</button> 
                     </div> 
                     
                   <a href={`#${furniture._id}`}onClick={(e)=>this.props.handleAddToCart(e, furniture)}/> 
                             </td>
                           </tr >
                          
             );        });
          }
        return (
             <React.Fragment>
          
               
                 
               <div className="main-div5">
     
                <h3>Products</h3>
          
              </div>
     
              <table className="table table-dark">
                 {this.state.showModal}
                 <thead>
                  <tr>
                     <th>Product name</th>
                     <th>Product type</th>
                     <th>Product description</th>
                     <th>Purchase date</th>
                    <th>Product price </th>
                    <th>Purchase date</th>
                    <th>Product price </th>
                    <th></th>
                    <th></th>
                   
     
                 </tr>
                </thead>
                <tbody>{furnitureList}</tbody>
              </table>
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
  )(BasketCart);

// export default FileUpload;