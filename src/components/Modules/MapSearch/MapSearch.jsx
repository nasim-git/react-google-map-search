import React, { Component } from 'react';

import Map from 'google-map-react';
import Marker from '../MapMarker';
import AutoComplete from '../MapAutoComplete';
import axios from 'axios';

import { Wrapper, MapContainer} from './Styled';

export default class MapSearch extends Component {
   
    constructor(props){
        super(props);
        this.state = {
            position: {lat:27.953281,lng:-82.454097},
            markers: [],
            mapApiLoaded: false,
            mapInstance: null,
            mapApi: null,
        };
    }
    
    searchUsersOnMap(bound) {
        let markers = [];

        axios.get('api/pins.json')
        .then((response) => {
            response.data.forEach(marker => {
                let inBound = this.inBounds(marker, bound.bounds);
                if(inBound){
                    markers.push(
                        <Marker
                            key = {marker.id}
                            lat={marker.lat}
                            lng={marker.lng}
                            marker={marker}
                            color="orange"
                        />
                    )
                }
            });
            this.setState({markers:markers});
        })
        .catch(function(error){
            console.log(error)
        });
    }
    inBounds = (marker, bounds) => {
        const eastBound = marker.lng < bounds.ne.lng;
        const westBound = marker.lng > bounds.sw.lng;
        let inLong;

        if (bounds.ne.lng < bounds.sw.lng) {
            inLong = eastBound || westBound;
        } else {
            inLong = eastBound && westBound;
        }

        const inLat = marker.lat > bounds.sw.lat && marker.lat < bounds.ne.lat;
        return inLat && inLong;
    }
    onChange = (bound) => {
        this.searchUsersOnMap(bound);
    }
    handleApiLoaded = (map, maps) => {
        this.setState({
          mapApiLoaded: true,
          mapInstance: map,
          mapApi: maps,
        });
    }


    render() {
        const {mapApiLoaded, mapInstance, mapApi} = this.state;
        return(
            <Wrapper>
                {mapApiLoaded && <AutoComplete map={mapInstance} mapApi={mapApi} />}
                <MapContainer>
                    <Map
                        bootstrapURLKeys={{ key: 'AIzaSyCuOa3mMYYeFL3YZdjLWmaPmNn3CjmJbz4',libraries: ['places', 'geometry'] }}
                        defaultCenter={this.props.position}
                        defaultZoom={this.props.zoom}
                        onChange={this.onChange}
                        onGoogleApiLoaded={({ map, maps }) => this.handleApiLoaded(map, maps)}
                        yesIWantToUseGoogleMapApiInternals={true}
                        >
                        {this.state.markers}   
                    </Map> 
                </MapContainer>                      
            </Wrapper>
        )
    }
}
