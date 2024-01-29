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
    const [error, setError] = useState(false);
    const getData= async()=>{ 
        if ( !email || !password || email===" " || password===" ") {
            return setError(true);
        }
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
            {error && (!email || email===" ") ?<span className="validations">Please enter valid email</span>:<></>}
            <input
                type="password"
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
                placeholder="Enter Password"
                required
            />
            {error && (!password || password===" ") ?<span className="validations validations-p">Please enter valid password</span>:<></>}
            <button type="button" onClick={getData}>Sign Up</button>
        </div>
    )
}

export default Login;