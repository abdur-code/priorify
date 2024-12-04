import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { SubjectCard } from './SubjectCard';
import { SubjectForm } from './SubjectForm';
import { Plus } from 'lucide-react';
import { Subject } from '../types';

export const Dashboard: React.FC = () => {
  const { subjects, updateSubject } = useStore();
  const [showForm, setShowForm] = useState(false);
  const [editingSubject, setEditingSubject] = useState<Subject | undefined>();

  const handleEdit = (subject: Subject) => {
    setEditingSubject(subject);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingSubject(undefined);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Your Study Dashboard</h2>
        <button 
          onClick={() => setShowForm(true)}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Subject
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => (
          <SubjectCard
            key={subject.id}
            subject={subject}
            onEdit={handleEdit}
          />
        ))}
      </div>

      {showForm && (
        <SubjectForm
          onClose={handleCloseForm}
          initialSubject={editingSubject}
        />
      )}
    </div>
  );
};