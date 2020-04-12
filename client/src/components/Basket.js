import React, { Component } from 'react';
import util from '../components/util'
export default class Basket extends Component {
    render() {
        const { cartItems } = this.props;

        return (
            <div className="alert alert-info">
                {cartItems.length === 0
                    ? "Basket is empty" :
                    <div>You have {cartItems.length} items in the basket. <hr /></div>
                }
                {cartItems.length > 0 &&
                    <div>
                        <ul style={{ marginLeft: -25 }}>
                            {cartItems.map(item => (
                                <li key={item._id}>
                                    <b>{item.name}</b>
                                    <button style={{ float: 'right' }} className="btn btn-danger btn-xs"
                                        onClick={(e) => this.props.handleRemoveFromCart(e, item)}>X</button>
                                    <br />
                             {item.count} X {util.formatCurrency(item.price)}  
                           {/* <button className="btn btn-primary" onClick={()=>{item.count} + util.formatCurrency(item.price)}>Add to cart</button>    */}

                                </li>))
                            }
                        </ul>

                        <b>Sum: {util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}
                        </b>
                        <button onClick={() => alert(`You have  ${util.formatCurrency(cartItems.reduce((a, c) => (a + c.price * c.count), 0))}  to pay `)} className="btn btn-primary">checkout</button>
                    </div>
                }
            </div>
        )
    }
}