import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id?: string;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test>({ title: '', description: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/tests', test);
      router.push('/');
    } catch (err) {
      setError('Failed to create the test. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create a New Test</h1>
      {error && <p role="alert" className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={test.title}
            onChange={handleChange}
            required
            placeholder="Enter test title..."
            className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={test.description}
            onChange={handleChange}
            required
            placeholder="Enter test description..."
            rows={4}
            className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className={`w-full py-2 px-4 text-white ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

interface Test {
  id?: string;
  title: string;
  description: string;
}

const WriteTests: React.FC = () => {
  const router = useRouter();
  const [test, setTest] = useState<Test>({ title: '', description: '' });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTest({ ...test, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post('/api/tests', test);
      router.push('/');
    } catch (err) {
      setError('Failed to create the test. Please try again.');
    }

    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Create a New Test</h1>
      {error && <p role="alert" className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={test.title}
            onChange={handleChange}
            required
            placeholder="Enter test title..."
            className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={test.description}
            onChange={handleChange}
            required
            placeholder="Enter test description..."
            rows={4}
            className="mt-1 p-2 border rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button type="submit" disabled={loading} className={`w-full py-2 px-4 text-white ${loading ? 'bg-gray-300' : 'bg-blue-600 hover:bg-blue-700'}`}>
          {loading ? 'Creating...' : 'Create Test'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;