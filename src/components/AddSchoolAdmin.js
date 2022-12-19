import React from 'react';
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddSchoolAdmin(){
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        
        event.preventDefault();
        console.log("Inputs : ",inputs);

        axios.post('http://localhost:80/api/user.php/', inputs).then(function(response){
            toast.success("User added successfully.");
            console.log(response.data);
            navigate('/ManageSchoolAdmin');
            console.log("It worked");
        });
        console.log("Inputs : ",inputs);
        
    }
    // render(){
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
                
              
                <li><a href="/Login">LOGIN</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </a>
             </div> 
         </div>
 

     {/* <!-- ------------------------------------------------------------------- --> */}
 

     <div className="signupform" onSubmit={handleSubmit}>
    <form  className="Studentform" >
        <h1 style={{textAlign:'center'}}>Add Admin</h1>
    <div className="inputBox">
        <label>First_Name:</label>
        <input className="size" type="text" name = 'F_Name' placeholder="eg: Henry" onChange={handleChange}/>
    </div>
    <div className="inputBox">
        <label>Username:</label>
        <input className="size" type="text" name = 'Username' placeholder="eg: Cavill" onChange={handleChange}/>
    </div>
    <div className="inputBox">
        <label>LMob_No:</label>
        <input className="size" type="text" name = 'PH_No' placeholder="eg: +91****" onChange={handleChange}/>
    </div>
    <div className = "inputBox">
        <label>Email: </label>
        <input className="size" type="text" name = 'Email_ID' placeholder="Rich@gmail.com" onChange={handleChange}/>
    </div>
    <div className = "inputBox">
        <label>Password:</label>
        <input className="size"  type="text" name = 'Password' placeholder="*******" onChange={handleChange}/>
    </div>
    <div className = "inputBox">
        <label>Gender:</label>
        <input className="size" type="text" name = 'Gender' placeholder="eg: M/F" onChange={handleChange}/>
    </div>
    <div className = "inputBox">
        <label>Address:</label>
        <input className="size" type="text" name = 'Address' placeholder="eg: 32 Cross Street..." onChange={handleChange}/>
    </div>
    <div className="inputBox">
        <label>Role_ID:</label>
        <input className="size" type="text" name = 'Role_ID' placeholder="eg: 0,1,2,3" onChange={handleChange}/>
    </div>
    <div className = "inputBox">
        <label>School:</label>
        <input className="size" type="text" name = 'School' placeholder="Optional.." onChange={handleChange}/>
    </div>
    <button className="btn">Submit</button>
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