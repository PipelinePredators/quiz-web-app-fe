import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

function AppNavBar(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <container class="col">
            <Navbar {...args}>
            <NavbarBrand href="/">E-HIGh</NavbarBrand>
            <NavbarToggler onClick={toggle} />

            <NavItem class="row">
                <NavLink href="/components/">LEADER BOARD</NavLink>
            </NavItem>
        
            <NavItem class="row">
                <NavLink href="/components/">ABOUT</NavLink>
            </NavItem>

        </Navbar>
        </container>
        
    </div>
  );
}

export default AppNavBar;