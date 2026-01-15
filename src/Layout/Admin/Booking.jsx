import React from "react";
import "./../../assets/CSS/Bookings.css";

export default function Bookings() {
  const bookings = [
    { id: "001", customer: "John Doe", date: "2026-01-14", status: "Confirmed" },
    { id: "002", customer: "Mary Smith", date: "2026-01-13", status: "Pending" },
    { id: "003", customer: "Alice Johnson", date: "2026-01-12", status: "Cancelled" },
  ];

  return (
    <div className="bookings-view">
      <h2>Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Booking ID</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b) => (
            <tr key={b.id}>
              <td>{b.id}</td>
              <td>{b.customer}</td>
              <td>{b.date}</td>
              <td>{b.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
