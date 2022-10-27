import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../../favicon.ico"
import { DarkToggleContext } from '../../Context/ThemeContext';
const Navbar = () => {
    let { dark, setDark } = useContext(DarkToggleContext);
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                navigate('/login');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="navbar bg-sky-900">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content bg-sky-400 mt-3 p-2 shadow text-white rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/weblog'>Weblog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        {
                            user?.uid ?
                                <li><button onClick={handleLogout}>Log Out</button></li>
                                :
                                <>
                                    <li><Link to='/register'>Sign Up</Link></li>
                                    <li><Link to='/login'>Sign In</Link></li>
                                </>
                        }
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl text-white"><img src={logo} alt="" className='h-6 w-6 mr-2' /> MILES AHEAD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-white">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/weblog'>Weblog</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                    {
                        user?.uid ?
                            <li><button onClick={handleLogout}>Log Out</button></li>
                            :
                            <>
                                <li><Link to='/register'>Sign Up</Link></li>
                                <li><Link to='/login'>Sign In</Link></li>
                            </>
                    }
                </ul>
            </div>
            <div className="navbar-end text-white ">
                {/* {user?.email && <span> {user?.displayName ? user?.displayName : user?.email}</span>} */}

                <div className='mr-5 flex items-center'>
                    <DarkModeToggle
                        onChange={() => setDark(!dark)}
                        checked={dark}
                        size={45}
                    />
                </div>
                <div>

                    {
                        user?.uid && <div className='tooltip tooltip-left tooltip-info' data-tip={user?.displayName ? user?.displayName : user?.email}>

                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} alt="" className='h-10 rounded-full' />
                                    :
                                    <UserCircleIcon className='h-8 w-8' />
                            }
                        </div>
                    }
                </div>

            </div>
        </div>
    );
};

export default Navbar;