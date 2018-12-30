import styled from 'styled-components'

const Grid = styled.div `
@media screen and (max-width: 768px){
    display: grid;
    grid-template-columns: 180px 180px;
    grid-gap: 10px;
    padding: 10px;
    margin-left: 5px;
}
@media screen and (min-width: 768px){
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-gap: 10px;
    padding: 10px;
}
@media screen and (min-width: 1024px){
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 20px;
    margin-left: 20px;
    margin-right: 20px;
}
`

export default Grid 