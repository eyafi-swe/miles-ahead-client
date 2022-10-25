import React from 'react';

const Blogcard = (props) => {
    const { id, image, title } = props.blog
    const {showDescription} = props;
    return (
        <div >
            <div className='bg-sky-900 rounded-lg shadow-xl' onClick={()=>showDescription(id)}>
                <img src={image} alt="" className='h-40 w-full rounded-t-lg'  />
                <div className='px-2 mt-2 py-2'>
                    <p className='font-semibold text-white'>Topic: {title}</p>
                </div>
            </div>
        </div>
    );
};

export default Blogcard;