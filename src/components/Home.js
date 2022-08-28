import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './home.css'
import Product from './Product';


function Home() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [searchData, setSearchData] = useState('');
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            navigate('/login')
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        setProducts(prev => [...prev, { productName, productPrice }])
        setProductName('')
        setProductPrice('')
    }


    return (
        <div className='HomePage'>
            <Navbar />
            <form onSubmit={handleSubmit} className="input_card">
                <label htmlFor="product">Add Your Product</label>
                <input id='product' type="text" value={productName} onChange={(e) => setProductName(e.target.value)} placeholder='Type Here' required />
                <label htmlFor="price">Add Your Product price</label>
                <input id='price' type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} min='0' placeholder='Add Here' required />
                <button>Add Product</button>
            </form>

            <div className="search_bar">
                <input type="text" value={searchData} onChange={(e) => setSearchData(e.target.value)} placeholder='Search for Products' />
            </div>

            <div className="product_list">
                <h1>Your Products</h1>
                {
                    products.length ? products.reduce((acc, val)=>{
                        let obj = acc.find(item=>item.productName === val.productName)

                        if(obj){
                            return acc
                        }

                        return acc.concat([val])
                    },[]).filter(val => {
                        if (searchData === '') {
                            return val
                        } else if (val.productName.toLowerCase().includes(searchData.toLocaleLowerCase())) {
                            return val
                        }
                    }).map((product, index) => {
                        return <Product key={index} id={index} name={product.productName} price={product.productPrice}/>
                    }) : <p>No Products Found</p>
                }
            </div>
        </div>
    )
}

export default Home
