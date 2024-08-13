import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const Dashboard = () => {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <MainContent />
            </div>
        </div>
  );
};

export default Dashboard;
