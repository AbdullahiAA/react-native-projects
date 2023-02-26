/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import AddTodoForm from './components/AddTodoForm';
import PageHeader from './components/PageHeader';
import TodoLists from './components/TodoLists';

interface Todo {
  title: string;
  id: string;
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <SafeAreaView
      style={[
        {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        styles.mainContainer,
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <PageHeader />
      <AddTodoForm setTodos={setTodos} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <TodoLists todos={todos} setTodos={setTodos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default App;
