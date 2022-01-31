import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Contract.css'

const Sidebar = () => {
    return (
        <div className="sidebarContainer px-5">
            <div className="navItemContainer">
                {['Dashboard', 'Swap', 'Send', 'Airdrops'].map((navItem) => (
                    <Link to="/contract" className="navItem flex items-center mb-8">
                        <div className="iconCont mr-5 rounded-full p-2">
                            <img src={require('../images/airdrop.png')} className="navIcon w-8" alt="" />
                        </div>
                        <p className="navItemTitle">{navItem}</p>
                    </Link>
                ))}

            </div>
        </div>
    );
};

export default Sidebar;
