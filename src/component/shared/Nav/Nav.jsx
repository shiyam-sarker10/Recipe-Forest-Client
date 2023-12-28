import menu from '../../../assets/menu.svg'
import cross from '../../../assets/cross.svg'
import logo from '../../../assets/RecipeForest.png'
import { NavLink } from 'react-router-dom';
import Button from '../Buttons/Button';
import { useState } from 'react';

const Nav = () => {
    const [isOpen,setIsOpen] = useState(false)



    const navList = (
      <>
        <ul className='flex flex-col md:flex-row md:gap-10 '>
            {/* home  */}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-4 pb-2 border-black" : ""
              }
            >
              Home
            </NavLink>
          </li>

          {/* recipes  */}
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-4 pb-2 border-black" : ""
              }
            >
              Recipes
            </NavLink>
          </li>
          {/* Blog  */}
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-4 pb-2 border-black" : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          {/* Contact  */}
          <li>
            <NavLink
              to="/Contacts"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "border-b-4 pb-2 border-black" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </>
    );
    const navListResponsive = (
      <>
        <ul className="flex flex-col gap-6 justify-center items-center ">
          {/* home  */}
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-2 px-4 py-2 rounded-lg border-black"
                  : ""
              }
            >
              Home
            </NavLink>
          </li>

          {/* recipes  */}
          <li>
            <NavLink
              to="/recipes"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-2 px-4 py-2 rounded-lg border-black"
                  : ""
              }
            >
              Recipes
            </NavLink>
          </li>
          {/* Blog  */}
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-2 px-4 py-2 rounded-lg border-black"
                  : ""
              }
            >
              Blogs
            </NavLink>
          </li>
          {/* Contact  */}
          <li>
            <NavLink
              to="/Contacts"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-2 px-4 py-2 rounded-lg border-black"
                  : ""
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contacts"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "border-2 px-4 py-2 rounded-lg border-black"
                  : ""
              }
            >
              <Button text="Register"></Button>
            </NavLink>
          </li>
        </ul>
      </>
    );
    return (
      <div className="flex md:justify-between md:items-center max-w-[1366px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-4 shadow">
        {/* image  */}
        <div
          className="
        hidden md:block"
        >
          <img className="w-[175px] " src={logo} alt="" />
        </div>

        {/* navlists */}

        <div className="hidden md:block">{navList}</div>
        {/* menu button */}
        <button
          className="flex items-start md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <img className="w-[25px] " src={cross} alt="" />
          ) : (
            <img className="w-[25px] " src={menu} alt="" />
          )}
        </button>
        <div className={` ${isOpen ? "" : "hidden"}  md:hidden mx-auto`}>
          {navListResponsive}
        </div>
        {/* register  */}
        <div
          className="
        hidden md:block"
        >
          <Button text="Register Now"></Button>
        </div>
      </div>
    );
};

export default Nav;