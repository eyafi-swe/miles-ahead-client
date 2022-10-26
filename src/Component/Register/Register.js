import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import signuppng from '../../Assets/signuppng.png'


const Register = () => {

    const { userSignUp, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageUrl = form.imageurl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, imageUrl, email, password);
        userSignUp(email, password)
            .then(result => {
                const user = result.user;
                setError('');
                handleUpdateUserProfile(name, imageUrl);
                console.log(user);
                form.reset();
            })
            .catch(error => {
                setError(error.message);
                console.log(error.message);
            })
    }


    const handleUpdateUserProfile = (name, imageUrl) => {
        const profile = {
            displayName: name,
            photoURL: imageUrl
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <>
            <h1 className='text-center text-4xl font-bold mt-10'>Register To Get Access Of The Courses</h1>

            <div className='mb-10 flex lg:flex-row flex-col items-center justify-center'>
                <div className='flex flex-col items-center'>
                    <img src={signuppng} alt="pngwing-com" border="0" className='h-72 mr-5' />

                </div>
                <div className="card md:w-1/2 lg:w-2/6 shadow-2xl mt-10 bg-base-100">
                    <form className="card-body" onSubmit={handleSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Full Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image Url (optional)</span>
                            </label>
                            <input type="text" name='imageurl' placeholder="Image Url (optional)" className="input input-bordered" />
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
                        {error && <p className='text-red-600'>Error: {error}</p>}
                        <div className="form-control">
                            <button className="btn bg-sky-600 border-none">Register</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    );
};

export default Register;