import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* ----------Left section--------- */}
        <div>
            <img className='mb-8 w-40 rounded-full' src={assets.health_connect_logo} alt="" />
            <p className='w-full md:w-3/4 text-gray-600 leading-6'>HealthConnect are vital to healthcare, bridging patients and medical professionals. Once reliant on phone bookings, scheduling has evolved into seamless online platforms, offering convenience and accessibility. From routine check-ups to urgent care, these systems prioritize health by connecting individuals to the care they need efficiently.</p>
        </div>

        {/* ----------Mid section--------- */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        {/* ----------Right section--------- */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+91-9142619928</li>
                <li>jhunjhunkumaryadav610@gmail.com</li>
            </ul>
        </div>

      </div>
      <div>
        {/* -----Copyright Text----- */}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025 @ jhunjhun - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
