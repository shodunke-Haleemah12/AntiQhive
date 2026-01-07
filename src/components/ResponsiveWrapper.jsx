import React, { useState } from "react";

const ResponsiveWrapper = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white">
      {/* Optional mobile top bar */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 className="font-bold text-lg">Dashboard</h1>
        <button
          className="text-2xl"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 w-full min-h-screen">
        {/* Mobile menu (optional, collapsible) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 text-white p-4">
            {/* You can add menu items here if you want */}
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        )}

        {/* Page content */}
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default ResponsiveWrapper;
