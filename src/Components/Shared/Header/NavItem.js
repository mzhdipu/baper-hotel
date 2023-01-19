import React from 'react';
import { FaBed, FaPlane, FaCarAlt, FaTaxi } from "react-icons/fa";

const NavItem = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#"><FaBed></FaBed><span>Stays </span></a></li>
                    <li><a href="#"><FaPlane></FaPlane><span>Flights</span></a></li>
                    <li><a href="#"><FaCarAlt></FaCarAlt><span>Car rentals</span></a></li>
                    <li><a href="#"><FaBed></FaBed><span>Attractions</span></a></li>
                    <li><a href="#"><FaTaxi></FaTaxi><span>Airport taxis</span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavItem;