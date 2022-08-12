import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: object;
}

const Button = ({text, onPress, containerStyles}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
