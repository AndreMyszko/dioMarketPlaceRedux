import React from 'react';
import {Image} from 'react-native';
import {Container} from './styles';

import Logo from '../../assets/flamengo.png';

const Header = () => {
  return (
    <Container>
      <Image source={Logo} style={{
        height: 32,
        width: 32,
      }}/>
    </Container>
  )
}

export default Header;
