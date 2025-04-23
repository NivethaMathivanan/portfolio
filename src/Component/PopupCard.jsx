import React from "react";
import "./Css/PopupCard.css";
import Nive from "./balloon/balloon";

function PopupCard({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-card">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2 className="popup-title">Play and Relax 🎈</h2>

        <Nive />
      </div>
    </div>
  );
}

export default PopupCard;
