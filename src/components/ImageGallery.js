import React from 'react'
import Grid from '../layouts/Grid'
import Image from '../components/Image'
import caiman from '../images/caiman.png';
import elephant from '../images/elephant.png';
import toucan from '../images/toucan.png';
import tiger from '../images/tiger.png';
import gorilla from '../images/gorilla.png';
import chameleon from '../images/chameleon.png';
import whiteshark from '../images/whiteshark.png';
import penguins from '../images/emperorpenguin.png';

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