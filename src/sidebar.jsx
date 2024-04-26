import React from 'react';
import './App.css';

export default function Sidebar() {
  return (
    <div className="bg-black text-white w-1/5 mb-8 rounded-xl pl-2 pr-4 h-screen ">
      <div className='w-full pt-4 pr-4  text-sm h-auto md:text-lg'>
        Dashboard
        Analytics
        Transactions
        Budgeting
        Settings
      </div>
    </div>
  );
}

