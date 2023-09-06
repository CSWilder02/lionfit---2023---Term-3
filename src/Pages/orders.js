import React, { useState, useEffect } from "react";
import Background from '../Pages/Images/Back.png';


function Orders() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart items from sessionStorage when the component mounts
    const storedCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    sessionStorage.setItem("cart", JSON.stringify(updatedCart));
    setCartItems(updatedCart);
  };


  return (
    <div className="cartBack" style={{ backgroundImage: `url(${Background})`, backgroundSize: '1481px', backgroundRepeat: 'no-repeat', height: '3125px', backgroundColor: 'black' }}>
      <div>
        <h1 className="TitleOrders">Your Orders</h1>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <img
                style={{ width: "300px", marginTop: "50px", marginLeft: '50px' }}
                src={item.image}
                alt={item.name}
              />
              <h2 style={{color: 'white', marginLeft: '-900px', marginBottom: '50px'}}>Product Name: {item.name}</h2>
              <p style={{color: 'white', fontSize: '20px', marginLeft: '60px' }}>Category: {item.category}</p>
              <p style={{color: 'white', fontSize: '20px', marginLeft: '60px' }}>Price: {item.price}</p>
              {/* Add more order-related information here */}
              <button
                  className="removeCart"
                  onClick={() => removeFromCart(item.id)}
                  style={{width: '250px', marginLeft: '60px'}}
                >
                  Remove
                </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Orders;

