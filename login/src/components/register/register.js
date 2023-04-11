import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';



const Register = () => {
    const navigate = useNavigate();
    const [ user, setUser ] = useState({
        name: "",
        SmartId: "",
        password: "",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name,value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, SmartId, password, reEnterPassword } = user
        if( name && SmartId && password && password === reEnterPassword){
             axios.post("http://localhost:9002/register", user)
             .then( res => console.log(res))
             navigate("/login")
        }else{
            alert("invalid!");
            return false;
        }
    }

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
      <div className="containerlogin">
        <div className="register"> 
        {console.log("user",user)}
        <h1>Register</h1>
        <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } required></input>
        <input type="text"  name="SmartId" value={user.SmartId} placeholder="enter your SmartId" onChange={ handleChange } required></input>
        <input type="password" name="password" value={user.password}  placeholder="enter your password" onChange={ handleChange } required></input>
        <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="re-enter your password" onChange={ handleChange } required></input>
        <div className="button" onClick={register}>Register</div>
       </div>
       </div>
       </div>
       </>
    )
}

export default Register