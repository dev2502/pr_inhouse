import React from "react";
import { useNavigate } from "react-router-dom";
import '../../headerForAll.css';
import logo2 from '../images/logo2.png';
import bv_logo from '../images/bv_logo.jpg';
import "./shopkeeperHomePage.css";

function Shopkeeper_homepage() {
const navigate = useNavigate();

const handleClick = () => navigate("/Table");
return (
<>

{/* HEADER */}
<div className="header">
          <div className="logo">
            <img src={logo2} alt="Logo"/>
          </div>
          <div className="bv_logo">
            <img src={bv_logo} alt="Logo"/>
          </div>
       </div>

<div className="container1">
<table className="t1">
<tr>
<td>
<button class="B1" onClick={handleClick}>Update </button>
</td>
<td>
<button class="B1">Search </button>
</td>
</tr>
</table>
</div>
</>
);
}
export default Shopkeeper_homepage;