import React from 'react';
import "../components/Service.css"

class Service extends React.Component{
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
              
                <li><a href="/Login">LOGIN/REGISTER</a></li>                
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
     <h1 class="service">SERVICES</h1>
    
    </div>
     <div class="row">
        <div class="col-4">
                <img src="assests/images/connect.jpg" alt=""></img>
                <h4>CONNECT WITH PEERS</h4>                  
                <p>Connecting with all the fellow peers is one of the great opportunities.meeting different people and connecting with them is one of the good things to increase the network.As a part of marketing, customers can share their product reviews which enhances the product productivity.  </p>
    
        </div>
        <div class="col-4">
            <img src="assests/images/events2.jpg" alt=""/>
            <h4>ANNOUCEMENTS FOR UPCOMING EVENTS </h4>                  
            <p>These provide the latest annoucements for the events coming up.We will be organizing lots of events for the customers to make them involved. We have a great feedback for the events we conducted, we will have clubs meet, thanks giving meet and celebrating our customers.</p>
        </div>
         <div class="col-4">
            <img src="assests/images/clubs.jpg" alt=""/>
             <h4>EXPLORE THE CLUBS </h4>                  
            <p>we have a lots of clubs which involves people interest.separate clubs for baseket ball, batmiton, social media marketing and even more.students can join based on their interest. We are also providing opportunites to volunteer in these clubs to get explosure and explore the need for it.</p>
        </div>
        <div class="col-4">
            <img src="assests/images/school.png" alt=""/>
             <h4>JOIN THE SCHOOLS</h4>                  
             <p>We have elimentary, high school for the students.Parents who are being a part of this are eligible to join their children in the schools and educate.We have highly qualified teaching staffs with best infrastructure.We have the best day care service for kids to stay safe until they get back home.
             </p>
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
        <p>copyrights-east tutorials</p>
    </div>
</div>
</div>

    
        )
    }
}
export default Service;