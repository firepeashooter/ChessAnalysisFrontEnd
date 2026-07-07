import React from 'react';

interface HeaderProps {
  onToggleSidebar: () => void;
  isSidebarOpen: boolean; // Added for the icon change
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white p-4 shadow-md z-50 md:hidden flex justify-between items-center">
      <div className="text-xl font-bold">Chess Analysis</div>
      <button
        className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
        onClick={onToggleSidebar}
        aria-label="Toggle sidebar"
      >
        {/* Hamburger / Close Icon */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
        </svg>
      </button>
    </header>
  );
};

export default Header;
