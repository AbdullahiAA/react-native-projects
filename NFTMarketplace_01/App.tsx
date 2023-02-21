/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import ArtistByCategories from './components/ArtistByCategories';
import PageHeader from './components/PageHeader';
import TopArtists from './components/TopArtists';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.layoutContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <PageHeader />
        <TopArtists />
        <ArtistByCategories />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    paddingHorizontal: 24,
    flex: 1,
  },
});

export default App;
