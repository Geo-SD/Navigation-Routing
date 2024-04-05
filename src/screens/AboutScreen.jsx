import React from 'react';
import {Text, View} from 'react-native';

export default function AboutScreen() {
  const date = new Date().getDate();
  return (
    <View>
      <Text>Todo List</Text>
      <Text>Made by: George Simon</Text>
      <Text>{date}</Text>
    </View>
  );
}
