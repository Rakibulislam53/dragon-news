import { Link, NavLink } from "react-router-dom";
import profile from '../assets/user.png'


const Navbar = () => {
    const navigate = <>
        <NavLink to={'/'} className={({isActive})=>isActive? "border p-2 font-bold":"font-bold p-2"}>Home</NavLink>
        <NavLink to={'/about'} className={({isActive})=>isActive? "border p-2 font-bold":"font-bold p-2"}>About</NavLink>
        <NavLink to={'/career'} className={({isActive})=>isActive? "border p-2 font-bold":"font-bold p-2"}>Career</NavLink>
    </>

    return (
        <div className="navbar bg-base-100 my-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
            navigate}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navigate}
    </ul>
  </div>
  <div className="navbar-end gap-6">
    <img src={profile} className="size-12" alt="" />
    <Link to={'/login'} className="btn rounded-none w-32 bg-slate-700 text-white text-lg">Login</Link>
  </div>

</div>
    );
};

export default Navbar;