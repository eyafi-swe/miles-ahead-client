import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DarkToggleContext } from '../../Context/ThemeContext';

const CourseCard = (props) => {
    const { _id, title, image, duration, course_mentor, course_fee } = props.course;
    let { dark } = useContext(DarkToggleContext);

    return (
        <div className={`bg-slate-50 shadow-lg rounded-lg relative ${dark ? 'bg-slate-200' : ''}`}>

            <img src={image} alt="" className='h-1/2 w-full rounded-t-lg' />

            <div className='p-3 mt-3'>
                <div className='flex justify-between items-center'>
                    <p className='font-semibold'>{title}</p>
                    <p className='text-sm font-semibold text-gray-500'>{duration}</p>
                </div>
                <div className='flex justify-between mb-5 items-center'>
                    <p className='text-sm font-semibold text-gray-500'>Fee: {course_fee}</p>
                    <p className='text-sm font-semibold text-gray-500'>Mentor: {course_mentor}</p>
                </div>
                <Link to={`/courses/${_id}`} className=' bg-sky-600 border-none px-5 py-1 mt-2 text-white rounded absolute bottom-2'>DETAILS</Link>
            </div>

        </div>
    );
};

export default CourseCard;