import React from 'react';
import '../main/main_login.css';
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import { useNavigate, } from 'react-router-dom';

function Main_login () {
  const navigate= useNavigate();

  const handleClick = () =>  navigate ("/Login"); 
  const handleClick1 = () => navigate ("/ShopKeeper_login");
  const handleClick2 = () => navigate ("/Register");

  return (
    <>
      <div>
         <div className="header">
            <div className="logo">
              <img src={logo2} alt="Logo" />
            </div>
            <div className="bv_logo">
              <img src={bv_logo} alt="Logo"/>
            </div>
          </div>

          <div className="containerLP">
            <h2>SIGN IN</h2>
      
              <div className="button-containerLP"> 
                  <button className="button-customerLP" onClick={handleClick}> Customer Login </button>
                  <button className="button-shopkeeperLP" onClick={handleClick1}> Shopkeeper Login </button>
              </div>
      
              

              <div className="hr_tagLP">
                <hr className="hr-leftLP"/>
                <span>or</span>
                <hr className="hr-rightLP"/>
              </div>

                  <button className='create_newLP' onClick={handleClick2}> Create new Account </button>

                 
          </div>
      </div>
          
    </>
  );
}

export default Main_login;