import '../App';
import React from "react";
import Card from './card'


import Nike from './Images/Nike.png';

function SingleProduct () {

    const cards1 = [
        {
          imgSrc: require("./Images/Nike.png"),
          title: "Nike Dunk High",
          description: "Nike Dunk High is a high-top version...",
          sizes: ["38", "40", "42", "44"],
          link: "LionFit/lionfit/src/Pages/singleproducts.js"
        },
        {
          imgSrc: require("./Images/Nike.png"),
          title: "Nike Dunk High",
          description: "Nike Dunk High is a high-top version...",
          sizes: ["38", "40", "42", "44"],
          link: "LionFit/lionfit/src/Pages/singleproducts.js"
        }, 
        {
          imgSrc: require("./Images/Nike.png"),
          title: "Nike Dunk High",
          description: "Nike Dunk High is a high-top version...",
          sizes: ["38", "40", "42", "44"],
          link: "LionFit/lionfit/src/Pages/singleproducts.js"
        },
      ];

    return (

<div className='SinglePage'>
<div className="container4" >
<img className='ProductSingle' src={Nike} />
<div >
  <h1 className='TitleSingle'>NIKE</h1>
  <p className='NikeAd'>The Nike Dunk High is a stylish and versatile high-top shoe that combines fashion with functionality. Designed for sports and activities like running, this shoe is a perfect blend of comfort and performance. Nike Dunk High strikes a balance between providing support and allowing for agility during physical activities.</p>
  <p className='NikeDiscription'>Weight: 20 ounces <br /> Rating: 4.5 out 5</p>
  </div>
  </div>
  <button className="button9">BACK</button>
  <button style={{marginTop: '-250px'}} className="button8">PURCHASE</button>

  <h1 style={{fontSize: '40px', marginTop: '160px', marginLeft: '-700px'}} className="neon-text">SIMILAR PRODUCTS</h1>
  <div className="container" >
          {cards1.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
              sizes={card.sizes}
              link={card.link}
            />
          ))}
        </div>
  
</div>

    );
}

export default SingleProduct;