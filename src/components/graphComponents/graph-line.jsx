import { lineConfig } from '@/configs/lineGraphs';
import { useState } from 'react';
import { Chart } from 'react-google-charts';

const options = lineConfig

export default function LineGraph(props){
    
    let [graphTitle, setGraphTittle] = useState("Sales report");

    options.title = graphTitle;

    return(
        <Chart
        chartType="LineChart"
        data={[["Age", "Weight"], [7, 5.5], [8, 12], [9, 10], [10, 5], [12, 7]]}
        width="100%"
        height="100%"
        options={options}
        />
    )
}