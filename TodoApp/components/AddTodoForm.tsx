import {Alert, Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';

interface Props {
  setTodos: any;
}

export default function AddTodoForm({setTodos}: Props) {
  const [task, setTask] = useState('');

  function handleSubmit() {
    if (!task.trim()) {
      Alert.alert('OOPS', 'Please enter your next task');
      return;
    }

    setTodos((prevTodos: any) => [
      {title: task, id: Math.random().toString()},
      ...prevTodos,
    ]);

    setTask('');
  }

  return (
    <View style={styles.formContainer}>
      <TextInput
        style={styles.formInput}
        placeholder="Let's know your next task..."
        value={task}
        onChangeText={val => setTask(val)}
      />

      <Button title="ADD" color="coral" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});
