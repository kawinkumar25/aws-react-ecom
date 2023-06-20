import React from 'react';
import '../styles/navbar.css';
import {Link} from "react-router-dom";
import { UseMyContext } from '../App';
const Navbar = () => {
  const {cart}=UseMyContext();
  return (
    <nav>
        <div className="nav_box">
            <span className="my_shop" >
                BOOK SHOPPINGS
            </span>
            <div className="cart" >
                <span>
                  <Link to="/cart">  <i className="fas fa-cart-plus"></i></Link>
                </span>
                <span>{cart.length}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
