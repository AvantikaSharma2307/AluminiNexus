import React from 'react'
import "../Login.css"
import { NavLink } from 'react-router-dom'

export default function Choice() {
  return (
    <>
   <div className="flex items-center justify-center min-h-screen bg-gray-100 flex-row gap-10">
      <NavLink to="/student-details"><button className="font-bold text-2xl px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        Student
      </button></NavLink>
      <NavLink to="/alumni-details"><button className="font-bold text-2xl px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out">
        Alumni
      </button></NavLink>
    </div>
   </>
  )
}
