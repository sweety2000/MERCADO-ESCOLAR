import React from 'react';
import "./style.css";


class ClubDetail extends React.Component{
    render(){
       
        return(
   
            
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
                     <li><a href="/Schooladmin">SCHOOL ADMIN</a></li>
                     <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
                     <li><a href="/Login">LOGIN</a></li>                
                 </ul>
             </nav>
             <a href="/Cart">
                         <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                      </a>
                  </div> 
              </div>
       {/* {/* <div className="header">
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
         </div> */}
 

     {/* <!-- ------------------------------------------------------------------- --> */}
 

<div className="signupform">
    <form action="" className="form">
            <h1>CLUB DETAILS:</h1>
            <h4>TOTAL NUMBER OF MEMBERS: 325</h4>
            <h5>Golf club:</h5>
            <p>Student joined: 55</p>
            <h5>Base ball club:</h5>
            <p>Student joined: 65</p>
            <h5>Soccer club:</h5>
            <p>Student joined: 101</p>
            <h5>csac club:</h5>
            <p>Student joined: 104</p>
    </form>
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


    
export default ClubDetail;
        


