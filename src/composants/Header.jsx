import React from "react";
import biereheadshot from "../image/biereheadshot.png"

function Header() {
    return (
        <div className="header">
            <img src={biereheadshot} alt="biere"></img>
        </div>
    );
}

export default Header;