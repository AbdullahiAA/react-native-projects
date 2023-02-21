import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

type IContact = {
  uid: number;
  name: string;
  status: string;
  imageUrl: string;
};

export default function ContactList() {
  const contacts: IContact[] = [
    {
      uid: 1,
      name: 'Bashir Yahya',
      status: 'Achieving my goal bit by bit',
      imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
    },
    {
      uid: 2,
      name: 'Ridwan Ayub',
      status: 'One step at a time',
      imageUrl:
        'https://avatars.githubusercontent.com/u/977348?u=3e7a6d2d7e916dda6abb017d3ba8fec88714edbe&v=4',
    },
    {
      uid: 3,
      name: 'Dawud Issa',
      status: 'Never give up',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8TpFnNM-p4tNcnxAP81F0fSD4QXKOT-AjOC7mf7USSeqhUkoNER2AMpdCayUcgdQbJYQ&usqp=CAU',
    },
    {
      uid: 4,
      name: 'Aisha Muhammad',
      status: 'Striving to be the best version of myself',
      imageUrl:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmzusB764twRwhs4ZgcZw98FMnhlQnF7zm_EXrHOIGxEEB29bwcFxQSMQRRU73JXz0hfQ&usqp=CAU',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contacts</Text>

      <ScrollView scrollEnabled={false} style={styles.container}>
        {contacts.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <View style={styles.userAvatarContainer}>
              <Image source={{uri: item.imageUrl}} style={styles.userAvatar} />
            </View>

            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
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
  container: {flex: 1, flexDirection: 'column', gap: 20},

  userCard: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },

  userAvatarContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    overflow: 'hidden',
  },
  userAvatar: {
    height: '100%',
    width: '100%',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  userStatus: {
    fontSize: 12,
  },
});
