import React, { useState, useRef } from "react";
import '../App.css';

import { Link } from 'react-router-dom';


export default function Card({id ,imgSrc, title, description, sizes, link }) {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);

  function handleMouseMove(event) {
    const card = cardRef.current;
    const { offsetWidth: width, offsetHeight: height } = card;
    const { clientX, clientY } = event;
    const x = clientX - card.offsetLeft - width / 2;
    const y = clientY - card.offsetTop - height / 2;
    var mult = 40;
    setXRotation((y / height) * mult);
    setYRotation((x / width) * mult);
  }

  const [card, setCard] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = (id) => {
    // Get the existing cart from session storage or initialize it as an empty array
    const existingCart = JSON.parse(sessionStorage.getItem("usercart")) || [];
  
    // Check if the product is already in the cart
    const isProductInCart = existingCart.some((item) => item.id === id);
  
    if (!isProductInCart) {
      // If the product is not in the cart, add it
      existingCart.push({ id, ...card });
  
      // Update session storage with the updated cart
      sessionStorage.setItem("usercart", JSON.stringify(existingCart));
  
      // Set the state to indicate that the product has been added to the cart
      setIsAddedToCart(true);
    }
  };
  

  function handleMouseEnter() {
    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    const desc = descRef.current
    title.style.transform = "translateZ(150px)";
    img.style.transform = "translateZ(100px) rotateZ(-45deg)";
    sizesBox.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)";
    desc.style.transform = "translateZ(75px)";
  }

  function handleMouseLeave() {
    setXRotation(0);
    setYRotation(0);

    const img = imgRef.current;
    const title = titleRef.current;
    const sizesBox = sizesboxRef.current;
    const purchase = purchaseRef.current;
    title.style.transform = "translateZ(0px)";
    img.style.transform = "translateZ(0px) rotateZ(0deg)";
    sizesBox.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
  }

  

  return (
    <div
      className="card"
      ref={cardRef}
      style={{
        transform: `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        style={{ height: '250px' }}
        ref={imgRef}
        src={imgSrc}
        alt={title}
        className="sneaaker-img"
      />
      <h1 className="title" style={{ fontSize: '35px', paddingTop: '15px' }} ref={titleRef}>
        {title}
      </h1>
      <p ref={descRef}>
        {description}
      </p>
      <ul className="sizes-box" ref={sizesboxRef}>
        {sizes.map((size, index) => (
          <li key={index}>{size}</li>
        ))}
      </ul>
      <div className="button-box" ref={purchaseRef}>
      <Link to={`/singleproduct/${id}`} className="purchase">
  VIEW INFO
</Link>
        
        <button className="button13" onClick={() => handleAddToCart(id)}>ADD TO CART</button>
      

      </div>
    </div>
  );
}
