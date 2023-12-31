import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full z-10 text-slate-50">
      <div
        className={`${
          scrolled
            ? "bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg delay-100 ease-in"
            : "md:bg-transparent md:bg-opacity-0 md:backdrop-blur-none md:shadow-none bg-slate-600 bg-opacity-20 backdrop-blur-md shadow-lg delay-100 ease-in transition"
        } navbar w-3/4 m-auto bg-base-100 mt-4 rounded-lg transition md:px-8`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] rounded-box w-52 p-2 bg-slate-600 bg-opacity-80 backdrop-blur-md shadow-lg"
            >
              <li>
                <a>Games</a>
              </li>
              <li>
                <a>Browse Games</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Store</a>
              </li>
              <li>
                <div className="gap-1">
                  <button className="btn border-none bg-primaryBlue hover:bg-primaryHover text-slate-50">
                    Sign up
                  </button>
                  <button className="btn">Login</button>
                </div>
              </li>
            </ul>
          </div>
          <a className="navbar-end">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg">Games</a>
            </li>
            <li tabIndex={0}>
              <details>
                <summary className="text-lg">Browse Games</summary>
                <ul className="p-2 bg-slate-600 bg-opacity-80 backdrop-blur-md shadow-lg">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a className="text-lg">Store</a>
            </li>
          </ul>
        </div>
        <div className="sm:navbar-end sm:gap-4 sm:flex hidden">
          <button className="btn border-none bg-primaryBlue hover:bg-primaryHover text-slate-50">
            Sign up
          </button>
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  );
}
