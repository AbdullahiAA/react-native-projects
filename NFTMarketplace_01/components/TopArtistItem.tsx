import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  artist: {uid: number; name: string; imageUrl: string};
};

export default function TopArtistItem({artist}: Props) {
  return (
    <View style={styles.card}>
      <Image
        style={styles.cardAvatar}
        source={{
          uri: artist.imageUrl,
        }}
      />
      <Text style={styles.cardUserName}>{artist.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#2d2c35',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginTop: 15,
  },

  cardAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 3,
    borderColor: '#000000',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -30,
    marginBottom: 10,
  },

  cardUserName: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
  },
});
