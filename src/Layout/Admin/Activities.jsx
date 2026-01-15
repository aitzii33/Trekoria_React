import React from "react";
import "./../../assets/CSS/ActivitiesAdmin.css";
import img_coming_soon from "./../../assets/img/Coming.png";

export default function Activities() {
  const activities = [
    { id: 1, activity: "New booking from John Doe", date: "2026-01-14" },
    { id: 2, activity: "Booking #102 confirmed", date: "2026-01-13" },
    { id: 3, activity: "Customer Mary Smith signed up", date: "2026-01-12" },
    { id: 4, activity: "Booking #101 cancelled", date: "2026-01-11" },
  ];

  return (
    <>
      <div className="activities-view">
        <h2>Activities Dashboard</h2>
      </div>

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
    </>
  );
}
