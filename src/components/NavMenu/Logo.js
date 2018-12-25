import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const NavLabel = styled.p`
  text-decoration: none;
  list-style-type: none;
  font-family: 'Open Sans Semibold', arial;
  font-size: 22px;
`
const linkStyle = {
  textDecoration: 'none',
  color: 'black',
  fontFamily: '18px/1.4 "proxima-nova", Helvetica, Arial, sans-serif'
};

const Logo = () => {
  return (
    <Link to="/" style={linkStyle}>
      <NavLabel>wildlifetrips.co.uk</NavLabel>
    </Link>
  )
}

export default Logo
