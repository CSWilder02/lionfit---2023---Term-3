import React, { useState } from "react";

function UserCart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(sessionStorage.getItem("usercart")) || []
  );

  const removeFromCart = (productId) => {
    // Filter out the product with the specified ID from the cart
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    
    // Update session storage and state
    sessionStorage.setItem("usercart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };

  return (
   
<div>
<div className="CartPage">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <img style={{width: '150px'}} src={item.imgSrc} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Category: {item.category}</p>
              <p>Price: {item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>

<div className="CheckoutDetails">
<h2>Checkout Details</h2>
{/* Add your card details form or component here */}
{/* For example: */}
<form>
  <label>
    Card Number:
    <input type="text" />
  </label>
  <label>
    Expiry Date:
    <input type="text" />
  </label>
  <label>
    CVV:
    <input type="text" />
  </label>
  <button>Submit Order</button>
</form>
</div>

</div>
  );
}

export default UserCart;
