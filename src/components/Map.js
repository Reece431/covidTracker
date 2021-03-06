import React, {useRef} from 'react';
import {MapContainer, TileLayer, Circle, Popup} from 'react-leaflet';
import numeral from 'numeral';
import { connect } from 'react-redux';

const Map = ({coords, table, active}) => {

    const mapRef = useRef();

    const checkActive = () => (
        active ? active.toLowerCase() : 'cases'
    )

    //colors for different circles data
    const casesTypeColors = {
        cases: {
            hex: "#FF0000"
        },
        deaths: {
            hex: "#000000"
        },
        recovered: {
            hex: "#0000FF"
        }
    }    

    const showDataOnMap = (countryList, y) => (
            countryList.map(country => (
                <Circle
                    key = {country.country}
                    center={[country.countryInfo.lat, country.countryInfo.long]}
                    fillOpacity={0.4}
                    pathOptions={{color:casesTypeColors[y].hex,
                    fillColor:casesTypeColors[y].hex}}
                    radius={
                        Math.sqrt(country[y] * 12000)
                    }
                    eventHandlers={{
                        click: () => {
                          mapRef.current.focus()
                        },
                      }}
                    tabIndex="0"
                    aria-label="circle"
                    role="tooltip"
                >
                    <Popup>
                        <div tabIndex="0" ref={mapRef}>
                        <div>
                            <img className="mapFlag" src={country.countryInfo.flag} alt={country.country} role="image" aria-hidden="true"/>
                            {country.country}
                        </div>
                        <p>
                            {`${y}: ${numeral(country[y]).format("0,0")}`}
                        </p>
                        </div>
                    </Popup>

                </Circle>
            )
        )
        )

    //add this to store and when user changes drop down selection the map takes you there
    return (
        <div className="map" aria-label={`World-map-${active}`} tabIndex="0" role="application">
            {/* turn center/zoom into props */}
            {/* centre wont change after being rendered gonna need to research how to solve this */}
            <MapContainer center={coords} zoom={2}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                aria-label="Copyright-information"
                />
                {showDataOnMap(table,checkActive())}
            </MapContainer>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        active: state.setActive
    }
}

export default connect(mapStateToProps)(Map)
