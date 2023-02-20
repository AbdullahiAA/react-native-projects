import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.darkText}>Hello World !!</Text>

      <Button title="Explore" />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row'},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },
  whiteText: {color: 'white'},
  darkText: {color: 'black'},
});

export default App;
