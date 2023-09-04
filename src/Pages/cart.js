import React, { useState } from "react";

import Background from '../Pages/Images/Back.png';

function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(sessionStorage.getItem("cart")) || []
  );

  const removeFromCart = (productId) => {
    // Filter out the product with the specified ID from the cart
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    
    // Update session storage and state
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
   
<div className="cartBack" style={{backgroundImage: `url(${Background})`, backgroundSize: '1481px', backgroundRepeat: 'no-repeat', height: '3125px', backgroundColor: 'black'}}>
<div className="CartPage">
      <h1 className="CartTitle">Your Cart</h1>
      <ul >
        {cartItems.map((item) => (
          <li key={item.id}>
            <img style={{width: '300px', marginTop: '50px', marginLeft: '-110px'}} src={item.image} alt={item.name} />
            <div style={{marginLeft: '220px', marginTop: '-250px'}} className="productCart">
              <h3 style={{marginBottom: '25px'}}>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
              <button className="removeCart" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>

<div className="CheckoutDetails">
<h2 style={{marginBottom: '30px'}}>Checkout Details</h2>
{/* Add your card details form or component here */}
{/* For example: */}
<form className="checkout">
  <label>
    Card Number:
    <input style={{ width: '500px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }} type="text" />
  </label>
  <br/>
  <label>
    Expiry Date:
    <input style={{ width: '500px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }} type="text" />
  </label>
  <br/>
  <label>
    CVV:
    <br/>
    <input style={{ width: '500px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }} type="text" />
  </label>
  <br/>
  <button className="button15">Submit Order</button>
</form>
</div>

</div>
  );
}

export default Cart;
