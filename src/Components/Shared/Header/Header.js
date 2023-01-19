import React from 'react';
import './Header.css'
import HeaderSearch from './HeaderSearch';
import NavItem from './NavItem';

const Header = () => {
    return (
        <header>
            <div className="content-container">

                {/* HEADER TO STARTED  */}
                <div className="header-top">

                    {/* HEADER LOGO  */}
                    <div className="header-logo">
                        <span>BapperHotel.</span>
                    </div>

                    {/* HEADER LOGIN / REGISTRATION  */}
                    <div className="header-btn">
                        <button>Registration</button>
                        <button>Login</button>
                    </div>
                </div>

                {/* HEADER MENU  */}
                <NavItem></NavItem>


                {/* HEADER BUTTON  */}
                <div className="header-text">
                    {/* HEADER TITLE  */}
                    <div className="header-content">
                        <h1>Find your next stay</h1>
                        <p>Search deals on hotels, homes, and much more...</p>
                    </div>
                </div>

                {/* HEADER SEARCH SECTION  */}
                <HeaderSearch></HeaderSearch>
            </div>
        </header>
    );
};

export default Header;