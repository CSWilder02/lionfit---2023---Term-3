import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import '../App.css';
import Background from '../Pages/Images/Back.png';

function Form() {

  const [productName, setProductName] = useState();
  const [productPrice, setProductPrice] = useState();
  const [productStock, setProductStock] = useState();
  const [productCategory, setProductCategory] = useState();
  const [productImage, setProductImage] = useState();

  const [products, setProducts] = useState([]);

  const style = {
    margin: "10px",
  }

  const addProduct = (e) => {
    let payload = {  
      name: productName,
      price: productPrice, 
      stock: productStock, 
      category: productCategory, 
      image: productImage
    }
    axios.post('http://localhost:5000/api/form', payload)
      .then()
      .catch()

  }

  useEffect(() =>{
    axios.get('http://localhost:5000/api/form/')
    .then(res => setProducts(res.data))
    .catch(err => console.log(err))
  },[])

  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/api/form/' + id)
  }

  return (

    <div style={{ backgroundImage: `url(${Background})`, backgroundSize: '1481px', width: '1481px', height: '3000px', marginTop: '-20px', backgroundRepeat: 'no-repeat', backgroundColor: 'black' }} className="FormBack">
      <h1 className="Info NeonText" style={{ position: 'absolute', top: '200px', marginLeft: '100px' }}>NEW PRODUCTS</h1>
      <form onSubmit={addProduct}>
        <div className="form">
          <h1 style={{ color: 'white', fontWeight: '10%', fontSize: '30px', marginBottom: '20px' }} >Add Products</h1>
          <div >
            <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
              type="text"
              placeholder="Product Name"
              onChange={(e => setProductName(e.target.value))}
            />
            <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
              type="number"
              placeholder="Price"
              onChange={(e => setProductPrice(e.target.value))}
            />
            <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
              type="number"
              placeholder="Stock"
              onChange={(e => setProductStock(e.target.value))}
            />
            <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
              type="text"
              placeholder="Category"
              onChange={(e => setProductCategory(e.target.value))}
            />
            <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
              type="text"
              placeholder="Image"
              onChange={(e => setProductImage(e.target.value))}
            />
            <button className='button10' type='submit' style={style}>Add Product</button>
          </div>
        </div>
      </form>

     
        <div style={{color: 'white', marginBottom: '50px', fontSize:'25px', marginLeft: '-280px', marginTop: '-400px'}} className="card-header">
          Product Information
        </div>
        <div className="card-body" style={{marginLeft: '-280px'}}>
          <div className="row">
            {products.map(product => (
              <div key={product._id} className="col-md-4 mb-4">
                <div className="cardNow" >
                  <div className="card-body" style={{marginLeft: '-50px'}}>
                  <img style={{width: '150px', marginLeft: '100px', marginTop: '20px'}} src={product.image}></img>
                    <h5 style={{marginTop: '30px', fontSize: '25px', marginLeft: '25px'}} className="card-title">{product.name}</h5>
                    <p style={{marginTop: '20px', marginLeft: '25px'}} className="card-text">Price: {product.price}</p>
                    <p style={{marginTop: '20px', marginLeft: '25px'}} className="card-text">Stock: {product.stock}</p>
                    <p style={{marginTop: '20px', marginLeft: '25px'}} className="card-text">Category: {product.category}</p>
                    
                    <Link to={`/update/${product._id}`} className="btn btn-sm me-2 button11">Update</Link>
                    <Link to={`/singleproduct/${product._id}`} className="btn btn-sm me-2 button11">View</Link>
                    <button className="button11" onClick={() => handleDelete(product._id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      
    </div>

   
  );
}

export default Form;