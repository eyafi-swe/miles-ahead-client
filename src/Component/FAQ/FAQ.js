import React, { useContext } from 'react';
import { DarkToggleContext } from '../../Context/ThemeContext';

const FAQ = () => {
    let { dark } = useContext(DarkToggleContext);
    return (
        <div className={`py-10 ${dark ? 'bg-slate-500' : ''}`}>
            <div className=' flex items-center flex-col justify-center'>
                <h1 className='text-red-500 text-3xl font-semibold text-center'>FAQ Page Is Under Developement</h1>
                <div>
                    <img src="https://i.postimg.cc/Gmd8vvm2/maintainance.png" alt="Not found" border="0" />
                </div>

            </div>
        </div>
    );
};

export default FAQ;