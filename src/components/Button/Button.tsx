import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

import styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
}

const Button = ({text, onPress}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
