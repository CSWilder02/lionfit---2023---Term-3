import React, { useState } from "react";
import '../App.css';

import InfoBack from './Images/InfoBack.png'
import MisBack from './Images/Mission.png'

import Footer from './Images/Footer.png'

function Information() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form data submitted:", formData);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className="Body" style={{backgroundImage: `url(${InfoBack})`, backgroundSize: '1481px', backgroundRepeat: 'no-repeat', height: '3125px', backgroundColor: 'black'}}>
      <div>
        <p className="IntoAbout">Welcome to LIONFIT - Your Ultimate Destination for Premium Gym Accessories, Protein  Supplements, and Top-Notch Gym Equipment!
          <br /><br /><br />
          At LIONFIT, we are passionate about helping you unleash your inner beast and achieve your fitness goals. Whether you're a seasoned fitness enthusiast or just beginning your fitness journey, we've got everything you need to elevate your workouts and fuel your progress.
        </p>
        <button type="submit" className="button6" style={{position: 'relative', top: '570px'}}>VIEW PRODUCTS</button>
      </div>
           
      <div className="Mission" style={{width: '1481px',backgroundImage: `url(${MisBack})`, backgroundSize: '1481px', backgroundRepeat: 'no-repeat', position: 'absolute', top: '900px'}}>
        <h1 className="OurMission">Our mission is to empower individuals to lead healthier, stronger lives by providing them with the finest quality gym accessories, protein supplements, and gym equipment. We believe that every person deserves the opportunity to take charge of their fitness journey, and we're here to support you every step of the way.</h1>
      </div>

      <div>
        <h1 className="Info NeonText" style={{position: 'absolute', top: '1600px'}}>CONTACT US</h1>
        <form onSubmit={handleSubmit} className="FormInfo">
          <div style={{ marginBottom: '30px'}}>
            <label htmlFor="firstName" style={{paddingBottom: '10px', color: '#AD361E', fontSize: '20px'}}>First Name:</label><br />
            <input
            className="Input1"
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: '30px'}}>
            <label htmlFor="lastName" style={{paddingBottom: '10px', color: '#AD361E', fontSize: '20px'}}>Last Name:</label><br />
            <input
            className="Input1"
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: '30px'}}>
            <label htmlFor="email" style={{paddingBottom: '10px', color: '#AD361E', fontSize: '20px'}}>Email:</label><br />
            <input
            className="Input1"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ marginBottom: '30px'}}>
            <label htmlFor="password" style={{paddingBottom: '10px', color: '#AD361E', fontSize: '20px'}}>Message:</label><br />
            <input
            className="Input2"
              type="text"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <a href="mailto:21100249@virtualwindow.co.za"> 
  <button className="button7" type="submit">Submit</button>
</a>
        </form>
      </div>

      <div>
<img style={{width: '1150px', marginTop: '800px', marginLeft: '120px' }} src={Footer} />
</div>
    </div>
  );
}
  
export default Information;

  