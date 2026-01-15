import React from "react";
import "./../../assets/CSS/General.css";

export default function GeneralDashboard() {
  const recentActivity = [
    { id: 1, activity: "New booking from John Doe", date: "2026-01-14" },
    { id: 2, activity: "Customer Mary Smith signed up", date: "2026-01-13" },
    { id: 3, activity: "Booking #102 confirmed", date: "2026-01-12" },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome back, Admin!</h2>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Bookings</h3>
          <p>120</p>
        </div>
        <div className="card">
          <h3>Active Customers</h3>
          <p>45</p>
        </div>
      </div>

      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <ul>
          {recentActivity.map((item) => (
            <li key={item.id}>
              <span>{item.activity}</span>
              <span className="activity-date">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
