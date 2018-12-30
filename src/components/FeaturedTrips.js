import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import caiman from '../images/caiman.png';

const Wrapper = styled.div`
    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: 400px 400px 400px;
        grid-gap: 10px;
        background-color: #fff;
        color: #444;	
        justify-content: space-between	
    }
`
const MainTitle = styled.h1`
    font-size: 30px
    text-align: center
    margin: 100px
`
const Trip = styled.div`
    border: solid 5px
    background-color: #444;
    color: #fff;
    border-radius: 5px;
    padding: 20px;
    font-size: 150%;
`



const FeaturedDestinations = () => {
    return (
        <div>
            <MainTitle>Featured Trips</MainTitle>
         <Wrapper>
            <Trip><Image src={caiman} alt="caiman"/></Trip>
            <Trip><Image src={caiman} alt="caiman"/></Trip>
            <Trip><Image src={caiman} alt="caiman"/></Trip>
        </Wrapper>
        </div>
    )
}
export default FeaturedDestinations
  