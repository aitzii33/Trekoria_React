import React from "react";
import "./../../assets/CSS/ActivitiesAdmin.css";

export default function Activities() {
  const activities = [
    { id: 1, activity: "New booking from John Doe", date: "2026-01-14" },
    { id: 2, activity: "Booking #102 confirmed", date: "2026-01-13" },
    { id: 3, activity: "Customer Mary Smith signed up", date: "2026-01-12" },
    { id: 4, activity: "Booking #101 cancelled", date: "2026-01-11" },
  ];

  return (
    <div className="activities-view">
      <h2>Recent Activities</h2>
      <ul>
        {activities.map((item) => (
          <li key={item.id}>
            <span className="activity-text">{item.activity}</span>
            <span className="activity-date">{item.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
