import React from 'react';
import {Pin,ImageWrapper} from './Styled';


const Marker = (props) => {
    const { color, name, picture} = props;
    return (
      <Pin backgroundColor={color} title={name}>
      	<ImageWrapper backgroundColor={color}>
      		<img src={picture ? picture : 'assets/img/place.png'} alt={name} />
      	</ImageWrapper>	
      </Pin>
    );
  };

export default Marker;