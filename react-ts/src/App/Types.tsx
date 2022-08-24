import React, { useState } from 'react';
import axios from 'axios';
import { Todo } from '../Todo';
import { TodoType } from '../types/todo';
import { Text } from '../Text';
import { UserProfile } from '../UserProfile';
import { User } from '../types/user';

const user: User = {
  name: 'Yuta',
  // hobbies: ['映画', 'ゲーム']
};

function App() {
  // 型を指定する
  const [todoList, setTodoList] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      // 意図しないデータの更新を防ぐことができる
      setTodoList(res.data);
    });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="18px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todoList.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </div>
  );
}

export default App;
