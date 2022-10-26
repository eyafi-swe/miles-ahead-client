import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Blogcard from './Blogcard';
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid'

const Blog = () => {
    const blogs = useLoaderData();
    let [showenItem, setShowenItem] = useState(blogs[0]);
    const showDescription = (id) =>{
        const item = blogs.find(blog => blog.id === id)
        setShowenItem(item);
        console.log(id);
    }
    return (
        <div className=''>
            <h1 className='text-center text-3xl font-semibold mt-10'>Read The Weblogs Of MILES AHEAD</h1>
            <p className='text-center text-xl'>Total Weblogs: {blogs.length}</p>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-10 mt-10 container mx-auto px-5'>
                {
                    blogs.map(blog => <Blogcard key={blog.id} blog={blog} showDescription = {showDescription}></Blogcard>)
                }
            </div>
            <div className='mt-20 container mx-auto px-5 text-justify'>
                <div className='flex items-center'>
                    <span><ChevronDoubleRightIcon className='h-6 w-6 text-gray-600'/></span>
                    <p className='text-2xl font-bold '>{showenItem.title}</p>
                </div>
                <hr />
                <p className='text-xl font-semibold mt-1'>{showenItem.question}</p>
                
                <p className='text-lg mt-2'>{showenItem.description}</p>
                
            </div>
        </div>
    );
};

export default Blog;