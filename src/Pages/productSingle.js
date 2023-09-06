import React, { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

function ProductSingle() {
  const { id } = useParams();
  const [card, setCard] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Function to handle adding the product to the cart
  const handleAddToCart = () => {
    // Get the existing cart from session storage or initialize it as an empty array
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || [];

    // Check if the product is already in the cart
    const isProductInCart = existingCart.some((item) => item.id === id);

    if (!isProductInCart) {
      // If the product is not in the cart, add it
      existingCart.push({ id, ...card });

      // Update session storage with the updated cart
      sessionStorage.setItem("cart", JSON.stringify(existingCart));

      // Set the state to indicate that the product has been added to the cart
      setIsAddedToCart(true);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/form/${id}`)
      .then((data) => {
        console.log(data); // Check if data is being fetched
        setCard(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div className='SinglePage'>
      <div className="container4">
        <img className='ProductSingle' src={card.imgSrc} alt={card.title} />
        <div>
          <h1 className='TitleSingle'>{card.title}</h1>
          <p className='NikeAd'>{card.description}</p>
          <p className='NikeDiscription'>
            Price: R {card.sizes} <br />
          </p>
        </div>
      </div>
      <button className="button9" onClick={handleAddToCart}>ADD TO CART</button>
      <Link to="/cart" className='button8'>View Cart</Link>
    </div>
  );
}

export default ProductSingle;


