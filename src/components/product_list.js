import React, { useEffect, useState } from "react";
import './product.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Product_list = () => {
    const [products, setProducts] = useState([]);
    let count = 0;
    const token = localStorage.getItem('token');
    const navigation = useNavigate();
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = async () => {
        let p = await fetch("https://dashboard-backend-rho.vercel.app/products", {
            headers: {
                'Content-Type': 'application/json',
                authentication: JSON.parse(token)
            }
        })
        p = await p.json();
        setProducts(p);
    }
    const deleteProduct = async (id) => {
        let p = await fetch("https://dashboard-backend-rho.vercel.app/delete/" + id, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                authentication: JSON.parse(token)
            }
        })
        p = await p.json();
        console.log(p);
        getProducts();
    }
    const searchListing = async(event) => {
        let key=event.target.value;
        if(!key){
            return getProducts();
        }
        let p = await fetch("https://dashboard-backend-rho.vercel.app/search/"+key, {
            headers: {
                'Content-Type': 'application/json',
                authentication: JSON.parse(token)
            }
        })
        p = await p.json();
        setProducts(p);
    }
    return (
        <div className="products-list-section">
            <div className="searchBar-section">
                <input
                    type="text"
                    name="search"
                    onChange={searchListing}
                    placeholder="Enter Product Name"
                    required
                />
            </div>
            <div className="products-list-heading">
                <ul>
                    <li>Sno.</li>
                    <li>Name</li>
                    <li>Price</li>
                    <li>Category</li>
                    <li>Company</li>
                    <li>Operation</li>
                </ul>
            </div>
            <div className="products-list-items">
                {
                    
                    products.length>0 ? products.map((item, index) =>
                        <ul>
                            <li>{index + 1}</li>
                            <li>{(item.name).toUpperCase()}</li>
                            <li>{(item.price).toUpperCase()}</li>
                            <li>{(item.category).toUpperCase()}</li>
                            <li>{(item.company).toUpperCase()}</li>
                            <li><Link to={`/update/${item._id}`}>update</Link><button onClick={() => deleteProduct(item._id)}>Delete</button></li>
                        </ul>
                    )
                    : <h1>NO Result Found</h1>
                }
            </div>
        </div>
    )
}

export default Product_list;