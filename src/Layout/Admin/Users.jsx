import React from "react";
import "./../../assets/CSS/Customers.css";
import img_coming_soon from "./../../assets/img/Coming.png";

export default function Customers() {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-789", bookings: 5 },
    { id: 2, name: "Mary Smith", email: "mary@example.com", phone: "987-654-321", bookings: 3 },
  ];

  return (
    <>
    <div className="customers-view">
      <h2>Customers</h2>
    
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
