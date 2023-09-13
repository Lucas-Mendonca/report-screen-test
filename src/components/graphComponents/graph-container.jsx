import styled from 'styled-components'
import LineGraph from '@/components/graphComponents/graph-line'

const StyledFlex = styled.div`
    justify-content: center;
    align-items: center;
    padding-left: auto;
    margin: 0;
    display: flex;
    height: 75vh;
`
export default function GraphContainer(props){

    return (
        <>
        <StyledFlex>
            <LineGraph/>
        </StyledFlex>
        </>
    )
};