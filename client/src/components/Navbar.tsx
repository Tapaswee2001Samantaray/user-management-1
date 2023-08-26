import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState<string>("hidden");
    return (
        <nav className='bg-white h-auto md:h-20  flex flex-col md:flex-row md:items-center md:justify-between w-full border border-indigo-200 border-b-2 mb-4'>
            <div className=' h-14 flex items-center justify-between mx-4 '>
                <span className='text-2xl  font-bold text-gray-600 font-bungee'>
                    User Management
                </span>
                <div className='md:hidden hover:cursor-pointer' onClick={() => { (toggle) ? setToggle("") : setToggle("hidden") }}>
                    {
                        (!toggle) ? <span className='text-2xl'>&#x2716;</span> : <span className='text-3xl font-bold'>&#9776;</span>
                    }
                </div>
            </div>
            <div className={'flex flex-col items-start md:flex-row md:items-center font-ubuntu md:block ' + toggle} >
                <Link
                    to="/"
                    className='hover:text-cyan-500 text-xl duration-500 mx-4 my-2 md:mx-6 md:my:0 bg-blue-600 text-white p-2 rounded-md text-decoration-none'
                    onClick={() => { setToggle("hidden") }}
                >
                    Home
                </Link>
                <Link
                    to="/register"
                    className='hover:text-cyan-500 text-xl duration-500 mx-4 my-2 md:mx-6 md:my:0 bg-blue-600 text-white p-2 rounded-md text-decoration-none'
                    onClick={() => { setToggle("hidden") }}
                >
                    Register
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;