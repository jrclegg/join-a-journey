
import styled from 'styled-components'

const Dropdown = styled.li`
    display: block;
    min-width: 190px;
    text-align: center;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    text-decoration: none;
    background: #f3f3f3;
    color: #2f3036;
    height: 50px;
    line-height: 50px;
    :hover {
      background: #19c589;
      .dropdown-content {
        display: block
      }
    }
`
export default Dropdown