import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {FormControl,Select,MenuItem} from '@material-ui/core';

import {GetCountryCovidData} from '../actions';

const Header = (props) => {

    
    const [country, setCountry] = useState('worldwide');
    const [exp, setExp] = useState(false);

    /*call get covid data whenever country changes*/
    /*use can have more than one useEffect*/
    useEffect(() => {
        props.GetCountryCovidData(country)
    },[country])

    /*helper function to create menuitems*/
    const menuItems = props.countries.map((country, index) => {
        return (
            <MenuItem key={country.value + index} value={country.value} role="option">{country.name}</MenuItem>
        )
    })

    return (
        <div className="appHeader">
            <h1 tabIndex="0">Covid 19 Tracker</h1>
            <FormControl className="appDropdown">
                <Select
                onClick={() => setExp(!exp)}
                tabIndex="0" aria-label="Select-country" role="listbox" aria-expanded={exp}
                 variant="outlined"
                 value={country}
                 onChange={e => {setCountry(e.target.value)}}
                >
                    {menuItems}
                </Select>
            </FormControl>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}

export default connect(mapStateToProps,{GetCountryCovidData})(Header)
