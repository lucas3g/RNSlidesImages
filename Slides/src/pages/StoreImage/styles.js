import styled from 'styled-components/native';
import input from '../../Components/Input';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const TInputImage = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.9);
  margin-top: 10px;
  width: 90%;
  height: 250px;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 15px;
`;

export const TInput = styled(input)`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.9);
  margin-top: 10px;
  width: 90%;
  height: 46px;
`;

export const TInputDesc = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0,0,0,0.5)',
})`
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.9);
  margin-top: 10px;
  width: 90%;
  height: 200px;
  padding: 20px 20px;
  border-radius: 10px;
  font-size: 15px;
`;

export const ButtonSaved = styled(RectButton)`
  width: 90%;
  padding: 0 20px;
  background: tomato;
  height: 46px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 10px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #ffff;
  margin-left: 10px;
`;
