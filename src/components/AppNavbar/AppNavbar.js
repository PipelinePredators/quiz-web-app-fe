import React, { useState } from "react";
import "./AppNavbar.css";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

function AppNavbar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Nav>
        <div className="E-high-logo">
          <NavItem>
            <NavLink href="#">
              <img alt="E-HIGH-logo" src="./Images/E-high-logo.jpg" />
              E-HIGH
            </NavLink>
          </NavItem>
        </div>

        <div className="nav">
          <NavItem>
            <NavLink href="#">LEADER BOARD</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">ABOUT</NavLink>
          </NavItem>
        </div>
      </Nav>
    </div>
  );
}

export default AppNavbar;
