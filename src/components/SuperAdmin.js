import React from 'react';
import "../components/Super_Admin.css"

class SuperAdmin extends React.Component {
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
               
                <li><a href="/SuperAdmin">SUPER ADMIN</a></li>
                <li><a href="/Home">LOG OUT</a></li>
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
                    <h1 class="service">SUPER  ADMIN</h1>

                </div>
                <div class="row">
                    <div class="col-4">
                        <img src="assests/images/Manage_Site.jpg" alt=""/>
                            <h4 class="h4">MANAGE SITE</h4>
                            <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development
                                (La Greca and Harrison, 2005), and are a form of social support.</p>
                            <button class="btn"><a href="/ManageSite">MANAGE ACCESS</a></button>
                    </div>
                    <div class="col-4">
                        <img src="assests/images/Admin.jpg" alt=""/>
                            <h4 class="h4">MANAGE SCHOOL ADMINS</h4>
                            <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development (La Greca and Harrison, 2005), and are a form of social support.</p>
                            <button class="btn"><a href="/ManageSchoolAdmin">MANAGE ADMINS</a></button>
                    </div>
                    <div class="col-4">
                        <img src="assests/images/students.jpg" alt=""/>
                            <h4 class="h4">MANAGE STUDENTS</h4>
                            <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development (La Greca and Harrison, 2005), and are a form of social support.</p>
                            <button class="btn"><a href="/ManageStudent">MANAGE STUDENTS</a></button>
                    </div>
                    <div class="col-4">
                        <img src="assests/images/businessowner.jpg" alt=""/>
                            <h4 class="h4">MANAGE BUSINESS OWNERS</h4>
                            <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development
                                (La Greca and Harrison, 2005), and are a form of social support.</p>
                            <button class="btn"><a href="/ManageBusinessOwners">MANAGE BUSINESS OWNERS</a></button>
                    </div>
                    <div class="col-4">
                        <img src="assests/images/Marketplaces.png" alt="" height="100px" class="imgmarket"/>
                            <h4 class="h4">MANAGE MARKETPLACE</h4>
                            <p>Peer relationships are interpersonal relationships established and developed during social interactions among peers or individuals with similar levels of psychological development
                                (La Greca and Harrison, 2005), and are a form of social support.</p>
                            <a href="/Marketplace">
                                <button class="btn">MARKETPLACE</button>
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
export default SuperAdmin;