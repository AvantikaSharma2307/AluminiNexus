import React, { useState } from 'react';
import './Login.css'; // Import the custom CSS file

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!phoneNumber || !otp) {
      setError('Both fields are required.');
      return;
    }
    setError('');
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login with OTP</h1>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-0 focus:border-blue-500 transition duration-300 ease-in-out"
            />
            <label className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text">
              Phone Number
            </label>
            </div>
            <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out mb-4"
          >
            Send OTP
          </button>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md placeholder-transparent focus:outline-none focus:ring-0 focus:border-blue-500 transition duration-300 ease-in-out"
            />
            <label className="absolute top-1/2 left-4 text-gray-500 transform -translate-y-1/2 transition-all duration-300 ease-in-out cursor-text">
              Enter OTP
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
