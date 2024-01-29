import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
const Navbar = () => {
    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
    }
    // const user = localStorage.getItem('user');
    // let userName = (JSON.parse(localStorage.getItem('user'))?.name).toUpperCase();
    return (
        <div>
            <img src="https://img.freepik.com/free-vector/gradient-coding-logo-template_23-2148809439.jpg"
                alt="web-logo" className="logo" />
                <div className="nav-links">
                    <ul className='nav-ul'>
                        <li><Link to='/'>Products</Link></li>
                        <li><Link to='/add'>Add Product</Link></li>
                        <li><Link to='/update'>Update Product</Link></li>
                        <li><Link to='/profile'>Profile</Link></li>
                        <li><Link onClick={logout} to='/signup'>Logout</Link></li>
                        {/* {
                              user ? <span className="user-name">({userName})</span>:<></>
                        } */}
                        <li className="sideLinks"><Link to='/login'>Login</Link></li>
                        <li className="sideLinks"><Link to='/signup'>Sign up</Link></li>
                    </ul>
                </div>
        </div>
    )
}

export default Navbar;