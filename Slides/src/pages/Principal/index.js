import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import 'react-native-gesture-handler';
import lucas from '../../assets/lucas.jpg';
import taina from '../../assets/taina.jpg';
import bonita from '../../assets/bonita.jpg';
import bonita2 from '../../assets/bonita2.jpg';
import bonita3 from '../../assets/bonita3.jpeg';
import bonita4 from '../../assets/bonita4.jpg';
import bonita5 from '../../assets/bonita5.jpg';
import bonita6 from '../../assets/bonita6.jpg';
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
  FacePhoto,
  ImageList,
  FlatListImage,
  ContainerImageList,
} from './styles';

const Principal: () => React$Node = ({ navigation }) => {
  const [offset, setOffset] = useState(new Animated.ValueXY({ x: 0, y: 50 }));
  const [opacity, setOpacity] = useState(new Animated.Value(0));
  const [ListImage, setListImage] = useState([
    {
      id: 1,
      title: 'Escovando os dentes juntos',
      subt: '26/02/2020',
      url: bonita,
      faceurl: lucas,
      titledesc: 'Aqui vai o titulo',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: 'Dormindo no colo dela <3',
      subt: '30/02/2020',
      url: bonita2,
      faceurl: taina,
      titledesc: 'Aqui vai o titulo',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      title: 'Ela distraida, feliz',
      subt: '02/04/2020',
      url: bonita3,
      faceurl: lucas,
      titledesc: 'Aqui vai o titulo',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 4,
      title: 'Primeira foto juntos',
      subt: '08/03/2020',
      url: bonita4,
      faceurl: taina,
      titledesc: 'Aqui vai o titulo',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 5,
      title: 'Lucas com o timao',
      subt: '05/04/2020',
      url: bonita5,
      faceurl: taina,
      titledesc: 'Aqui vai o titulo',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 6,
      title: 'Primeiro dia na casa do mozão',
      subt: '19/01/2020',
      url: bonita6,
      faceurl: taina,
      titledesc: 'Aqui vai o titulo',
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ]);
  const [listProgress, setListProgress] = useState(new Animated.Value(0));
  const { width } = Dimensions.get('window');
  const teste = true;
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
  return (
    <>
      <Container>
        <Header>
          <THeader>My Trips</THeader>
          <Options>
            <OptionsHeader>
              <Icon name={'image'} size={40} color="#455A64" />
            </OptionsHeader>
          </Options>
          <OptionsSecondHeader />
        </Header>
        <FlatListImage
          data={ListImage}
          keyExtractor={item => String(item.id)}
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
                  }).start(() => navigation.navigate('Selected', { item }))
                }>
                <ImageList source={item.url} resizeMode="stretch" />
                <ContainerFace>
                  <TitleImage>{item.title}</TitleImage>
                  <SubTitle>{item.subt}</SubTitle>
                </ContainerFace>
                <ContainerImageList>
                  <FacePhoto source={item.faceurl} />
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
