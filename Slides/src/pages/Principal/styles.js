import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Header = styled.View`
  background: #fff;
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex-direction: row;
`;

export const THeader = styled.Text`
  font-weight: bold;
  font-size: 28px;
  color: tomato;
  margin-top: 80px;
`;

export const Options = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin-top: 90px;
`;

export const OptionsHeader = styled.View`
  margin-top: -10px;
  margin-right: 130px;
`;

export const OptionsSecondHeader = styled(RectButton)`
  width: 10%;
  height: 25%;
  margin-top: 75px;
  border-radius: 50px;
`;

export const ContainerImage = styled(TouchableOpacity)`
  background: #fff;
  width: 90%;
  height: 200px;
  margin-top: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 20px 20px;
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
`;

export const TitleImage = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const ContainerFace = styled.View`
  width: 260px;
`;

export const ButtonDelete = styled(RectButton)`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background: #f10;
`;

export const ImageList = styled.Image`
  width: 350px;
  height: 300px;
  border-radius: 30px;
  position: absolute;
`;

export const FlatListImage = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  width: 90%;
`;

export const ContainerImageList = styled.View`
  width: 12%;
  height: 20%;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;
