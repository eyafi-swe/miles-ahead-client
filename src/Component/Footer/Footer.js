import React from 'react';
import { MapPinIcon, EnvelopeIcon, PhoneIcon, LinkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-sky-900 py-5 mt-10'>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5  container mx-auto px-5'>
                <div className='text-white'>
                    <h1 className='text-xl font-semibold mb-2 border-b'>MILES AHEAD</h1>
                    <p className='flex'><MapPinIcon className='h-6 w-6 mr-3' />R-415, Level-4, YKSG, DSC, Dhaka</p>
                    <p className='flex'><EnvelopeIcon className='h-6 w-6 mr-3' />milesaheadsupport@gmail.com</p>
                    <p className='flex'><PhoneIcon className='h-6 w-6 mr-3' />01745797203</p>
                    <p>(Available: Sat - Thu, 10:00 AM to 7:00 PM)</p>
                </div>
                <div className='flex flex-col text-white'>
                    <h1 className='text-xl font-semibold mb-2 border-b'>Quick Links</h1>
                    <Link to='/' className='flex items-center'><LinkIcon className='h-3 w-3' /> Home</Link>
                    <Link to='/blog' className='flex items-center'><LinkIcon className='h-3 w-3' /> Blog</Link>
                    <Link to='/faq' className='flex items-center'><LinkIcon className='h-3 w-3' /> FAQ</Link>
                    <Link to='/courses' className='flex items-center'><LinkIcon className='h-3 w-3' /> Courses</Link>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-2 border-b text-white'>We Accept</h1>
                    <img src="https://web.programming-hero.com/static/media/ssl-commerce.1d268dce.png" alt="ssl-commerce-1d268dce" border="0"/>
                </div>
            </div>
            <div className='text-white flex justify-center mt-5'>
                <p>All Rightes Reserved | © MILES AHEAD 2022 </p>
            </div>
        </div>
    );
};

export default Footer;