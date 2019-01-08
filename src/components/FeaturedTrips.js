import React from 'react'
import styled from 'styled-components'
import IberianWolf from '../assets/iberianwolf.jpg';
import BrownBear from '../assets/brownbear.jpg';
import SnowLeopard from '../assets/snowleopard3.jpg';

const FeaturedContainer = styled.div`
    background-color: #fff;
`

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
    margin: 50px
`

const Trip = styled.div`
    font-size: 150%;
`
const FeaturedImage = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 100%;
    object-fit: fill;
    height: ${props => props.theme.sizes.heights.large};
`

const TripTitle = styled.h1`
    font-size: 30px;
    text-align: center;
`
const TripCompany = styled.h3`
    font-size: 20px;
    text-align: center;
`

const FeaturedTrips = () => {
    return (
        <FeaturedContainer>
            <MainTitle>Featured Trips</MainTitle>
            <Wrapper>
                <Trip>
                    <FeaturedImage src={SnowLeopard} alt="snowleopard"/>
                    <TripTitle>Snow Leopards of Kyrgyzstan</TripTitle>
                    <TripCompany>Nature Expeditions</TripCompany>
                </Trip>
                <Trip>
                    <FeaturedImage src={IberianWolf} alt="caiman"/>
                    <TripTitle>Iberian Wolf Conservation</TripTitle>
                    <TripCompany>Bioinsight Expeditions</TripCompany>
                </Trip>
                <Trip>
                    <FeaturedImage src={BrownBear} alt="caiman"/>
                    <TripTitle>Kamchatka Brown Bears</TripTitle>
                    <TripCompany>Royle Safaris</TripCompany>
                </Trip>
            </Wrapper>
        </FeaturedContainer>
    )
}
export default FeaturedTrips
  