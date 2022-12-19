import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../components/Cart.css";
function Cart() {
  const [inputs, setInputs] = useState([]);
    const [product, setProduct] = useState([]);
    const [sum,setTotalSum] = useState([]);
    let totalSum =0;
    var productToDelete;
        
    function handleDelete(product)  {
     
      
      const url1 = 'http://localhost:80/api/displayCart.php/'+product;
      axios.delete(url1).then(function(response){
          toast.success("Product deleted successfully.");
          
          
          //navigate('/Login');
          console.log(response);
          
            
           window.location.reload(true);
          
          
          
      });
  }
    

    useEffect(() => {
        const getcategory = async () => {
          const username = localStorage.getItem("user");
            axios.get("http://localhost:80/api/displayCart.php/"+username)
            .then(response => {
                console.log(response);
                setProduct(response.data);
                
                for(var i=0;i<response.data.length;i++){
                    var obj = response.data[i];
                    console.log(obj.Price);
                    totalSum = totalSum + obj.Price;
                    productToDelete=obj.ProductName;
                }
                console.log(totalSum);
                setTotalSum(totalSum);
                setInputs(productToDelete);
            }).catch(err => {
                console.log(err);

            })

        };
    
        getcategory();

        
      },[]);
     

      return (
        
        <React.Fragment>



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
                <li><a href="/Products_Students">MANAGE PRODUCTS</a></li>
                <li><a href="/Login">LOGIN</a></li>                
            </ul>
        </nav>
        <a href="/Cart">
            <img src="assests/images/263142.png" alt="cart" width="30px" height="30px"/>
         </a>
        <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon"/>
        <hr/>
    </div>  
          <Container>
            <div className="row">
              <div className="col-sm-8 text-success">
                <h1 style={{textAlign:'center'}} >
                  CART PRODUCTS
                </h1>
               <br></br>
               <br></br>
               <br></br>
                <table className="table table-bordered text-white">
                  <thead>
                    <tr>
                      
                      <th>Product Name</th>
                      <th>Price</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    
                  {product.map((orders) => (
                  <tr key={orders.username}>
                    
                    <td>{orders.ProductName}</td>
                    <td>{orders.Price}</td>
                    <td><button class="btn" onClick={()=>(handleDelete(inputs))}>DELETE</button></td>
                  </tr>
                ))}
               
                    <tr>
                        <td>Total amount</td>
                        <td>{sum}</td>
                    </tr>
                  </tbody>
               
                
               
             
                </table>
                <button class="btn" type="submit" ><a href="/payment">CONTINUE TO SECURE PAYMENT</a></button>
                <button class="btn" type="submit"><a href="/Products_Students">CONTINUE SHOPPING </a></button>
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
          </Container>
        </React.Fragment>
      );

}
export default Cart;