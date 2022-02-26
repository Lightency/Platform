import React from "react";
import "./loading.css";

export default function SimpleSpinner({ border }) {
  return (
    <div className="lds-ripple">
      <div style={{ border: border }} />
      <div style={{ border: border }} />
    </div>
  );
}
