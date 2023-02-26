import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function PageHeader() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>TODO App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    backgroundColor: 'coral',
    padding: 10,
    minHeight: 50,
  },
  headerTitle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
  },
});
