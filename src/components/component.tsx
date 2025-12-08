import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const router = useRouter();
  const [specification, setSpecification] = useState<Partial<BusinessSpecification>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (router.query.id) {
      fetchSpecification(Number(router.query.id));
    }
  }, [router.query.id]);

  const fetchSpecification = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.get<BusinessSpecification>(`/api/business-specifications/${id}`);
      setSpecification(response.data);
    } catch (error) {
      console.error('Failed to load specification:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSpecification({ ...specification, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!specification.name || !specification.description) {
        throw new Error('Name and description are required.');
      }
      
      let response;
      if (router.query.id) {
        response = await axios.put(`/api/business-specifications/${router.query.id}`, specification);
      } else {
        response = await axios.post('/api/business-specifications', specification);
      }

      setSpecification(response.data);
    } catch (error: any) {
      console.error('Failed to create or update business specification:', error.response ? error.response.data : error.message);
      setErrors(error.response?.data || { message: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className={clsx('text-xl font-bold mb-4', loading && 'opacity-50')}>Create Business Specification</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name || ''}
            onChange={handleChange}
            required
            disabled={loading}
            aria-invalid={errors.name ? true : false}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className={clsx('w-full px-3 py-2 border rounded', errors.name && 'border-red-500')}
          />
          {errors.name && <p id="error-name" className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description:</label>
          <textarea
            id="description"
            name="description"
            value={specification.description || ''}
            onChange={handleChange}
            rows={5}
            required
            disabled={loading}
            aria-invalid={errors.description ? true : false}
            aria-describedby={errors.description ? 'error-description' : undefined}
            className={clsx('w-full px-3 py-2 border rounded', errors.description && 'border-red-500')}
          />
          {errors.description && <p id="error-description" className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {router.query.id ? 'Update Specification' : 'Create Specification'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { useRouter } from 'next/router';

interface BusinessSpecification {
  id: number;
  name: string;
  description: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const router = useRouter();
  const [specification, setSpecification] = useState<Partial<BusinessSpecification>>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  useEffect(() => {
    if (router.query.id) {
      fetchSpecification(Number(router.query.id));
    }
  }, [router.query.id]);

  const fetchSpecification = async (id: number) => {
    setLoading(true);
    try {
      const response = await axios.get<BusinessSpecification>(`/api/business-specifications/${id}`);
      setSpecification(response.data);
    } catch (error) {
      console.error('Failed to load specification:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSpecification({ ...specification, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!specification.name || !specification.description) {
        throw new Error('Name and description are required.');
      }
      
      let response;
      if (router.query.id) {
        response = await axios.put(`/api/business-specifications/${router.query.id}`, specification);
      } else {
        response = await axios.post('/api/business-specifications', specification);
      }

      setSpecification(response.data);
    } catch (error: any) {
      console.error('Failed to create or update business specification:', error.response ? error.response.data : error.message);
      setErrors(error.response?.data || { message: 'An unexpected error occurred.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className={clsx('text-xl font-bold mb-4', loading && 'opacity-50')}>Create Business Specification</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="mb-2">
          <label htmlFor="name" className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={specification.name || ''}
            onChange={handleChange}
            required
            disabled={loading}
            aria-invalid={errors.name ? true : false}
            aria-describedby={errors.name ? 'error-name' : undefined}
            className={clsx('w-full px-3 py-2 border rounded', errors.name && 'border-red-500')}
          />
          {errors.name && <p id="error-name" className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium">Description:</label>
          <textarea
            id="description"
            name="description"
            value={specification.description || ''}
            onChange={handleChange}
            rows={5}
            required
            disabled={loading}
            aria-invalid={errors.description ? true : false}
            aria-describedby={errors.description ? 'error-description' : undefined}
            className={clsx('w-full px-3 py-2 border rounded', errors.description && 'border-red-500')}
          />
          {errors.description && <p id="error-description" className="mt-1 text-sm text-red-600">{errors.description}</p>}
        </div>
        <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {router.query.id ? 'Update Specification' : 'Create Specification'}
        </button>
      </form>
    </div>
  );
};

export default CreateBusinessSpecification;