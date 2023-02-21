import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const PageHeader = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View>
      <Text
        style={[
          styles.headingText,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        Discover the new <Text style={styles.highlight}>NFT</Text> collection
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 40,
    fontWeight: '600',
    marginTop: 40,
    marginBottom: 40,
  },
  highlight: {
    color: '#f9df1d',
  },
});

export default PageHeader;
