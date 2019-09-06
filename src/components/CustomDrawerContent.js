import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors, gStyle } from '../constants';

const CustomDrawerContent = () => (
  <View style={styles.slide}>
    <Text style={styles.text}>Workspaces</Text>
  </View>
);

const styles = StyleSheet.create({
  slide: {
    alignItems: 'center',
    backgroundColor: colors.purple,
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    ...gStyle.textLarsBold18,
    color: colors.white
  }
});

export default CustomDrawerContent;
