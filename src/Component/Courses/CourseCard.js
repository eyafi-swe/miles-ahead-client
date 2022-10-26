import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = (props) => {
    const { _id, title, image, duration, course_mentor } = props.course;

    return (
        <div className='bg-slate-50 shadow-lg rounded-lg relative'>

            <img src={image} alt="" className='h-1/2 w-full rounded-t-lg' />

            <div className='p-3 mt-3'>
                <p className='font-semibold'>Course Title: {title}</p>
                <div className='flex justify-between mb-5'>
                    <p className='text-sm font-semibold text-gray-500'>Duration: {duration}</p>
                    <p className='text-sm font-semibold text-gray-500'>Mentor: {course_mentor}</p>
                </div>
                <Link to={`/courses/${_id}`} className=' bg-sky-600 border-none px-5 py-1 mt-2 text-white rounded absolute bottom-2'>DETAILS</Link>
            </div>

        </div>
    );
};

export default CourseCard;