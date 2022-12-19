import React from 'react';
import "../components/ManageBusinessOwners.css"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function ManageBusinessOwners() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [showhide, setshowhide] = useState("");
    const [user, setuser] = React.useState(null);

    const handleAdd = (event) => {
        navigate('/AddStudent');
    }

    const handleDelete = (event) => {
        const user = inputs.Username;
        const url1 = 'http://localhost:80/api/user.php/'+user;
        axios.delete(url1).then(function(response){
            toast.success("User deleted successfully.");
            
            
            //navigate('/Login');
            console.log(response);
            setshowhide('0');
            
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const username = inputs.Username;
        const url = 'http://localhost:80/api/user.php/'+username;

        axios.get(url).then(function(response){
            toast.success("User added successfully.");
            setuser(response.data);
            
            //navigate('/Login');
            console.log(user);
            setshowhide('1');
            
        });
    }


    
        return (
            <div>
                <div class="header">
                    <div class="container">
                        <div class="navbar">
                            <div class="logo">
                                <img src="assests/images/food.png" width="50px" alt="" />

                            </div>
                            <a href="/" class="topic">MERCADO ESCOLAR </a>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
                
               
                <li><a href="/Login">LOGIN</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
                                <img src="assests/images/263142.png" alt="cart" width="30px" height="30px" />
                            </a>
                            <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon" />
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <h1 class="service">Manage Business Owners</h1>
                </div>
                <div>
                    <div class="row">
                        <div class="col-2">
                            {/* <h1 class="service">Manage Business Owners</h1> */}
                            <div class="box">
                                {/* <h3>Search for Students:</h3> */}
                                <div className="signupform" onSubmit={handleSubmit}>
                                    <form action="" className="Loginform">
                                        <h1 style={{textAlign:'center'}}>Search Business Owner</h1>
                                        <div className="inputBox">
                                            <label>UserName:</label>
                                            <input className="size" type="text" name = 'Username' placeholder="eg: HCavill" onChange={handleChange}/>
                                        </div>
                                        <button className="btn">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {showhide==='1' &&(
                        <div class="row">
                            <div class="profile">
                                <img src="assests/images/BusinessOwnerImg.jpg" width="300" height="300" />
                                <h2 style={{paddingLeft:"100px", color:"blue"}}>DETAILS</h2>
                                <h3>Name: {user?.Full_Name}</h3>
                                <h3>Address: {user?.Address}</h3>
                                <h3>Gender: {user?.Gender}</h3>
                                <h3>Brand Name: {user?.Brand_Name}</h3>
                                <h3>Brand Type: {user?.Brand_Type}</h3>
                                <h3>Email:{user?.Email_ID}</h3>
                                <h3>Phone number:{user?.PH_No}</h3>
                                <button class="btn" onClick={handleAdd}>ADD</button>
                                <button class="btn" onClick={handleDelete}>DELETE</button>
                            </div>
                            

                        </div>
)}
                    </div>
                </div>
                <div class="footer">
                    <div class="container">
                        <div class="row">
                            <div class="footer-col-1">
                                <h3>Download our App</h3>
                                <p>Download App for Android and ios mobile phone.</p>
                            </div>
                            <div class="footer-col-2">

                                <p>Download App for Android and ios mobile phone.</p>
                                <div class="app-logo">
                                    <img src="assests/images/appstore.png" alt="" width="60px" />
                                    <img src="assests/images/ggg.png" alt="" width="60px" />
                                </div>
                            </div>
                            <div class="footer-col-3">
                                <h3>useful links</h3>
                                <ul>
                                    <li>Coupons</li>
                                    <li>Blogs</li>
                                    <li>return</li>
                                    <li>join us</li>

                                </ul>
                            </div>
                            <div class="footer-col-4">
                                <h3>Follow us</h3>
                                <ul>
                                    <li>facebook</li>
                                    <li>twitter</li>
                                    <li>instagram</li>
                                    <li>youtube</li>

                                </ul>
                            </div>
                        </div>
                        <hr />
                        <p>copyrights-east tutorials</p>
                    </div>
                </div>
            </div>


        )
    }