import React from "react";
import "./../../assets/CSS/Analytics.css";

export default function Analytics() {
  return (
    <div className="analytics-view">
      <h2>Analytics</h2>

      <div className="analytics-cards">
        <div className="card">
          <h3>Total Revenue</h3>
          <p>$12,500</p>
        </div>
        <div className="card">
          <h3>Bookings This Month</h3>
          <p>320</p>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <p>45</p>
        </div>
      </div>

      <p>More detailed charts can be added here later.</p>
    </div>
  );
}
