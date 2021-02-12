import React from 'react'
import { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { Navbaritems } from '../../assets/interfaces/inavigation'
import Expands from '../../components/navigation/Expand'

const Navigation = (props: any) => {
  const { navigation } = props
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setExpanded] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  
  const handleChick = () => {
    setExpanded((prev) => !prev);
  }
  
  return (
    <>
      <Navbar color="dark" dark expand="md" style={{ padding: '1% 10%' }}>
        <NavbarBrand href="/">
          <img
            src={navigation.logo[0].url}
            height="30"
            className="d-inline-block align-top"
            alt="Test"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              navigation.navbar.map((e:Navbaritems,index:number) => {
                if(e.label.toLowerCase() != 'home'){
                  return(
                    <NavItem key={index} onClick={handleChick} className="pointer-cursor">
                      <NavLink >{e.label}</NavLink>
                    </NavItem>
                  )
                }
              })
            }
          </Nav>
          <Nav color="dark" navbar>
            <NavLink>Register</NavLink>
            <NavLink>Sign In</NavLink>
          </Nav>
        </Collapse>
      </Navbar>
      <Expands checked={checked}/>
    </>
  );
}
export default Navigation;