import React from 'react'
import styled from 'styled-components'
import tiger from '../assets/tiger.jpg';

const FeaturedContainer = styled.div`
    background-color: #fff;
    margin-top: 80px;
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
const TripCompany = styled.h3`
    font-size: 20px;
    text-align: center;
`

const MainTitle = styled.h1`
    font-size: 30px
    text-align: center
`
const WildlifeTitle = styled.h2`
    margin: 10px
    font-size: 20px
    text-align: center
`
const Animal = styled.div`
    font-size: 150%;
`
const FeaturedImage = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    width: 100%;
    object-fit: fill;
    height: ${props => props.theme.sizes.heights.xlarge};
`



const FeaturedWildlife = () => {
    return (
        <FeaturedContainer>
            <MainTitle>Featured Animal</MainTitle>
            <WildlifeTitle>Tiger</WildlifeTitle>
            <Wrapper>
                <Animal>
                    <FeaturedImage src={tiger} alt="tiger"></FeaturedImage>
                    <WildlifeTitle>Indian Tiger Safari with Stephen Mills</WildlifeTitle>
                    <TripCompany>Spencer Scott Travel</TripCompany>
                </Animal>
                <Animal>
                    <FeaturedImage src={tiger} alt="tiger"></FeaturedImage>
                    <WildlifeTitle>Siberian Tiger Winter Tour</WildlifeTitle>
                    <TripCompany>Royle Safaris</TripCompany>
                </Animal>
                <Animal>
                    <FeaturedImage src={tiger} alt="tiger"></FeaturedImage>
                    <WildlifeTitle>Sunderbans Tiger Cruise</WildlifeTitle>
                    <TripCompany>Royle Safaris</TripCompany>
                </Animal>
            </Wrapper>
        </FeaturedContainer>
    )
}
export default FeaturedWildlife
  