import React, { Component } from 'react'
import NavWrapper from './NavWrapper'
import NavMenu from './NavMenu'
import NavMenuItem from './NavMenuItem'
import Logo from './Logo'
import DropdownLink from './Dropdown/DropdownLink'
import Dropdown from './Dropdown/Dropdown'
import DropdownContainer from './Dropdown/DropdownContainer'
import SecondDropdown from './/Dropdown/SecondDropdown';

  
class Navigation extends Component {
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
    const { showMenu } = this.state
    return (
      <NavWrapper>
          <Logo/>
          <NavMenu>
            <NavMenuItem id="expeditions" onClick={ e => this.props.history.push("/expedition-type") } onMouseOver={(event) => this.showMenu(event)} onMouseLeave={(event) => this.hideMenu(event)}>
                Expedition Type
                {showMenu === "expeditions" &&
                  <DropdownContainer>
                    <DropdownLink to="/wildlife-tours">Wildlife Tours</DropdownLink>
                    <DropdownLink to="/wildlife-conservation">Widlife Conservation Tours</DropdownLink>
                    <DropdownLink to="/biodiversity-assessment">Biodiversity Assessments</DropdownLink>
                  </DropdownContainer>
                }
            </NavMenuItem>
            <NavMenuItem id="wildlife" onClick={ e => this.props.history.push("/wildlife") } onMouseOver={(event) => this.showMenu(event)} onMouseLeave={(event) => this.hideMenu(event)}>
                Wildlife
                {showMenu === "wildlife" &&
                  <DropdownContainer>
                    <Dropdown>
                      <DropdownLink to="/big-cats">Big Cats</DropdownLink>
                      <SecondDropdown className="dropdown-content">
                        <DropdownLink to="/lions">Lions</DropdownLink>
                        <DropdownLink to="/tigers">Tigers</DropdownLink>
                        <DropdownLink to="/jaguars">Jaguars</DropdownLink>
                        <DropdownLink to="/leopards">Leopards</DropdownLink>
                        <DropdownLink to="/snow-leopards">Snow Leopards</DropdownLink>
                      </SecondDropdown>
                    </Dropdown>
                    <Dropdown>
                      <DropdownLink to="/large-mammals">Large Mammals</DropdownLink>
                      <SecondDropdown className="dropdown-content">
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
                    </Dropdown>
                    <Dropdown>
                      <DropdownLink to="/small-mammals">Small Mammals</DropdownLink>
                      <SecondDropdown className="dropdown-content">
                        <DropdownLink to="/gordons-wildcat">Gordon's Wildcat</DropdownLink>
                        <DropdownLink to="/sand-fox">Sand Fox</DropdownLink>
                        <DropdownLink to="/red-panda">Red Panda</DropdownLink>
                        <DropdownLink to="/wolverines">Wolverines</DropdownLink>
                        <DropdownLink to="/lynx">Lynx</DropdownLink>
                      </SecondDropdown>
                    </Dropdown>
                    <Dropdown>
                      <DropdownLink to="/primates">Primates</DropdownLink>
                      <SecondDropdown className="dropdown-content">
                        <DropdownLink to="/gorillas">Gorillas</DropdownLink>
                        <DropdownLink to="/orangutans">Orangutan</DropdownLink>
                        <DropdownLink to="/monkeys">Monkeys</DropdownLink>
                      </SecondDropdown>
                    </Dropdown>
                    <Dropdown>
                      <DropdownLink to="/reptiles">Reptiles</DropdownLink>
                      <SecondDropdown className="dropdown-content">
                        <DropdownLink to="/komodo">Komodo Dragons</DropdownLink>
                        <DropdownLink to="/anacondas">Anacondas</DropdownLink>
                      </SecondDropdown>
                    </Dropdown>
                    <Dropdown>
                      <DropdownLink to="/marine">Marine</DropdownLink>
                      <SecondDropdown className="dropdown-content">
                        <DropdownLink to="/turtles">Sea Turtles</DropdownLink>
                        <DropdownLink to="/whales">Whales</DropdownLink>
                        <DropdownLink to="/sharks">Sharks</DropdownLink>
                        <DropdownLink to="/dolphins">Dolphins</DropdownLink>
                        <DropdownLink to="/penguins">Penguins</DropdownLink>
                        <DropdownLink to="/coral-reef">Coral Reef</DropdownLink>
                      </SecondDropdown>
                    </Dropdown>
                    <Dropdown>
                      <DropdownLink to="/birds">Birds</DropdownLink>
                      <SecondDropdown className="dropdown-content">
                      </SecondDropdown>
                    </Dropdown>
                  </DropdownContainer>
                }
            </NavMenuItem>
            <NavMenuItem id="destinations" onClick={ e => this.props.history.push("/destinations") } onMouseOver={(event) => this.showMenu(event)} onMouseLeave={(event) => this.hideMenu(event)}>
                Destinations
                {showMenu === "destinations" &&
                  <DropdownContainer className="dropdown">
                  <Dropdown>
                    <DropdownLink to="africa">Africa</DropdownLink>
                    <SecondDropdown className="dropdown-content">
                      <DropdownLink to="/kenya">Kenya</DropdownLink>
                      <DropdownLink to="/malawi">Malawi</DropdownLink>
                      <DropdownLink to="/south-africa">South Africa</DropdownLink>
                      <DropdownLink to="/tanzania">Tanzania</DropdownLink>
                      <DropdownLink to="/ethiopia">Ethiopia</DropdownLink>
                      <DropdownLink to="/uganda">Uganda</DropdownLink>
                      <DropdownLink to="/namibia">Namibia</DropdownLink>
                      <DropdownLink to="/rwanda">Rwanda</DropdownLink>
                    </SecondDropdown>
                  </Dropdown>
                  <Dropdown>
                    <DropdownLink to="asia">Asia</DropdownLink>
                    <SecondDropdown className="dropdown-content">
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
                  </Dropdown>
                  <DropdownLink to="/oceania">Oceania</DropdownLink>
                  <DropdownLink to="/central-america">Central America</DropdownLink>
                  <DropdownLink to="/south-america">South America</DropdownLink>
                  <DropdownLink to="/europe">Europe</DropdownLink>
                  <DropdownLink to="/middle-east">The Middle East</DropdownLink>
                  <DropdownLink to="/north-america">North America</DropdownLink>
                  <DropdownLink to="/antarctic">The Antarctic</DropdownLink>
                </DropdownContainer>
                }
            </NavMenuItem>
            <NavMenuItem onClick={ e => this.props.history.push("/news") }>
                News
            </NavMenuItem>
            <NavMenuItem onClick={ e => this.props.history.push("/about-us") }>
                About Us
            </NavMenuItem>
          </NavMenu>
        </NavWrapper>
    )
  }
}
export default Navigation