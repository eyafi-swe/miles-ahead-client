import React from 'react';

const Home = () => {
    return (
        <div className='flex md:flex-row flex-col items-center justify-center md:py-10  bg-sky-600  rounded-b-xl'>
            <div className='mt-10'>
                <h1 className='text-4xl font-semibold text-white text-center'>MILES AHEAD REMOTE LEARNING</h1>
                <p className='text-white text-xl text-center mt-3'>Select a stack and dive into it.</p>
                <div className="flex justify-center mt-10 mb-5">
                    <button className='btn  normal-case text-xl'>GET STARTED</button>
                </div>

            </div>
            <div>
                <img src="https://i.ibb.co/qYNwNnL/pngwing-com.png" alt="pngwing-com" border="0" className='h-80' />
            </div>
        </div>
    );
};

export default Home;