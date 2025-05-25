import React, { useState} from "react";
import "./admin.css";
import logo from "../assets/bebeto_logo.png";
import ManageSchedules from "./dashboard/schedules";
import BookingList from "./dashboard/bookingList";
import { useNavigate } from "react-router-dom";


const AdminDashboard = () => {
  const [selectedView, setSelectedView] = useState("bookings");
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("adminToken"); // Remove token
    navigate("/admin-login"); // Redirect to login page
  };

  return (
    <div className="admin-container">
      {/* Navbar */}
      <header className="header">
        <h1>BEBETO COACHES DASHBOARD</h1>
        <button className="log-out-btn" onClick={handleLogout}>Log Out</button>
      </header>
    
    <div className="wrapper">
        {/* Sidebar */}
        <aside className="left-menu">
            <img src= {logo} alt="Company Logo" className="profile-pic"></img>
            <nav>
                <ul>
                    <li><a href="#" onClick={() => setSelectedView("bookings")}>All Bookings</a></li>
                    <li><a href="#" onClick={() => setSelectedView("schedules")}>Manage Schedules</a></li>
                </ul>
            </nav>
        </aside>

        <main className="content">
          {selectedView === "bookings" ? <BookingList /> : <ManageSchedules />}
        </main>
      </div>
    </div>
  );
};
export default AdminDashboard;
