import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, TInput} from './styles';

export default function Input({style, icon, ...rest}) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="#455A64" />}
      <TInput {...rest} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Input.defaultProps = {
  icon: null,
  style: {},
};
