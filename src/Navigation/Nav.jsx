import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    const isActiveRoute = ({isActive}) => (isActive ? "active-route" : "")
    return (
        <div className="App">
            <header>
                <nav className="navig">
                    <h2 className="intro">React Example</h2>
                    <div className="navs">
                        <NavLink end to='/' className={isActiveRoute}>Home</NavLink>
                        <NavLink to='/users' className={isActiveRoute}>Users</NavLink>
                        <NavLink to='/photos' className={isActiveRoute}>Photos</NavLink>
                    </div>
                </nav>
            </header>
            <Outlet/>
        </div>
    )
}

export {Nav}