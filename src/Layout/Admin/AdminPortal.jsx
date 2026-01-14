import React, { useState } from "react";
import "./../../assets/CSS/AdminPortal.css";
import adminAvatar from "./../../assets/img/admin-icon.jpg";
import GeneralDashboard from "./General";
import Bookings from "./Booking";
import Customers from "./Users";
import Activities from "./Activities";
import Analytics from "./Analytics";


//Menu items for the admin portal
const MENU = [
    {key: "dashboard", label: "General"},
    {key: "bookings", label: "Bookings"},
    {key: "customers",label: "Customers"},
    {key: "activities", label: "Activities"},
    {key: "analytics", label: "Analytics"}, 
];


export default function AdminPortal() {
    const [active, setActive] = useState("dashboard");

    //Funtion to render the content based in the active menu item
    const renderContent = () => {
        switch (active){
            case "dashboard":
                return <GeneralDashboard/>;
            case "bookings":
                return <Bookings/>;
            case "customers":
                return <Customers/>;
            case "activities":
                return <Activities/>;
            case "analytics":
                return <Analytics/>;
            default:
                return <GeneralDashboard/>;
        }    }
   
    return(
        <div className="admin-portal">
            <aside className="sidebar">
                <ul className="sidebar-menu">
                    {MENU.map((item) => (
                    <li
                        key={item.key}
                        className={active === item.key ? "active" : ""}
                        onClick={() => setActive(item.key)}
                    >
                        {item.label}
                    </li>
                    ))}
                </ul>

                <div className="sidebar-footer">
                    <img src={adminAvatar} alt="Admin" className="profile-pic" />
                    <div className="admin-info">
                    <span className="admin-name">Administrator</span>
                    <button className="logout-btn" onClick={() => alert("Logging Out")}>
                        Logout
                    </button>
                    </div>
                </div>
                </aside>



              <main className="content">{renderContent()}</main>
        </div>
    );
}