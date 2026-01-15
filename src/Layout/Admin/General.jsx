import React from "react";
import "./../../assets/CSS/General.css";
import img_coming_soon from "./../../assets/img/Coming.png";

export default function GeneralDashboard() {
  const recentActivity = [
    { id: 1, activity: "New booking from John Doe", date: "2026-01-14" },
    { id: 2, activity: "Customer Mary Smith signed up", date: "2026-01-13" },
    { id: 3, activity: "Booking #102 confirmed", date: "2026-01-12" },
  ];

  return (
    <div className="dashboard">
      <h2>Welcome back, Admin!</h2>

      <div
              className="activities-view1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "80vh",
              }}
            >
              <img
                src={img_coming_soon}
                alt="coming soon"
                style={{ maxWidth: 900, width: "100%", height: "auto" }}
              />
            </div>
    </div>
  );
}
