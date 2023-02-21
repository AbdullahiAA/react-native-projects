import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://img.traveltriangle.com/blog/wp-content/uploads/2021/10/Lagos-400x225.jpg',
          }}
          style={styles.cardImage}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Cocoa House</Text>
          <Text style={styles.cardLabel}>Ibadan, Nigeria</Text>
          <Text style={styles.cardDescription}>
            The best country in the world. It has a lot of infastructures and
            social amenities.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    paddingVertical: 1,
  },
  card: {
    overflow: 'hidden',
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardElevated: {
    backgroundColor: 'white',
    elevation: 4,
    shadowOffset: {width: 1, height: 1},
  },
  cardImage: {
    width: '100%',
    height: 240,
  },
  cardBody: {padding: 20},
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#000000',
  },
  cardLabel: {fontSize: 14, marginBottom: 6, color: '#000000'},
  cardDescription: {fontSize: 12, marginVertical: 12, color: '#242b2e'},
  cardFooter: {color: '#000000'},
});
