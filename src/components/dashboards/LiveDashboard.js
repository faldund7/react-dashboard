import styled from 'styled-components';
import PieChartCard from '../cards/charts/PieChartCard';
import BarChartCard from '../cards/charts/BarChartCard';
import { useState } from 'react';

const StyledRow = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding-bottom: 1rem;
`

const LiveDashboard = function(){
    return(
        <div>
            <StyledRow>
                <PieChartCard cardTitle="Ethnicities" cardLabel="Count" cardValue="5" chartType={'pie'}></PieChartCard>
                <BarChartCard cardTitle="Countries" cardLabel="Count" cardValue="250"></BarChartCard>
                <PieChartCard cardTitle="Education Levels" cardLabel="Degrees" cardValue="5" chartType={'pie'}></PieChartCard>
            </StyledRow>

            <StyledRow>
                <BarChartCard cardTitle="Majors" cardLabel="Count" cardValue="25"></BarChartCard>
                <PieChartCard cardTitle="Gender" cardLabel="Female" cardValue="25%" chartType={'donut'}></PieChartCard>
                <BarChartCard cardTitle="Hackathon Experience" cardLabel="Count" cardValue="25"></BarChartCard>
            </StyledRow>
            {/* <SparklineCard></SparklineCard> */}
        </div>
    );
}

export default LiveDashboard;