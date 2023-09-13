import FilterContainer from "@/components/graphComponents/graph-filterContainer";
import GraphContainer from "@/components/graphComponents/graph-container";
import { useState } from "react";


export default function PageGraph(){
    
    let [filter, setFilter] = useState(['all'])

    function applyFilter(args) {
        setFilter(args)
        console.log(args)
    }

    
    return (
        <>
            <FilterContainer selectedFilters={applyFilter}/>
            <GraphContainer/>
        </>
    )    
}