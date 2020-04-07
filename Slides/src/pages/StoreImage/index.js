import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FileViewer from 'react-native-file-viewer';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';

import {
  Container,
  Title,
  TInputImage,
  TInput,
  ButtonSaved,
  TInputDesc,
  ButtonText,
} from './styles';

export default function StoreImage() {
  async function fileViewer() {
    const path = await FileViewer.open(path) // absolute-path-to-my-local-file.
      .then(() => {
        // success
      })
      .catch(error => {
        // error
      });
  }

  return (
    <Container>
      <Title>Salvar nova Foto</Title>
      <TInputImage
        autoCapitalize="none"
        placeholder="Selecione uma foto..."
        textAlign="center"
      />
      <TInput
        icon="copyright"
        autoCapitalize="none"
        placeholder="Titulo da foto"
      />
      <TInput
        icon="archive"
        autoCapitalize="none"
        placeholder="SubTitulo da foto"
      />
      <TInput
        icon="archive"
        autoCapitalize="none"
        placeholder="Titulo da descrição"
      />
      <TInputDesc
        autoCapitalize="none"
        placeholder="Descrição"
        textAlignVertical="top"
        multiline
      />
      <ButtonSaved onPress={fileViewer}>
        <Icon name="save" size={20} color="rgba(255,255,255,0.9)" />
        <ButtonText>Salvar</ButtonText>
      </ButtonSaved>
    </Container>
  );
}
