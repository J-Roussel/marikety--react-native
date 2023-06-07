import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { btnStyles } from './styles/Button';

export default function Button(props) {
  const { onPress, title = 'SE CONNECTER' } = props;
  return (
    <Pressable style={btnStyles.button} onPress={onPress}>
      <Text style={btnStyles.text}>{title}</Text>
    </Pressable>
  );
}
