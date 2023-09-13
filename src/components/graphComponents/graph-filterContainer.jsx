import styled from 'styled-components'
import FilterSelect from './graph-filterSelectors'
import { useRef, useState } from 'react'
import { fakeDatabase } from '@/data/fakeData'

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
`

const StyledFlex = styled.div`
    justify-content: center;
    overflow: scroll;
    align-items: center;
    font-size: 2.5vh;
    margin-top: 3.2vh;
    flex-wrap: wrap;
    display: flex;
    height: 5vh;
    width: 80vw;
    gap: 4vw;
`

export default function FilterContainer(props){

    const [filter, setFilter] = useState()
    const [selectors, setSelectors] = useState([fakeDatabase])

    const childRefs = useRef([])
    childRefs.current = [];

    function callFilter(args){
        setFilter(args)
    }

    const OptionsNames = ["Type", "Category", "Focus"]

    const addToRef = (el) => {
        console.log(el)
    }

    return (
        <>
            <StyledContainer>
                <StyledFlex>
                {selectors.map((val, index)=>
                <FilterSelect
                    name={OptionsNames[index]}
                    key={index}
                    level={index}
                    setFilter={callFilter}
                    filterOpt={val}
                    chieldRef={addToRef}
                />
                )}
                </StyledFlex>
            </StyledContainer>
        </>
    )
}