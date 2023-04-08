import React, { useState } from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import '../../headerForAll.css';

import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';




const Login = () => {
 
    const navigate = useNavigate();

    const [ user, setUser ] = useState({
        SmartId: "",
        password: ""
    })

    const handleChange = e => {
        const { name,value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    // const login = () => {
    //     axios.post("http://localhost:9002/login",user)
    //     // .then(res => alert(res.data.message))
    //     // const handleRegisterClick = () => navigate("/components/register/register.js");

    // }
    const login = () => {
      axios
        .post("http://localhost:9002/login", user)
        .then((res) => {
          alert(res.data.message);
         
        })
        navigate("/Student_homepage")
        .catch((error) => console.log(error));
    };


    return (
      <>
      <div className="header">
      <div className="logo">
              <img src={logo2} alt="Logo" />
      </div>
      <div className="bv_logo">
        <img src={bv_logo} alt="Logo"/>
      </div>
    </div>
    <div className="containerLP">
        <div className="login"> 
        {console.log(user)}
         <h1>Login</h1>
            <input type="text" name="SmartId" value={user.SmartId} onChange={handleChange} placeholder="Enter your Smart Id"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={ login }>Login</div>
            
        </div>
        </div>
        </>
    )
}

export default Login