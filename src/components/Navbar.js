import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const NavWrapper = styled.nav`
    z-index: 230;
    padding: 20px;
    background-color: white;
    text-decoration: none;
`

const NavLabel = styled.p`
  @import url(http://allfont.net/allfont.css?fonts=open-sans-semibold);
  text-decoration: none;
  list-style-type: none;
  font-family: 'Open Sans Semibold', arial;
  font-size: 22px;
`

const NavMenu = styled.ul `
  float: right;
  margin-top: -50px;
`
const NavMenuLink = styled(Link)`
  @import url(http://allfont.net/allfont.css?fonts=open-sans-semibold);
  float: left;
  padding-right: 100px;
  text-decoration: none;
  font-size: 22px;
  color: black;
  font-family: "Open Sans";
`
const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    fontFamily: '18px/1.4 "proxima-nova", Helvetica, Arial, sans-serif'
  };
  
const Navbar = () => {
    return (
        <NavWrapper>
        <Link to="/" style={linkStyle}>
        <NavLabel>
          wildlifetravel.co.uk
        </NavLabel>
        </Link>
        <NavMenu>
            <NavMenuLink to="/expedition-type">Expedition Type</NavMenuLink>
            <NavMenuLink to="/wildlife">Wildlife</NavMenuLink>
            <NavMenuLink to="/destinations">Destinations</NavMenuLink>
            <NavMenuLink to="/news">News</NavMenuLink>
            <NavMenuLink to="/about-us">About Us</NavMenuLink>
        </NavMenu>
        </NavWrapper>
    )
}
export default Navbar