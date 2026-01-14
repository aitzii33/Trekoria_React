import React from "react";
import "./../../assets/CSS/Customers.css";

export default function Customers() {
  const customers = [
    { id: 1, name: "John Doe", email: "john@example.com", phone: "123-456-789", bookings: 5 },
    { id: 2, name: "Mary Smith", email: "mary@example.com", phone: "987-654-321", bookings: 3 },
  ];

  return (
    <div className="customers-view">
      <h2>Customers</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Total Bookings</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone}</td>
              <td>{c.bookings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
