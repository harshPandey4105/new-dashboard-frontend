import React, { useEffect, useState } from "react";
import './addProduct.css';
import { json, useNavigate, useParams } from "react-router-dom";

const Update_Product=()=>{
    
    const token=localStorage.getItem('token');
    
    const navigation=useNavigate();
    
    const parameter=useParams();
    const [updateData,setUpdateData]=useState('');

    const [name,setName]=useState('');
    const [category,setCategory]=useState('');
    const [price,setPrice]=useState('');
    const [company,setCompany]=useState('');

    useEffect(()=>{
        getUpdatingData();
    },[])
    const getUpdatingData=async()=>{
        let f=await fetch('https://dashboard-backend-rho.vercel.app/products-update-list/'+parameter.id,{
            headers:{
                authentication: JSON.parse(token)
            },
        });
        f=await f.json();
        setName(f.name);
        setCategory(f.category);
        setPrice(f.price);
        setCompany(f.company);
    }
    const updatingData=async()=>{
        let f=await fetch('https://dashboard-backend-rho.vercel.app/product-update/'+parameter.id,{
            method:'put',
            body:JSON.stringify({name,category,price,company}),
            headers:{
                'Content-Type':'application/json',
                authentication: JSON.parse(token)
            },
        });
        f=await f.json();
        console.log(f);
        navigation('/');
    }
    return(
        <div className="add-block">
            <h1>Update Product</h1>
            <input
                type="text"
                name="name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder="Enter Product Name"
                required
                />
            <input
                type="text"
                name="category"
                onChange={(e)=>setCategory(e.target.value)}
                value={category}
                placeholder="Enter Product Category"
                required
                />
            <input
                type="text"
                name="price"
                onChange={(e)=>setPrice(e.target.value)}
                value={price}
                placeholder="Enter Product Price"
                required
            />
            <input
                type="text"
                name="company"
                onChange={(e)=>setCompany(e.target.value)}
                value={company}
                placeholder="Enter Product Company"
                required
            />
            <button type="button" onClick={updatingData}>Update Product</button>
        </div>

    )
}

export default Update_Product;

  