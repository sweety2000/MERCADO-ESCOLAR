import React from "react";
import "../components/SchoolAdmin.css"

class SchoolAdmin extends React.Component{
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
              
               
                <li><a href="/Schooladmin">SCHOOL ADMIN</a></li>
                <li><a href="/Home">LOG OUT</a></li>      
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </a>
                 <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
             </div> 
         </div>
 </div>
 <div class="col-2">
 <h1 class="service">SCHOOL ADMIN</h1>
 
</div>
 <div class="row">
    <div class="col-4">
            <img src="assests/images/students.jpg" alt=""/>
            <h4 class="h4">MANAGE STUDENTS</h4>                  
            <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development (La Greca and Harrison, 2005), and are a form of social support.</p>
            <a href="/ManageStudent"><button class="btn">student profile</button></a>
    </div>
    <div class="col-4">
        <img src="assests/images/businessowner.jpg" alt=""/>
        <h4 class="h4">MANAGE BUSINESS OWNERS</h4>                  
        <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development
             (La Greca and Harrison, 2005), and are a form of social support.</p>
             <a href="/ManageBusinessOwners">
             <button class="btn">Business owners</button>
            </a>
    </div>
     <div class="col-4">
        <img src="assests/images/fbpost.webp" alt=""/>
         <h4 class="h4">MANAGE POSTS </h4>                  
        <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development (La Greca and Harrison, 2005), 
            and are a form of social support.</p>
            <a href="/Post">
            <button class="btn">posts</button>
        </a>
    </div>
    <div class="col-4">
        <img src="assests/images/clubs2.jpg" alt="" height="100px"/>
         <h4 class="h4">MANAGE THE CLUBS</h4>                  
         <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development 
            (La Greca and Harrison, 2005), and are a form of social support.</p>
            <a href="/Club">
            <button class="btn">clubs</button>
            </a>
    </div>
    <div class="col-4">
        <img src="assests/images/Marketplaces.png" alt="" height="100px" class="imgmarket"/>
         <h4 class="h4">MANAGE MARKETPLACE</h4>                  
         <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development 
            (La Greca and Harrison, 2005), and are a form of social support.</p>
        <a href="/Marketplace">
            <button class="btn">marketplace</button>
        </a>
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
                <img src="assests/images/white.png" alt="" width="50px" /> 
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
        <p>copyrights-east tutorials</p>
    </div>
</div>
</div>


        )
    }

}

export default SchoolAdmin;