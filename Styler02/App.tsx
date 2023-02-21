import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {
  BlogCard,
  ContactList,
  ElevatedCards,
  FancyCard,
  FlatCards,
} from './components';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <FlatCards />

          <ElevatedCards />

          <FancyCard />

          <BlogCard />

          <ContactList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
});

export default App;
