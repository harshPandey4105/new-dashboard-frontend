import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';
const Signup = () => {
    const navigation=useNavigate();
    useEffect(()=>{
        const data=localStorage.getItem('user');
        if(data){
            navigation('/');
        }
    },[])
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const getData= async()=>{
        let f=await fetch('https://dashboard-backend-rho.vercel.app/signup',{
            method:'post',
            body:JSON.stringify({name,email,password}),
            headers:{'Content-Type':'application/json'},
        });
        f=await f.json();
        console.log(f);
        localStorage.setItem('user',JSON.stringify(f.user));
        localStorage.setItem('token',JSON.stringify(f.auth));
        navigation('/');

    }
    return (
        <div className="sign-block">
            <h1>Sign Up</h1>
            <input
                type="text"
                name="name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
                placeholder="Enter your name"
                required
                />
            <input
                type="email"
                name="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
                placeholder="Enter your Email"
                required
                />
            <input
                type="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                placeholder="Enter Password"
                required
            />
            <button type="button" onClick={getData}>Sign Up</button>
        </div>
    )
}

export default Signup;