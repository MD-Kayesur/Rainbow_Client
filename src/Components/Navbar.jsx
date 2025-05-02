import { FaTwitter } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {

  const location = useLocation();
  const currentPath = location.pathname;

  const uiLink = (
    <>
      <li >
        <Link className={currentPath==='/' ? 'text-red-500' :'text-black'} to='/'>Home</Link>
      </li>
      <li >
        <Link className={currentPath==='/getsupport' ? 'text-red-500' :'text-black'} to='/getsupport'>Get Support</Link>
      </li>
      <li>
        <Link className={currentPath==='/updates' ? 'text-red-500' :'text-black'}  to='/updates'>Updates</Link>
      </li>
      <li>
        <Link className={currentPath==='/learn' ? 'text-red-500' :'text-black'}  to='/learn'>Learn</Link>
      </li>
      <li className="hidden md:block rounded-full">
        <a className="rounded-full"><FaTwitter className="text-3xl "></FaTwitter></a>
      </li>
    </>
  );
  return (
<div className="navbar bg-white-200/30 w-full  fixed z-50 backdrop-blur-xl md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-sl font-bold">
            {uiLink}
          </ul>
        </div>
        {/* <imge src="../assets/rainbow_logo.avif">daisyUI</imge> */}
        <img className="w-15 rounded-2xl " src="https://i.ibb.co.com/XxkwX6L0/rainbow-logo.jpg" alt="daisyUI" />
 
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sl font-bold">{uiLink}</ul>
      </div>
      <div className=" ">
        <a className="btn">Download</a>
      </div>
    </div>
  );
};

export default Navbar;
