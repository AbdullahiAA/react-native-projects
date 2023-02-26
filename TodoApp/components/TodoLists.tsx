import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import TodoListItem from './TodoListItem';

interface Todo {
  title: string;
  id: string;
}

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function TodoLists({todos, setTodos}: Props) {
  function handleDelete(id: string) {
    setTodos(prevTodos => prevTodos.filter((todo: Todo) => todo.id !== id));
  }
  return (
    <FlatList
      style={styles.listsContainer}
      keyExtractor={item => item.id}
      data={todos}
      renderItem={({item}) => (
        <TodoListItem todo={item} handleDelete={handleDelete} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  listsContainer: {
    paddingHorizontal: 20,
    gap: 10,
    flex: 1,
  },
});
