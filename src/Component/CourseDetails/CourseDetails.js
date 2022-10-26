import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FolderArrowDownIcon, EllipsisHorizontalCircleIcon, ArrowLeftOnRectangleIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'

const CourseDetails = () => {
    const selectedCourse = useLoaderData();
    const {_id, title, image, duration, learning_content, introductory, course_mentor } = selectedCourse;
    const contents = learning_content.split(".");
    return (
        <div className='container mx-auto mt-10 px-5 lg:px-0'>
            <div className='lg:w-2/3 mx-auto'>
                <button className='bg-sky-600 text-white px-3 py-2 rounded flex items-center'><FolderArrowDownIcon className='h-5 w-5 mr-1' /> Download PDF</button>
            </div>

            <div className='mt-10 border lg:w-2/3 mx-auto pb-5 shadow-lg bg-slate-50 rounded-lg'>
                <img src={image} alt="" className='w-full rounded-t-lg' />
                <div className=' p-5'>
                    <h1 className='text-xl font-semibold'>Course Title: {title}</h1>
                    <h2 className='text-lg font-semibold'>Course Mentor: {course_mentor}</h2>
                    <h2 className='text-lg font-semibold'>Course Duration: {duration}</h2>
                    <p className='mt-5 text-lg'><span className='font-semibold'>About {title}: </span>{introductory}</p>
                    <p className='mt-5 mb-2 text-lg font-semibold'>What You Will Learn -</p>
                    {
                        contents.map((content, id = 0) => <p key={id} className='flex items-center'><EllipsisHorizontalCircleIcon className='h-5 w-5 mr-1 text-gray-400' /> {content}</p>)
                    }
                </div>
                <div className='flex justify-end mr-5'>
                    <Link to={`/checkout/${_id}`} className='bg-sky-600 text-white px-3 py-2 rounded flex items-center w-max'><CheckBadgeIcon className='h-5 w-5 mr-1' />Get Premium Access</Link>
                </div>
            </div>
            <div className='lg:w-2/3 mx-auto mt-10'>
                <Link to='/courses' className='bg-sky-600 text-white px-3 py-2 rounded flex items-center w-max'><ArrowLeftOnRectangleIcon className='h-5 w-5 mr-1' /> Go To Courses</Link>
            </div>
        </div>
    );
};

export default CourseDetails;