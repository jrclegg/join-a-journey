import React, { Component } from 'react'
import styled from 'styled-components'
import DropdownLink from './DropdownLink'
import DropdownMenu from './DropdownMenu'
import { Link } from 'react-router-dom';


const NavWrapper = styled.nav`
  z-index: 230;
  padding: 20px;
  background-color: white;
  text-decoration: none;
`
const NavLabel = styled.p`
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
  
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       showMenu: false
    }
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    if(event.target.id === "expeditions") {
      this.setState({ showMenu: event.target.id });
    } else if (event.target.id === "wildlife"){
      this.setState({ showMenu: event.target.id });
    }
  }

  hideMenu() {
    this.setState({ showMenu: false });
  };
  
  render() {
    return (
      <NavWrapper>
          <Link to="/" style={linkStyle}>
            <NavLabel>
              wildlifetravel.co.uk
            </NavLabel>
          </Link>
          <NavMenu>
            <NavMenuLink id="expeditions" to="/expedition-type" onMouseOver={this.showMenu} onMouseLeave={this.hideMenu}>
              Expedition Type
              {this.state.showMenu === "expeditions" &&
                <DropdownMenu>
                  <DropdownLink to="/wildlife-tours">Wildlife Tours</DropdownLink>
                  <DropdownLink to="/wildlife-conservation">Widlife Conservation Tours</DropdownLink>
                  <DropdownLink to="/biodiversity-assessment">Biodiversity Assessments</DropdownLink>
                </DropdownMenu>
              }
            </NavMenuLink>
            <NavMenuLink id="wildlife" to="/wildlife" onMouseOver={this.showMenu} onMouseLeave={this.hideMenu}>
              Wildlife
              {this.state.showMenu === "wildlife" &&
                <DropdownMenu>
                  <DropdownLink to="/small-mammals">Small Mammals</DropdownLink>
                  <DropdownLink to="/large-mammals">Large Mammals</DropdownLink>
                  <DropdownLink to="/primates">Primates</DropdownLink>
                  <DropdownLink to="/reptiles">Reptiles</DropdownLink>
                  <DropdownLink to="/marine">Marine</DropdownLink>
                </DropdownMenu>
              }
            </NavMenuLink>
            <NavMenuLink to="/destinations">Destinations</NavMenuLink>
            <NavMenuLink to="/news">News</NavMenuLink>
            <NavMenuLink to="/about-us">About Us</NavMenuLink>
          </NavMenu>
      </NavWrapper>
    )
  }
}
export default Navbar