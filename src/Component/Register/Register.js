import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <h1 className='text-center text-4xl font-bold mt-10'>Register To Get Access Of The Courses</h1>

            <div className='mb-10 flex lg:flex-row flex-col items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src="https://i.ibb.co/9h4Kx1V/pngwing-com.png" alt="pngwing-com" border="0" className='h-72 mr-5' />

                </div>
                <div className="card md:w-1/2 lg:w-2/6 shadow-2xl mt-10 bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='email' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover">Already, have an account? Login Here</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-sky-600 border-none">Login</button>
                        </div>
                        <div className='mt-0'>
                        <p className='text-center font-semibold text-xl'>Continue With</p>
                        <div className='flex justify-center mt-2'>
                            <button className='mr-5 bg-gray-300 hover:bg-sky-600 rounded-lg p-1 shadow-lg'>
                                <img src="https://i.ibb.co/n0Xx56K/goggle.png" alt="goggle" border="0" className='h-10' />
                            </button>
                            <button className='bg-gray-300 hover:bg-sky-600 rounded-lg p-1 shadow-lg'>
                                <img src="https://i.ibb.co/T01QJpZ/git.png" alt="git" border="0" className='h-10' />
                            </button>
                        </div>
                    </div>
                    </form>
                    
                </div>
            </div>
        </>
    );
};

export default Register;