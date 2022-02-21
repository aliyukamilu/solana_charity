import React from 'react';
import { NavLink } from 'react-router-dom';

import { MdOutlineDashboard } from 'react-icons/md'
import { RiCoinsLine } from 'react-icons/ri'
import { IoSendOutline } from 'react-icons/io5'
import { FaParachuteBox } from 'react-icons/fa'

const icons = [
    <MdOutlineDashboard fontSize={24} className="navIcon" />,
    <RiCoinsLine fontSize={24} className="navIcon" />,
    <IoSendOutline fontSize={24} className="navIcon" />,
    <FaParachuteBox fontSize={24} className="navIcon" />
]

const Sidebar = () => {
    return (
        <div className="sidebarContainer z-10 px-5">
            <div className="navItemContainer">
                {['Dashboard', 'Swap', 'Send', 'Airdrops'].map((navItem, index) => (
                    <NavLink key={index} to={`/${navItem.toLowerCase()}`} className={(navData) => navData.isActive ? "navItem flex items-center mb-4 ACTIVE" : "navItem flex items-center mb-4"}>
                        <div className="iconCont mr-5 rounded-full p-2">
                            {icons[index]}
                        </div>
                        <p className="navItemTitle">{navItem}</p>
                    </NavLink>
                ))}

            </div>
        </div>
    );
};

export default Sidebar;
