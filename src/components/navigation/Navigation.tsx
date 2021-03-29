import React from 'react'
import { useState, useEffect } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import { Navbaritems } from '../../assets/interfaces/inavigation'
import Expands from '../../components/navigation/Expand'

const Navigation = (props: any) => {
  const { navigation } = props
  const [isOpen, setIsOpen] = useState(false)
  const [checked, setExpanded] = useState(false)
  const toggle = () => setIsOpen(!isOpen)
  const [activeNav, setActiveNav] = useState('')
  const [color, useColor] = useState('#53565800')

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const bgColor = window.scrollY < 100 ? "#53565800" : "#ffd9ccc7";
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useColor(bgColor)
    })
  })


  const handleClick = (e: string) => {
    setExpanded((prev) => !prev);
    setActiveNav(e)
    if (activeNav === e && checked) {
      setExpanded(false)
    } else {
      setExpanded(true)
    }
  }

  return (
    <>
      <Navbar color={color} dark expand="md" style={{ padding: '1% 10%' }} sticky="top">
        <NavbarBrand href="/">
          <img
            src={navigation.logo[0].url}
            height="30"
            className="d-inline-block align-top"
            alt="Tifia Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {
              navigation.navbar.map((e: Navbaritems, index: number) => {
                if (e.label.toLowerCase() != 'home') {
                  return (
                    <NavItem key={index} onClick={() => handleClick(e.label.replace(' ', '').toLowerCase())} className="pointer-cursor">
                      <NavLink active={activeNav === e.label.replace(' ', '').toLowerCase() ? true : false}>{e.label}</NavLink>
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
      <Expands checked={checked} activeNav={activeNav} />
    </>
  );
}
export default Navigation;