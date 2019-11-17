import React from "react";
import "./Jumbotron.css";

function Jumbotron({ children }) {
    return (
        <div
            style={{ clear: "both", paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;