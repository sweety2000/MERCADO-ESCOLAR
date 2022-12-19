import React from 'react';
import "./style.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddPost(){
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

        axios.post('http://localhost:80/api/posts.php/', inputs).then(function(response){
            toast.success("Post added successfully.");
            console.log(response.data);
            navigate('/Post');
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
                     <img src="assests/images/food.png" alt=" "width="50px"/> 
                  
                 </div>
                 <a href="/" className="topic">MERCADO ESCOLAR </a>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
                <li><a href="/Post">POSTS</a></li>
                              
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
        <h1 style={{textAlign:'center'}}>Add Post</h1>
    <div className="inputBox">
        <label>User Name:</label>
        <input className="size" type="text" name = 'PostName' placeholder="eg: Henry" onChange={handleChange}/>
    </div>
    <div className="inputBox">
        <label>Comments</label>
        <input className="size" type="text" name = 'Comments' placeholder="eg: What u are feeling" onChange={handleChange}/>
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