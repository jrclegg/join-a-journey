import React, { Component } from 'react'
import NavWrapper from './NavWrapper'
import NavMenu from './NavMenu'
import NavMenuLink from './NavMenuLink'
import Logo from './Logo'
import DropdownLink from './DropdownLink'
import DropdownMenu from './DropdownMenu'
import SecondDropdown from './SecondDropdown';

  
class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
       showMenu: false
    }
  }
  showMenu(event) {
    if(event.target.id === "expeditions") {
      this.setState({ showMenu: event.target.id });
    } else if (event.target.id === "wildlife"){
      this.setState({ showMenu: event.target.id });
    } else if (event.target.id === "destinations"){
      this.setState({showMenu: event.target.id})
    }
  }

  hideMenu() {
    this.setState({ showMenu: false });
  };

  render() {
    const linkStyle = {
      marginTop: '-50px',
      marginLeft: '100%'
    };
    const { showMenu } = this.state
    return (
      <NavWrapper>
          <Logo/>
          <NavMenu>
            <NavMenuLink id="expeditions" to="/expedition-type" onMouseOver={(event) => this.showMenu(event)} onMouseLeave={(event) => this.hideMenu(event)}>
              Expedition Type
              {showMenu === "expeditions" &&
                <DropdownMenu className="dropdown">
                  <DropdownLink to="/wildlife-tours">Wildlife Tours</DropdownLink>
                  <DropdownLink to="/wildlife-conservation">Widlife Conservation Tours</DropdownLink>
                  <DropdownLink to="/biodiversity-assessment">Biodiversity Assessments</DropdownLink>
                </DropdownMenu>
              }
            </NavMenuLink>
            <NavMenuLink id="wildlife" to="/wildlife" onMouseOver={(event) => this.showMenu(event)} onMouseLeave={(event) => this.hideMenu(event)}>
              Wildlife
              {showMenu === "wildlife" &&
                <DropdownMenu>
                  <DropdownLink to="/big-cats">
                   Big Cats
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/lions">Lions</DropdownLink>
                      <DropdownLink to="/tigers">Tigers</DropdownLink>
                      <DropdownLink to="/jaguars">Jaguars</DropdownLink>
                      <DropdownLink to="/leopards">Leopards</DropdownLink>
                      <DropdownLink to="/snow-leopards">Snow Leopards</DropdownLink>
                    </SecondDropdown>
                  </DropdownLink>
                  <DropdownLink to="/large-mammals">
                  Large Mammals
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/oryx">Arabian Oryx</DropdownLink>
                      <DropdownLink to="/elephants">Elephants</DropdownLink>
                      <DropdownLink to="/wolves">Wolves</DropdownLink>
                      <DropdownLink to="/brown-bears">Brown Bears</DropdownLink>
                      <DropdownLink to="/sloth-bears">Sloth Bears</DropdownLink>
                      <DropdownLink to="/polar-bears">Polar Bears</DropdownLink>
                      <DropdownLink to="/rhino">Rhino</DropdownLink>
                      <DropdownLink to="/bison">Bison</DropdownLink>
                      <DropdownLink to="/gazelles">Mountain Gazelles</DropdownLink>
                      <DropdownLink to="/cape-buffalo">Cape Buffalo</DropdownLink>
                    </SecondDropdown>
                  </DropdownLink>
                  <DropdownLink to="/small-mammals">
                  Small Mammals
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/gordons-wildcat">Gordon's Wildcat</DropdownLink>
                      <DropdownLink to="/sand-fox">Sand Fox</DropdownLink>
                      <DropdownLink to="/red-panda">Red Panda</DropdownLink>
                      <DropdownLink to="/wolverines">Wolverines</DropdownLink>
                      <DropdownLink to="/lynx">Lynx</DropdownLink>
                    </SecondDropdown>
                  </DropdownLink>
                  <DropdownLink to="/primates">
                  Primates
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/gorillas">Gorillas</DropdownLink>
                      <DropdownLink to="/orangutans">Orangutan</DropdownLink>
                      <DropdownLink to="/monkeys">Monkeys</DropdownLink>
                    </SecondDropdown>
                  </DropdownLink>
                  <DropdownLink to="/reptiles">
                    Reptiles
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/komodo">Komodo Dragons</DropdownLink>
                      <DropdownLink to="/anacondas">Anacondas</DropdownLink>
                    </SecondDropdown>
                  </DropdownLink>
                  <DropdownLink to="/marine">Marine
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/turtles">Sea Turtles</DropdownLink>
                      <DropdownLink to="/whales">Whales</DropdownLink>
                      <DropdownLink to="/sharks">Sharks</DropdownLink>
                      <DropdownLink to="/dolphins">Dolphins</DropdownLink>
                      <DropdownLink to="/penguins">Penguins</DropdownLink>
                      <DropdownLink to="/coral-reef">Coral Reef</DropdownLink>
                    </SecondDropdown>
                  </DropdownLink>
                  <DropdownLink to="/marine">
                    Birds
                    <SecondDropdown className="dropdown-content" style={linkStyle}>
                    </SecondDropdown>
                  </DropdownLink>
                </DropdownMenu>
              }
            </NavMenuLink>
            <NavMenuLink id="destinations" to="/destinations" onMouseOver={(event) => this.showMenu(event)} onMouseLeave={(event) => this.hideMenu(event)}>
              Destinations
              {showMenu === "destinations" &&
                  <DropdownMenu className="dropdown">
                    <DropdownLink to="/africa">
                      Africa
                      <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/kenya">Kenya</DropdownLink>
                      <DropdownLink to="/malawi">Malawi</DropdownLink>
                      <DropdownLink to="/south-africa">South Africa</DropdownLink>
                      <DropdownLink to="/tanzania">Tanzania</DropdownLink>
                      <DropdownLink to="/ethiopia">Ethiopia</DropdownLink>
                      <DropdownLink to="/uganda">Uganda</DropdownLink>
                      <DropdownLink to="/namibia">Namibia</DropdownLink>
                      <DropdownLink to="/rwanda">Rwanda</DropdownLink>
                    </SecondDropdown>
                    </DropdownLink>
                    <DropdownLink to="/asia">
                      Asia
                      <SecondDropdown className="dropdown-content" style={linkStyle}>
                      <DropdownLink to="/thailand">Thailand</DropdownLink>
                      <DropdownLink to="/borneo">Borneo</DropdownLink>
                      <DropdownLink to="/taiwan">Taiwan</DropdownLink>
                      <DropdownLink to="/kygyzstan">Kyrgyzstan</DropdownLink>
                      <DropdownLink to="/sri-lanka">Sri Lanka</DropdownLink>
                      <DropdownLink to="/india">India</DropdownLink>
                      <DropdownLink to="/nepal">Nepal</DropdownLink>
                      <DropdownLink to="/japan">Japan</DropdownLink>
                      <DropdownLink to="/bangladesh">Bangladesh</DropdownLink>
                      <DropdownLink to="/sumatra">Sumatra</DropdownLink>
                      <DropdownLink to="/indonesia">Indonesia</DropdownLink>
                      <DropdownLink to="/tibet">Tibet</DropdownLink>
                    </SecondDropdown>
                    </DropdownLink>
                    <DropdownLink to="/oceania">Oceania</DropdownLink>
                    <DropdownLink to="/central-america">Central America</DropdownLink>
                    <DropdownLink to="/south-america">South America</DropdownLink>
                    <DropdownLink to="/europe">Europe</DropdownLink>
                    <DropdownLink to="/middle-east">The Middle East</DropdownLink>
                    <DropdownLink to="/north-america">North America</DropdownLink>
                    <DropdownLink to="/antarctic">The Antarctic</DropdownLink>
                  </DropdownMenu>
              }
            </NavMenuLink>
            <NavMenuLink to="/news">News</NavMenuLink>
            <NavMenuLink to="/about-us">About Us</NavMenuLink>
          </NavMenu>
      </NavWrapper>
    )
  }
}
export default Navbar