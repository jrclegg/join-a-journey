import React from 'react'
import styled from 'styled-components'
import Image from './Image'
import caiman from '../images/caiman.png';
import AmurLeopard from '../images/amurleopard.jpg';

const Wrapper = styled.div`
    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: 400px 400px 400px;
        background-color: #fff;
        color: #444;
        justify-content: space-between;	
        margin-left: 50px;
        margin-right: 50px;
    }
`
const MainTitle = styled.h1`
    font-size: 30px
    text-align: center
    margin: 100px
`
const Trip = styled.div`
    border: solid 5px
    border-radius: 5px;
    font-size: 150%;
`



const FeaturedDestinations = () => {
    return (
        <div>
            <MainTitle>Featured Trips</MainTitle>
         <Wrapper>
            <Trip>
                <Image src={AmurLeopard} alt="caiman"/>
                <div>Lorem Upsfisfdsdfjsdifjsdifjsidfj</div>
            </Trip>
            <Trip>
                <Image src={caiman} alt="caiman"/>
                <div>Lorem Upsfisfdsdfjsdifjsdifjsidfj</div>
            </Trip>
            <Trip>
                <Image src={caiman} alt="caiman"/>
                <div>Lorem Upsfisfdsdfjsdifjsdifjsidfj</div>
            </Trip>
        </Wrapper>
        </div>
    )
}
export default FeaturedDestinations
  