import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function SingleProduct() {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/form/${id}`)
      .then(res => setCard(res.data))
      .catch(err => console.error(err))
  }, [id]); // Add 'id' as a dependency to re-fetch data when the 'id' changes

  const handleAddToCart = () => {
    // Get the existing cart from session storage or initialize it as an empty array
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCart.some((item) => item.id === id);

    if (!isProductInCart) {
      // If the product is not in the cart, add it
      existingCart.push({ id, ...card }); // Use 'card' instead of 'product'

      // Update session storage with the updated cart
      sessionStorage.setItem("cart", JSON.stringify(existingCart));

      // Set the state to indicate that the product has been added to the cart
      setIsAddedToCart(true);
    }
  };

  return (
    <div className='SinglePage'>
      <div className="container4">
        <img className='ProductSingle' src={card.image} alt={card.name} />
        <div>
          <h1 className='TitleSingle'>{card.name}</h1>
          <p className='NikeAd'>{card.category}</p>
          <p className='NikeDiscription'>
            Price: R {card.price} <br />
            Stock: {card.stock} in store
          </p>
        </div>
      </div>
      <button className="button9" onClick={handleAddToCart}>ADD TO CART</button>
      <Link to="/cart" className='button8'>View Cart</Link>
    </div>
  );
}

export default SingleProduct;
