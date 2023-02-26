import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  todo: {title: string; id: string};
  handleDelete: any;
}

const TodoListItem = ({todo, handleDelete}: Props) => {
  return (
    <TouchableOpacity onPress={() => handleDelete(todo.id)}>
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoListItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    gap: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ddd',
    marginVertical: 10,
  },
  itemLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#aaa',
  },
});
