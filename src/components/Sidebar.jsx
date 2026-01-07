// Sidebar.jsx
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-full w-64 p-4">
      <h2 className="font-bold text-xl">Sidebar</h2>
      <ul className="mt-4 space-y-2">
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Work</li>
        <li>Training</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
