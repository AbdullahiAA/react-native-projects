import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {
  artist: {
    uid: number;
    name: string;
    imageUrl: string;
    price: string;
    timeLeft: string;
  };
};

export default function CategoryCardItem({artist}: Props) {
  return (
    <View style={styles.categoryCard}>
      <Image
        source={{
          uri: artist.imageUrl,
        }}
        style={styles.categoryCardImage}
      />

      <View style={styles.categoryCardTopRow}>
        <Text style={styles.categoryCardName}>{artist.name}</Text>

        <Pressable style={styles.categoryCardBuyBtn}>
          <Text style={styles.categoryCardBuyBtnText}>Buy</Text>
        </Pressable>
      </View>

      <View style={styles.categoryCardInfoRow}>
        <View>
          <Text style={styles.categoryCardInfoRowLabel}>Current Price</Text>
          <Text style={styles.categoryCardInfoRowValue}>{artist.price}</Text>
        </View>
        <View>
          <Text style={[styles.categoryCardInfoRowLabel, styles.rightAligned]}>
            Time Left
          </Text>
          <Text style={[styles.categoryCardInfoRowValue, styles.rightAligned]}>
            {artist.timeLeft}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryCard: {
    backgroundColor: '#2d2c35',
    padding: 20,
    borderRadius: 10,
  },
  categoryCardImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  categoryCardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 5,
    marginBottom: 20,
  },
  categoryCardName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff',
  },
  categoryCardBuyBtn: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#f9df1d',
    borderRadius: 10,
  },
  categoryCardBuyBtnText: {
    color: '#000000',
    fontWeight: '600',
  },
  categoryCardInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 5,
    marginBottom: 10,
  },
  categoryCardInfoRowLabel: {
    fontWeight: '300',
    fontSize: 10,
    color: '#ffffff',
  },
  categoryCardInfoRowValue: {
    fontWeight: '800',
    fontSize: 20,
    color: '#ffffff',
  },
  rightAligned: {
    textAlign: 'right',
  },
});
