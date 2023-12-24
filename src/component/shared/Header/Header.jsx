import React from 'react';

const Header = ({title,text,text_center,text_right,text_left}) => {
    return (
        <div className={` ${text_center ? "text-center" : text_right ? "text-right" : text_left ? "text-left" : ""} `}>
            <h1 className='text-4xl font-semibold'>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Header;