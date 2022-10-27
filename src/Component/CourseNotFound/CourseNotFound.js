import React from 'react';

const CourseNotFound = () => {
    return (
        <div className=' flex items-center flex-col justify-center mt-10'>
            <h1 className='text-red-500 text-3xl font-semibold text-center'>Course Not Found!!!</h1>
            <div>
                <img src="https://i.postimg.cc/1Xyxz7Js/pngwing-com.png" alt="Not found" border="0" />
            </div>

        </div>
    );
};

export default CourseNotFound;