import React from "react";
import "../components/Products_Students.css"
import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
    export default function Products_Students(){
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const navigate = useNavigate();
       
        
       
        const submitTocart = (event) => {
            event.preventDefault();
            const name1 = "Username";
            const loggedInUser = localStorage.getItem("user");
            let prods=[];
            const id=event.currentTarget.id
            console.log(id);
            axios.get('http://localhost:80/api/addCart.php/'+id).then(function(response){
                //console.log("retrieved data");
                console.log(response.data);
                prods=Object.values(response.data);
                console.log(prods);
            
                    window.alert('Added to Cart Succesfully')
                  
            }).catch(({response}) => {
            
            console.log(response.data);
        }).finally(() => {
            console.log("Products:",prods);
            const ProductName=prods[1];
            console.log(ProductName);
            
            const Price=prods[2];
            console.log(Price);
            let inputs = [id,loggedInUser,ProductName,Price];
            console.log(inputs);
            axios.post('http://localhost:80/api/addCart.php/', inputs).then(function(response){
                console.log(response.data);
                //navigate('/Cart');
            });
        });
            
        }
        return(
            <div>
                
<div class="header">
       <div class="container">
            <div class="navbar">
                <div class="logo">
                    <img src="assests/images/food.png" width="50px" alt=""/> 
                 
                </div>
                <Link to="/" class="topic">MERCADO ESCOLAR </Link>
        <nav>
        <ul id="MenuItems">
            <li><a href="http://vxt1528.uta.cloud/blog/">BLOG</a></li>
            <Link to="/Home"><li><span>HOME</span></li></Link>
            <Link to="/About"><li><span>ABOUT</span></li></Link>
            <Link to="/Service"><li><span>SERVICE</span></li></Link>
            <Link to="/Contact"><li><span>CONTACT</span></li></Link>
            <li><a href="/Student">STUDENT</a></li>
            </ul>
        </nav>
        <Link to="/Cart">
                    <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
                 </Link>
                <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
            </div> 
        </div>
</div>
    <div class="small-container">
        <h1 class="title" >SHOP NEW TRENDS</h1>
        
            <div class="row">
                <div class="col-4">
                    
                        <img src="assests/images/womencloth.jpg" alt="" class="clothimg"/>                        
                        <h4>Women grey jacket </h4>                  
                        <p>$50.00</p>
                        <Link to="/">
                            <button class="btn" id="1" onClick={submitTocart}>add to cart</button>
                        </Link>
                        
                            <button class="btn" id="1"><a href="/Cart">Buy now</a></button>
                      
                </div>
                <div class="col-4">
                    <img src="assests/images/5f42f1c2a1a4d690294803.jpg" alt="" class="clothimg"/>
                    <h4>pink women hoodie</h4>                  
                    <p>$40.00</p>
                    <Link to="/Cart">
                        <button class="btn" id="2" onClick={submitTocart}>add to cart</button>
                    </Link>
                    <Link to="/Cart">
                        <button class="btn"id="2" >Buy now</button>
                    </Link>
                </div>
                 <div class="col-4">
                    <img src="assests/images/women.jfif" alt="" class="clothimg"/>
                     <h4>women casual dress</h4>                  
                    <p>$35.00</p>
                    <Link to="/">
                        <button class="btn" id="3" onClick={submitTocart}>add to cart</button>
                    </Link>
                    <Link to="/Cart">
                        <button class="btn" id="3" >Buy now</button>
                    </Link>
                </div>
            </div>
        
    </div>

 
    <div class="small-container">
        <h2 class="title">FURNITURE</h2>
        <div class="row">
            <div class="col-4">
                
                    <img src="assests/images/desl.jpg" alt="" class="clothimg"/>
                    <h4>studt desk</h4>                  
                    <p>$150.00</p>
                    <Link to="/">
                        <button class="btn" id="4" onClick={submitTocart}>add to cart</button>
                    </Link>
                    <Link to="/Cart">
                        <button class="btn"id="4" >Buy now</button>
                    </Link>
            </div>
            <div class="col-4">
                <img src="assests/images/chair.jpg" alt="" class="clothimg"/>
                <h4>office chair </h4>                  
                <p>$50.00</p>
                <Link to="/">
                    <button class="btn" id="5" onClick={submitTocart}>add to cart</button>
                </Link>
                <Link to="/Cart">
                    <button class="btn" id="5">Buy now</button>
                </Link>
            </div>
             <div class="col-4">
                <img src="assests/images/bed.jpg" alt="" class="clothimg"/>
                 <h4>comfort firm bed</h4>                  
                <p>$500.00</p>
                <Link to="/">
                    <button class="btn" id="6" onClick={submitTocart}>add to cart</button>
                </Link>
                <Link to="/Cart">
                    <button class="btn" id="6" >Buy now</button>
                </Link>
            </div>
            <div class="col-4">
                <img src="assests/images/coffee.jpg" alt="" class="clothimg"/>
                 <h4>coffee table</h4>                  
                 <p>$40.00</p>
                 <Link to="/">
                    <button class="btn" id="7" onClick={submitTocart}>add to cart</button>
                </Link>
                <Link to="/Cart">
                    <button class="btn" id="7">Buy now</button>
                </Link>
            </div>
        </div>
        <h2 class="title">Beauty & Accessaries</h2>
        <div class="row">
        <div class="col-4">
            <img src="assests/images/beauty.jfif" alt="" class="clothimg"/>
            <h4>makeup kit</h4>                  
            <p>$70.00</p>
            <Link to="/">
                <button class="btn" id="8" onClick={submitTocart}>add to cart</button>
            </Link>
            <Link to="/Cart">
                <button class="btn"  id="8" >Buy now</button>
            </Link>
         </div>
        <div class="col-4">
             <img src="assests/images/watch.png" alt="" class="clothimg"/>
            <h4>branded smart watch</h4>                  
            <p>$399.00</p>
            <Link to="/">
                <button class="btn" id="9" onClick={submitTocart}>add to cart</button>
            </Link>
            <Link to="/Cart">
                <button class="btn" id="9" >Buy now</button>
            </Link>
        </div>
        <div class="col-4">
             <img src="assests/images/mobile.webp" alt="" class="clothimg"/>
            <h4>iphone case</h4>                  
            <p>$30.00</p>
            <Link to="/">
                <button class="btn" id="10" onClick={submitTocart}>add to cart</button>
            </Link>
            <Link to="/Cart">
                <button class="btn" id="10" >Buy now</button>
            </Link>
        </div>
        <div class="col-4">
            <img src="assests/images/head.jpg" alt=""/>
            <h4>over-ear headset</h4>                  
            <p>$89.00</p>
            <Link to="/">
                <button class="btn" id="11" onClick={submitTocart}>add to cart</button>
            </Link>
            <Link to="/Cart">
                <button class="btn" id="11">Buy now</button>
            </Link>
        </div>
    </div>

</div>

<div class="offer">
    <div class="small-container">
        <div class="row">
            <div class="col-2">
                <img src="assests/images/shoe women.jpg" alt="" class="offer-img"/>
            </div>
            <div class="col-2">
                <p>exclusively avaiable on MERCADO ESCOLAR.</p>
                <h1>soft & comfort walking shoes</h1>
              
                <Link to="" class="btn">BUY NOW &#8594;</Link>
            </div>
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
        )
    }



