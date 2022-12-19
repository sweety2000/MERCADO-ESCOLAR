import React from 'react';
import "../components/UserProfile.css"

class UserProfile extends React.Component{
    render(){
        return(
            <div>
                 <div class="header">
        <div class="container">
             <div class="navbar">
                 <div class="logo">
                     <img src="assests/images/food.png" width="50px" alt=''/> 
                  
                 </div>
                 <a href="/" class="topic">MERCADO ESCOLAR </a>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                <li><a href="/Home">HOME</a></li>
                <li><a href="/About">ABOUT</a></li>
                <li><a href="/Service">SERVICE</a></li>
                <li><a href="/Contact">CONTACT</a></li>
              
                <li><a href="/Student">PROFILE</a></li>
                              
            </ul>
        </nav>
        <a href="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </a>
                 <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
             </div> 
         </div>
 </div>



<div class="main-container">
    <div class="row">
    	<div class="profile">
    		<img src="assests/pictures/avatar.jpg" width="300" height="300" alt=''/>
    		<h2 style={{ paddingLeft:100, color: 'blue'}}>DETAILS</h2>
    		<h3>Name</h3>
    		<h3>Date of Birth</h3>
    		<h3>Email</h3>
    		<h3>Department</h3>
    		<h3>Phone number</h3>
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
                <img src="assests/images/white.png" alt="" width="50px"/> 
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
        <hr/>
        <p>copyrights-east tutorials</p>
    </div>
</div>
</div>
        )
    }
}
export default UserProfile;