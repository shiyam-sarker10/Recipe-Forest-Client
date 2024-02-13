import React from 'react';

const Header = ({title,text,text_center,text_right,text_left}) => {
    return (
        <div className={` ${text_center ? "text-center" : text_right ? "text-right" : text_left ? "text-left" : ""}  space-y-4 my-10`}>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p className='md:w-[40%] mx-auto text-gray-500'>{text}</p>
        </div>
    );
};

export default Header;