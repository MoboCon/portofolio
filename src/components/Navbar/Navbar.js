import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #0d2538;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`;

const NavItem = styled(NavLink)`
  color: #fff;
  padding: 0 1.5rem;
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  
  &.active {
    border-bottom: 3px solid #01bf71;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavMenu>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to="/about">
          About
        </NavItem>
        <NavItem to="/portfolio">
          Portfolio
        </NavItem>
        <NavItem to="/contact">
          Contact
        </NavItem>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
