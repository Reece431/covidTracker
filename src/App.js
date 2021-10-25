import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import "leaflet/dist/leaflet.css";

import { GetCountriesData } from './actions';
import Left from './components/Left';
import Right from './components/Right';

const App = (props) => {

  useEffect(() => {
    props.GetCountriesData();
  },[])

  return (
    <div className="app" tabIndex="0" aria-label="Covid-tracker-app">
      <Left aria-label="Data-dropdown-and-world-map"/>
      <Right aria-label="Global-cases-by-country-and-world-graph"/>
    </div>
  )
}

const mapStateToProps = null;

export default connect(mapStateToProps,{GetCountriesData})(App)
