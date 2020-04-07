import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
  background: #fff;
`;

export const Title = styled(Animated.Text)`
  font-size: 48px;
  font-weight: bold;
  color: #fff;
`;

export const SubT = styled(Animated.Text)`
  font-size: 16px;
  color: #fff;
`;

export const ContainerTitle = styled(Animated.View)`
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;
  position: absolute;
  padding: 20px 30px;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 40px;
  background: #fff;
  padding: 20px 30px;
  margin-top: 400px;
`;

export const TitleDesc = styled.Text`
  font-weight: bold;
`;

export const Description = styled.Text`
  text-align: justify;
`;

export const ImageSelected = styled(Animated.Image)`
  width: 100%;
  position: absolute;
`;
