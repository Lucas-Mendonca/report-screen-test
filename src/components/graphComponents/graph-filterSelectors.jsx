import styled from 'styled-components'
import getGraphRefs from '@/data/getGraphRefs'
import { fakeDatabase } from '@/data/fakeData'
import { useEffect, useState } from 'react'

const StyledContainer = styled.div`
    align-items: center;
    overflow: hidden;
    display: flex;
`

const StyledSelect = styled.select`
    font-size: 1.8vh;
    margin-left: 1vw;
    border: solid 0.21vh;
    border-radius: 1vh;
    text-align: center;
    height: 4vh;
    padding: 0 0.5vw;
`

const StyledSelectText = styled.h2`
    font-weight: normal;
    font-size: 1.8vh;
    margin: 0;
`

export default function FilterSelect(props){

    

    useEffect(() => {
        props.chieldRef('zx')
    },[])

    const keys = Object.keys(props.filterOpt)

    return(
        <StyledContainer>
            <StyledSelectText>{props.name}</StyledSelectText>
            <StyledSelect>
                {keys.map((val, index) => {
                    return (
                    <option 
                    key={index}
                    value={val}
                    >
                        {val}
                    </option>
                    )
                })}
            </StyledSelect>
        </StyledContainer>
    )
}