import React from 'react'
import Grid from '../layouts/Grid'
import Image from '../components/Image'
import caiman from '../assets/caiman.png';
import elephant from '../assets/elephant.png';
import toucan from '../assets/toucan.png';
import tiger from '../assets/tiger.png';
import gorilla from '../assets/gorilla.png';
import chameleon from '../assets/chameleon.png';
import whiteshark from '../assets/whiteshark.png';
import penguins from '../assets/emperorpenguin.png';

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