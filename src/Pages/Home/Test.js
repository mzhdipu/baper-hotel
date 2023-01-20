import React from 'react';
import { Link } from 'react-router-dom';
import NavItems from '../../Components/Shared/Header/NavItems/NavItems';
import './Test.css'

const Test = () => {
    return (
        <header>
            <div className='content-container'>
                {/* HEADER TO STARTED  */}
                <div className="header-top-content">

                    {/* HEADER LOGO  */}
                    <div className="main-logo">
                        <Link to='/'>BapperHotel.</Link>
                    </div>


                    {/* HEADER LOGIN / REGISTRATION  */}
                    <div className="header-button">
                        <button>Registration</button>
                        <button>Login</button>
                    </div>
                </div>


                 {/* HEADER MENU  */}
                 <NavItems></NavItems>
                 
            </div>
        </header>
    );
};

export default Test;