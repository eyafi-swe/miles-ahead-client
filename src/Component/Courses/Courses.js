import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'
import CourseCard from './CourseCard';

const Courses = () => {
    const [categories, setCategories] = useState([]);
    const courses = useLoaderData();
    let [showenCourses, setShowenCourses] = useState(courses);
    useEffect(() => {
        const url = 'https://miles-ahead-server.vercel.app/course_categories';
        fetch(url)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [])

    const handleShowenCourses = id => {
        if (id === '10') {
            setShowenCourses(courses);
        }
        else {
            const filteredCourses = courses.filter(course => course.category_id === id)
            setShowenCourses(filteredCourses);
        }

        console.log("Clicked", id);
    }


    return (
        <div className='container mx-auto lg:mt-10 '>
            <div className="dropdown w-full mb-10">
                    <label tabIndex={0} className=" btn-ghost lg:hidden bg-gray-200 py-2 flex items-center px-3  text-xl font-semibold text-sky-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    Course Categories
                    </label>
                    {/* <h1 className='bg-gray-200 rounded-t-lg px-3 py-2 text-xl font-semibold text-sky-600'>Course Categories</h1> */}
                    <ul tabIndex={0} className="menu menu-compact dropdown-content bg-slate-50 mt-3 p-2 shadow  rounded-box w-max">
                    {
                            categories.map(category => <button key={category.id} className='mt-2 border-b py-1 hover:border-sky-600 hover:text-sky-600 flex items-center' onClick={() => handleShowenCourses(category.id)}><CodeBracketSquareIcon className='h-5 w-5 mr-1 text-gray-400' />{category.category}</button>)
                        }
                        <button onClick={() => handleShowenCourses('10')} className='mt-2 border-b py-1 hover:border-sky-600 hover:text-sky-600 flex items-center'><CodeBracketSquareIcon className='h-5 w-5 mr-1 text-gray-400' />All Courses</button>
                    </ul>
                </div>
            <div className='grid lg:grid-cols-4 gap-10'>
                
                <div className='border rounded-lg bg-slate-50 shadow-lg h-max hidden lg:block'>
                    <h1 className='bg-gray-200 rounded-t-lg px-3 py-2 text-xl font-semibold text-sky-600'>Course Categories</h1>
                    <div className='px-3 py-2 flex flex-col'>
                        {
                            categories.map(category => <button key={category.id} className='mt-2 border-b py-1 hover:border-sky-600 hover:text-sky-600 flex items-center' onClick={() => handleShowenCourses(category.id)}><CodeBracketSquareIcon className='h-5 w-5 mr-1 text-gray-400' />{category.category}</button>)
                        }
                        <button onClick={() => handleShowenCourses('10')} className='mt-2 border-b py-1 hover:border-sky-600 hover:text-sky-600 flex items-center'><CodeBracketSquareIcon className='h-5 w-5 mr-1 text-gray-400' />All Courses</button>
                    </div>
                </div>
                <div className='lg:col-span-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {
                            showenCourses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;