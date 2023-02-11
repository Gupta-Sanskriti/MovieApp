import { AiFillHome } from 'react-icons/ai';
import {MdMovie} from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import {BiSearchAlt2} from 'react-icons/bi'
import {Link} from 'react-router-dom'

const Navbar = () =>{
    return (
        <div className="flex justify-between p-5 pl-10 pr-10 bg-blur-sm bg-gray-800 text-white m-auto fixed w-[100%] top-0 ">
            <div className="text-2xl">MovieApp</div>
            <ul className="flex gap-x-5 text-xl">
                <Link to="/"><li className='p-2 hover:bg-slate-50 hover:text-gray-800 hover:rounded-lg active:text-gray-800 active:rounded-lg active:bg-slate-50'><AiFillHome/></li></Link>
                <Link to="/movies"><li className='p-2 hover:bg-slate-50 hover:text-gray-800 hover:rounded-lg'><MdMovie/></li></Link>
                <Link to="/search"><li className='p-2 hover:bg-slate-50 hover:text-gray-800 hover:rounded-lg'><BiSearchAlt2/></li></Link>
                <Link to="/profile"><li className='p-2 hover:bg-slate-50 hover:text-gray-800 hover:rounded-lg'><FaUserCircle/></li></Link>

            </ul>
        </div>
    )
}

export default Navbar;