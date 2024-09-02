import React from 'react'
import Navbar from './Navbar'
import './home.css'

export default function Home() {
  return (
    <>
    <Navbar/>
     <div className='bg-sky-700 h-auto w-full'>
        <div className='grid grid-cols-2 ml-4 mr-4 justify-center text-center pt-24 text-bold text-white text-5xl font-mono'>
            <h1 className='ml-24 pt-24'>Optimized Engagement Solutions for Alumni & Prospects: Achieve <br></br><span className='underline'>Success & Efficiency</span></h1>
            <img src='https://assets-global.website-files.com/61af9b2c965452afcee4172b/61f3323c69a2e20417d26c4a_Grouport-squares-landing-page.png' className='h-96 ml-32'></img>
        </div>
        <button>Hover me</button>

     </div>
       <h1 className='text-center text-6xl font-sans text-bold mt-24 mb-20'>Discover our Services</h1>
       <div className='grid grid-cols-4 ml-24 mr-16'>
        {/* first card */}
<div class="card">
<div className="img-section relative">
  <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70 text-white text-4xl font-bold headline z-10 rounded-tr-3xl">
    Alumni Daily News
  </div>
  <img src="https://tse3.mm.bing.net/th?id=OIP.H9Oq6AGQBBvo6T1bogH8awAAAA&pid=Api&P=0&h=220" className="w-full img rounded-tr-3xl" alt="Sample Image" />
</div>
  <div class="card-details">
    <p class="text-title">Card title</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">More info</button>
</div>
{/* second card */}
<div class="card">
<div className="img-section relative">
  <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70 text-white text-4xl font-bold headline z-10 rounded-tr-3xl">
    Alumni Data
  </div>
  <img src="https://th.bing.com/th/id/OIP.JrxhKKxvY_coLdLb55DqxAAAAA?w=474&h=330&rs=1&pid=ImgDetMain" className="w-full img rounded-tr-3xl " alt="Sample Image" />
</div>
  <div class="card-details">
    <p class="text-title">Card title</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">More info</button>
</div>
{/* third card */}
<div class="card">
<div className="img-section relative">
  <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70 text-white text-4xl font-bold headline z-10 rounded-tr-3xl">
    Alumni Connect for institution
  </div>
  <img src="https://tse3.mm.bing.net/th?id=OIP.ac8_3S3xLspq_imzGv01rgHaE8&pid=Api&P=0&h=220" className="w-full img rounded-tr-3xl" alt="Sample Image" />
</div>
  <div class="card-details">
    <p class="text-title">Card title</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">More info</button>
</div>
{/* fourth card */}
<div class="card"> 
<div className="img-section relative">
  <div className="absolute inset-0 flex items-center justify-center bg-blue-500 bg-opacity-70 text-white text-4xl font-bold headline z-10 rounded-tr-3xl">
    Alumni Connect for Corporates
  </div>
  <img src="https://tse2.mm.bing.net/th?id=OIP.Iyyt3I3d9Fl0P16TifvX9gHaFK&pid=Api&P=0&h=220" className="w-full img rounded-tr-3xl" alt="Sample Image" />
</div>

  <div class="card-details">
    <p class="text-title">Card title</p>
    <p class="text-body">Here are the details of the card</p>
  </div>
  <button class="card-button">More info</button>
</div>
</div>
<div className='bg-grey-600'> hey</div>
<h1 className='font-mono text-4xl text-black mt-28 ml-24 mr-24 h1'>We offer support to help our clients succeed based on their goals and constraints.</h1>
    </>
   
  )
}
