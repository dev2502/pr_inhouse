import React from "react";
import './myOrders.css';
import './headerForAll.css';
import logo2 from './logo2.png';
import bv_logo from './bv_logo.jpg';
import { useNavigate } from "react-router-dom";

function MyOrders() {

  const Navigate = useNavigate();
  const gotohome = () => Navigate('/CustomerHomePage') ;

  return(
    <>
    <div>

    {/* HEADER */}
    <div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>

      <div className="containerMO">
      
      <div class="orders">

      <button class="home-buttonMO" onClick={gotohome}>Home</button>

        <h1 className="h1MO">My Orders</h1>
        <div class="order">
          <div class="order-info">
            <span>Order #1234</span>
            <span class="order-status">Delivered</span>
            <span class="order-date">March 20, 2023</span>
          </div>
          <span class="order-total">₹290.00</span>
        </div>
        <div class="order">
          <div class="order-info">
            <span>Order #5678</span>
            <span class="order-status">Processing</span>
            <span class="order-date">March 22, 2023</span>
          </div>
          <span class="order-total">₹198.00</span>
        </div>
        <div class="order">
          <div class="order-info">
            <span>Order #9012</span>
            <span class="order-status">Shipped</span>
            <span class="order-date">March 23, 2023</span>
          </div>
          <span class="order-total">₹245.00</span>
        </div>
      </div>
      </div>
    
    </div>
    </>
  )
}
export default MyOrders