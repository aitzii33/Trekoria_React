import React from "react";
import "./../../assets/CSS/Bookings.css";
import img_coming_soon from "./../../assets/img/Coming.png";

export default function Bookings() {
  const bookings = [
    { id: "001", customer: "John Doe", date: "2026-01-14", status: "Confirmed" },
    { id: "002", customer: "Mary Smith", date: "2026-01-13", status: "Pending" },
    { id: "003", customer: "Alice Johnson", date: "2026-01-12", status: "Cancelled" },
  ];

  return (
    <>
    <div className="bookings-view">
      <h2>Bookings</h2>
      
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
