import React from 'react';
import "../components/About.css"

class About extends React.Component{
    render(){
        return(
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
              
                <li><a href="/Login">LOGIN/REGISTER</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
            <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
         </a>
        <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
        <hr/>
    </div>  
    <div class="row">
        <div class="col-2">
            <h1>ABOUT US</h1>
            <hr class="hr"></hr>
            <h1>Give your shopping <br/>A new style!</h1>
            <p>As a heart-centered brand that cares about its global impact, we at MarketPlace emphasize that the key part of our brand is in our mission statement. 
                Through our extensive services, we aim to achieve excellence for every end-user we target. Every product on our catalog goes through thorough inspection for quality before it reaches your closet.
                Come and find what you are looking for at the best prices across the web without compromising on quality.
            </p>
            <a href="/" class="btn">Explore Now &#8594;</a>
        </div>
        <div class="col-2">
            <img src="assests/images/about us.jfif" class="imgshop" alt="shopping" style={{width:'50%', height:'70%',marginLeft:'15px'}}/>
            
            
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
                        <img src="assests/images/appstore.png" alt="" width="60px"/>
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
            <hr/>
         
        </div>
    </div>
    </div>
</div>

            
        )
    }
}

export default About;