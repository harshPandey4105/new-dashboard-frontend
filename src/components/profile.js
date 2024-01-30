import React, { useEffect, useState } from "react";
import profileImg from './images/profile.webp'
import './profile.css'
const Profile=()=>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    useEffect(()=>{
      getProfile();
    },[])
    const getProfile=()=>{
      let user=localStorage.getItem('user');
      if(user){
          user=JSON.parse(user);
          setName((user.name).toUpperCase());
          setEmail(user.email);
        }
        else{
          setName('None');
          setEmail('None');
      }
    }
    return(
        <div className="profile-section">
            <h1>Profile</h1>
            <div className="profile-img">
                 <img src={profileImg} alt="Profile-img"/>
            </div>
            <div className="profile-name">
                <h2>{name}</h2>
            </div>
            <div className="profile-email">
                <h3>{email}</h3>
            </div>
        </div>
    )
}

export default Profile;