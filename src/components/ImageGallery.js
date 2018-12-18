import React from 'react'
import styled from 'styled-components'
import caiman from '../images/caiman.png';
import elephant from '../images/elephant.png';
import toucan from '../images/toucan.png';
import tiger from '../images/tiger.png';
import gorilla from '../images/gorilla.png';
import chameleon from '../images/chameleon.png';
import whiteshark from '../images/whiteshark.png';
import penguins from '../images/emperorpenguin.png';


const Grid = styled.div `
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 20px;
    align-items: stretch;
    margin-left: 20px;
    margin-right: 20px;
`
const Image = styled.img`
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
    max-width: 100%;
`

const ImageGallery = () => {
    return (
        <Grid>
            <Image src={caiman} alt="caiman"/>
            <Image src={elephant} alt="elephant"/>
            <Image src={toucan} alt="toucan"/>
            <Image src={tiger} alt="tiger"/>
            <Image src={gorilla} alt="gorilla"/>
            <Image src={chameleon} alt="chameleon"/>
            <Image src={whiteshark} alt="great white shark"/>
            <Image src={penguins} alt="penguins"/>
            <Image src={caiman} alt="caiman"/>
            <Image src={elephant} alt="elephant"/>
            <Image src={toucan} alt="toucan"/>
            <Image src={tiger} alt="tiger"/>
            <Image src={gorilla} alt="gorilla"/>
            <Image src={chameleon} alt="chameleon"/>
            <Image src={whiteshark} alt="great white shark"/>
        </Grid>
    )
}

export default ImageGallery