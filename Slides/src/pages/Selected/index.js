import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

import {
  Container,
  Title,
  SubT,
  ContainerInfo,
  TitleDesc,
  Description,
  ImageSelected,
  ContainerTitle,
} from './styles';
import { ScrollView } from 'react-native-gesture-handler';

export default function Selected({ route }) {
  const [scrollOffset, setScrollOffset] = useState(new Animated.Value(0));
  const [imageProgress, setImageProgress] = useState(new Animated.Value(0));
  const { item } = route.params;
  const { width } = Dimensions.get('window');

  useEffect(() => {
    Animated.timing(imageProgress, {
      toValue: 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [imageProgress]);

  return (
    <Container>
      <ImageSelected
        source={item.url}
        style={{
          height: scrollOffset.interpolate({
            inputRange: [0, 200],
            outputRange: [500, 400],
            extrapolate: 'clamp',
          }),
          opacity: imageProgress.interpolate({
            inputRange: [0, 100],
            outputRange: [0, 1],
          }),
        }}
      />
      <ContainerTitle
        style={{
          height: scrollOffset.interpolate({
            inputRange: [0, 250],
            outputRange: [400, 150],
            extrapolate: 'clamp',
          }),
        }}>
        <Title
          style={{
            fontSize: scrollOffset.interpolate({
              inputRange: [100, 200],
              outputRange: [40, 25],
              extrapolate: 'clamp',
            }),
            transform: [
              {
                translateX: imageProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: [width * -1, 0],
                }),
              },
            ],
          }}>
          {item.title}
        </Title>
        <SubT
          style={{
            transform: [
              {
                translateX: imageProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: [width * -1, 0],
                }),
              },
            ],
          }}>
          {item.subt}
        </SubT>
      </ContainerTitle>
      <Animated.ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollOffset },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        showsVerticalScrollIndicator={false}>
        <ContainerInfo style={{ maxHeight: 700 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TitleDesc>{item.titledesc}</TitleDesc>
            <Description>{item.desc}</Description>
          </ScrollView>
        </ContainerInfo>
      </Animated.ScrollView>
    </Container>
  );
}
