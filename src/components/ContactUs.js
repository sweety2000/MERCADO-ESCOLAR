import React from 'react';
import "./style.css";
import emailjs from "emailjs-com";

class Contact extends React.Component{
    render(){
       
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
         
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
                <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Login">LOGIN</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </a>
             </div> 
         </div>
 

     {/* <!-- ------------------------------------------------------------------- --> */}
 

<div className="signupform" onSubmit={getEmail}>
    <form action="" className="form">
        <h1 className="align">CONTACT US</h1>
    <div className="inputBox">
        <input className="size" type="text"  placeholder="First Name"></input>
        <input className="size" type="text"  placeholder="Last Name"></input>
    </div>
    <div className = "inputBox">
        <input className="size" type="email" name='email' placeholder="Email"></input>
        <input className="size"  type="text" placeholder="Phone Number"></input>
    </div>
    <div >
        <input className = "txt" type="text" name='message' placeholder="Write Something..."></input>
    </div>
    <button className="btn"><a href="../Contact">Submit</a></button>
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
    }

    const getEmail = (e) => {

        e.preventDefault();

   

        emailjs.sendForm('service_xti56kf', 'template_wwc4mjn', e.target, 'rqd23Wq1MWpV_CNvq')

            .then((result) => {

                console.log(result.text);

            }, (error) => {

                console.log(error.text);

            });

        e.target.reset()

        alert("Request Submitted, Check your email for Confirmation")

    }
    
    export default Contact;