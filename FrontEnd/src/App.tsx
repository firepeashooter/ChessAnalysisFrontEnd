import React, { useState } from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing'; // Assuming Landing.tsx exists

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarOpen={isSidebarOpen}
      />
      <Navbar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Mobile Overlay for Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <main className="pt-16 md:ml-64 md:pt-0"> {/* Adjust main content positioning for header and sidebar */}
        <Landing />
      </main>
    </div>
  );
}

export default App;
