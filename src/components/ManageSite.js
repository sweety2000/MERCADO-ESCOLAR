import React from 'react';
import "../components/Super_Admin.css"

class ManageSite extends React.Component {
    render() {
        return (
            <div>
                <div class="header">
                    <div class="container">
                        <div class="navbar">
                            <div class="logo">
                                <img src="assests/images/food.png" width="50px" alt="" />

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
                                <img src="assests/images/263142.png" alt="cart" width="30px" height="30px" />
                            </a>
                            <img src="assests/images/menu.png" alt="" width="30px" height="30px" class="menu-icon" />
                        </div>
                    </div>
                </div>

                <div class="col-2">
                    <h1 class="service">MANAGE SITE</h1>

                </div>
                <div class="row">
                    <div class="col-4">
                        <img src="assests/images/Admin.jpg" alt="" />
                        <h4 class="h4">MANAGE ACCESS FOR SCHOOL ADMINS</h4>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Manage Students</label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2">Manage Business Owners </label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label for="vehicle3">Moderate the Posts and Clubs</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label for="vehicle3">See Reports and Insights</label><br />

                    </div>
                    <div class="col-4">
                        <img src="assests/images/businessowner.jpg" alt="" />
                        <h4 class="h4">MANAGE ACCESS FOR BUSINESS OWNERS</h4>
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Manage Business Page</label><br />
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2">Manage Advertisements/Promotions</label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label for="vehicle3">Manage Products </label><br />
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label for="vehicle3">Chat with Students</label><br />
                    </div>
                    <div class="col-4">
                        <img src="assests/images/students.jpg" alt="" />
                        <h4 class="h4">MANAGE ACCESS FOR STUDENTS</h4>
                        <input type="checkbox" id="ACCESS1" name="ACCESS1" value="Post Content" />
                        <label for="ACCESS1">Post Content</label><br />
                        <input type="checkbox" id="ACCESS2" name="ACCESS2" value="Edit Profile" />
                        <label for="ACCESS2">Edit Profile</label><br />
                        <input type="checkbox" id="ACCESS3" name="ACCESS3" value="Add/delete clubs" />
                        <label for="ACCESS3">Add/delete clubs</label><br />
                        <input type="checkbox" id="ACCESS4" name="ACCESS4" value="Join/leave clubs" />
                        <label for="ACCESS4">Join/leave clubs </label><br />
                        <input type="checkbox" id="ACCESS5" name="ACCESS5" value="Add/Remove products for sale" />
                        <label for="ACCESS5">Add/Remove products for sale</label><br />
                        <input type="checkbox" id="ACCESS6" name="ACCESS6" value="Buy/return products purchased" />
                        <label for="ACCESS6">Buy/return products purchased</label><br />
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Checkout other Students’ Profiles</label><br />
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">See business on campus</label><br />
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">See ads for the business on other pages</label><br />
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Chat with Business Owners</label><br />
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
                                    <img src="assests/images/appstore.png" alt="" width="60px" />
                                    <img src="assests/images/ggg.png" alt="" width="60px" />
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
                        <hr />
                        <p>copyrights-east tutorials</p>
                    </div>
                </div>
            </div>


        )
    }
}
export default ManageSite;