import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';
const Login = () => {
    const navigation=useNavigate();
    useEffect(()=>{
        const data=localStorage.getItem('user');
        if(data){
            navigation('/');
        }
    },[])
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const getData= async()=>{
        let f=await fetch('https://dashboard-backend-rho.vercel.app/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers:{'Content-Type':'application/json'},
        });
        try{
            f=await f.json();
            console.log(f);
        }
        catch(e){
            alert("Please correct email and password");
        }
        if(f.user.name){
            localStorage.setItem('user',JSON.stringify(f.user));
            localStorage.setItem('token',JSON.stringify(f.auth));
            navigation('/');
        }
    }
    return (
        <div className="login-block">
            <h1>Login</h1>
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

export default Login;