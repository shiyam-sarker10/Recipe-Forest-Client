import React from 'react';
import logo from '../../../assets/RecipeForest.png'
import { NavLink } from 'react-router-dom';
import Button from '../Buttons/Button';

const Nav = () => {
    const navList = (
      <>
        <ul className='flex flex-col md:flex-row md:gap-10'>
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
    return (
      <div className='flex justify-between items-center px-4 py-6 shadow-md'>
        {/* image  */}
        <div>
          <img className='w-[175px]' src={logo} alt="" />
        </div>
        {/* navlists */}
        <div>{navList}</div>
        {/* register  */}
        <div>
            <Button text="Register Now"></Button>
        </div>
      </div>
    );
};

export default Nav;