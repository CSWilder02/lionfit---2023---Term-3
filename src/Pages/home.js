import '../App.css';
import React from "react";


import Background from './Images/Group45.png';
import SaleMachine from './Images/fullmachine.png';
import BackImg from './Images/Group44.png';

import Dumbell from './Images/dumbbell.png';
import FullSet from './Images/bench-press.png';
import Rope from './Images/skipping-rope.png';
import Cloves from './Images/glove 1.png';

import Pro1 from './Images/DumbellsPro.png';
import Pro from './Images/BikePro.png';
import Pr31 from './Images/WeightsDumb.png';

import Footer from './Images/Footer.png'

function App() {
  return (
<div className="neon-text-container" style={{backgroundImage: `url(${Background})`,backgroundSize: '1700px', width: '1481px', height: '3700px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: 'black'}}>
  <div>
  <h1 className="neon-text">BE PATIENT</h1>
  <br />
  <h2 className="slogan">PROGRESS TAKES TIME</h2>
    </div> 
  <div>
    <button className="button">ABOUT LIONFIT</button>
  </div> <br />
  <div className='machineimg'>
  <img style={{width: '1100px'}} src={SaleMachine} />
  <p className='saleP'>Since we have a ton of new & existing equipment <br /> coming in, we are having a BIG SALE on our fully <br /> equipped body workout sets. </p>
  <button className="button2">READ MORE</button>
  </div>
  <div className="neon-text-container" style={{backgroundImage: `url(${BackImg})`, width: '1600px', marginTop: '850px', marginLeft: '-1220px', backgroundRepeat: 'no-repeat'}}>
    <div className='card1'>
    <img style={{width: '80px', marginLeft: '165px', marginTop: '20px'}} src={Dumbell} />
    <h2 className='cardText'>Dumbells</h2>
    </div>
    <div className='card2'>
    <img style={{width: '80px', marginLeft: '165px', marginTop: '20px'}} src={FullSet} />
    <h2 className='cardText'>Full Gym Set</h2>
      </div>
      <div className='card3'>
      <img style={{width: '80px', marginLeft: '165px', marginTop: '20px'}} src={Rope} />
    <h2 className='cardText'>Bands</h2>
      </div>
      <div className='card4'>
      <img style={{width: '80px', marginLeft: '165px', marginTop: '20px'}} src={Cloves} />
    <h2 className='cardText'>Accessories</h2>
      </div>
      <div className='ProductShopList'>
        <h1 className='ShopTitle'>SHOP</h1>
        <p className="neon-text2">We Have More Than You Need</p>
        <p className='ProductInfo'>Order you future gym from us. Contact us for more info. <br />
         Delivery included.</p>
         
         {/* Cards */}

         <div className="cards-container">
            {/* Card 1 */}
            <div className="cardPro">
             <img style={{width: '250px', marginTop: '30px', marginLeft: '50px'}} src={Pro1} />
              <h2 className='pro1duct'>Dumbell Weights</h2>
              <p className='price'>R250.00</p>
            </div>
            {/* Card 2 */}
            <div className="cardPro2">
            <img style={{width: '220px', marginTop: '30px', marginLeft: '50px'}} src={Pro} />
              <h2 className='pro1duct'>Vortex V5000</h2>
              <p className='price'>R1 650.00</p>
            </div>
            {/* Card 3 */}
            <div className="cardPro3">
            <img style={{width: '230px', marginTop: '30px', marginLeft: '50px'}} src={Pr31} />
              <h2 className='pro1duct'>Adjustable Dumbell</h2>
              <p className='price'>R 3 000.00</p>
            </div>
            <button className="button3">VIEW MORE</button>
          </div>



<div>
<img style={{width: '1150px', marginTop: '30px', marginLeft: '-100px' }} src={Footer} />
</div>

      </div>
  </div>
</div>


  );
}

export default App;