import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/" activeStyle>
                        Search
                    </NavLink>
                    <NavLink to="/watch-list" activeStyle>
                        Watch List
                    </NavLink>
                    <NavLink to="/watched-list" activeStyle>
                        Watched List
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default Navbar