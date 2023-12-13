import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../component/shared/Nav/Nav';

const MainLayout = () => {
    return (
        <div className='max-w-[1366px] mx-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;