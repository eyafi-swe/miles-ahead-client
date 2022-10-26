import React from 'react';
import { AcademicCapIcon, DocumentTextIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import education from '../../Assets/education.png'
const Home = () => {
    return (
        <>
            <div className='flex md:flex-row flex-col items-center justify-center md:py-10  bg-sky-900  rounded-b-xl'>
                <div className='mt-10'>
                    <h1 className='text-4xl font-semibold text-white text-center'>MILES AHEAD REMOTE LEARNING</h1>
                    <p className='text-white text-xl text-center mt-3'>Select a stack and dive into it.</p>
                    <div className="flex justify-center mt-10 mb-5">
                        <Link to = '/courses' className='btn bg-sky-600 border-none normal-case text-xl'>GET STARTED</Link>
                    </div>

                </div>
                <div>
                    <img src={education} alt="pngwing-com" border="0" className='h-80' />
                </div>
            </div>

            <div className='container mx-auto grid lg:grid-cols-3 gap-5 mt-10 mb-10'>
                <div className='text-center lg:text-left'>
                    <h2 className='text-2xl text-gray-500 font-semibold'>ABOUT MILES AHEAD</h2>
                    <h1 className='text-3xl font-semibold mt-2'>Develope Skills With Miles Ahead And Bright Your Future</h1>
                    <Link to='/courses' className='btn bg-sky-600 border-none normal-case text-xl mt-5'>GET STARTED</Link>
                </div>
                <div className='bg-sky-900 text-justify text-white px-3 py-3 rounded-lg'>
                    <p><AcademicCapIcon className='h-6 w-6' /> Miles Ahead is a remote learning platform. This is especially for Computer Science background students. All the courses are designed and monitored by highly skilled proffesionals. The faculties are graduated with Engineering backgrounds and are now in full time job in Tech Giant companies.</p>
                </div>
                <div className='bg-sky-900 text-justify text-white px-3 py-3 rounded-lg'>
                    <p><DocumentTextIcon className='h-6 w-6' /> The courses of Miles Ahead are designed by highly skilled proffesionals. We are here with courses starting with Computer Fundamentals, Basic Programming with C Language and it will take you to Artificial Intelligence. Get a course and start your journey with Miles Ahead. </p>
                </div>
            </div>

        </>
    );
};

export default Home;