import React, { useState, useEffect } from 'react';
import { Animated, Dimensions, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import 'react-native-gesture-handler';
import api from '../../api/api';
import {
  Container,
  Header,
  THeader,
  Options,
  OptionsHeader,
  OptionsSecondHeader,
  ContainerImage,
  TitleImage,
  SubTitle,
  ContainerFace,
  ButtonDelete,
  ImageList,
  FlatListImage,
  ContainerImageList,
} from './styles';

const Principal: () => React$Node = ({ navigation }) => {
  const [offset, setOffset] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [ListImage, setListImage] = useState([]);
  const [listProgress, setListProgress] = useState(new Animated.Value(0));
  const { width } = Dimensions.get('window');

  useEffect(() => {
    async function loadImages() {
      const res = await api.get('posts');
      console.tron.log(res);
      setListImage(res.data);
    }
    loadImages();
  }, [ListImage]);

  async function loadImage() {
    const res = await api.get('posts');
    console.tron.log(res);
    setListImage(res.data);
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 5,
        bounciness: 20,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start();
  }, [offset.y, opacity]);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      Animated.timing(listProgress, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
    return unsubscribe;
  }, [listProgress, navigation]);

  async function handleDelete(id) {
    Alert.alert(
      'Confirmação de exclusão',
      'Realmente excluir essa imagem?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'EXCLUIR',
          onPress: async () => {
            await api.delete(`posts/${id}`), loadImage();
          },
        },
      ],
      { cancelable: false },
    );
  }

  return (
    <>
      <Container>
        <Header>
          <THeader>My Trips</THeader>
          <Options>
            <OptionsHeader>
              <Icon name={'image'} size={30} color="tomato" />
            </OptionsHeader>
          </Options>
          <OptionsSecondHeader />
        </Header>
        <FlatListImage
          data={ListImage}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <Animated.View
              style={[
                {
                  transform: [...offset.getTranslateTransform()],
                },
                { opacity: opacity },
                ,
              ]}>
              <ContainerImage
                style={[
                  {
                    transform: [
                      {
                        translateX: listProgress.interpolate({
                          inputRange: [0, 100],
                          outputRange: [0, width],
                        }),
                      },
                    ],
                  },
                ]}
                onPress={() =>
                  Animated.timing(listProgress, {
                    toValue: 100,
                    duration: 300,
                    useNativeDriver: true,
                  }).start(() =>
                    navigation.navigate('Foto Selecionada', { item }),
                  )
                }>
                <ImageList source={{ uri: item.url }} resizeMode="stretch" />
                <ContainerFace>
                  <TitleImage>{item.title}</TitleImage>
                  <SubTitle>{item.subt}</SubTitle>
                </ContainerFace>
                <ContainerImageList>
                  <ButtonDelete onPress={() => handleDelete(item._id)}>
                    <Icon name={'trash'} size={20} color="#fff" />
                  </ButtonDelete>
                </ContainerImageList>
              </ContainerImage>
            </Animated.View>
          )}
        />
      </Container>
    </>
  );
};

export default Principal;
