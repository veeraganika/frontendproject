
import React, { useContext }  from 'react';

import { Link, useNavigate } from 'react-router-dom';
 import { FaShoppingBag } from "react-icons/fa";

import { UserProvider } from '../AuthProvider';
import { toast } from 'react-toastify';
import './Header.css'

const Header = () => {


  const { isAuthenticated, logout } = useContext(UserProvider)

  const navigate = useNavigate();


  const userLogoutHandler = async () => {
    const data = await logout();
    if (data) {
        navigate('/');
    }
};

  return (
    <div className=' header  d-flex  justify-content-around align-items-center  text-white p-3' >
        <div className='  d-flex align-items-center' >
            <FaShoppingBag  size={50} />
            <h1> <Link className='text-decoration-none text-white' to='/' >ONLINE SHOPPING MART</Link> </h1>
        </div>
        <ul className='d-flex' >
             <li className='list-unstyled ms-3' ><Link className='text-decoration-none text-white' to='/' >Home</Link></li> 
            <li className='list-unstyled ms-3' >{isAuthenticated ? <Link className='text-decoration-none text-white' onClick={userLogoutHandler} >Logout</Link> :  <Link className='text-decoration-none text-white' to='/login' >Login</Link>}</li>
         <li className='list-unstyled ms-3' ><Link className='text-decoration-none text-white' to='/product' >Product</Link></li>  
            <li className='list-unstyled ms-3' ><Link className='text-decoration-none  nav-link ms-1' to='/cart' >Cart</Link></li>
        </ul>
      
    </div>
  )
}

export default Header;