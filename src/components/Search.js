import React from 'react'
import styled from 'styled-components'
import Button from './Button'

const SearchContainer = styled.div`
    position: absolute;
    width: 50%;
    background: red;
    border: 3px solid black;
    padding: 40px;
    margin-left: 25%;
    margin-top 10%;
`

const SearchInput = styled.input`
    width: 70%;
    padding: 15px;
`

const Search = () => {
    return (
        <SearchContainer>
            <SearchInput type="text" placeholder="What animal do you want to see?"/>
            <Button>Search</Button>
        </SearchContainer>
    )
}

export default Search