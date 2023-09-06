import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import '../App.css';
import { useState, useEffect } from "react";
import axios from "axios";

// Assuming you have a Card component defined somewhere
import Card from './card'; // Update the path to your Card component

import Promo from './Images/Promo1.png';
import Promo2 from './Images/Protein.png';
import Back from './Images/Back.png';
import NeonBack from './Images/NeonBack.png';
import Footer from './Images/Footer.png';
import Shoe from './Images/Shoe.png';
import Bottle from './Images/Bottle.png';
import Equipment from './Images/Equipment.png';

function Product() {

  const [top3, setTop3] = useState([])

  useEffect(() =>{
    axios.get('http://localhost:5000/api/getThreeDocuments')
    .then(response => {
        setTop3(response.data)
       console.log(response.data);
      })
    .catch(error => {
      console.error(error);
     })
  },[])
  // Your card data
  const sizes = ["80", "120", "200"]
  const cards1 = [
    {
      id: '1',
      imgSrc: require("./Images/Nike.png"),
      title: "Nike Dunk High",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["38", "40", "42", "44"],
      link: "./productSingle"
    },
    {
      id: '2',
      imgSrc: require("./Images/Converse.png"),
      title: "Converse Chuck Taylor",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["38", "40", "42", "44"],
      link: "./productSingle"
    }, 
    {
      id: '3',
      imgSrc: require("./Images/conversePride.png"),
      title: "Converse Pride",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["38", "40", "42", "44"],
      link: "./productSingle"
    },
    // Add more card data as needed
  ];

  const cards2 = [
    {
      id: '4',
      imgSrc: require("./Images/Recharge.png"),
      title: "Legion Recharge",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["80", "100", "250"],
      link: "./productSingle"
    },
    {
      id: '5',
      imgSrc: require("./Images/Preworkout.png"),
      title: "Optimum Nutrition",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["80", "120", "200"],
      link: "./productSingle"
    }, 
    {
      id: '6',
      imgSrc: require("./Images/Dietry.png"),
      title: "RAZE",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["100", "120", "150"],
      link: "./productSingle"
    },
    // Add more card data as needed
  ];

  const cards3 = [
    {
      id: '7',
      imgSrc: require("./Images/CreatineProtein.png"),
      title: "Body Attack",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["80", "100", "200"],
      link: "./productSingle"
    },
    {
      id: '8',
      imgSrc: require("./Images/caseinchoc.png"),
      title: "USN Casien",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["80", "100", "250"],
      link: "./productSingle"
    }, 
    {
      id: '9',
      imgSrc: require("./Images/CreatineMono.png"),
      title: "Fitness Standard",
      description: "Nike Dunk High is a high-top version...",
      sizes: ["80", "100", "150"],
      link: "./productSingle"
    },
    // Add more card data as needed
  ];

  // Assuming you have a product object
  const product = {
    _id: '123', // Replace with your product ID
  };

  return (
    <div className="Body" style={{ backgroundImage: `url(${Back})`, backgroundSize: '1481px', backgroundRepeat: 'no-repeat', height: '4580px', backgroundColor: 'black' }}>
      <Carousel className="Carousel" showThumbs={false} autoPlay={true} interval={2000}>
        {/* Slides */}
        {/* Slide 1 */}
        <div className="neon-slide">
          <img src={Shoe} alt="Slide 1" style={{ width: '1000px', paddingLeft: '-200px' }} />
          <p className="neon-text2">Striding Towards Change</p>
        </div>
        {/* Slide 2 */}
        <div className="neon-slide">
          <img src={Bottle} alt="Slide 1" className="Bottle" style={{ width: '1200px' }} />
          <p className="neon-text2">Sip by Sip, Refreshing Vitality</p>
        </div>
        {/* Slide 3*/}
        <div className="neon-slide">
          <img src={Equipment} alt="Slide 1" style={{ width: '1200px' }} />
          <p className="neon-text2">Unleash Potential with Every Rep</p>
        </div>
      </Carousel>

      {/* Render the cards1 */}
      <div>
        <div style={{ width: 'auto' }}>
          <h1 className="ShopT1">Who Gyms <br /> Without Shoes?</h1>
          <img style={{ width: '700px', marginLeft: '550px', marginTop: '-320px' }} src={Promo} alt="Promo" />
        </div>

        <div className="container">
          {top3.map((card, index) => (
            <Card
              id={card._id}
              imgSrc={card.image}
              title={card.name}
              description={card.category}
              sizes={sizes}
              link={card._id}
            />
          ))}
        </div>

        <button className="button5">VIEW MORE</button>

        <div style={{ width: 'auto', backgroundImage: `url(${NeonBack})`, backgroundSize: '1700px', height: '800px', backgroundRepeat: 'no-repeat' }}>
          <img style={{ width: '600px', marginTop: '20px', marginLeft: '120px' }} src={Promo2} alt="Promo2" />
          <h1 className="ShopT2">Fuel Your Gains with Power!</h1>

          <div className="container2">
            {cards2.map((card, index) => (
              <Card
                id={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                sizes={sizes}
                link={card.link}
              />
            ))}
          </div>
          <div className="container3">
            {cards3.map((card, index) => (
              <Card
                id={index}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
                sizes={sizes}
                link={card.link}
              />
            ))}
          </div>

          {/* Assuming you have a Link to a single product page */}
          <Link to={`/productSingle/${product._id}`} className="btn btn-sm me-2 button11">View</Link>
        </div>

        <div>
          <img style={{ width: '1150px', marginTop: '1200px', marginLeft: '120px' }} src={Footer} alt="Footer" />
        </div>
      </div>
    </div>
  );
}

export default Product;


