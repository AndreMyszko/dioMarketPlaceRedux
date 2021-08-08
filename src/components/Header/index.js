import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/Feather';

import Logo from '../../assets/flamengo.png';

const Header = () => {
  return (
    <Container>
      <Image source={Logo} style={{
        height: 32,
        width: 32,
      }}/>
      <TouchableOpacity>
        <Icon name="linkedin" size={25} color={'#FFFFFF'}/>
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="github" size={25} color={'#FFFFFF'}/>
      </TouchableOpacity>
        <TouchableOpacity>
      <Icon name="youtube" size={25} color={'#FFFFFF'}/>
        </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="instagram" size={25} color={'#FFFFFF'}/>
      </TouchableOpacity>
    </Container>
  )
}

export default Header;
