import React from 'react'
import styled from 'styled-components'
import polarbear from '../images/polarbear.jpg';

const HeaderContainer = styled.div`
    background-image: url(${polarbear});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    margin-bottom: 63px;
    height: 650px;
`
const NucleusNav = styled.nav`
    z-index: 230;
    color: #FFF;
`
const Container = styled.div`
    width: 980px;
    padding: 0;
    margin-right: auto;
    margin-left: auto;
`
class Header extends React.Component {
    render(){
      return(
        <HeaderContainer>
          <NucleusNav/>
          <Container/>
        </HeaderContainer>
      )
    }
  }

  export default Header
  