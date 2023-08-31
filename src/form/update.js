import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Navigate, useNavigate, useParams } from "react-router-dom";
import '../App.css';


function FormUpdate() {

    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productStock, setProductStock] = useState();
    const [productCategory, setProductCategory] = useState();
    
    const {id}=useParams()

    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState({});
    const navigate= useNavigate()

    const style = {
        margin: "10px",
    }

    useEffect(() => {
        axios.get('http://localhost:5000/api/form/'+id)
            .then((res) => {
                setProducts(res.data)
                
            })
            .catch()
    })

    const updateProduct=(e)=>{
        e.preventDefault()
        let payload = { name: productName, price: productPrice, stock: productStock, category: productCategory }
        axios.patch('http://localhost:5000/api/form/'+id, payload)
        .then(res=>{
            console.log('userEditSuccessfully')
            navigate('/form')
        })
    }

    return (
        <div className='update'>
 <div className="container">
            <form onSubmit={updateProduct}>
                <div className="form">
                    <h1 style={{ color: "White", paddingBottom: '20px' }} >Products</h1>
                    <div >
                        <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
                            type="text"
                            placeholder= {products.name}
                            onChange={(e => setProductName(e.target.value))}
                        />
                        <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
                            type="number"
                            placeholder={products.price}
                            onChange={(e => setProductPrice(e.target.value))}
                        />
                        <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
                            type="number"
                            placeholder={products.stock}
                            onChange={(e => setProductStock(e.target.value))}
                        />
                        <input style={{ width: '700px', height: '50px', borderRadius: '5px', border: '1px solid white', backgroundColor: 'black', color: 'white', paddingLeft: '15px', marginBottom: '30px' }}
                            type="text"
                            placeholder={products.category}
                            onChange={(e => setProductCategory(e.target.value))}
                        />
                        
                        <button onClick={e=>updateProduct(e)} className='button12'>Update Product</button>
                        <button className='button12'>Delete Product</button>
                    </div>
                </div>
            </form>

        </div>
        </div>
       
    );
}

export default FormUpdate;