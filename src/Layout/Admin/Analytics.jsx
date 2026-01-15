import React from "react";
import "./../../assets/CSS/Analytics.css";
import img_coming_soon from "./../../assets/img/Coming.png";

export default function Analytics() {
  return (
    <div className="analytics-view">
      <h2>Analytics</h2>

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
