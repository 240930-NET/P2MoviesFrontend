import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
    background: #ff6c0a;
     position: fixed;
 width: 100%;
 top: 0;
 left: 0;
    height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 4px;
    z-index: 12;
`;

export const NavLink = styled(Link)`
    color: 	#1a0a00;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #fff0e6;
    }
    &.hover {
        color: #99e6ff;
    }
`;



export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: 100px;
    width: 100vw;
    white-space: nowrap; 
`;