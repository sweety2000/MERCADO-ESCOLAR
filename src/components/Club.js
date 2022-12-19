import React, {useState} from 'react'
import "../components/Club.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../data';
import axios from "axios";


export default function Club(){
  const [filter, setfilter] = useState('');
  const searchText = (event) => {
    setfilter(event.target.value);
  }
  let dataSearch  = data.cardDate.filter(item => {
    return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()) )
  })
  const handleAlert = () => {
    alert('User successfully added to the club');
  }
  const handleAlertDel = () => {
    alert('User removed from the club');
  }
  const deleteClub = (event) => {
    let clubName = event.currentTarget.id;
    let Username = localStorage.getItem("user");

   
    console.log(clubName);
    let inputs = [clubName,Username];
    console.log(inputs);
    axios.delete('http://localhost:80/api/clubs.php/'+Username).then(function(response){
                console.log(response.data);
                window.alert('Deleted from the Club')
                //navigate('/Cart');
            });
  }
  
  return ( 
    <div>
       <div className="header">
        <div className="container">
             <div className="navbar">
                 <div className="logo">
                     <img src="assests/images/food.png" width="50px" style={{float:'left'}} alt=""/> 
                  
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
                 <img src="assests/images/menu.png" alt="" width="30px" height="30px" className="menu-icon"/>
             </div> 
         </div>
 </div>

<section className='py-4 container'>
     <div className='row justify-content-center'>
         <div className='col-12 mb-5'>
             <div className='mb-3 col-4 mx-auto'>
                 <h1 className='form-label h4'>Search for clubs</h1>
                 <h5>Type the Club Name:</h5>
                 <input type='text' className='from-control' value={filter} onChange={searchText.bind(this)}/>
                 

             </div>
             </div>
         {dataSearch.map((item,index) => {
             return(
                 <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                 <div className="card p-0 overflow-hidden h-100 shadow">
                     <img src={item.img} className='card-img-top' alt='img'/>
                      <div className='card-body'>
                         <h5 className='card-title'>{item.title}</h5>
                         <p className='card-text'>{item.desc}</p>
                         <p>{item.link}</p>
                         <button className='btn'><a href="/AddClub">add</a></button>
                         <button className='btn'  id={item.title} onClick={deleteClub} >delete</button>
                      </div>
             </div>
         </div>
                )

                 })}
         
 </div>
 </section>



 <div className="footer">
    <div className="container">
        <div className="row">
            <div className="footer-col-1">
               <h3>Download our App</h3> 
               <p>Download App for Android and ios mobile phone.</p>
            </div>
            <div className="footer-col-2">
 
                <p>Download App for Android and ios mobile phone.</p>
                <div className="app-logo">
                    <img src="../pictures/appstore.png" alt="" width="60px"/>
                    <img src="../pictures/appstore.png" alt="" width="60px"/>
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

  )
}

