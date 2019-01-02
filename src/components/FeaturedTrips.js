import React from 'react'
import styled from 'styled-components'
import caiman from '../assets/caiman.png';
import AmurLeopard from '../assets/amurleopard.jpg';

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
        <div>
            <MainTitle>Featured Trips</MainTitle>
         <Wrapper>
            <Trip>
                <FeaturedImage src={AmurLeopard} alt="caiman"/>
                <TripTitle>Snow Leopards of Kygyzstan</TripTitle>
                <TripCompany>Nature Expeditions</TripCompany>
            </Trip>
            <Trip>
                <FeaturedImage src={caiman} alt="caiman"/>
                <TripTitle>Iberian Wolf Conservation</TripTitle>
                <TripCompany>Bioinsight Expeditions</TripCompany>
            </Trip>
            <Trip>
                <FeaturedImage src={caiman} alt="caiman"/>
                <TripTitle>Kamchatka Brown Bears</TripTitle>
                <TripCompany>Royle Safaris</TripCompany>
            </Trip>
        </Wrapper>
        </div>
    )
}
export default FeaturedTrips
  