import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/homePage';
import BookingPage from './components/bookingPage';
import AboutUs from './components/aboutUs';
import Services from './components/services';
import ContactPage from './components/contacts';
import AdminLogin from "./admin/adminLogin.js"; // Admin login page
import AdminDashboard from "./admin/adminDashboard.js";
import AdminRegister from "./admin/adminRegister.js"; 
import PrivateRoute from './privateRoute.js';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path='/booking'element={<BookingPage/>}/>
                <Route path='/about'element={<AboutUs/>}/>
                <Route path='/services'element={<Services/>}/>
                <Route path='/contact'element={<ContactPage/>}/>

                {/* Admin Pages (Hidden from users) */}
                <Route path="/admin-register" element={<AdminRegister />} />
                <Route path="/admin-login" element={<AdminLogin />} />
                <Route path="/admin-dashboard" element={<PrivateRoute><AdminDashboard /></PrivateRoute>}/>

                
            </Routes>
        </Router>
    );
}

export default App;

