import React from "react";
import "../components/Order.css"

class Order extends React.Component{
    render(){
        return(
            <div>
                    <div class="header">
        <div class="container">
             <div class="navbar">
                 <div class="logo">
                     <img src="assests/images/food.png" width="50px" alt=""/> 
                  
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
                     <img src="../images/263142.png" alt="cart" width="30px" height="30px"/>
                  </a>
                 <img src="../images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
             </div> 
         </div>
 </div>

<div class="main">
<h1>order placed successfully!</h1>
    <h3>Click here to contine shopping</h3>
    <a href="/Home">
        <button class="btn">back to home</button>
        <a href="/Cart">
            <button class="btn">back to cart</button>
        </a>
    </a>
    <h3>click here to sign out</h3>
    <a href="/">
        <button class="btn">SIGN OUT</button>
    </a>
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
                    <img src="../images/appstore.png" alt="" width="60px"/>
                    <img src="../images/appstore.png" alt="" width="60px"/>
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
        <hr/>
    
    </div>
</div>



            </div>
        )
    }
}
export default Order;