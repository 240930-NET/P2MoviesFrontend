import React, { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { Nav, NavLink, NavMenu } from "./NavbarElements.jsx";
//import { NavMenu } from "./NavbarElements.jsx";
import {
    Collapse,
    Container,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
  } from "reactstrap";

import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
    logout,
  } = useAuth0();
  const toggle = () => setIsOpen(!isOpen);

  const logoutWithRedirect = () =>
    logout({
        logoutParams: {
          returnTo: window.location.origin,
        }
    });

  return (
    <div>
        <Navbar color="warning" dark expand="md" container={false}>
            <Container>
                <NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink
                                tag={RouterNavLink}
                                to="/"
                                className="router-link-exact-active"
                            >
                                Search
                            </NavLink>
                        </NavItem>
                        {isAuthenticated && (
                        <NavItem>
                            <NavLink
                            tag={RouterNavLink}
                            to="/watchlist"
                            className="router-link-exact-active"
                            >
                            Watchlist
                            </NavLink>
                        </NavItem>
                        )}
                        {isAuthenticated && (
                        <NavItem>
                            <NavLink
                            tag={RouterNavLink}
                            to="/watched-movies"
                            className="router-link-exact-active"
                            >
                            Watched Movies
                            </NavLink>
                        </NavItem>
                        )}
                    </Nav>
                    <Nav className="d-none d-md-block" navbar>
                        {!isAuthenticated && (
                            <NavItem>
                            <Button
                                id="qsLoginBtn"
                                color="primary"
                                className="btn-margin"
                                onClick={() => loginWithRedirect()}
                            >
                                Log in
                            </Button>
                            </NavItem>
                        )}
                        {isAuthenticated && (
                            <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret id="profileDropDown">
                                <img
                                src={user.picture}
                                alt="Profile"
                                className="nav-user-profile rounded-circle"
                                width="50"
                                />
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem
                                id="qsLogoutBtn"
                                onClick={() => logoutWithRedirect()}
                                >
                                Log Out
                                </DropdownItem>
                            </DropdownMenu>
                            </UncontrolledDropdown>
                        )}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div >
  );
};

export default NavBar;
