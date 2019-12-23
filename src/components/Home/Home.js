import React, {Component} from 'react';
import { MainWrapper, Title } from './Styles';

import  MapSearch from '../Modules/MapSearch';


class Home extends Component {
  
  render() {
      return (
          <MainWrapper>
          	<Title> Enter an address </Title>
            <MapSearch position={{lat:27.953281,lng:-82.454097}} zoom={10} />
          </MainWrapper>
      );
    }
}

export default Home;