import {BrowserRouter, Link} from 'react-router-dom';
import IndexHome from './components/IndexHome';
import About from './components/About';
import Home from './components/Home';
import Service from './components/Service';
import SchoolAdmin from './components/SchoolAdmin';
import Cart from './components/Cart';
import Order from './components/Order';
// import BusinessOwner from "./components/BusinessOwners"
import Post from "./components/Post";
import UserProfile from './components/UserProfile';
import Marketplace from './components/Marketplace';
import Club from './components/Club';
import Contact from './components/ContactUs';
import './App.css';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import Business_Owners from './components/Business_Owners'
import Student from './components/Student'
import Chat from './components/chat';
import Payment from './components/Payment';

import Products_Students from './components/Products_Students';
import Products_Business from './components/Products_Business';
import ManageBusinessOwners from './components/ManageBusinessOwners';
import ManageStudent from './components/ManageStudent';
import ManageSchoolAdmin from './components/ManageSchoolAdmin';
import ManageSite from './components/ManageSite';
import SuperAdmin from './components/SuperAdmin';
import AddStudent from './components/AddStudent';
import AddBusinessOwner from './components/AddBusinessOwner';
import Chatclient from './components/Chatclient';
import ClubDetail from './components/ClubDetail'
import AddSchoolAdmin from './components/AddSchoolAdmin';
import AddProduct from './components/AddProduct';
import AddPost from './components/AddPost';
import AddClub from './components/AddClub';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<IndexHome />} />
      <Route path="/About" element={<About />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Schooladmin" element={<SchoolAdmin />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/UserProfile" element={<UserProfile />} />
      <Route path="/Order" element={<Order />} />
      <Route path="/Post" element={<Post />} />
      <Route path="/Marketplace" element={<Marketplace />} />
      <Route path="/Club" element={<Club />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Business_Owners" element={<Business_Owners/>}/>  
      <Route path="/Student" element={<Student/>}/>
      
      <Route path="/Payment" element={<Payment/>}/>
      <Route path="/chat" element={<Chat/>}/>
      <Route path="/Products_Business" element={<Products_Business/>}/>
      <Route path="/Products_Students" element={<Products_Students/>}/>
      <Route path="/ManageBusinessOwners" element={<ManageBusinessOwners />} />
      <Route path="/ManageStudent" element={<ManageStudent />} />
      <Route path="/ManageSchoolAdmin" element={<ManageSchoolAdmin />} />
      <Route path="/ManageSite" element={<ManageSite />} />
      <Route path="/SuperAdmin" element={<SuperAdmin />} />
      <Route path="/AddStudent" element={<AddStudent />} />
      <Route path="/AddBusinessOwner" element={<AddBusinessOwner />} />
      <Route path="/AddSchoolAdmin" element={<AddSchoolAdmin />} />

     
      <Route path="/ClubDetail" element={<ClubDetail/>}/>
      <Route path="/Chatclient" element={<Chatclient />} />
      <Route path="/AddProduct" element={<AddProduct/>} />
      <Route path="/AddPost" element={<AddPost/>} />
      <Route path="/AddClub" element={<AddClub/>} />
   </Routes>
   </>
  );
}

export default App;
