import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="spinnerBody">
      <div class="spinner">
        <div class="loader l1"></div>
        <div class="loader l2"></div>
      </div>
    </div>
  );
};

export default Loader;
