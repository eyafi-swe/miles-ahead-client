import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DarkToggleContext } from '../../Context/ThemeContext';
import { AuthContext } from '../../Context/UserContext';
import CourseNotFound from '../CourseNotFound/CourseNotFound';

const Checkout = () => {
    const course = useLoaderData();
    const { title, image, duration, course_mentor, course_fee } = course;
    const { user } = useContext(AuthContext);
    let { dark } = useContext(DarkToggleContext);
    const [message, setMessage] = useState('');
    const handleProceed = () => {
        setMessage('Procession is under developement.')
    }
    return (
        <div className={`py-10 ${dark ? 'bg-slate-500' : ''}`}>
            <div className=' container mx-auto'>
                {
                    course ?
                        <div className='grid lg:grid-cols-2 gap-10'>
                            <div className={`border pb-5 shadow-lg bg-slate-50 rounded-md ${dark ? 'bg-slate-200' : ''}`}>
                                <img src={image} alt="" className='w-full rounded-t-md' />
                                <div className='p-5'>
                                    <h1 className='text-xl font-semibold'>Course Title: {title}</h1>
                                    <h2 className='text-lg font-semibold text-gray-500'>Course Mentor: {course_mentor}</h2>
                                    <h2 className='text-lg font-semibold text-gray-500'>Course Duration: {duration}</h2>
                                    <h2 className='text-lg font-semibold text-gray-500'>Course Fee: {course_fee}</h2>
                                </div>
                            </div>
                            <div className={`border px-5 py-2 rounded-md bg-slate-50 shadow-lg ${dark ? 'bg-slate-200' : ''}`}>
                                <h1 className='text-xl font-semibold'>Payment Details</h1>
                                <div className='mt-5'>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Full Name" value={user?.displayName} className="input input-bordered font-semibold focus:outline-none" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email Address</span>
                                        </label>
                                        <input type="email" name='email' placeholder="Email" value={user?.email ? user?.email : ''} className="input input-bordered font-semibold focus:outline-none" readOnly />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Payment Method</span>
                                        </label>
                                        <select className="select select-bordered focus:outline-none">
                                            <option disabled selected>Select a payment method</option>
                                            <option>Bkash</option>
                                            <option>Nagad</option>
                                        </select>
                                    </div>
                                    <div className='mt-5'>
                                        <h3 className='text-lg font-semibold'>Totoal Fee: {course_fee}</h3>
                                        <button className='bg-sky-600 px-5 py-2 text-white font-semibold rounded mt-2 ' onClick={handleProceed}>PROCEED</button>
                                    </div>
                                    {
                                        message && <div className='mt-5'>
                                            <p className='text-red-500'>{message}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <CourseNotFound></CourseNotFound>
                }
            </div>
        </div>
    );
};

export default Checkout;