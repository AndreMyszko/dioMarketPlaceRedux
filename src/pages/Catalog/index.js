import React, {useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import FloatingCart from '../../components/FloatingCart';
import formatValue from '../../utils/formatValue';
import {
  Container,
  ProductContainer,
  ProductImage,
  ProductList,
  Product,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';

export default function App() {
  const [products, setProducts] = useState([
    {
    id: '1',
    title: 'Assinatura Trimestral',
    image_url: 'https://th.bing.com/th/id/R.2ba1fce347658f87cfd6ce85367a5e0f?rik=zlBAv5KBGtbOkA&riu=http%3a%2f%2fminecraftprintables.com%2fwp-content%2fuploads%2f2014%2f04%2fGrass-150x150.png&ehk=xt0xwWJqw7YZRdNttvhg9H%2b5POhAoNWAiewT8XPOyv4%3d&risl=&pid=ImgRaw&r=0',
    price: 150,

    },
  ]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
        data={products}
        keyExtractor={(item) => item.id}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{
          height: 80,
        }}
        renderItem={({item}) => (
          <Product>
            <ProductImage source={{ uri: item.image_url }} />
            <ProductTitle>{item.title}</ProductTitle>
            <PriceContainer>
              <ProductPrice>{formatValue(item.price)}</ProductPrice>
              <ProductButton onPress={() => {}}>
                <ProductButtonText>add</ProductButtonText>
                <Icon size={25} name="plus-circle" color="#FFFFFF" />
              </ProductButton>
            </PriceContainer>
          </Product>
        )}
        />
      </ProductContainer>
      {/* <FloatingCart /> */}
    </Container>
  );
}
