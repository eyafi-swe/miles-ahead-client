import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FolderArrowDownIcon, ArrowLeftOnRectangleIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { DarkToggleContext } from '../../Context/ThemeContext';
import CourseNotFound from '../CourseNotFound/CourseNotFound';

const CourseDetails = () => {
    let { dark } = useContext(DarkToggleContext);
    const selectedCourse = useLoaderData();
    let { _id, title, image, duration, learning_content, introductory, course_mentor, course_fee } = selectedCourse;
    // console.log(selectedCourse);

    let contents = [];
    if(learning_content) {
       contents = learning_content.split(".");
    }

    const ref = React.createRef();
    return (
        <div className={`py-10 ${dark ? 'bg-slate-500' : ''}`}>
            <div className='container mx-auto  px-5 lg:px-0'>
                <div className='lg:w-2/3 mx-auto'>
                    <Pdf targetRef={ref} filename="Course_details.pdf" x={15} y={1.5} scale={0.8}>
                        {({ toPdf }) => (
                            // <button onClick={toPdf}>Generate pdf</button>
                            <button className='bg-sky-600 text-white px-3 py-2 rounded flex items-center' onClick={toPdf}><FolderArrowDownIcon className='h-5 w-5 mr-1' /> Download PDF</button>
                        )}
                    </Pdf>

                </div>

                {
                    selectedCourse ?
                        <div className={`mt-10 border lg:w-2/3 mx-auto pb-5 shadow-lg bg-slate-50 rounded-lg ${dark ? 'bg-slate-200' : ''}`} ref={ref}>
                            <img src={image} alt="" className='w-full rounded-t-lg' />
                            <div className='p-5'>
                                <h1 className='text-xl font-semibold'>Course Title: {title}</h1>
                                <h2 className='text-lg font-semibold text-gray-500'>Course Mentor: {course_mentor}</h2>
                                <h2 className='text-lg font-semibold text-gray-500'>Course Duration: {duration}</h2>
                                <h2 className='text-lg font-semibold text-gray-500'>Course Fee: {course_fee}</h2>
                                <p className='mt-5 text-lg'><span className='font-semibold'>About {title}: </span>{introductory}</p>
                                <p className='mt-5 mb-2 text-lg font-semibold'>What You Will Learn -</p>
                                {
                                    contents.map((content, id = 0) => <div key={id} className='flex'><p> {id + 1}. {content}</p></div>)
                                }
                            </div>
                            <div className='flex justify-end mr-5'>
                                <Link to={`/checkout/${_id}`} className='bg-sky-600 text-white px-3 py-2 rounded flex items-center w-max'><CheckBadgeIcon className='h-5 w-5 mr-1' />Get Premium Access</Link>
                            </div>
                        </div>
                    :
                    <div ref={ref}><CourseNotFound></CourseNotFound></div>
                }

                <div className='lg:w-2/3 mx-auto mt-10'>
                    <Link to='/courses' className='bg-sky-600 text-white px-3 py-2 rounded flex items-center w-max'><ArrowLeftOnRectangleIcon className='h-5 w-5 mr-1' /> Go To Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;