import React, { useState } from 'react';
import '../Login.css'; // Import the custom CSS file

export default function StuDetails() {
  const [formData, setFormData] = useState({
    name: '',
    branch: '',
    college: '',
    yearOfGraduation: '',
    linkedinProfile: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, branch, college, yearOfGraduation, linkedinProfile } = formData;
    if (!name || !branch || !college || !yearOfGraduation || !linkedinProfile) {
      setError('All fields are required.');
      return;
    }
    setError('');
    // Handle form submission logic here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Student Details</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your name"
            />
            <label
              htmlFor="name"
              className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text"
            >
              Name
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your branch"
            />
            <label
              htmlFor="branch"
              className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text"
            >
              Branch
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              id="college"
              name="college"
              value={formData.college}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your college"
            />
            <label
              htmlFor="college"
              className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text"
            >
              College
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="number"
              id="yearOfGraduation"
              name="yearOfGraduation"
              value={formData.yearOfGraduation}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your year of graduation"
            />
            <label
              htmlFor="yearOfGraduation"
              className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text"
            >
              Year of Graduation
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="url"
              id="linkedinProfile"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
              placeholder="Enter your LinkedIn profile URL"
            />
            <label
              htmlFor="linkedinProfile"
              className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text"
            >
              LinkedIn Profile
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
