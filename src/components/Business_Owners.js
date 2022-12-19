import React from 'react'
import "../components/Business_Owners.css"
class Business_Owners extends React.Component{
    render() {
  return (
    
      <div>
    <div class="header">
        <div class="container">
             <div class="navbar">
                 <div class="logo">
                     <img src="assests/images/food.png" width="50px" style={{float:'left'}} alt=""/> 
                  
                 </div>
                 <a href="/" class="topic">MERCADO ESCOLAR </a>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
                <li><a href="/Business_Owners">BUSINESS OWNERS</a></li>
                <li><a href="/Home">LOG OUT</a></li>
                             
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/> 
                 </a>
                 <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/> 
             </div> 
         </div>
 
 <div class="col-2">
 <h1 class="service">BUSINESS OWNER</h1>
 </div>
 <div class="row">
    <div class="col-4">
            <img src="assests/pictures/product.jpg" alt=""/>
            <h4 class="h4">MANAGE PRODUCTS</h4>                  
            <p>List the available products for the students to buy online. Display the biggest discounts on widest varieties of all products. Add the new Launched products and Remove the products which is out of stock. 
       </p>
            <a href="/Products_Business"><button class="btn" onclick="">Manage</button></a>
    </div>
    
    
    <div class="col-4">
        <img src="assests/images/fbpost.webp" alt="" height="100px"/> 
         <h4 class="h4">MANAGE THE POSTS</h4>                  
         <p>Exchange information with your customers. Post the content on to the website to share exciting news or stories. By sharing content around it, you have an opportunity to interact with your customersby asking queries etc.
             </p>
             <a href="/Post">
            <button class="btn" onclick="">posts</button>
        </a>
    </div>
     <div class="col-4">
        <img src="assests/pictures/chat.jfif" alt="" height="100px"/>
         <h4 class="h4">CHAT ONLINE</h4>                  
         <p>Provide Support and convenience to the Customers throught out their entire purchases so that they don't face any issues. Collect the important data related to website which helps improve experience.</p>
           <a href="/Chatclient">
         <button class="btn" onclick="">chat</button>
        </a>
    </div>
    
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
                    <img src="assests/pictures/appstore.png" alt="" width="60px"/>
                    <img src="assests/images/ggg.png" alt="" width="60px"/>
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
        
        <p>copyrights-east tutorials</p>
    </div>
</div>
</div>
  )
}
}
export default Business_Owners
