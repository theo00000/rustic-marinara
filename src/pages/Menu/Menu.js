import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.css"

export default function Menu() {
    return (
        <div className="menu-page">
            <h1>Menu Page</h1>
            <p>This is where the menu items will be displayed.</p>
            <NavLink to="/">Back to Home</NavLink>
        </div>
    );
}
