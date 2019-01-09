import React from 'react'
import styled from 'styled-components'
import arabianOryx from '../assets/arabia.jpg';
import lion from '../assets/lion.jpg'

const FeaturedContainer = styled.div`
    background-color: #fff;
    margin-top: 80px;
`

const Wrapper = styled.div`
    @media screen and (min-width: 1024px){
        display: grid;
        grid-template-columns: 49% 49%;
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
`
const Trip = styled.div`
    font-size: 150%;
`
const FeaturedImage = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 100%;
    object-fit: fill;
    height: ${props => props.theme.sizes.heights.xlarge};
`
const WildlifeTitle = styled.h2`
    margin: 10px
    font-size: 20px
    text-align: center
`
const TripCompany = styled.h3`
    font-size: 20px;
    text-align: center;
` 
const TripDate = styled.h4`
    font-size: 20px;
    text-align: center;
`

const LastMinuteTrips = () => {
    return (
        <FeaturedContainer>
            <MainTitle>Wildlife Trips Leaving Soon</MainTitle>
            <Wrapper>
                <Trip>
                    <FeaturedImage src={lion} alt="lion"></FeaturedImage>
                    <WildlifeTitle>African Cats in the Masai Mara with Jackson Looseyia</WildlifeTitle>
                    <TripDate>11th-18th January 2019</TripDate>
                    <TripCompany>Spencer Scott Travel</TripCompany>
                </Trip>
                <Trip>
                    <FeaturedImage src={arabianOryx} alt="oryx"></FeaturedImage>
                    <WildlifeTitle>Conserving the Wildlife of Arabia</WildlifeTitle>
                    <TripDate>19th-26th January 2019</TripDate>
                    <TripCompany>Biosphere Expeditions</TripCompany>
                </Trip>
            </Wrapper>
        </FeaturedContainer>
    )
}

export default LastMinuteTrips

