import React from 'react';
import {Card, CardContent} from '@material-ui/core';

import Table from './Table';
import LineGraph from './LineGraph';

const Right = () => {
    return (
        <Card>
            <CardContent aria-label="cases-by-countr-and-worldwide-new-cases-graph">
                <h3>Live cases by Country</h3>
                {/* Table listing country data */}
                <Table/>
                <h3>Wordwide new cases</h3>
                {/* Graph */}
                <LineGraph/>
            </CardContent>
        </Card>
    )
}

export default Right
