import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../pages/shared/Nav/Nav';


const DashboardLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><a href=''>Sidebar Item 1</a></li>
                        <li><a href=''>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;