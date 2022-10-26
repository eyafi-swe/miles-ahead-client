import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CodeBracketSquareIcon } from '@heroicons/react/24/solid'

const Courses = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const url = 'https://miles-ahead-server.vercel.app/course_categories';
        fetch(url)
            .then(response => response.json())
            .then(data => setCategories(data));
    }, [])
    return (
        <div className='container mx-auto mt-10'>
            <div className='grid grid-cols-4'>
                <div className='border rounded-lg bg-base-100 shadow-lg'>
                    <h1 className='bg-gray-200 rounded-t-lg px-3 py-2 text-xl font-semibold'>Course Categories</h1>
                    <div className='px-3 py-2 flex flex-col'>
                        {
                            categories.map(category => <Link to= {`/courses/${category.id}`} key={category.id} className = 'mt-2 border-b py-1 hover:border-sky-600 hover:text-sky-600 flex items-center'><CodeBracketSquareIcon className='h-5 w-5 mr-1 text-gray-400'/>{category.category}</Link>)
                        }
                        <Link to= '/courses' className = 'mt-2 border-b py-1 hover:border-sky-600 hover:text-sky-600 flex items-center'><CodeBracketSquareIcon className='h-5 w-5 mr-1 text-gray-400'/>All Courses</Link>
                    </div>
                </div>
                <div className='col-span-3'>

                </div>
            </div>
        </div>
    );
};

export default Courses;