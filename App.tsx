import React from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { Schedule } from './components/Schedule';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Dashboard />
        <Schedule />
      </main>
    </div>
  );
}

export default App;