import React from 'react';
import { Brain } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8" />
          <h1 className="text-2xl font-bold">Priorify</h1>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#dashboard" className="hover:text-indigo-200">Dashboard</a>
          <a href="#subjects" className="hover:text-indigo-200">Subjects</a>
          <a href="#schedule" className="hover:text-indigo-200">Schedule</a>
          <a href="#settings" className="hover:text-indigo-200">Settings</a>
        </nav>
      </div>
    </header>
  );
};