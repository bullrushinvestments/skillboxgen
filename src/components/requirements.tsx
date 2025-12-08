import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      setLoading(false);
    }
  };

  const toggleRequirementCompletion = (id: number) => {
    const updatedRequirements = requirements.map((req) =>
      req.id === id ? { ...req, isCompleted: !req.isCompleted } : req
    );
    setRequirements(updatedRequirements);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Gather Requirements</h2>
      <ul role="list" aria-label="Requirements list" className="divide-y divide-gray-200">
        {requirements.map((req) => (
          <li key={req.id} className="py-4 flex items-center justify-between">
            <div className="flex-grow">
              <span
                className={`text-lg font-medium ${req.isCompleted ? 'line-through text-gray-500' : ''}`}
                role="checkbox"
                aria-checked={req.isCompleted}
                onClick={() => toggleRequirementCompletion(req.id)}
              >
                {req.name}
              </span>
              <p className="mt-1 text-sm text-gray-500">{req.description}</p>
            </div>
            <button
              type="button"
              className={`px-3 py-2 rounded-md ${req.isCompleted ? 'bg-green-600' : 'bg-red-600'} text-white`}
              onClick={() => toggleRequirementCompletion(req.id)}
            >
              {req.isCompleted ? 'Unmark as completed' : 'Mark as completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Requirement {
  id: number;
  name: string;
  description: string;
  isCompleted: boolean;
}

const GatherRequirements: React.FC = () => {
  const [requirements, setRequirements] = useState<Requirement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchRequirements();
  }, []);

  const fetchRequirements = async () => {
    try {
      const response = await axios.get<{ requirements: Requirement[] }>('/api/requirements');
      setRequirements(response.data.requirements);
      setLoading(false);
    } catch (err) {
      setError('Failed to load requirements.');
      setLoading(false);
    }
  };

  const toggleRequirementCompletion = (id: number) => {
    const updatedRequirements = requirements.map((req) =>
      req.id === id ? { ...req, isCompleted: !req.isCompleted } : req
    );
    setRequirements(updatedRequirements);
  };

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-red-500 text-center py-10">{error}</div>;

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6">Gather Requirements</h2>
      <ul role="list" aria-label="Requirements list" className="divide-y divide-gray-200">
        {requirements.map((req) => (
          <li key={req.id} className="py-4 flex items-center justify-between">
            <div className="flex-grow">
              <span
                className={`text-lg font-medium ${req.isCompleted ? 'line-through text-gray-500' : ''}`}
                role="checkbox"
                aria-checked={req.isCompleted}
                onClick={() => toggleRequirementCompletion(req.id)}
              >
                {req.name}
              </span>
              <p className="mt-1 text-sm text-gray-500">{req.description}</p>
            </div>
            <button
              type="button"
              className={`px-3 py-2 rounded-md ${req.isCompleted ? 'bg-green-600' : 'bg-red-600'} text-white`}
              onClick={() => toggleRequirementCompletion(req.id)}
            >
              {req.isCompleted ? 'Unmark as completed' : 'Mark as completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GatherRequirements;