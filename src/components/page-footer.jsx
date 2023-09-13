import styled from "styled-components"

const StyledFooter = styled.h1`
    position: absolute;
    right: 1vw;
    bottom: 1vh;
    margin: 0;
    font-size: 1.3vh;
    color: #AAA;
`

export default function PageFooter(){
    return(
        <StyledFooter>
            Made using Chart.JS
        </StyledFooter>
    )
}