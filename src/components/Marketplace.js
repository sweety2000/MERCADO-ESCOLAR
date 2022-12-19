import React from "react";
import "../components/Marketplace.css"

class Marketplace extends React.Component{
    render(){
        return(
    <div>
       {/* Header Component Start */}
       <div class="header">
        <div class="container">
             <div class="navbar">
                 <div class="logo">
                     <img src="../images/food.png" width="50px"/> 
                  
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
                 <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
             </div> 
         </div>
 </div>
  {/* Header Component End */}
  {/* Body start */}
  <div class="col-2">
    <h1 class="service">MARKETPLACE</h1>
   
   </div>
    <div class="row">
       <div class="col-4">
               <img src="assests/images/p1.png" alt=""/>
               <br></br>
               <h4 style={{color:"blue"}}> TRAFFIC ANALYSIS by SOURCES</h4>  
               <br></br>                
               <p>Understanding Website Traffic sources is an important part in marketing stratergy. Six different types of website traffic sources include Organic, Direct, Referrals, Paid Search, Email Marketing and Social Media. It can be seen that most of visitors visits the website either by typing the website address directly in the address bar or via organic i.e, users came to your site via someone who found your site using a Search Engine.</p>
       </div>
       <div class="col-4">
           <img src="assests/images/p2.png" alt=""/>
           <br></br>
           <h4 style={{color:"blue"}}>NO.OF VISITS by BROWSERS</h4>     
           <br></br>             
           <p>Here, It can be seen that how many users are visiting the Website using different Search Engines. By identifying the count, it helps to increase the traffic through Search Engine Optimization and Content Marketing. The higher you rank for keywords, the more often the links will rank higher in Search Engine Results Pages. Most of the visitors are using Chrome and Microsoft Edge while visiting the Website</p>
       </div>
    </div>
  {/* Body end */}
  {/* footer start */}
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
                    <img src="assests/images/appstore.png" alt="" width="60px"/>
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
  {/* footer end */}


    </div>
        )
    }
}
export default Marketplace ;