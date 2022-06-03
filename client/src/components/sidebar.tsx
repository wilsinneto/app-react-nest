import React from "react";
import { SidebarData } from "./sidebar-data";

export const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="sidebar-list">
                {SidebarData.map((item, index) => (
                    <li
                        key={index}
                        className={`row ${window.location.pathname === item.path ? "active" : ""}`}
                        onClick={() => {
                            window.location.pathname = item.path;
                        }}
                    >
                        <span id="icon">{item.icon}</span> <span id="title">{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}