import React from 'react';
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import {toast} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const navigate = useNavigate();

    const [inputs, setInputs] = useState([]);
    const [user, setuser] = React.useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleChange1 = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        localStorage.setItem("user",value);
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const username = inputs.Username;
        console.log("Username", username);
        const url = 'http://localhost:80/api/user.php/'+username;

        axios.get(url).then(function(response){
            
            //toast.success("User added successfully.");
            setuser(response.data);
            console.log(response.data);
            //navigate('/Login');
            console.log(user);
            console.log("RoleID",user.Role_ID);
            if(inputs.Password === user.Password){
            if(user.Role_ID === 0){
                navigate('/Student');
            }
            if(user.Role_ID === 1){
                navigate('/Business_Owners');
            }
            if(user.Role_ID === 2){
                console.log("We reached here");
                navigate('/Schooladmin');
            }
            if(user.Role_ID === 3){
                navigate('/SuperAdmin');
            }
        }
        else{
            console.log("Wrong password");
        }
        });
        //navigate('/Login');
        
        
    }
        return(
    <div>
        <div className="header">
        <div>
             <div className="navbar">
                 <div className="logo">
                     <img src="assests/images/food.png" width="50px"/> 
                  
                 </div>
                 <a href="/" class="topic">MERCADO ESCOLAR </a>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
                           
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </a>
             </div> 
         </div>
 

     {/* <!-- ------------------------------------------------------------------- --> */}
 

     <div className="signupform" onSubmit={handleSubmit}>
        <form action="" className="Loginform">
            <h1 style={{textAlign:'center'}}>Log In</h1>
        <div className="inputBox">
            <label>Username:</label>
            <input className="size" type="text" name = 'Username' placeholder="eg: HCavill" onChange={handleChange1}/>
        </div>
        <div className = "inputBox">
            <label>Password:</label>
            <input className="size"  type="text" name = 'Password' placeholder="*******" onChange={handleChange}/>
        </div>
        <div>
           <u> <a style={{color:'blue'}}href="/ForgotPassword">Forgot Password</a></u>
        </div>
        <button className="btn"><a href="/SignUp">Register</a></button>
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
        
    }
    