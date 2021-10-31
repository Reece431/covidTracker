import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';

const Table = ({td}) => {

    /*dont forget you can destructure here too
    so can use x or {country, cases}*/
    //console.log(td.length);
    const table = td.map((x,index) => {
        return (
            <tr key={x.country} tabIndex="0">
                <td>{x.country}</td>
                <td><strong>{numeral(x.cases).format("0,0")}</strong></td>
            </tr>
        )
    })

    return (
        <div className="table" tabIndex="0" aria-label="Global-covid-cases-by-country 223 results">
            {table}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        td: state.tableData
    }
}

export default connect(mapStateToProps)(Table)
