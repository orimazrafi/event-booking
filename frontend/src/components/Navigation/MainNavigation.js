import React from "react";
import { NavLink } from "react-router-dom";

import './MainNavigation.css';

const MainNavigation = () => (
    <header className="main-navigation">
        <div className="main-navigation__logo">
            <h1>EasyEvent</h1>
        </div>
        <div className="main-navigation__items">
            <ul>
                <li>
                    <NavLink to="/events">
                        Events
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/bookings">
                        Bookings
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/auth">
                        Auth
                    </NavLink>
                </li>
            </ul>
        </div>
    </header>
)
export default MainNavigation