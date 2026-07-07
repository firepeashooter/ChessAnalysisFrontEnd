import React from 'react';

interface NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, onClose }) => {
  return (
    <aside
      className={`fixed top-0 left-0 w-64 h-screen bg-gray-800 text-white z-40 transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:block`}
    >
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Chess App
      </div>
      <nav className="mt-4">
        <ul>
          <li>
            <button
              onClick={onClose}
              className="block w-full text-left py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={onClose}
              className="block w-full text-left py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Analysis
            </button>
          </li>
          <li>
            <button
              onClick={onClose}
              className="block w-full text-left py-3 px-4 text-lg hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Puzzles
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Navbar;
