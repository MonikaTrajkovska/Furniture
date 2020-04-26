import React, { Component } from 'react';
import util from '../Products/util'
import './Basket.css'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert "> 
            <i class="fas fa-shopping-cart"></i>
                
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                <div className='product-div'>
                <p className='productname'>Name </p>
                <p className='productname2'>Quant</p>
                <p className='productname1'> Price</p>
                </div>
                {cartItems.length > 0 &&
                    
                        <ul className='ul-list'>
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <b className='productName'>{item.name}</b>
                                   
                                    <span className="basket-button"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>   Delete</span>
                                    <br />
                            <div className="count"> {item.count} </div>
                           <div className='count1'>  {util.formatCurrency(item.price)}  </div>
                           <img className='product-image1' src ={item.filename}/>
                           {/* <button className="btn btn-primary" onClick={()=>{item.count} + util.formatCurrency(item.price)}>Add to cart</button>    */}

                                </li>))
                            }
                        </ul>
    }
                             <div className="sum"> 
                     <b>Cart Total sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b> 
                         </div> 
                        <button onClick={() => alert(`You have  ${util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}  to pay `)} className="checkout-button">CHECKOUT</button>
                     
                        
            </div>
        )
    }
}