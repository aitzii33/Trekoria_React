import React, { useState } from "react";
import "./../../assets/CSS/AdminPortal.css";
import adminAvatar from "./../../assets/img/admin-icon.jpg";

const MENU = [
    {key: "dashboard", label: "General"},
    {key: "bookings", label: "Bookings"},
    {key: "customers",label: "Customers"},
    {key: "Activities", label: "Activities"},
    {key: "analytics", label: "Analytics"}, 
];


export default function AdminPortal() {
    const [active, setActive] = useState("dashboard");
   
    return(
        <div className="admin-portal">
            <aside className="sidebar">
                <ul>
                    {MENU.map((item) =>(
                        <li
                            key={item.key}
                            className={active === item.key ? "active" : "" }
                            onClick={() => setActive(item.key)}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>

                {/*Logout button and user img*/}
                <div className="sidebar-footer">
                    <img
                        src ={adminAvatar}
                        alt="Admin Avatar"
                        className="profile-pic"
                    />
                    <div className="admin-info">
                        <span>Administrator</span>
                        <button className="logout-btn" onClick={() => alert("Logging Out")}>Logout</button>
                    </div>

                </div>

            </aside>

             <main className="content">
                <h1>{active.charAt(0).toUpperCase() + active.slice(1)}</h1>
            </main>

        </div>
    );
}