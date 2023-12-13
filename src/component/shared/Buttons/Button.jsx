import React from 'react';

const Button = ({text}) => {
    return (
        <div className='bg-black px-6 py-4 text-white rounded'>
            {text}
        </div>
    );
};

export default Button;