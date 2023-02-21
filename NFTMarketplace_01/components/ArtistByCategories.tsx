import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CategoryCardItem from './CategoryCardItem';

export default function ArtistByCategories() {
  const artists = [
    {
      uid: 1,
      name: 'Metatiger',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2RIlIt5mMj6qZtXzggcmx7d153PDUaKhDbg&usqp=CAU',
      price: '$25k',
      timeLeft: '1d 12h',
    },
    {
      uid: 2,
      name: 'Osinac',
      imageUrl: 'https://mpost.io/wp-content/uploads/image-7-17.jpg',
      price: '$25k',
      timeLeft: '1d 12h',
    },
    {
      uid: 3,
      name: 'XCopy',
      imageUrl:
        'https://cdnb.artstation.com/p/assets/images/images/044/495/697/large/yq-1.jpg?1640175442',
      price: '$25k',
      timeLeft: '1d 12h',
    },
    {
      uid: 4,
      name: 'RefikAn',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Fb3JZhCpeILiM22ObtJ-ZMEnMHpXBpApGT0ySST3kslqJK1gaghJKk9rwVRyteDzA_w&usqp=CAU',
      price: '$25k',
      timeLeft: '1d 12h',
    },
  ];

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryLabelContainer}>
        <TouchableOpacity>
          <Text style={styles.categoryLabel}>Recent</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.categoryLabel, styles.activeCategoryLabel]}>
            Trending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryLabel}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryLabel}>International</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryLabel}>Fresher</Text>
        </TouchableOpacity>
      </ScrollView>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}>
        {artists.map(item => (
          <CategoryCardItem key={item.uid} artist={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryLabelContainer: {
    marginBottom: 20,
    gap: 20,
  },
  categoryLabel: {
    fontWeight: '400',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#ffffff',
  },
  activeCategoryLabel: {
    color: '#f4db23',
    fontWeight: '400',
  },
  categoriesContainer: {
    gap: 15,
  },
});
