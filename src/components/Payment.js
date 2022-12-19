import React from 'react';
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Payment(){
    function onButtonClickHandler (){
        window.alert('Order Placed Succesfully')
      }
   
        return(
    <div>
        <div className="header">
        <div>
             <div className="navbar">
                 <div className="logo">
                     <img src="assests/images/food.png" width="50px"/> 
                  
                 </div>
                 <a href="/" className="topic">MERCADO ESCOLAR </a>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
               
                <li><a href="/Login">LOG OUT</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </a>
             </div> 
         </div>
 

     {/* <!-- ------------------------------------------------------------------- --> */}
 

     <div className="signupform" >
    <form  className="Signform2" >
        <h1 style={{textAlign:'center'}}>Payment Details</h1>
    <div className="inputBox">
        <label>Account No</label>
        <input className="size" type="number" name = 'Acc_No' placeholder="eg: xxxxxxxxxx"  required/>
    </div>
    <div className="inputBox">
        <label>Name on Account</label>
        <input className="size" type="text" name = 'F_Name' placeholder="eg: Henry"  required/>
    </div>
    <div className="inputBox">
        <p>Account Type</p>
      
        <input type="radio" id="html" name = 'Acc_Type' value="checking" required/>
        <label for="html">checking</label> <br></br>
        <input type="radio" id="css" name = 'Acc_Type' value="savings" required/>
        <label for="css">savings</label> 
    </div>
   
    <div className="inputBox">
        <label>LMob_No:</label>
        <input className="size" type="number" name = 'PH_No' placeholder="eg: +91****"  required/>
    </div>
    <div className = "inputBox">
        <label>Email: </label>
        <input className="size" type="email" name = 'Email_ID' placeholder="Rich@gmail.com"  required/>
    </div>
   
    <div className = "inputBox">
        <label>Address:</label>
        <input className="size" type="text" name = 'Address' placeholder="eg: 32 Cross Street..."  required/>
    </div>
    
   
    <button class="btn" type="submit" onClick={()=>onButtonClickHandler()}>CHECK OUT</button>  
    <button class="btn" type="submit"><a href="/Products_Students">CONTINUE SHOPPING </a></button>
    </form>
</div>
 </div>
{/* <!-- --------------footer------------- --> */}
<div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
               <h3>Download our App</h3> 
               <p>Download App for Android and ios mobile phone.</p>
            </div>
            <div className="footer-col-2">
                <img src="assests/images/white.png" alt="" width="50px" /> 
                <p>Download App for Android and ios mobile phone.</p>
                <div className="app-logo">
                    <img src="assests/images/appstore.png" alt="" width="60px"/>
                    <img src="assests/images/google.jpg" alt="" width="60px"/>
                </div>
             </div>
             <div className="footer-col-3">
                <h3>useful links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blogs</li>
                    <li>return</li>
                    <li>join us</li>

                </ul>
             </div>
             <div className="footer-col-4">
                <h3>Follow us</h3>
                <ul>
                    <li>facebook</li>
                    <li>twitter</li>
                    <li>instagram</li>
                    <li>youtube</li>

                </ul>
             </div>
        </div>
        <p>copyrights-east tutorials</p>
    </div>
</div>
</div>


                
            );
        // }
    }