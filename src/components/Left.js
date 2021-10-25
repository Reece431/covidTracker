import React from 'react';
import {connect} from 'react-redux';

import Header from './Header';
import InfoBox from './InfoBox';
import Map from './Map';

const Left = ({data, table, active}) => {
    
    //could also do this in actions/index and dispatch a new piece of state for the coords
    const coords = () => {
            if(!data.countryInfo){
            return (
                [34.80746, -40.4796]
            )
        } else {
            return (
                [data.countryInfo.lat,data.countryInfo.long]
            )
        }
    }

    return (
        <div className="appLeft" aria-label="covid-information-boxes-and-word-map">
            {/* Header */}
            {/* list of components needed for this app */}
            {/* Title + select input dropdown */}
            <Header/>

            {/* Infoboxes x3 */}
            {/* app stats could also be a component */}
            <div className="appStats" tabIndex="0" aria-label="Information boxes, 3"> 
                <InfoBox title="Cases" cases={data.todayCases} total={data.cases}/>
                <InfoBox title="Recovered" cases={data.todayRecovered} total={data.recovered}/>
                <InfoBox title="Deaths" cases={data.todayDeaths} total={data.deaths}/>
            </div>

            {/* Map */}
            <Map coords={coords()} table={table} aria-label="world-map"/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data: state.countryCovid,
        table: state.tableData
    }
}

export default connect(mapStateToProps)(Left)
