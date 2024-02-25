import styled from 'styled-components'

const StyledHeader = styled.div`
    box-shadow: 0 0 6vh -3vh #000;
    background-color: var(--bgBlue);
    justify-content: space-between;
    padding: 0 2vh 0 2vh;
    overflow: hidden;
    display: flex;
    height: 8vh;

        h1 {
            font-weight: normal;
            font-size: 30vh;
            color: #FFF;
        }
`
export default function PageHeader(){
    
    return (
        <StyledHeader>
            <h1>Menu</h1>
            <h1>Blood Donations Report</h1>
        </StyledHeader>
    )
}