import React from 'react';
import "../components/IndexHome.css"

class IndexHome extends React.Component{
    render(){
        return(
        <div>

{/* Header */}

<div class="header">


    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="assests/images/food.png" width="50px" style={{float:'left'}}  alt=""/>  
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
                <li><a href="/SuperAdmin">SUPER ADMIN</a></li>
                <li><a href="/Schooladmin">SCHOOL ADMIN</a></li>
                <li><a href="/Student">STUDENT PROFILE</a></li>
                <li><a href="/Login">LOGIN</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
                <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
             </a>
            <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
        </div>  
        <div class="row">
            <div class="col-2">
                <h1 id="heading">Give your life <br/>A new style!</h1>
                <p>Shop the latest trend with newer collections and brands. <br/>Experiene the new change!</p>
                <a href="" class="btn">Explore Now &#8594;</a>
            </div>
            <div class="col-2">
                <img src="assests/images/image-removebg-preview.png" class="imgshop" alt="shopping"/>
            </div>
        </div>  
    </div>
</div> 

{/* Footer */}

<div class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col-1">
               <h3>Download our App</h3> 
               <p>Download App for Android and ios mobile phone.</p>
            </div>
            <div class="footer-col-2">
                <img src="images/white.png" alt="" width="50px" ></img> 
                <p>Download App for Android and ios mobile phone.</p>
                <div class="app-logo">
                    <img src="assests/images/appstore.png" alt="" width="60px"></img>
                    <img src="assests/images/ggg.png" alt="" width="60px"></img>
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
        <p>copyrights-east tutorials</p> 
    </div>
</div>
        
        </div>

        )
    }
}

export default IndexHome;