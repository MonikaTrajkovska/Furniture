 import React from 'react';
// // // import {  Form, FormGroup, Input, Container, Row, Col } from 'reactstrap';
//  import { getFurnitures, Update,editOneItem} from "../components/redux/actions/furnitureActions";
//  import axios from 'axios'
//   import store from '../components/redux/store'
//   import { connect } from "react-redux";
// import { compareSync } from 'bcryptjs';
// import PropTypes from 'prop-types';
// //import {removeFromCart,addToCart} from './ducks/cart'



  class Filter extends React.Component {
  
      constructor(props) {
          super(props)
          this.state = {
              query: null,
              furnitures: [],
              dimension: "",
              sort: "",
              name:''
            //   name:'',
            //    price:'',
            //     isInCart:'',
            //     addToCart:''
          }
      }
    //   isInCart=(state, props) =>{
    //     return state.cart.furnitures.indexOf(props.id) !== -1;
    //   }
  
    //   handleClick = () => {
     
    //     const { id, addToCart, removeFromCart, isInCart } = this.props;
    //     if (isInCart) {
    //         removeFromCart(id);
    //     } else {
    //         addToCart(id);
    //     }
    // }
    // handleAddToCart = (e, furnitures) => {
    //     this.setState(state => {
    //       const furnitures = state.furnitures;
    //       let productAlreadyInCart = false;
    
    //       furnitures.forEach(cp => {
    //         if (cp.id === furnitures.id) {
    //           cp.count += 1;
    //           productAlreadyInCart = true;
    //         }
    //       });
    
    //       if (!productAlreadyInCart) {
    //         furnitures.push({ ...furnitures, count: 1 });
    //       }
    //       localStorage.setItem("cartItems", JSON.stringify(furnitures));
    //       return { furnitures: furnitures };
    //     });
    //   };
    
      componentDidMount() {
          this.serachPeople(this.state.query);
      }
  
      onChange(e) {
          this.setState({ query: e.target.value }, () => {
              if (this.state.query && this.state.query.length > 1) {
                  if (this.state.query.length % 2 === 0) {
                      this.serachPeople(this.state.query);
                  }
              } else {
                  this.serachPeople(this.state.query);
              }
          })
      }
  
      serachPeople(query) {
          const url =  'http://localhost:8081/api/v1/furnitures'
           
  
          if (query) {
              // if get value ion query so filter the data based on the query.
              fetch(url, {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
            
        
              }).then(results => {
                  return results.json();
              }).then(data => {
                  let furnitures = data.filter(furniture => furniture.name  === query).map((furniture) => {
                      return (
                          <ul key={furniture.name}>
                              <li>{furniture.name}</li>
                              <li>{furniture.description}</li>
                              <li>{furniture.code}</li>
                              <li>{furniture.description}</li>
                          </ul>
                      )
                  })
                  this.setState({ furnitures: furnitures});
                  console.log("state", furnitures)
              })
          } else {
              fetch(url, {
                  method: 'GET',
                  headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                }
              }).then(results => {
                  return results.json();
              }).then(data => {
                  console.log(data)
                  let furnitures = data.map((furniture) => {
                      
                      return (
                          <React.Fragment>
                        <ul key={furniture.name}> 
                        <li>{furniture.name}</li>
                        <li>{furniture.description}</li>
                              <li>{furniture.code}</li>
                              <li>{furniture.description}</li>
                              {/* <b>{util.formatCurrency(furniture.price)}</b> */}
                    </ul>
                   
                     </React.Fragment>
                      )
                  })
                  this.setState({ furnitures: furnitures });
                  console.log("state", furnitures)
              })
          }
      }
  
      render() {
      //  const { id, addToCart, removeFromCart, isInCart } = this.props;
          return (
              <div>
                   
              <form>
                  <input
                      type="text"
                      className="search-box"
                      placeholder="Search for..."
                      onChange={this.onChange.bind(this)}
                  />
                  {this.state.furnitures}
              </form>
             
              
              {/* <div className="product__button-wrap">
              <button
                  className={this.props.isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                  onClick={this.handleClick}
              >
                  {this.props.isInCart ? 'Remove' : 'Add to cart'}
              </button>
          </div> */}
             {/* <Basket
              cartItems={this.state.cartItems}
              handleRemoveFromCart={this.handleRemoveFromCart}
            /> */}
          </div>
  
          )
      }
  }
//  Filter .propTypes = {
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.string,
   
//     image: PropTypes.string,
//     isInCart: PropTypes.bool.isRequired,
//     addToCart: PropTypes.func.isRequired,
//     removeFromCart: PropTypes.func.isRequired,
// }

  export default Filter;

//   class Filter extends React.Component {
//   //  token = null;
//     state = {
//       query: "",
//       furnitures: []
//     };
  
//     onChange = e => {
//       const value  = e.target;
//       this.setState({
//         query:value
//       });
  
//       this.search(value);
     
//     };
  
//     search = query => {
//     //    `https://swapi.co/api/people?search=${query}`
//     //this.setState({ people: data.results });
//     axios.get(`http://localhost:8081/api/v1/furnitures/?search=${query}`,
//     { headers: { "Authorization": `Bearer ${localStorage.getItem('jwt')}` } })
//     .then(res => {
//         this.setState({furnitures:res.data})
       
//         //console.log(res.data)
//         //store.dispatch(getFurnitures(res.data))
 

//    })
//  .catch(err => {
//    console.log(err)
//   })
// }
//     //   const url = ;
//     //   const token = {};
//     //   this.token = token;
  
//     //   fetch(url)
//     //     .then(results => results.json())
//     //     .then(data => {
//     //       if (this.token === token) {
//     //         this.setState({ people: data.results });
//     //       }
//     //     });
//     // };
  
//     componentDidMount() {
//       this.search("");
      
//     }
  
//     render() {
//       return (
//         <form>
//           <input
//             type="text"
//             className="search-box"
//             placeholder="Search for..."
//             onChange={this.onChange}
            
//           />
//           {this.state.furnitures.map(furniture => (
//             <ul key={furniture._id}>
//               <li>{furniture.name}</li>
//               <li>{furniture.code}</li>
//               <li>{furniture.description}</li>
//               <li>{furniture.price}</li>

//             </ul>
//           ))}
//         </form>
//       );
//     }
//   }

// //   function mapStateToProps(state) {
// //     return {
// //       furnitures: state.furnitureReducers.furnitures,
// //       //  furnitures:state.furnitureReducers.filterProducts

// //     };
// //   } 
// //   function mapDispatchToProps(dispatch) {   
// //    return {
// //       getFurnitures: data => dispatch(getFurnitures(data)),
// //       // filterProducts:furnitures=>dispatch(filterProducts(furnitures.name))
   
// //     }
// //   }
// //   export default connect(
// //     mapStateToProps,
// //     mapDispatchToProps
// //   )(Filter);

//   export default Filter