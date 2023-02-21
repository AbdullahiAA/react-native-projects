import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import TopArtistItem from './TopArtistItem';

export default function TopArtists() {
  const artists = [
    {
      uid: 1,
      name: '@Mike',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHySXCKdtuBmrc0_VbaY8NNRJazzUsTE5M8vs8n9OzWEfpetGZbvYYYtkM-_19P8dKnBc&usqp=CAU',
    },
    {
      uid: 2,
      name: '@XCopy',
      imageUrl: 'https://mpost.io/wp-content/uploads/image-7-17.jpg',
    },
    {
      uid: 3,
      name: '@Osinac',
      imageUrl:
        'https://cdnb.artstation.com/p/assets/images/images/044/495/697/large/yq-1.jpg?1640175442',
    },
    {
      uid: 4,
      name: '@RefikAn',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Fb3JZhCpeILiM22ObtJ-ZMEnMHpXBpApGT0ySST3kslqJK1gaghJKk9rwVRyteDzA_w&usqp=CAU',
    },
  ];
  return (
    <View style={styles.topArtists}>
      <View style={styles.topRow}>
        <Text style={styles.topRowTitle}>Top Artists</Text>

        <TouchableOpacity>
          <Text style={styles.viewBtn}>View More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.topArtistListContainer}>
        {artists.map(item => (
          <TopArtistItem key={item.uid} artist={item} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topArtists: {
    marginBottom: 40,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  topRowTitle: {
    fontWeight: '600',
    fontSize: 16,
    color: '#ffffff',
  },
  viewBtn: {
    color: '#f4db23',
    textDecorationLine: 'underline',
    fontSize: 10,
  },
  topArtistListContainer: {
    flexDirection: 'row',
    gap: 10,
  },
});
