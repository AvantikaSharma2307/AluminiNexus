import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom';
import './home.css'
import { FaArrowRight } from 'react-icons/fa';
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Navbar/>
      {/* Hero Section */}
      <div className='bg-sky-700 h-auto w-full'>
        <div className='grid md:grid-cols-2 gap-8 p-4 justify-center text-center pt-24 text-white font-mono'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
            Optimized Engagement Solutions for Alumni & Prospects: Achieve 
            <br/>
            <span className='underline'>Success & Efficiency</span>
          </h1>
          <img 
            src='https://assets-global.website-files.com/61af9b2c965452afcee4172b/61f3323c69a2e20417d26c4a_Grouport-squares-landing-page.png' 
            className='h-64 md:h-80 lg:h-96 mx-auto' 
            alt='Hero Image'
          />
        </div>
        <div className='flex justify-center gap-6 mt-8'>
          <NavLink to="">
            <button className='font-bold text-xl md:text-2xl px-4 py-2 bg-white text-sky-700 rounded mb-8'>Add Alumni</button>
          </NavLink>
          <NavLink to="/login">
            <button className='font-bold text-xl md:text-2xl px-4 py-2 bg-white text-sky-700 rounded'>Search Alumni</button>
          </NavLink>
        </div>
      </div>

      {/* Services Section */}
      <h1 className='text-center text-4xl md:text-5xl lg:text-6xl font-sans font-bold mt-24 mb-20' id='services'>Discover our Services</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 lg:px-16'>
        {/* Card Component */}
        {[
          {
            title: "Alumni Daily News",
            image: "https://tse3.mm.bing.net/th?id=OIP.H9Oq6AGQBBvo6T1bogH8awAAAA&pid=Api&P=0&h=220",
            points: [
              "Receive Daily News Alerts",
              "Comprehensive Alumni Tracking",
              "Verified Results Guarantee",
              "Search across 400,000+ Global Sources"
            ]
          },
          {
            title: "Alumni Data",
            image: "https://th.bing.com/th/id/OIP.JrxhKKxvY_coLdLb55DqxAAAAA?w=474&h=330&rs=1&pid=ImgDetMain",
            points: [
              "Access Updated Alumni Database",
              "Receive Weekly Job Updates",
              "Ensured Accuracy with Verified Results",
              "Advanced Reporting & Filtering capabilities"
            ]
          },
          {
            title: "Alumni Connect for Institution",
            image: "https://tse3.mm.bing.net/th?id=OIP.ac8_3S3xLspq_imzGv01rgHaE8&pid=Api&P=0&h=220",
            points: [
              "Foster Alumni Engagement",
              "Updated Alumni Directory",
              "Spread Job Opportunities & Access to Mentorship",
              "Raise Donations, Create Events, Connect Through Groups"
            ]
          },
          {
            title: "Alumni Connect for Corporates",
            image: "https://tse2.mm.bing.net/th?id=OIP.Iyyt3I3d9Fl0P16TifvX9gHaFK&pid=Api&P=0&h=220",
            points: [
              "Stay Connected with Ex-Employees",
              "Boost Boomerang Hiring",
              "Spread Brand Awareness & New Initiatives",
              "Build Business via Alumni Referrals"
            ]
          }
        ].map((service, index) => (
          <div key={index} className="card bg-white shadow-lg rounded-lg p-4">
            <div className="img-section relative">
              <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70 text-white text-2xl lg:text-4xl font-bold headline z-10 rounded-tr-3xl">
                {service.title}
              </div>
              <img src={service.image} className="w-full img rounded-tr-3xl" alt={service.title} />
            </div>
            <div className='grid gap-2 mt-4'>
              {service.points.map((point, idx) => (
                <p key={idx} className="text-title flex flex-row text-lg"><FaArrowRight className='text-body mr-2'/>{point}</p>
              ))}
            </div>
            <button className="card-button mt-4 bg-sky-700 text-white py-2 px-4 rounded">More info</button>
          </div>
        ))}
      </div>

      {/* Security Section */}
      <div className='bg-slate-400 mt-16 pt-16 pb-8'>
        <h1 className='text-center text-3xl md:text-4xl font-bold text-black'>
          A secured system, externally as well as internally
        </h1>
        <h2 className='text-center text-xl md:text-2xl mt-4'>
          Our security measures for data privacy and protection
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-4 lg:px-16'>
          {/* Security Cards */}
          {[
            { title: "Data Protection", img: "https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/secured_system/data_protection-65f7d029547a2064029237cc0754211aee487421610949797c1a71f92f5aefd0.png" },
            { title: "Internal Data Security Policies", img: "https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/secured_system/internal_data_security-844a927759435c3d0abcfaa87f30dedeaa2e77c530bbbc2c865f971dfa758a4f.png" },
            { title: "GDPR Compliant", img: "https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/secured_system/gdpr-2ccd63ea8b2901ae4c327f62e251948cf0d9b25a8aab0578157a6651c7fd0d20.png" },
            { title: "Partnering with AWS", img: "https://d26pkxyw9vw39t.cloudfront.net/assets/us_landing/secured_system/distributed_servers-e460850827599d294197ccd6e681c53cfebb468a493f4224deea221dc7adf531.png" }
          ].map((card, index) => (
            <div key={index} className="cards bg-white shadow-lg rounded-lg p-4">
              <img src={card.img} className='w-full rounded' alt={card.title}/>
              <p className="cards-title text-center pt-8 font-bold text-xl text-black">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Support Section */}
      <h1 className='font-mono text-2xl md:text-3xl lg:text-4xl text-black mt-28 mx-8 lg:mx-24 mb-24 text-center'>
        We offer support to help our clients succeed based on their goals and constraints.
      </h1>
      <Footer/>
    </>
  )
}
