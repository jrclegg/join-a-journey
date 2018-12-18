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


const Wrapper = styled.div `
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
`
const SideColumn = styled.div`
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 25%;
`
const MidColumn = styled.div`
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
    max-width: 60%;
`
const Image = styled.img`
    width: 100%;
    float: left;
`

const ImageGallery = () => {
    return (
        <Wrapper>
            <SideColumn>
                <Image src={caiman} alt="caiman"/><Image src={elephant} alt="elephant"/><Image src={toucan} alt="toucan"/>
            </SideColumn>
            <MidColumn>
                <Image src={tiger} alt="tiger"/><Image src={gorilla} alt="gorilla"/>
            </MidColumn>
            <SideColumn>
                <Image src={chameleon} alt="chameleon"/><Image src={whiteshark} alt="great white shark"/><Image src={penguins} alt="penguins"/>
            </SideColumn>
        </Wrapper>
    )
}

export default ImageGallery